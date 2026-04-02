import { prisma } from '../../config/prisma';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { cache } from '../../common/service/cache.service';
import { createAccessToken, createRefreshToken, verifyAccessToken, verifyRefreshToken } from '../../common/service/token.service';
import { sendVerificationCode as botSendCode } from '../bot/bot.service';
import { AppError } from '../../common/errors/AppError';
import { LoginDto, RegisterInitDto, RegisterVerifyDto } from './dto/auth.dto';
import { AuditAction } from '../../../generated/prisma/client';

// helper to sha256 hash token for DB 
function hashToken(token: string): string {
    return crypto.createHash('sha256').update(token).digest('hex');
}

export async function login(data: LoginDto, meta: { ip: string, userAgent: string }) {
    const user = await prisma.user.findUnique({
        where: { phone: data.phone }
    });

    if (!user) {
        throw new AppError("Foydalanuvchi topilmadi", 404);
    }

    if (user.isBlocked) {
        throw new AppError(`Akkount bloklangan. Sababi: ${user.blockedReason || 'Qoida buzilishi'}`, 403);
    }
    
    if (!user.isVerified) {
        throw new AppError("Akkount tasdiqlanmagan", 403);
    }

    const isPasswordValid = await bcrypt.compare(data.password, user.password);

    if (!isPasswordValid) {
        // Log failed login
        await prisma.auditLog.create({
            data: {
                action: 'FAILED_LOGIN',
                entity: 'USER',
                entityId: user.id,
                userId: user.id,
                ipAddress: meta.ip?.substring(0, 255),
                userAgent: meta.userAgent?.substring(0, 255)
            }
        }).catch(e => console.error(e));
        throw new AppError("Parol xato", 401);
    }

    // Update lastLoginAt
    await prisma.user.update({
        where: { id: user.id },
        data: { lastLoginAt: new Date() }
    });

    const accessToken = createAccessToken({ id: user.id, role: user.role });
    const refreshToken = createRefreshToken({ id: user.id });

    const hashedAccessToken = hashToken(accessToken);
    const hashedRefreshToken = hashToken(refreshToken);

    const expiresInDays = data.rememberMe ? 30 : 7;
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + expiresInDays);

    const session = await prisma.session.create({
        data: {
            userId: user.id,
            token: hashedAccessToken,
            refreshToken: hashedRefreshToken,
            device: meta.userAgent?.substring(0, 255),
            ipAddress: meta.ip?.substring(0, 45),
            expiresAt
        }
    });

    await prisma.auditLog.create({
        data: {
            action: 'LOGIN',
            entity: 'USER',
            entityId: user.id,
            userId: user.id,
            ipAddress: meta.ip?.substring(0, 255),
            userAgent: meta.userAgent?.substring(0, 255)
        }
    }).catch(e => console.error(e));

    return {
        user: {
            id: user.id,
            phone: user.phone,
            fullName: user.fullName,
            role: user.role,
            isVerified: user.isVerified,
            lastLoginAt: user.lastLoginAt
        },
        tokens: {
            accessToken,
            refreshToken,
            expiresIn: 900,
            refreshExpiresIn: expiresInDays * 24 * 60 * 60,
            tokenType: "Bearer"
        },
        session: {
            id: session.id,
            device: session.device,
            ipAddress: session.ipAddress,
            createdAt: session.createdAt
        }
    };
}

export async function registerInit(data: RegisterInitDto) {
    const user = await prisma.user.findUnique({
        where: { phone: data.phone }
    });

    if (user) {
        throw new AppError("Ushbu telefon raqam allaqachon ro'yxatdan o'tgan", 409);
    }

    if (data.telegramChatId) {
        const existingTg = await prisma.user.findUnique({
            where: { telegramChatId: String(data.telegramChatId) }
        });
        if (existingTg) {
            throw new AppError("Ushbu Telegram akkaunt allaqachon boshqa foydalanuvchiga biriktirilgan", 409);
        }
    }

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const tempId = crypto.randomUUID();

    // Cache to Redis
    await cache.set(`bot:chatid:${data.phone}`, data.telegramChatId, 60 * 60 * 1000);
    await cache.set(`register:${tempId}`, JSON.stringify({ phone: data.phone, code, telegramChatId: data.telegramChatId }), 5 * 60 * 1000);

    await botSendCode(data.phone, code);

    return {
        message: "Tasdiqlash kodi Telegram bot orqali yuborildi",
        data: {
            tempId,
            expiresIn: 300,
            resendAfter: 60
        }
    };
}

export async function registerVerify(data: RegisterVerifyDto, meta: { ip: string, userAgent: string }) {
    if (data.password !== data.passwordConfirm) {
        throw new AppError("Parollar mos tushmadi", 400);
    }

    const cachedDataStr = await cache.get(`register:${data.tempId}`);
    if (!cachedDataStr) {
        throw new AppError("Kod muddati tugagan yoki noto'g'ri tempId", 410);
    }

    const cachedData = typeof cachedDataStr === 'string' ? JSON.parse(cachedDataStr) : cachedDataStr;

    if (cachedData.code !== data.code) {
        throw new AppError("Kod noto'g'ri", 400);
    }

    const userExists = await prisma.user.findUnique({
        where: { phone: cachedData.phone }
    });

    if (userExists) {
        throw new AppError("Foydalanuvchi allaqachon mavjud", 409);
    }

    // Hash with 12 rounds per RFC
    const hashedPassword = await bcrypt.hash(data.password, 12);

    const hasTelegram = !!(cachedData.telegramChatId && String(cachedData.telegramChatId).trim());

    if (hasTelegram) {
        const existingTg = await prisma.user.findUnique({
            where: { telegramChatId: String(cachedData.telegramChatId) }
        });
        if (existingTg) {
            throw new AppError("Ushbu Telegram akkaunt allaqachon boshqa foydalanuvchiga biriktirilgan", 409);
        }
    }

    const newUser = await prisma.user.create({
        data: {
            phone: cachedData.phone,
            password: hashedPassword,
            fullName: data.fullName,
            role: "USER",
            isVerified: true,
            ...(hasTelegram ? {
                telegramChatId: String(cachedData.telegramChatId),
                telegramLinkedAt: new Date(),
                telegramVerified: true,
            } : {}),
            ...(data.dateOfBirth ? { dateOfBirth: new Date(data.dateOfBirth) } : {}),
            ...(data.city && data.city.trim() ? { city: data.city.trim() } : {}),
        }
    });

    await cache.del(`register:${data.tempId}`);
    
    // Create Audit Log for creation
    await prisma.auditLog.create({
        data: {
            action: 'CREATE',
            entity: 'USER',
            entityId: newUser.id,
            userId: newUser.id,
            ipAddress: meta.ip?.substring(0, 255),
            userAgent: meta.userAgent?.substring(0, 255)
        }
    }).catch(e => console.error(e));

    const accessToken = createAccessToken({ id: newUser.id, role: newUser.role });
    const refreshToken = createRefreshToken({ id: newUser.id });

    const hashedAccessToken = hashToken(accessToken);
    const hashedRefreshToken = hashToken(refreshToken);

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7);

    const session = await prisma.session.create({
        data: {
            userId: newUser.id,
            token: hashedAccessToken,
            refreshToken: hashedRefreshToken,
            device: meta.userAgent?.substring(0, 255),
            ipAddress: meta.ip?.substring(0, 45),
            expiresAt
        }
    });

    return {
        message: "Ro'yxatdan o'tish muvaffaqiyatli yakunlandi",
        data: {
            user: {
                id: newUser.id,
                phone: newUser.phone,
                fullName: newUser.fullName,
                role: newUser.role,
                isVerified: newUser.isVerified,
                telegramVerified: newUser.telegramVerified,
                createdAt: newUser.createdAt
            },
            tokens: {
                accessToken,
                refreshToken,
                expiresIn: 900,
                tokenType: "Bearer"
            }
        }
    };
}

export async function logOut(rawToken: string, revokeAll?: boolean) {
    let decoded: any;
    try {
        decoded = verifyAccessToken(rawToken);
    } catch (err) {
        throw new AppError("Noto'g'ri yoki muddati o'tgan token", 401);
    }

    const hashedAccessToken = hashToken(rawToken);

    if (revokeAll) {
        // Soft delete all active sessions for this user
        await prisma.session.updateMany({
            where: { 
                userId: decoded.sub,
                deletedAt: null
            },
            data: { deletedAt: new Date() }
        });
    } else {
        // Soft delete specific session
        await prisma.session.updateMany({
            where: { 
                token: hashedAccessToken,
                deletedAt: null
            },
            data: { deletedAt: new Date() }
        });
    }

    await prisma.auditLog.create({
        data: {
            action: 'LOGOUT',
            entity: 'USER',
            entityId: decoded.sub,
            userId: decoded.sub
        }
    }).catch(e => console.error(e));

    return {
        message: "Muvaffaqiyatli chiqish qilindi",
        data: {
            userId: decoded.sub,
            revokedAll: revokeAll ? true : false
        }
    };
}