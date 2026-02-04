import { Request, Response } from "express";
import { UsersService } from "./user.service";
import { prisma } from "../../config";

const usersService = new UsersService();

export class UserController {

  create = async (req: Request, res: Response) => {
    try {

      const existPhone = await prisma.user.findUnique({
        where: {
          phone: req.body.phone
        }
      })

      if (existPhone) {
        return res.status(400).json({ message: "Foydalanuvchi allaqachon mavjud" });
      }

      const user = await usersService.create(req.body);
      return res.status(201).json({ message: "Foydalanuvchi muvaffaqiyatli qo'shildi", data: user });
    } catch (error) {
      return res.status(500).json({ message: "Server xatosi" });
    }
  }

  getOne = async (req: Request, res: Response) => {
    try {
      const user = await usersService.findOne(+req.params.id);

      if (!user) {
        return res.status(404).json({
          message: "Foydalanuvchi topilmadi",
        });
      }

      return res.status(200).json({ data: user });
    } catch (error) {
      return res.status(500).json({ message: "Server xatosi" });
    }
  };

  getAll = async (req: Request, res: Response) => {
    try {
      const result = await usersService.findAll();
      return res.status(200).json({ success: true, data: result });
    } catch (error) {
      return res.status(500).json({ success: false, message: "Server xatosi" });
    }
  };

  hardDelete = async (req: Request, res: Response) => {
    try {
      const user = await usersService.hardDelete(+req.params.id);
      return res.status(200).json({success: true, message: "Foydalanuvchi muvaffaqiyatli o'chirildi", data: user})
    } catch (error) {
      return res.status(500).json({success: false, message: "Server xatosi"})
    }
  }

  softDelete = async (req: Request, res: Response) => {
    try {
      const user = await usersService.softDelete(+req.params.id);
      return res.status(200).json({success: true, message: "Foydalanuvchi muvaffaqiyatli de-aktivatsiya qilindi", data: user})
    } catch (error) {
      return res.status(500).json({success: false, message: "Server xatosi"})
    }
  }
}

export const userController = new UserController();
