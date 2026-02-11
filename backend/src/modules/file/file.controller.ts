import { Request, Response } from "express";
import * as fileService from "./file.service";
import { AppError } from "../../common/errors/AppError";

export async function uploadFile(req: Request, res: Response) {
    try {
        const file = await fileService.uploadFile(req.file);
        res.status(201).json(file);
    } catch (error: any) {
        if (error instanceof AppError) {
            return res.status(error.statusCode).json({ message: error.message });
        }
        res.status(500).json({ message: "Server xatosi" });
    }
}

export async function uploadFiles(req: Request, res: Response) {
    try {
        const files = await fileService.uploadFiles(req.files as Express.Multer.File[]);
        res.status(201).json(files);
    } catch (error: any) {
        if (error instanceof AppError) {
            return res.status(error.statusCode).json({ message: error.message });
        }
        res.status(500).json({ message: "Server xatosi" });
    }
}

export async function getFile(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const file = await fileService.getFile(id as string);
        res.json(file);
    } catch (error: any) {
        if (error instanceof AppError) {
            return res.status(error.statusCode).json({ message: error.message });
        }
        res.status(500).json({ message: "Server xatosi" });
    }
}

export async function deleteFile(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const result = await fileService.deleteFile(id as string);
        res.json(result);
    } catch (error: any) {
        if (error instanceof AppError) {
            return res.status(error.statusCode).json({ message: error.message });
        }
        res.status(500).json({ message: "Server xatosi" });
    }
}
