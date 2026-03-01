import { Role } from "../../../../generated/prisma/client";
export interface CreateUserDto {
    phone?: string;
    password: string;
    firstName: string;
    lastName: string;
    avatar?: string;
    role?: Role;
}