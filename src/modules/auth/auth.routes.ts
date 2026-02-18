import { Router } from "express";
import { loginController } from "./auth.controller";
import { registerController } from "./auth.controller";

export const authRouter = Router();

authRouter.post("/login", loginController);
authRouter.post("/register", registerController);

export default authRouter;
