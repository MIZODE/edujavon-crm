import { Role } from "@prisma/client";

export interface CreateUserDto {
    phone?: string;
    password: string;
    firstName: string;
    lastName: string;
    avatar?: string;
    role?: Role;
}