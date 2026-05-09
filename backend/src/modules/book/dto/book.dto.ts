/**
 * Book DTOs
 * RFC: RFC-BOOK-002
 */

/**
 * Kitob yaratish uchun DTO (Manual)
 */
export interface CreateBookDto {
    /**
     * Kitob nomi (o'zbekcha) - Majburiy, 3-200 belgi
     * @example "O'tkan kunlar"
     */
    title: string;

    /**
     * Kitob nomi (inglizcha)
     * @example "Past Days"
     */
    titleEn?: string;

    /**
     * Kitob nomi (ruscha)
     * @example "Прошедшие дни"
     */
    titleRu?: string;

    /**
     * Kitobning qo'shimcha nomi
     * @example "Birinci jild"
     */
    subtitle?: string;

    /**
     * Qisqa tavsif (max 1000 belgi)
     * @example "Abdulla Qodiriyning mashhur romani"
     */
    description?: string;

    /**
     * To'liq tavsif
     */
    fullDescription?: string;

    /**
     * ISBN-10 kodi (10 digits, unique)
     * @example "9999999999"
     */
    isbn10?: string;

    /**
     * ISBN-13 kodi (13 digits, unique)
     * @example "9789999999999"
     */
    isbn13?: string;

    /**
     * Ichki kod (kutubxona ichida)
     * @example "BK-001"
     */
    internalCode?: string;

    /**
     * Nashr yili (1000-current)
     * @example 2023
     */
    publishYear?: number;

    /**
     * Til kodi
     * @default "uz"
     * @example "uz"
     */
    language?: string;

    /**
     * Sahifalar soni (> 0)
     * @example 450
     */
    pageCount?: number;

    /**
     * Vazni (gramm)
     * @example 650.5
     */
    weight?: number;

    /**
     * O'lchamlari
     * @example "20x30x5 cm"
     */
    dimensions?: string;

    /**
     * Muqova turi
     * @example "Qattiq"
     */
    coverType?: string;

    /**
     * Muqova rasmi URL
     */
    coverImage?: string;

    /**
     * Orqa muqova rasmi URL
     */
    backCoverImage?: string;

    /**
     * Yosh guruhi
     * @example "16+"
     */
    ageGroup?: string;

    /**
     * DDC kodi
     * @example "891.5"
     */
    ddcCode?: string;

    /**
     * UDC kodi
     * @example "821.51"
     */
    udcCode?: string;

    /**
     * Teglar ro'yxati
     * @example ["roman", "tarixiy", "o'zbek adabiyoti"]
     */
    customTags?: string[];

    /**
     * Mualliflar ID ro'yxati
     * @example ["uuid-1", "uuid-2"]
     */
    authorIds?: string[];

    /**
     * Nashriyot ID
     * @example "uuid-publisher"
     */
    publisherId?: string;

    /**
     * Janrlar ID ro'yxati
     * @example ["uuid-genre-1", "uuid-genre-2"]
     */
    genreIds?: string[];

    /**
     * Kategoriyalar ID ro'yxati
     * @example ["uuid-category-1"]
     */
    categoryIds?: string[];

    /**
     * Faol holati
     * @default true
     */
    isActive?: boolean;

    /**
     * E'tiborli kitob
     * @default false
     */
    isFeatured?: boolean;

    /**
     * Qoralama holati
     * @default false
     */
    isDraft?: boolean;
}

/**
 * Kitobni yangilash uchun DTO (barcha maydonlar optional)
 */
export interface UpdateBookDto extends Partial<CreateBookDto> {}

/**
 * Kitob ma'lumotlari DTO
 */
export interface BookDto {
    /**
     * Kitob ID
     */
    id: string;

    /**
     * Kitob nomi
     */
    title: string;

    /**
     * Kitob nomi (inglizcha)
     */
    titleEn: string | null;

    /**
     * Kitob nomi (ruscha)
     */
    titleRu: string | null;

    /**
     * Qo'shimcha nom
     */
    subtitle: string | null;

    /**
     * Qisqa tavsif
     */
    description: string | null;

    /**
     * To'liq tavsif
     */
    fullDescription: string | null;

    /**
     * ISBN-10
     */
    isbn10: string | null;

    /**
     * ISBN-13
     */
    isbn13: string | null;

    /**
     * Ichki kod
     */
    internalCode: string | null;

    /**
     * Nashr yili
     */
    publishYear: number | null;

    /**
     * Til
     */
    language: string;

    /**
     * Sahifalar soni
     */
    pageCount: number | null;

    /**
     * Vazni
     */
    weight: number | null;

    /**
     * O'lchamlari
     */
    dimensions: string | null;

    /**
     * Muqova turi
     */
    coverType: string | null;

    /**
     * Muqova rasmi
     */
    coverImage: string | null;

    /**
     * Orqa muqova rasmi
     */
    backCoverImage: string | null;

    /**
     * Yosh guruhi
     */
    ageGroup: string | null;

    /**
     * DDC kodi
     */
    ddcCode: string | null;

    /**
     * UDC kodi
     */
    udcCode: string | null;

    /**
     * Teglar
     */
    customTags: string[];

    /**
     * O'rtacha reyting (0-5)
     */
    avgRating: number;

    /**
     * Reytinglar soni
     */
    ratingsCount: number;

    /**
     * Sharhlar soni
     */
    reviewsCount: number;

    /**
     * O'qilganlar soni
     */
    readCount: number;

    /**
     * Mashhurlik ko'rsatkichi
     */
    popularityScore: number;

    /**
     * Faol holati
     */
    isActive: boolean;

    /**
     * E'tiborli kitob
     */
    isFeatured: boolean;

    /**
     * Qoralama
     */
    isDraft: boolean;

    /**
     * Yaratilgan sana
     */
    createdAt: Date;

    /**
     * Yangilangan sana
     */
    updatedAt: Date;

    /**
     * Mualliflar
     */
    authors?: AuthorDto[];

    /**
     * Nashriyot
     */
    publisher?: PublisherDto | null;

    /**
     * Janrlar
     */
    genres?: GenreDto[];

    /**
     * Kategoriyalar
     */
    categories?: CategoryDto[];

    /**
     * Nusxalar soni
     */
    copiesCount?: number;
}

/**
 * ISBN Lookup uchun DTO
 */
export interface IsbnLookupDto {
    /**
     * ISBN-13 kodi (13 digits)
     * @example "9789943123456"
     */
    isbn13: string;
}

/**
 * ISBN Lookup Response DTO
 */
export interface IsbnLookupResponseDto {
    /**
     * API manbasi
     */
    source: 'GOOGLE_BOOKS' | 'OPEN_LIBRARY' | 'INTERNAL_DB' | 'MANUAL';

    /**
     * Kitob ma'lumotlari
     */
    book: Partial<CreateBookDto>;

    /**
     * Fallback ishlatildimi
     */
    fallbackUsed: boolean;

    /**
     * API javob vaqti (ms)
     */
    apiResponseTime: number;
}

/**
 * Author DTO
 */
export interface AuthorDto {
    /**
     * Muallif ID
     */
    id: string;

    /**
     * Ismi
     */
    name: string;

    /**
     * Tug'ilgan sana
     */
    birthDate: Date | null;

    /**
     * Vafot etgan sana
     */
    deathDate: Date | null;

    /**
     * Millati
     */
    nationality: string | null;

    /**
     * Biografiya
     */
    biography: string | null;

    /**
     * Rasm
     */
    photo: string | null;

    /**
     * Yaratilgan sana
     */
    createdAt: Date;

    /**
     * Yangilangan sana
     */
    updatedAt: Date;

    /**
     * Kitoblar soni (optional, for list views)
     */
    booksCount?: number;

    /**
     * Kitoblar (optional, for detailed views)
     */
    books?: any[];
}

/**
 * Author yaratish DTO
 */
export interface CreateAuthorDto {
    /**
     * Muallif ismi - Majburiy
     * @example "Alisher Navoiy"
     */
    name: string;

    /**
     * Tug'ilgan sana
     * @example "1441-02-09"
     */
    birthDate?: string;

    /**
     * Vafot etgan sana
     * @example "1501-01-03"
     */
    deathDate?: string;

    /**
     * Millati
     * @example "Uzbek"
     */
    nationality?: string;

    /**
     * Biografiya
     */
    biography?: string;

    /**
     * Rasm URL
     */
    photo?: string;
}

/**
 * Author yangilash DTO
 */
export interface UpdateAuthorDto extends Partial<CreateAuthorDto> {}

/**
 * Genre DTO
 */
export interface GenreDto {
    /**
     * Janr ID
     */
    id: string;

    /**
     * Janr nomi
     */
    name: string;

    /**
     * Slug
     */
    slug: string;

    /**
     * Tavsif
     */
    description: string | null;

    /**
     * Ota janr ID
     */
    parentId: string | null;

    /**
     * Yaratilgan sana
     */
    createdAt: Date;

    /**
     * Yangilangan sana
     */
    updatedAt: Date;

    /**
     * Kitoblar soni (optional, for list views)
     */
    booksCount?: number;

    /**
     * Bolalar soni (optional, for hierarchical views)
     */
    childrenCount?: number;

    /**
     * Kitoblar (optional, for detailed views)
     */
    books?: any[];
}

/**
 * Genre yaratish DTO
 */
export interface CreateGenreDto {
    /**
     * Janr nomi - Majburiy, unique
     * @example "She'riyat"
     */
    name: string;

    /**
     * Slug - Majburiy, unique
     * @example "she'riyat"
     */
    slug: string;

    /**
     * Tavsif
     */
    description?: string;

    /**
     * Ota janr ID
     */
    parentId?: string;
}

/**
 * Genre yangilash DTO
 */
export interface UpdateGenreDto extends Partial<CreateGenreDto> {}

/**
 * Category DTO
 */
export interface CategoryDto {
    /**
     * Kategoriya ID
     */
    id: string;

    /**
     * Nomi
     */
    name: string;

    /**
     * Kod (DDC/UDC)
     */
    code: string | null;

    /**
     * Tavsif
     */
    description: string | null;

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
 * Category yaratish DTO
 */
export interface CreateCategoryDto {
    /**
     * Kategoriya nomi - Majburiy, unique
     * @example "Badiiy adabiyot"
     */
    name: string;

    /**
     * Kod (DDC/UDC)
     * @example "821.51"
     */
    code?: string;

    /**
     * Tavsif
     */
    description?: string;
}

/**
 * Category yangilash DTO
 */
export interface UpdateCategoryDto extends Partial<CreateCategoryDto> {}

/**
 * Publisher DTO
 */
export interface PublisherDto {
    /**
     * Nashriyot ID
     */
    id: string;

    /**
     * Nomi
     */
    name: string;

    /**
     * Mamlakat
     */
    country: string | null;

    /**
     * Shahar
     */
    city: string | null;

    /**
     * Veb-sayt
     */
    website: string | null;

    /**
     * Yaratilgan sana
     */
    createdAt: Date;

    /**
     * Yangilangan sana
     */
    updatedAt: Date;

    /**
     * Kitoblar soni (optional, for list views)
     */
    booksCount?: number;

    /**
     * Kitoblar (optional, for detailed views)
     */
    books?: any[];
}

/**
 * Publisher yaratish DTO
 */
export interface CreatePublisherDto {
    /**
     * Nashriyot nomi - Majburiy, unique
     * @example "Sharq Nashriyoti"
     */
    name: string;

    /**
     * Mamlakat
     * @example "Uzbekistan"
     */
    country?: string;

    /**
     * Shahar
     * @example "Tashkent"
     */
    city?: string;

    /**
     * Veb-sayt
     * @example "https://sharq.uz"
     */
    website?: string;
}

/**
 * Publisher yangilash DTO
 */
export interface UpdatePublisherDto extends Partial<CreatePublisherDto> {}

/**
 * Branch DTO
 */
export interface BranchDto {
    /**
     * Filial ID
     */
    id: string;

    /**
     * Nomi
     */
    name: string;

    /**
     * Kod
     */
    code: string;

    /**
     * Manzil
     */
    address: string;

    /**
     * Shahar
     */
    city: string;

    /**
     * Telefon
     */
    phone?: string;

    /**
     * Email
     */
    email?: string;

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
 * Location DTO
 */
export interface LocationDto {
    /**
     * Joylashuv ID
     */
    id: string;

    /**
     * Nomi
     */
    name: string;

    /**
     * Kod
     */
    code: string;

    /**
     * Qavat
     */
    floor?: number;

    /**
     * Xona
     */
    room?: string;

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
 * Shelf DTO
 */
export interface ShelfDto {
    /**
     * Raf ID
     */
    id: string;

    /**
     * Kod
     */
    code: string;

    /**
     * Qator
     */
    row?: number;

    /**
     * Tomon
     */
    side?: string;

    /**
     * Sig'imi
     */
    capacity?: number;

    /**
     * Yaratilgan sana
     */
    createdAt: Date;

    /**
     * Yangilangan sana
     */
    updatedAt: Date;
}
