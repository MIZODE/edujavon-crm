import { Router } from "express";
import user from "./modules/user/user.module";

import file from "./modules/file/file.routes";

export const appRouter = Router();


appRouter.use("/user", user);
appRouter.use("/file", file);

export default appRouter;