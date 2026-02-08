import { Router } from "express";
import { userController } from "./user.controller";
import { authenticate } from "../../common/middleware/auth.middleware";

export const userRouter = Router();

userRouter.get("/users", authenticate, userController.getAll);
userRouter.get("/:id", userController.getOne);
userRouter.post("/", userController.create);
userRouter.patch("/up/:id", userController.update);
userRouter.delete('/hard/:id', userController.hardDelete);
userRouter.put('/soft/:id', userController.softDelete);

export default userRouter;
