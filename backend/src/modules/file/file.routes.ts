import { Router } from "express";
import { upload } from "../../common/multer/multer.config";
import * as fileController from "./file.controller";
import { authenticate } from "../../common/middleware/auth.middleware";
import { rolePermission } from "../../common/middleware/role.middleware";
import { Role } from "../../../generated/prisma/client";

const router = Router();

router.post(
    "/upload",
    authenticate,
    rolePermission([Role.ADMIN, Role.OWNER, Role.SUPERVISOR, Role.LIBRARIAN]),
    upload.single("file"),
    fileController.uploadFile
);

router.post(
    "/uploads",
    authenticate,
    rolePermission([Role.ADMIN, Role.OWNER, Role.SUPERVISOR, Role.LIBRARIAN]),
    upload.array("files", 10),
    fileController.uploadFiles
);

router.get(
    "/:id",
    authenticate,
    fileController.getFile
);

router.delete(
    "/:id",
    authenticate,
    rolePermission([Role.ADMIN, Role.OWNER, Role.SUPERVISOR]),
    fileController.deleteFile
);

export default router;
