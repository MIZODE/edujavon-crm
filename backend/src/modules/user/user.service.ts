import { prisma } from "../../config/prisma";
import { CreateUserDto } from "./dto/create-user.dto";


export class UsersService {

  async create(user: CreateUserDto) {
    const newUser = await prisma.user.create({
      data: {
        phone: user.phone,
        password: user.password,
        firstName: user.firstName,
        lastName: user.lastName,
        avatar: user.avatar,
        role: user.role,
      }
    })

    return newUser;
  }

  async findOne(id: number) {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    return user;
  }

  async findAll() {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        phone: true,
        firstName: true,
        lastName: true,
        avatar: true,
        isActive: true,
        isVerified: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        chatId: true,
      },
    });
    return users;
  }


}
