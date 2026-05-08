// src/modules/auth/auth.middleware.ts

import { Request, Response, NextFunction } from 'express';
import { verifyAccessToken } from '../service/token.service';

export function authenticate(req: Request, res: Response, next: NextFunction) {
    try {

        const header = req.headers.authorization;

        if (!header || !header.startsWith('Bearer ')) {
            return res.status(401).json({
                message: 'Token yo\'q'
            });
        }


        const token = header.split(' ')[1];

        const payload = verifyAccessToken(token) as { sub: string; role: string };

        res.locals.user = payload;

        next();

    } catch (error) {
        return res.status(401).json({
            message: "Token yaroqsiz yoki muddati o'tgan"
        });
    }
}