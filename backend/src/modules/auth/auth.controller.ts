import { Controller, Post, Body, Route, Tags, SuccessResponse, Get, Security } from 'tsoa';
import * as authService from './auth.service';
import { LoginDto, RegisterDto, SendCodeDto, VerifyCodeDto, LogOutDto} from './dto/auth.dto';

@Route("auth")
@Tags("Auth")
export class AuthController extends Controller {

    /**
     * Foydalanuvchi tizimga kirishi
     * @param requestBody Login ma'lumotlari
     */
    @Post("login")
    public async login(@Body() requestBody: LoginDto): Promise<any> {
        try {
            const result = await authService.login(requestBody);
            this.setStatus(200);
            return {
                message: "Muvaffaqiyatli login qilindi",
                ...result
            };
        } catch (err: any) {
            this.setStatus(401);
            return {
                message: err.message || "Xatolik yuz berdi"
            };
        }
    }

    /**
     * Yangi foydalanuvchini ro'yxatdan o'tkazish.
     * Avval telefon raqamini Telegram bot orqali tasdiqlash talab qilinadi.
     * Agar foydalanuvchi botda raqamini ulashgan bo'lsa, chatId avtomatik bog'lanadi.
     * @param requestBody Ro'yxatdan o'tish ma'lumotlari
     */
    @SuccessResponse("201", "Created")
    @Post("register")
    public async register(@Body() requestBody: RegisterDto): Promise<any> {
        try {
            const result = await authService.register(requestBody);
            this.setStatus(201);
            return {
                message: "Muvaffaqiyatli register qilindi",
                ...result
            };
        } catch (err: any) {
            this.setStatus(400);
            return {
                message: err.message || "Xatolik yuz berdi"
            };
        }
    }

    /**
     * Telegram bot orqali tasdiqlash kodini yuborish.
     * Foydalanuvchi avval botga kirib /start bosgan bo'lishi kerak.
     * @param requestBody Telefon raqami
     */
    @Post("send-code")
    public async sendCode(@Body() requestBody: SendCodeDto): Promise<any> {
        try {
            const result = await authService.sendVerificationCode(requestBody.phone);
            this.setStatus(200);
            return result;
        } catch (err: any) {
            this.setStatus(400);
            return {
                message: err.message || "Kod yuborishda xatolik yuz berdi"
            };
        }
    }

    /**
     * Telegram bot orqali yuborilgan kodni tekshirish.
     * Kod to'g'ri bo'lsa, foydalanuvchiga ro'yxatdan o'tish uchun ruxsat beriladi.
     * @param requestBody Telefon raqami va tasdiqlash kodi
     */
    @Post("verify-code")
    public async verifyCode(@Body() requestBody: VerifyCodeDto): Promise<any> {
        try {
            const result = await authService.verifyCode(requestBody.phone, requestBody.code);
            this.setStatus(200);
            return result;
        } catch (err: any) {
            this.setStatus(400);
            return {
                message: err.message || "Kodni tekshirishda xatolik yuz berdi"
            };
        }
    }

    /**
     * Admin paneli uchun test marshruti
     */
    @Security("jwt", ["admin"])
    @Get("admin-test")
    public async adminTest(): Promise<any> {
        this.setStatus(200);
        return { message: "Siz adminsiz va bu yo'lga kira olasiz!" };
    }

    /**
     * Foydalanuvchi tizimdan chiqishi
     * @param requestBody Faqatgina refresh token
     */
    @Post("logout")
    public async logOut(@Body() requestBody: LogOutDto): Promise<any> {
        try {
            const result = await authService.logOut({refreshToken: requestBody.refreshToken});
            this.setStatus(200);
            return result;
        } catch (err: any) {
            this.setStatus(400);
            return {
                message: err.message || "Xatolik yuz berdi"
            }
        }
    }
}
