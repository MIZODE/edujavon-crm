import { Controller, Post, Body, Route, Tags, SuccessResponse } from 'tsoa';
import * as authService from './auth.service';
import { LoginDto, RegisterDto, LogoutDto } from './dto/auth.dto';

@Route("auth")
@Tags("Auth")
export class AuthController extends Controller {

    /**
     * Login user
     * @param requestBody Login credentials
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
     * Register new user
     * @param requestBody Registration details
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

    @Post("logout")
    public async logout(@Body() requestBody: LogoutDto): Promise<any>{
        try {
            await authService.logout(requestBody.refreshToken);
        this.setStatus(200);
        return { 
                message: "Muvaffaqiyatli logout qilindi" 
            };
        } catch (err: any) {
            this.setStatus(err.statusCode || 400);
            return { message: err.message || "Xatolik yuz berdi" };
        }
    }
}
