import { Role } from "@prisma/client";

export interface UpdateUserDto {
    phone?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    avatar?: string;
    role?: Role;
    isActive?: boolean;
    isVerified?: boolean;
}
