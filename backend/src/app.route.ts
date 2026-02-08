import { Router } from "express";
import user from "./modules/user/user.module";
import auth from "./modules/auth/auth.routes";

export const appRouter = Router();

appRouter.use("/auth", auth);
appRouter.use("/user", user);

export default appRouter;