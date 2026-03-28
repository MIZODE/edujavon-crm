/**
 * Book Copy DTOs
 * RFC: RFC-BOOK-002
 */

/**
 * Kitob nusxasi yaratish DTO
 */
export interface CreateBookCopyDto {
    /**
     * Kitob ID - Majburiy
     * @example "book_uuid"
     */
    bookId: string;

    /**
     * Barkod - Majburiy, unique
     * @example "BK001-001"
     */
    barcode: string;

    /**
     * QR kod
     */
    qrCode?: string;

    /**
     * Filial ID - Majburiy
     * @example "branch_uuid"
     */
    branchId: string;

    /**
     * Joylashuv ID
     * @example "location_uuid"
     */
    locationId?: string;

    /**
     * Raf ID
     * @example "shelf_uuid"
     */
    shelfId?: string;

    /**
     * Holat
     * @default "AVAILABLE"
     */
    status?: BookCopyStatus;

    /**
     * Kitob holati (yangi, yaxshi, yomon)
     * @example "Yaxshi"
     */
    condition?: string;

    /**
     * Sotib olingan sana (ISO format)
     * @example "2025-11-19"
     */
    purchaseDate?: string;

    /**
     * Sotib olish narxi
     * @example 50000.00
     */
    purchasePrice?: number;

    /**
     * Yetkazib beruvchi
     * @example "Kitob Dunyosi MChJ"
     */
    supplier?: string;
}

/**
 * Kitob nusxasi batch yaratish DTO
 */
export interface CreateBookCopyBatchDto {
    /**
     * Nusxalar soni (1-1000) - Majburiy
     * @example 10
     */
    quantity: number;

    /**
     * Filial ID - Majburiy
     * @example "branch_uuid"
     */
    branchId: string;

    /**
     * Joylashuv ID
     * @example "location_uuid"
     */
    locationId?: string;

    /**
     * Raf ID
     * @example "shelf_uuid"
     */
    shelfId?: string;

    /**
     * Holat
     * @default "AVAILABLE"
     */
    status?: BookCopyStatus;

    /**
     * Kitob holati
     * @example "Yaxshi"
     */
    condition?: string;

    /**
     * Sotib olingan sana
     * @example "2025-11-19"
     */
    purchaseDate?: string;

    /**
     * Sotib olish narxi
     * @example 50000.00
     */
    purchasePrice?: number;

    /**
     * Yetkazib beruvchi
     * @example "Kitob Dunyosi MChJ"
     */
    supplier?: string;

    /**
     * QR kod generatsiya qilish
     * @default true
     */
    generateQR?: boolean;

    /**
     * Barcode PDF generatsiya qilish
     * @default true
     */
    generateBarcodePDF?: boolean;
}

/**
 * Kitob nusxasi DTO
 */
export interface BookCopyDto {
    /**
     * Nusxa ID
     */
    id: string;

    /**
     * Barkod
     */
    barcode: string;

    /**
     * QR kod
     */
    qrCode: string | null;

    /**
     * Kitob ID
     */
    bookId: string;

    /**
     * Filial ID
     */
    branchId: string;

    /**
     * Joylashuv ID
     */
    locationId: string | null;

    /**
     * Raf ID
     */
    shelfId: string | null;

    /**
     * Holat
     */
    status: BookCopyStatus;

    /**
     * Kitob holati
     */
    condition: string | null;

    /**
     * Sotib olingan sana
     */
    purchaseDate: Date | null;

    /**
     * Narxi
     */
    purchasePrice: number | null;

    /**
     * Yetkazib beruvchi
     */
    supplier: string | null;

    /**
     * Oxirgi tekshiruv
     */
    lastCheckedAt: Date | null;

    /**
     * Ta'mirlash tarixi
     */
    repairHistory: any | null;

    /**
     * Yaratilgan sana
     */
    createdAt: Date;

    /**
     * Yangilangan sana
     */
    updatedAt: Date;
}

/**
 * Kitob nusxasi yangilash DTO
 */
export interface UpdateBookCopyDto {
    /**
     * Barkod
     */
    barcode?: string;

    /**
     * QR kod
     */
    qrCode?: string;

    /**
     * Joylashuv ID
     */
    locationId?: string;

    /**
     * Raf ID
     */
    shelfId?: string;

    /**
     * Holat
     */
    status?: BookCopyStatus;

    /**
     * Kitob holati
     */
    condition?: string;

    /**
     * Sotib olingan sana
     */
    purchaseDate?: string;

    /**
     * Sotib olish narxi
     */
    purchasePrice?: number;

    /**
     * Yetkazib beruvchi
     */
    supplier?: string;

    /**
     * Oxirgi tekshiruv sanasi
     */
    lastCheckedAt?: string;

    /**
     * Ta'mirlash tarixi
     */
    repairHistory?: any;
}

/**
 * Copy status o'zgartirish DTO
 */
export interface ChangeCopyStatusDto {
    /**
     * Yangi holat - Majburiy
     */
    status: BookCopyStatus;

    /**
     * Sabab (agar LOST/DAMAGED bo'lsa)
     */
    reason?: string;
}

/**
 * BookCopy Status Enum
 */
export type BookCopyStatus =
    | 'AVAILABLE'
    | 'RESERVED'
    | 'ON_RENT'
    | 'LOST'
    | 'DAMAGED'
    | 'UNDER_REPAIR'
    | 'WITHDRAWN'
    | 'IN_TRANSIT';

/**
 * Import Log DTO
 */
export interface ImportLogDto {
    /**
     * Import log ID
     */
    id: string;

    /**
     * Fayl nomi
     */
    fileName: string;

    /**
     * Fayl turi
     */
    fileType: string;

    /**
     * Jami qatorlar
     */
    totalRows: number;

    /**
     * Muvaffaqiyatli qatorlar
     */
    successRows: number;

    /**
     * Xato bo'lgan qatorlar
     */
    failedRows: number;

    /**
     * Holat
     */
    status: ImportStatus;

    /**
     * Xato logi
     */
    errorLog?: string;

    /**
     * Yuklagan foydalanuvchi
     */
    uploadedBy: string;

    /**
     * Boshlangan sana
     */
    startedAt?: Date;

    /**
     * Tugallangan sana
     */
    completedAt?: Date;

    /**
     * Yaratilgan sana
     */
    createdAt: Date;

    /**
     * Yangilangan sana
     */
    updatedAt: Date;
}

/**
 * Import Status Enum
 */
export type ImportStatus =
    | 'PENDING'
    | 'PROCESSING'
    | 'COMPLETED'
    | 'FAILED'
    | 'PARTIAL';

/**
 * Import natijasi DTO
 */
export interface ImportResultDto {
    /**
     * Import log
     */
    importLog: ImportLogDto;

    /**
     * Xato hisoboti mavjudmi
     */
    errorReport: {
        available: boolean;
        url?: string;
        expiresAt?: Date;
    };

    /**
     * Xulosa
     */
    summary: {
        successRate: string;
        booksCreated: number;
        authorsCreated: number;
        publishersCreated: number;
        errors: Array<{
            row: number;
            column: string;
            reason: string;
            value: any;
        }>;
    };
}
