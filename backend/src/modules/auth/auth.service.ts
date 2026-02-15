import { prisma } from '../../config/prisma';
import bcrypt from 'bcrypt';
import { cache } from '../../common/service/cache.service';
import { createAccessToken, createRefreshToken } from '../../common/service/token.service';


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

export async function register(data: { phone: string; firstName: string; lastName: string; password: string }) {
    const user = await prisma.user.findUnique({
        where: { phone: data.phone }
    });

    if (user) {
        throw new Error("Foydalanuvchi allaqachon mavjud");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const newUser = await prisma.user.create({
        data: {
            phone: data.phone,
            password: hashedPassword,
            firstName: data.firstName,
            lastName: data.lastName,
            role: "USER"
        }
    });

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