import {Body, Controller,Delete,Get,Path,Post,Put,Route,Tags, SuccessResponse,} from "tsoa";

import { UsersService } from "./user.service";
import { prisma } from "../../config/prisma";

import { CreateUserDto } from "./dto/create-user.dto"
import { UpdateUserDto } from "./dto/update-user.dto";

@Route("users")
@Tags("Users")
export class UserController extends Controller {
  private usersService = new UsersService();

 
  @Get("/")
  public async getUsers() {
    return await this.usersService.findAll();
  }

  
  @Get("{id}")
  public async getUserById(@Path() id: string) {
    const user = await this.usersService.findOne(id);

    if (!user) {
      this.setStatus(404);
      return { message: "Foydalanuvchi topilmadi" };
    }

    return { data: user };
  }

  @SuccessResponse("201", "Created")
  @Post("/")
  public async createUser(@Body() body: CreateUserDto) {
    const existPhone = await prisma.user.findUnique({
      where: { phone: body.phone },
    }  );

    if (existPhone) {
      this.setStatus(400);
      return { message: "Foydalanuvchi allaqachon mavjud" };
    }

    const user = await this.usersService.create(body);
    this.setStatus(201);

    return {
      message: "Foydalanuvchi muvaffaqiyatli qo'shildi",
      data: user,
    };
  }
  @Put("{id}")
  public async updateUser(@Path() id: string, @Body() body: UpdateUserDto) {
    const user = await this.usersService.findOne(id);

    if (!user) {
      this.setStatus(404);
      return { message: "Foydalanuvchi topilmadi" };
    }

    const updatedUser = await this.usersService.update(id, body);
    return { message: "Muvaffaqiyatli yangilandi", data: updatedUser };
  }

  
  @Delete("hard/{id}")
  public async hardDelete(@Path() id: string) {
    const user = await this.usersService.findOne(id);

    if (!user) {
      this.setStatus(404);
      return { message: "Foydalanuvchi topilmadi" };
    }

    const deletedUser = await this.usersService.hardDelete(id);
    return {
      message: "Foydalanuvchi muvaffaqiyatli o'chirildi",
      data: deletedUser,
    };
  }

  
  @Delete("soft/{id}")
  public async softDelete(@Path() id: string) {
    const user = await this.usersService.findOne(id);

    if (!user) {
      this.setStatus(404);
      return { message: "Foydalanuvchi topilmadi yoki aktiv emas" };
    }

    const deletedUser = await this.usersService.softDelete(id);
    return {
      message: "Foydalanuvchi muvaffaqiyatli o'chirildi",
      data: deletedUser,
    };
  }
}