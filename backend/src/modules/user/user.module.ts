import { Router } from "express";
import { userController } from "./user.controller";
import { authenticate } from "../../common/middleware/auth.middleware";
import { rolePermission } from "../../common/middleware/role.middleware";
import { Role } from "../../../generated/prisma/client";

export const userRouter = Router();

userRouter.get(
    "/users",
    authenticate,
    rolePermission([Role.ADMIN, Role.OWNER, Role.SUPERVISOR]),
    userController.getAll
);

userRouter.get(
    "/:id",
    authenticate,
    userController.getOne
);

userRouter.post(
    "/",
    authenticate,
    userController.create
);

userRouter.patch(
    "/up/:id",
    authenticate,
    userController.update
);

userRouter.delete(
    "/hard/:id",
    authenticate,
    userController.hardDelete
);

userRouter.put(
    "/soft/:id",
    authenticate,
    userController.softDelete
);

export default userRouter;
