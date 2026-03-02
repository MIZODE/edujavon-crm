import * as express from 'express';
import { verifyAccessToken } from './common/service/token.service';

export async function expressAuthentication(
    request: express.Request,
    securityName: string,
    scopes?: string[]
): Promise<any> {
    if (securityName === 'jwt') {
        const authHeader = request.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new Error('No token provided'); // Yoki custom xatolik
        }

        const token = authHeader.split(' ')[1];

        return new Promise((resolve, reject) => {
            try {
                const decoded = verifyAccessToken(token) as any;

                // Rollarni tekshirish
                if (scopes && scopes.length > 0) {
                    if (!scopes.includes(decoded.role)) {
                        reject(new Error("Sizda bu manzilga kirish uchun ruxsat yo'q")); // Forbidden
                    }
                }

                resolve(decoded);
            } catch (err) {
                reject(err);
            }
        });
    }

    throw new Error('Kutilmagan xavfsizlik turi');
}
