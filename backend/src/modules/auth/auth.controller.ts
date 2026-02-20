import { Request, Response } from 'express';
import * as authService from './auth.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';

// ─── Express Controllers ────────────────────────────────────────────────────

export async function loginController(req: Request, res: Response) {
    try {
        const result = await authService.login(req.body);

        const { accessToken, refreshToken } = result;

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            message: "Muvaffaqiyatli login qilindi",
            accessToken
        });

    } catch (err: any) {
        return res.status(401).json({
            message: err.message || "Xatolik yuz berdi"
        });
    }
}

export async function registerController(req: Request, res: Response) {
    try {
        const result = await authService.register(req.body);
        console.log("token", result);

        const { accessToken, refreshToken } = result;

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(201).json({
            message: "Muvaffaqiyatli register qilindi",
            accessToken
        });

    } catch (err: any) {
        return res.status(400).json({
            message: err.message || "Xatolik yuz berdi"
        });
    }
}

export async function logoutController(req: Request, res: Response) {
    try {
        res.clearCookie('refreshToken');
        return res.status(200).json({
            message: "Muvaffaqiyatli logout qilindi"
        });
    } catch (err: any) {
        return res.status(401).json({
            message: err.message || "Xatolik yuz berdi"
        });
    }
}
