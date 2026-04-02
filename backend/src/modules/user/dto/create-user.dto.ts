import { UserRole } from "../../../../generated/prisma/client";
export interface CreateUserDto {
    phone: string;
    password: string;
    fullName: string;
    avatar?: string;
    role?: UserRole;
}