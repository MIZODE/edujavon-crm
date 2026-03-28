import { Router } from "express";
// import user from "./modules/user/user.module";

import file from "./modules/file/file.routes";
import book from "./modules/book/book.module";

export const appRouter = Router();


// appRouter.use("/user", user);
appRouter.use("/file", file);
appRouter.use("/book", book);

export default appRouter;