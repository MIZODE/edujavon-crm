import { UserRole } from "../../../../generated/prisma/client";
export interface CreateUserDto {
<<<<<<< HEAD
    phone?: number;
=======
    phone: string;
>>>>>>> fa3ad671a92c13ebe21aeb4cd886c5acd991bb21
    password: string;
    fullName: string;
    avatar?: string;
    role?: UserRole;
}