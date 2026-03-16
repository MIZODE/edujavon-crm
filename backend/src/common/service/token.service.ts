// import { Role } from '@prisma/client';
import jwt from 'jsonwebtoken';

const ACCESS_SECRET = process.env.JWT_SECRET!;
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET!;

export function createAccessToken(user: { id: string; role: string }) {
  return jwt.sign(
    {
      sub: user.id,
      role: user.role
    },
    ACCESS_SECRET,
    { expiresIn: '15m' }
  );
}

export function createRefreshToken(user: { id: string }) {
  return jwt.sign(
    { sub: user.id },
    REFRESH_SECRET,
    { expiresIn: '7d' }
  );
}

export function verifyAccessToken(token: string) {
  try {
    return jwt.verify(token, ACCESS_SECRET);
  } catch (error) {
    throw new Error('Token yaroqsiz yoki muddati o\'tgan');
  }
}

// 4. Refresh Token tekshirish
export function verifyRefreshToken(token: string) {
  try {
    return jwt.verify(token, REFRESH_SECRET);
  } catch (error) {
    throw new Error('Refresh token yaroqsiz');
  }
}