import { prisma } from "../../config/prisma";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import bcrypt from "bcrypt"

export class UsersService {
  async create(user: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    const newUser = await prisma.user.create({
      data: {
        phone: user.phone,
        password: hashedPassword,
        fullName: user.fullName,
        avatar: user.avatar,
        role: user.role,
      },
    });

    return newUser;
  }

  async findOne(id: string) {
    const user = await prisma.user.findUnique({
      where: {
        id,
        AND: {
          isActive: true,
        },
      },
    });

    return user;
  }

  async findAll() {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        phone: true,
        fullName: true,
        avatar: true,
        isActive: true,
        isVerified: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        telegramChatId: true,
      },

    });
    return users;
  }

  async update(id: string, data: UpdateUserDto) {
    const updatedUser = await prisma.user.update({
      where: { id },
      select: {
        id: true,
        phone: true,
        fullName: true,
        avatar: true,
        isActive: true,
        isVerified: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        telegramChatId: true,
      },
      data,
    });
    return updatedUser;
  }

  async hardDelete(id: string) {
    const deletedUser = await prisma.user.delete({
      where: { id },
    });

    return deletedUser;
  }

  async softDelete(id: string) {
    const user = await prisma.user.update({
      where: { id },
      data: {
        isActive: false,
      }
    })
    return user;
  }
}
