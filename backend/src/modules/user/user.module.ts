import { Router } from "express";
import { userController } from "./user.controller";

export const userRouter = Router();

userRouter.get("/users", userController.getAll);
userRouter.get("/:id", userController.getOne);
userRouter.post("/", userController.create);
userRouter.delete('/hard/:id', userController.hardDelete);
userRouter.put('/soft/:id', userController.softDelete);

export default userRouter;
