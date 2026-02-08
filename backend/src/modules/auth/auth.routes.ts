import { Router } from "express";
import { loginController } from "./auth.controller";

export const authRouter = Router();

authRouter.post("/login", loginController);

export default authRouter;
