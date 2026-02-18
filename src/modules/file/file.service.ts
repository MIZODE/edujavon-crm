import { prisma } from "../../config/prisma";
import path from "path";
import fs from "fs";
import { AppError } from "../../common/errors/AppError";

export async function uploadFile(file: Express.Multer.File | undefined) {
    if (!file) {
        throw new AppError("Fayl yuklanmadi", 400);
    }

    const newFile = await prisma.file.create({
        data: {
            path: file.path,
            size: file.size,
            mimeType: file.mimetype,
            status: "ACTIVE"
        }
    });
    return newFile;
}

export async function uploadFiles(files: Express.Multer.File[] | undefined) {
    if (!files || !Array.isArray(files) || files.length === 0) {
        throw new AppError("Hech qanday fayl yuklanmadi", 400);
    }

    const uploadedFiles = await Promise.all(
        files.map(file =>
            prisma.file.create({
                data: {
                    path: file.path,
                    size: file.size,
                    mimeType: file.mimetype,
                    status: "ACTIVE"
                }
            })
        )
    );
    return uploadedFiles;
}

export async function getFile(id: string) {
    const file = await prisma.file.findUnique({
        where: { id }
    });

    if (!file) {
        throw new AppError("Fayl topilmadi", 404);
    }

    return file;
}

export async function deleteFile(id: string) {
    const file = await prisma.file.findUnique({
        where: { id }
    });

    if (!file) {
        throw new AppError("Fayl topilmadi", 404);
    }

    // Faylni diskdan o'chirish
    if (fs.existsSync(file.path)) {
        fs.unlinkSync(file.path);
    }

    // Bazadan o'chirish
    await prisma.file.delete({
        where: { id }
    });

    return { message: "Fayl muvaffaqiyatli o'chirildi" };
}
