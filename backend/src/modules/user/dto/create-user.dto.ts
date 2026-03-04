import { Role } from "../../../../generated/prisma/client";
export interface CreateUserDto {
    phone?: number;
    password: string;
    firstName: string;
    lastName: string;
    avatar?: string;
    role?: Role;
}