import { Controller, Post, Body, Route, Tags, SuccessResponse, Get, Security, Request } from 'tsoa';
import * as authService from './auth.service';
import { LoginDto, RegisterInitDto, RegisterVerifyDto, LogOutDto } from './dto/auth.dto';

@Route("auth")
@Tags("Auth")
export class AuthController extends Controller {

    /**
     * Foydalanuvchi tizimga kirishi
     * @param requestBody Login ma'lumotlari
     */
    @Post("login")
    public async login(@Body() requestBody: LoginDto, @Request() request: any): Promise<any> {
        try {
            const ipAddress = request.ip || request.connection?.remoteAddress || '';
            const userAgent = request.headers ? request.headers['user-agent'] : '';
            const result = await authService.login(requestBody, { ip: ipAddress, userAgent });
            this.setStatus(200);
            return {
                message: "Muvaffaqiyatli login qilindi",
                ...result
            };
        } catch (err: any) {
            this.setStatus(err.statusCode || 401);
            return {
                message: err.message || "Xatolik yuz berdi"
            };
        }
    }

    /**
     * Yangi foydalanuvchini ro'yxatdan o'tkazishni boshlash.
     * @param requestBody Ro'yxatdan o'tish ma'lumotlari (tel raqam va telegram chatId)
     */
    @SuccessResponse("201", "Created")
    @Post("register/init")
    public async registerInit(@Body() requestBody: RegisterInitDto): Promise<any> {
        try {
            const result = await authService.registerInit(requestBody);
            this.setStatus(201);
            return result;
        } catch (err: any) {
            this.setStatus(err.statusCode || 400);
            return {
                message: err.message || "Xatolik yuz berdi"
            };
        }
    }

    /**
     * Telegram bot orqali yuborilgan kodni tekshirish va ro'yxatdan o'tishni yakunlash.
     * @param requestBody Tasdiqlash kodi va foydalanuvchi to'liq ma'lumotlari
     */
    @SuccessResponse("201", "Created")
    @Post("register/verify")
    public async registerVerify(@Body() requestBody: RegisterVerifyDto, @Request() request: any): Promise<any> {
        try {
            const ipAddress = request.ip || request.connection?.remoteAddress || '';
            const userAgent = request.headers ? request.headers['user-agent'] : '';
            const result = await authService.registerVerify(requestBody, { ip: ipAddress, userAgent });
            this.setStatus(201);
            return result;
        } catch (err: any) {
            this.setStatus(err.statusCode || 400);
            return {
                message: err.message || "Kodni tekshirishda xatolik yuz berdi"
            };
        }
    }

    /**
     * Foydalanuvchi tizimdan chiqishi
     */
    @Security("jwt")
    @Post("logout")
    public async logOut(@Body() requestBody: LogOutDto, @Request() request: any): Promise<any> {
        try {
            const token = request.headers.authorization?.split(' ')[1];
            if (!token) {
                throw new Error("Access token topilmadi");
            }
            const result = await authService.logOut(token, requestBody.revokeAll);
            this.setStatus(200);
            return result;
        } catch (err: any) {
            this.setStatus(err.statusCode || 400);
            return {
                message: err.message || "Xatolik yuz berdi"
            }
        }
    }
}
