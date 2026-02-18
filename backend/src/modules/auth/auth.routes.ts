import { Router } from "express";
import { loginController } from "./auth.controller";
import { registerController } from "./auth.controller";
import { logoutController } from "./auth.controller";

export const authRouter = Router();

authRouter.post("/login", loginController);
authRouter.post("/register", registerController);
authRouter.post("/logout", logoutController);

export default authRouter;
