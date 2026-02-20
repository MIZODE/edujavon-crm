import { Request, Response, NextFunction } from 'express';
import { Role } from '../../../generated/prisma/client';

/**
 * Rol asosida ruxsat beruvchi middleware factory.
 * Faqat ko'rsatilgan rollarga ega foydalanuvchilarga ruxsat beriladi.
 *
 * @param roles - Ruxsat etilgan rollar massivi
 *
 * @example
 * router.get('/users', authenticate, rolePermission([Role.ADMIN, Role.OWNER]), getAll)
 */
export function rolePermission(roles: Role[]) {
    return (req: Request, res: Response, next: NextFunction) => {
        const user = res.locals.user as { sub: string; role: Role } | undefined;

        if (!user) {
            return res.status(401).json({
                message: 'Autentifikatsiya talab qilinadi'
            });
        }

        if (!roles.includes(user.role)) {
            return res.status(403).json({
                message: `Ruxsat yo'q. Talab qilingan rollar: ${roles.join(', ')}`
            });
        }

        next();
    };
}