import { Router } from "express";
import { upload } from "../../common/multer/multer.config";
import * as fileController from "./file.controller";
import { authenticate } from "../../common/middleware/auth.middleware";
import { rolePermission } from "../../common/middleware/role.middleware";
import { UserRole } from "../../../generated/prisma/client";

const router = Router();

router.post(
    "/upload",
    authenticate,
    rolePermission([UserRole.SUPER_ADMIN, UserRole.OWNER, UserRole.MANAGER, UserRole.LIBRARIAN]),
    upload.single("file"),
    fileController.uploadFile
);

router.post(
    "/uploads",
    authenticate,
    rolePermission([UserRole.SUPER_ADMIN, UserRole.OWNER, UserRole.MANAGER, UserRole.LIBRARIAN]),
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
    rolePermission([UserRole.SUPER_ADMIN, UserRole.OWNER, UserRole.MANAGER]),
    fileController.deleteFile
);

export default router;
