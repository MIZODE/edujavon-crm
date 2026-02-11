// src/config/multer.config.ts

import multer from 'multer';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';

// 1. Upload papka yo'lini belgilaymiz
const uploadRoot = path.join(process.cwd(), 'uploads');

// 2. Papka mavjud emasligini tekshiramiz va yaratamiz
if (!fs.existsSync(uploadRoot)) {
    fs.mkdirSync(uploadRoot, { recursive: true });
}

// 3. Disk storage konfiguratsiyasi
export const storage = multer.diskStorage({

    // File qayerga saqlanishini belgilash
    destination(req, file, cb) {
        // MIME type bo'yicha papka tanlash
        let folder = 'documents'; // default

        if (file.mimetype.startsWith('image/')) {
            folder = 'avatars';
        } else if (file.mimetype.startsWith('video/')) {
            folder = 'videos';
        } else if (file.mimetype === 'application/pdf') {
            folder = 'documents';
        }

        const folderPath = path.join(uploadRoot, folder);

        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }

        cb(null, folderPath);
    },

    filename(req, file, cb) {
        const timestamp = Date.now();
        const randomHex = crypto.randomBytes(8).toString('hex');
        const ext = path.extname(file.originalname);

        const uniqueName = `${timestamp}-${randomHex}${ext}`;

        cb(null, uniqueName);
    }
});

export const upload = multer({ storage });