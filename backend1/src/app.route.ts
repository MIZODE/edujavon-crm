import { Router } from "express";
import user from "./modules/user/user.module";

export const appRouter = Router();

appRouter.use("/user", user);

export default appRouter;
