import { Router } from "express";
import { upload } from "../../common/multer/multer.config";
import * as fileController from "./file.controller";

const router = Router();

router.post("/upload", upload.single("file"), fileController.uploadFile);
router.post("/uploads", upload.array("files", 10), fileController.uploadFiles);
router.get("/:id", fileController.getFile);
router.delete("/:id", fileController.deleteFile);

export default router;
