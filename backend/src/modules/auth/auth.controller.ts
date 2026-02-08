import { Request, Response } from 'express';
import * as authService from './auth.service';

export async function loginController(req: Request, res: Response) {
    try {
        const result = await authService.login(req.body);
        console.log("token", result);

        const { accessToken, refreshToken } = result;

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            message: "Mucaffaqqiyatli login bo'ldingiz",
            accessToken
        });

    } catch (err: any) {
        return res.status(401).json({
            message: err.message || "Xatolik yuz berdi"
        });
    }
}