import { prisma } from '../../config/prisma';
import bcrypt from 'bcrypt';
import { cache } from '../../common/service/cache.service';
import { createAccessToken, createRefreshToken, verifyRefreshToken } from '../../common/service/token.service';
import { sendVerificationCode as botSendCode } from '../bot/bot.service';
import { AppError } from '../../common/errors/AppError';


export async function login(data: { phone: string; password: string }) {
    const user = await prisma.user.findUnique({
        where: { phone: data.phone }
    });

    if (!user) {
        throw new Error("Foydalanuvchi topilmadi");
    }

    const isPasswordValid = await bcrypt.compare(
        data.password,
        user.password
    );

    if (!isPasswordValid) {
        throw new Error("Parol xato");
    }

    const accessToken = createAccessToken({
        id: user.id,
        role: user.role
    });

    const refreshToken = createRefreshToken({
        id: user.id
    });

    const cacheKey = `refresh:${user.id}:${refreshToken}`;

    await cache.set(cacheKey, true, 60 * 60 * 24 * 7 * 1000);

    return {
        accessToken,
        refreshToken
    };
}

export async function sendVerificationCode(phone: string) {
    const code = Math.floor(100000 + Math.random() * 900000).toString();

    await cache.set(`verify:${phone}`, code, 5 * 60 * 1000);

    await botSendCode(phone, code);

    return { message: 'Tasdiqlash kodi Telegram bot orqali yuborildi' };
}

export async function verifyCode(phone: string, code: string) {
    const cachedCode = (await cache.get(`verify:${phone}`)) as string | null;

    if (!cachedCode) {
        throw new Error('Kod muddati tugagan yoki yuborilmagan');
    }

    if (cachedCode !== code) {
        throw new Error('Kod noto\'g\'ri');
    }

    // Kod to'g'ri — kodni o'chirib, "verified" belgisini qo'yish
    await cache.del(`verify:${phone}`);
    await cache.set(`verified:${phone}`, true, 10 * 60 * 1000); // 10 daqiqa ro'yxatdan o'tishga vaqt

    return { message: 'Kod tasdiqlandi' };
}

export async function register(data: { phone: string; fullName: string; password: string }) {
    // Verifikatsiya tekshiruvi
    const isVerified = (await cache.get(`verified:${data.phone}`)) as boolean | null;
    if (!isVerified) {
        throw new Error("Iltimos avval telefon raqamingizni tasdiqlang");
    }

    const user = await prisma.user.findUnique({
        where: { phone: data.phone }
    });

    if (user) {
        throw new Error("Foydalanuvchi allaqachon mavjud");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Telegram chatID ni keshdan qidiramiz
    const chatId = await cache.get(`bot:chatid:${data.phone}`);

    const newUser = await prisma.user.create({
        data: {
            phone: data.phone,
            password: hashedPassword,
            fullName: data.fullName,
            role: "USER",
            telegramChatId: chatId ? String(chatId) : null,
            isVerified: true
        }
    });

    // Keshdagi chatId ni o'chirib yuboramiz
    if (chatId) {
        await cache.del(`bot:chatid:${data.phone}`);
    }

    // Verified flagni o'chirish
    await cache.del(`verified:${data.phone}`);

    const accessToken = createAccessToken({
        id: newUser.id,
        role: newUser.role
    });

    const refreshToken = createRefreshToken({
        id: newUser.id
    });

    const cacheKey = `refresh:${newUser.id}:${refreshToken}`;

    await cache.set(cacheKey, true, 60 * 60 * 24 * 7 * 1000);

    return {
        accessToken,
        refreshToken
    };
}

export async function logOut(data: { refreshToken: string}) {
    if(!data.refreshToken) {
        throw new AppError("Refresh token kiritilishi kerak", 400);
    }

    const decoded: any = await new Promise((resolve, reject) => {
        try {
            const payload = verifyRefreshToken(data.refreshToken);
            resolve(payload);
        } catch (err) {
            reject(new AppError("Noto'g'ri refresh token", 400));
        }
    });

    const cacheKey = `refresh:${decoded.sub}:${data.refreshToken}`;

    if(!await cache.get(cacheKey)){
        throw new AppError("Refresh token topilmadi", 404);
    }

    await cache.del(cacheKey);
    return { message: "Muvaffaqiyatli chiqish qilindi" };
}