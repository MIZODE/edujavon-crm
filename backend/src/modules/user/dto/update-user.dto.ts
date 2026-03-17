import { UserRole } from "../../../../generated/prisma/client";
export interface UpdateUserDto {
    phone?: string;
    password?: string;
    fullName?: string;
    avatar?: string;
    role?: UserRole;
    isActive?: boolean;
    isVerified?: boolean;
}
