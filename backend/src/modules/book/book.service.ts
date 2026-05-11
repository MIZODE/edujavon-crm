import { prisma } from '../../config/prisma';
import { AppError } from '../../common/errors/AppError';
import { CreateBookDto, UpdateBookDto, BookDto } from './dto/book.dto';
import {
    CreateBookCopyDto,
    CreateBookCopyBatchDto,
    BookCopyDto,
    UpdateBookCopyDto,
    BookCopyStatus
} from './dto/book-copy.dto';

/**
 * Book Service
 * RFC: RFC-BOOK-002
 * 
 * Business logic for book management
 */

/**
 * Yangi kitob yaratish (Manual)
 * FR-01: Kitob yaratish (Manual)
 */
export async function createBook(data: CreateBookDto, userId: string): Promise<BookDto> {
    // Validation: Title length (3-200 chars)
    if (!data.title || data.title.length < 3 || data.title.length > 200) {
        throw new AppError('Title must be between 3 and 200 characters', 400);
    }

    // Validation: ISBN uniqueness
    if (data.isbn13) {
        const existingIsbn13 = await prisma.book.findUnique({
            where: { isbn13: data.isbn13, deletedAt: null }
        });
        if (existingIsbn13) {
            throw new AppError('ISBN-13 already exists', 409);
        }
    }

    if (data.isbn10) {
        const existingIsbn10 = await prisma.book.findUnique({
            where: { isbn10: data.isbn10, deletedAt: null }
        });
        if (existingIsbn10) {
            throw new AppError('ISBN-10 already exists', 409);
        }
    }

    // Validation: Publish year
    if (data.publishYear) {
        const currentYear = new Date().getFullYear();
        if (data.publishYear < 1000 || data.publishYear > currentYear) {
            throw new AppError(`Publish year must be between 1000 and ${currentYear}`, 400);
        }
    }

    // Validate authors exist
    if (data.authorIds && data.authorIds.length > 0) {
        const authors = await prisma.author.findMany({
            where: {
                id: { in: data.authorIds },
                deletedAt: null
            }
        });
        if (authors.length !== data.authorIds.length) {
            throw new AppError('One or more authors not found', 404);
        }
    }

    // Validate publisher exists
    if (data.publisherId) {
        const publisher = await prisma.publisher.findUnique({
            where: { id: data.publisherId, deletedAt: null }
        });
        if (!publisher) {
            throw new AppError('Publisher not found', 404);
        }
    }

    // Validate genres exist
    if (data.genreIds && data.genreIds.length > 0) {
        const genres = await prisma.genre.findMany({
            where: {
                id: { in: data.genreIds },
                deletedAt: null
            }
        });
        if (genres.length !== data.genreIds.length) {
            throw new AppError('One or more genres not found', 404);
        }
    }

    // Validate categories exist
    if (data.categoryIds && data.categoryIds.length > 0) {
        const categories = await prisma.category.findMany({
            where: {
                id: { in: data.categoryIds },
                deletedAt: null
            }
        });
        if (categories.length !== data.categoryIds.length) {
            throw new AppError('One or more categories not found', 404);
        }
    }

    // Create book with relations
    const book = await prisma.book.create({
        data: {
            title: data.title,
            titleEn: data.titleEn,
            titleRu: data.titleRu,
            subtitle: data.subtitle,
            description: data.description,
            fullDescription: data.fullDescription,
            isbn10: data.isbn10,
            isbn13: data.isbn13,
            internalCode: data.internalCode,
            publishYear: data.publishYear,
            language: data.language || 'uz',
            pageCount: data.pageCount,
            weight: data.weight,
            dimensions: data.dimensions,
            coverType: data.coverType,
            coverImage: data.coverImage,
            backCoverImage: data.backCoverImage,
            ageGroup: data.ageGroup,
            ddcCode: data.ddcCode,
            udcCode: data.udcCode,
            customTags: data.customTags || [],
            isActive: data.isActive ?? true,
            isFeatured: data.isFeatured ?? false,
            isDraft: data.isDraft ?? false,
            // Relations
            authors: data.authorIds ? {
                connect: data.authorIds.map(id => ({ id }))
            } : undefined,
            publisher: data.publisherId ? {
                connect: { id: data.publisherId }
            } : undefined,
            genres: data.genreIds ? {
                connect: data.genreIds.map(id => ({ id }))
            } : undefined,
            categories: data.categoryIds ? {
                connect: data.categoryIds.map(id => ({ id }))
            } : undefined
        },
        include: {
            authors: true,
            publisher: true,
            genres: true,
            categories: true
        }
    });

    // Get copies count
    const copiesCount = await prisma.bookCopy.count({
        where: { bookId: book.id, deletedAt: null }
    });

    // Create audit log
    await prisma.auditLog.create({
        data: {
            action: 'CREATE',
            entity: 'BOOK',
            entityId: book.id,
            userId,
            newValue: {
                title: book.title,
                isbn13: book.isbn13,
                isbn10: book.isbn10
            }
        }
    });

    return {
        id: book.id,
        title: book.title,
        titleEn: book.titleEn,
        titleRu: book.titleRu,
        subtitle: book.subtitle,
        description: book.description,
        fullDescription: book.fullDescription,
        isbn10: book.isbn10,
        isbn13: book.isbn13,
        internalCode: book.internalCode,
        publishYear: book.publishYear,
        language: book.language,
        pageCount: book.pageCount,
        weight: book.weight ? Number(book.weight) : null,
        dimensions: book.dimensions,
        coverType: book.coverType,
        coverImage: book.coverImage,
        backCoverImage: book.backCoverImage,
        ageGroup: book.ageGroup,
        ddcCode: book.ddcCode,
        udcCode: book.udcCode,
        customTags: book.customTags,
        avgRating: Number(book.avgRating),
        ratingsCount: book.ratingsCount,
        reviewsCount: book.reviewsCount,
        readCount: book.readCount,
        popularityScore: book.popularityScore,
        isActive: book.isActive,
        isFeatured: book.isFeatured,
        isDraft: book.isDraft,
        createdAt: book.createdAt,
        updatedAt: book.updatedAt,
        authors: book.authors,
        publisher: book.publisher ? {
            ...book.publisher,
            booksCount: undefined,
            books: undefined
        } : null,
        genres: book.genres,
        categories: book.categories,
        copiesCount
    };
}

/**
 * Kitob ma'lumotlarini ID bo'yicha olish
 */
export async function getBookById(id: string): Promise<BookDto | null> {
    const book = await prisma.book.findUnique({
        where: { id, deletedAt: null },
        include: {
            authors: true,
            publisher: true,
            genres: true,
            categories: true,
            _count: {
                select: { copies: { where: { deletedAt: null } } }
            }
        }
    });

    if (!book) {
        return null;
    }

    return {
        id: book.id,
        title: book.title,
        titleEn: book.titleEn,
        titleRu: book.titleRu,
        subtitle: book.subtitle,
        description: book.description,
        fullDescription: book.fullDescription,
        isbn10: book.isbn10,
        isbn13: book.isbn13,
        internalCode: book.internalCode,
        publishYear: book.publishYear,
        language: book.language,
        pageCount: book.pageCount,
        weight: book.weight ? Number(book.weight) : null,
        dimensions: book.dimensions,
        coverType: book.coverType,
        coverImage: book.coverImage,
        backCoverImage: book.backCoverImage,
        ageGroup: book.ageGroup,
        ddcCode: book.ddcCode,
        udcCode: book.udcCode,
        customTags: book.customTags,
        avgRating: Number(book.avgRating),
        ratingsCount: book.ratingsCount,
        reviewsCount: book.reviewsCount,
        readCount: book.readCount,
        popularityScore: book.popularityScore,
        isActive: book.isActive,
        isFeatured: book.isFeatured,
        isDraft: book.isDraft,
        createdAt: book.createdAt,
        updatedAt: book.updatedAt,
        authors: book.authors,
        publisher: book.publisher ? {
            ...book.publisher,
            booksCount: undefined,
            books: undefined
        } : null,
        genres: book.genres,
        categories: book.categories,
        copiesCount: book._count.copies
    };
}

/**
 * Barcha kitoblarni olish (pagination bilan)
 */
export async function getAllBooks(
    page: number = 1,
    limit: number = 20,
    filters?: {
        isActive?: boolean;
        language?: string;
        publishYear?: number;
        genreId?: string;
        authorId?: string;
    }
): Promise<{ books: BookDto[]; total: number; totalPages: number }> {
    const skip = (page - 1) * limit;

    const where: any = {
        deletedAt: null,
        isActive: filters?.isActive ?? true
    };

    if (filters?.language) {
        where.language = filters.language;
    }

    if (filters?.publishYear) {
        where.publishYear = filters.publishYear;
    }

    if (filters?.genreId) {
        where.genres = {
            some: { id: filters.genreId }
        };
    }

    if (filters?.authorId) {
        where.authors = {
            some: { id: filters.authorId }
        };
    }

    const [books, total] = await Promise.all([
        prisma.book.findMany({
            where,
            skip,
            take: limit,
            include: {
                authors: true,
                publisher: true,
                genres: true,
                categories: true,
                _count: {
                    select: { copies: { where: { deletedAt: null } } }
                }
            },
            orderBy: { createdAt: 'desc' }
        }),
        prisma.book.count({ where })
    ]);

    return {
        books: books.map(book => ({
            id: book.id,
            title: book.title,
            titleEn: book.titleEn,
            titleRu: book.titleRu,
            subtitle: book.subtitle,
            description: book.description,
            fullDescription: book.fullDescription,
            isbn10: book.isbn10,
            isbn13: book.isbn13,
            internalCode: book.internalCode,
            publishYear: book.publishYear,
            language: book.language,
            pageCount: book.pageCount,
            weight: book.weight ? Number(book.weight) : null,
            dimensions: book.dimensions,
            coverType: book.coverType,
            coverImage: book.coverImage,
            backCoverImage: book.backCoverImage,
            ageGroup: book.ageGroup,
            ddcCode: book.ddcCode,
            udcCode: book.udcCode,
            customTags: book.customTags,
            avgRating: Number(book.avgRating),
            ratingsCount: book.ratingsCount,
            reviewsCount: book.reviewsCount,
            readCount: book.readCount,
            popularityScore: book.popularityScore,
            isActive: book.isActive,
            isFeatured: book.isFeatured,
            isDraft: book.isDraft,
            createdAt: book.createdAt,
            updatedAt: book.updatedAt,
            authors: book.authors,
            publisher: book.publisher ? {
                ...book.publisher,
                booksCount: undefined,
                books: undefined
            } : null,
            genres: book.genres,
            categories: book.categories,
            copiesCount: book._count.copies
        })),
        total,
        totalPages: Math.ceil(total / limit)
    };
}

/**
 * Kitoblarni qidirish (Full-Text Search)
 * FR-08: Qidiruv va filtrlar
 */
export async function searchBooks(
    query: string,
    options?: {
        genre?: string;
        year?: string;
        language?: string;
        available?: boolean;
        branch?: string;
        page?: number;
        limit?: number;
        sort?: string;
    }
): Promise<{ books: any[]; total: number; totalPages: number }> {
    const page = options?.page || 1;
    const limit = options?.limit || 20;
    const skip = (page - 1) * limit;

    // Build search query
    const where: any = {
        deletedAt: null,
        isActive: true
    };

    // Text search (title, subtitle, authors)
    if (query) {
        where.OR = [
            { title: { contains: query, mode: 'insensitive' } },
            { subtitle: { contains: query, mode: 'insensitive' } },
            { isbn13: { contains: query } },
            { isbn10: { contains: query } }
        ];
    }

    // Genre filter
    if (options?.genre) {
        where.genres = {
            some: { slug: options.genre }
        };
    }

    // Language filter
    if (options?.language) {
        where.language = options.language;
    }

    // Year range filter
    if (options?.year) {
        const [minYear, maxYear] = options.year.split('-').map(Number);
        where.publishYear = {
            gte: minYear,
            lte: maxYear || minYear
        };
    }

    // Available copies filter
    if (options?.available) {
        where.copies = {
            some: {
                status: 'AVAILABLE',
                deletedAt: null
            }
        };
    }

    // Branch filter
    if (options?.branch) {
        where.copies = {
            some: {
                branchId: options.branch,
                deletedAt: null
            }
        };
    }

    const [books, total] = await Promise.all([
        prisma.book.findMany({
            where,
            skip,
            take: limit,
            include: {
                authors: true,
                genres: true,
                publisher: true,
                _count: {
                    select: { copies: { where: { deletedAt: null } } }
                }
            },
            orderBy: { popularityScore: 'desc' }
        }),
        prisma.book.count({ where })
    ]);

    // Format response with availability info
    const formattedBooks = await Promise.all(
        books.map(async (book: any) => {
            const availableCopies = await prisma.bookCopy.count({
                where: {
                    bookId: book.id,
                    status: 'AVAILABLE',
                    deletedAt: null
                }
            });

            return {
                ...book,
                copiesCount: book._count.copies,
                availableCopies,
                isAvailable: availableCopies > 0,
                _count: undefined
            };
        })
    );

    return {
        books: formattedBooks,
        total,
        totalPages: Math.ceil(total / limit)
    };
}

/**
 * Kitobni yangilash
 * FR-05: Kitob yangilash
 */
export async function updateBook(
    id: string,
    data: UpdateBookDto,
    userId: string
): Promise<BookDto> {
    // Check if book exists
    const existingBook = await prisma.book.findUnique({
        where: { id, deletedAt: null }
    });

    if (!existingBook) {
        throw new AppError('Book not found', 404);
    }

    // Validate ISBN uniqueness (if changed)
    if (data.isbn13 && data.isbn13 !== existingBook.isbn13) {
        const existingIsbn13 = await prisma.book.findUnique({
            where: { isbn13: data.isbn13, deletedAt: null }
        });
        if (existingIsbn13) {
            throw new AppError('ISBN-13 already exists', 409);
        }
    }

    if (data.isbn10 && data.isbn10 !== existingBook.isbn10) {
        const existingIsbn10 = await prisma.book.findUnique({
            where: { isbn10: data.isbn10, deletedAt: null }
        });
        if (existingIsbn10) {
            throw new AppError('ISBN-10 already exists', 409);
        }
    }

    // Validate title
    if (data.title && (data.title.length < 3 || data.title.length > 200)) {
        throw new AppError('Title must be between 3 and 200 characters', 400);
    }

    // Validate authors
    if (data.authorIds) {
        const authors = await prisma.author.findMany({
            where: {
                id: { in: data.authorIds },
                deletedAt: null
            }
        });
        if (authors.length !== data.authorIds.length) {
            throw new AppError('One or more authors not found', 404);
        }
    }

    // Validate publisher
    if (data.publisherId) {
        const publisher = await prisma.publisher.findUnique({
            where: { id: data.publisherId, deletedAt: null }
        });
        if (!publisher) {
            throw new AppError('Publisher not found', 404);
        }
    }

    // Validate genres
    if (data.genreIds) {
        const genres = await prisma.genre.findMany({
            where: {
                id: { in: data.genreIds },
                deletedAt: null
            }
        });
        if (genres.length !== data.genreIds.length) {
            throw new AppError('One or more genres not found', 404);
        }
    }

    // Update book
    const book = await prisma.book.update({
        where: { id },
        data: {
            title: data.title,
            titleEn: data.titleEn,
            titleRu: data.titleRu,
            subtitle: data.subtitle,
            description: data.description,
            fullDescription: data.fullDescription,
            isbn10: data.isbn10,
            isbn13: data.isbn13,
            internalCode: data.internalCode,
            publishYear: data.publishYear,
            language: data.language,
            pageCount: data.pageCount,
            weight: data.weight,
            dimensions: data.dimensions,
            coverType: data.coverType,
            coverImage: data.coverImage,
            backCoverImage: data.backCoverImage,
            ageGroup: data.ageGroup,
            ddcCode: data.ddcCode,
            udcCode: data.udcCode,
            customTags: data.customTags,
            isActive: data.isActive,
            isFeatured: data.isFeatured,
            isDraft: data.isDraft,
            // Update relations
            authors: data.authorIds ? {
                set: data.authorIds.map(id => ({ id }))
            } : undefined,
            publisher: data.publisherId ? {
                connect: { id: data.publisherId }
            } : data.publisherId === null ? {
                disconnect: true
            } : undefined,
            genres: data.genreIds ? {
                set: data.genreIds.map(id => ({ id }))
            } : undefined,
            categories: data.categoryIds ? {
                set: data.categoryIds.map(id => ({ id }))
            } : undefined
        },
        include: {
            authors: true,
            publisher: true,
            genres: true,
            categories: true,
            _count: {
                select: { copies: { where: { deletedAt: null } } }
            }
        }
    });

    // Create audit log
    await prisma.auditLog.create({
        data: {
            action: 'UPDATE',
            entity: 'BOOK',
            entityId: id,
            userId,
            oldValue: {
                title: existingBook.title,
                isbn13: existingBook.isbn13
            },
            newValue: {
                title: book.title,
                isbn13: book.isbn13
            }
        }
    });

    return {
        id: book.id,
        title: book.title,
        titleEn: book.titleEn,
        titleRu: book.titleRu,
        subtitle: book.subtitle,
        description: book.description,
        fullDescription: book.fullDescription,
        isbn10: book.isbn10,
        isbn13: book.isbn13,
        internalCode: book.internalCode,
        publishYear: book.publishYear,
        language: book.language,
        pageCount: book.pageCount,
        weight: book.weight ? Number(book.weight) : null,
        dimensions: book.dimensions,
        coverType: book.coverType,
        coverImage: book.coverImage,
        backCoverImage: book.backCoverImage,
        ageGroup: book.ageGroup,
        ddcCode: book.ddcCode,
        udcCode: book.udcCode,
        customTags: book.customTags,
        avgRating: Number(book.avgRating),
        ratingsCount: book.ratingsCount,
        reviewsCount: book.reviewsCount,
        readCount: book.readCount,
        popularityScore: book.popularityScore,
        isActive: book.isActive,
        isFeatured: book.isFeatured,
        isDraft: book.isDraft,
        createdAt: book.createdAt,
        updatedAt: book.updatedAt,
        authors: book.authors,
        publisher: book.publisher ? {
            ...book.publisher,
            booksCount: undefined,
            books: undefined
        } : null,
        genres: book.genres,
        categories: book.categories,
        copiesCount: book._count.copies
    };
}

/**
 * Kitobni o'chirish (Soft Delete)
 * FR-06: Kitob o'chirish
 */
export async function deleteBook(id: string, userId: string): Promise<void> {
    // Check if book exists
    const book = await prisma.book.findUnique({
        where: { id, deletedAt: null },
        include: {
            copies: {
                where: { deletedAt: null }
            }
        }
    });

    if (!book) {
        throw new AppError('Book not found', 404);
    }

    // Check for active rents
    const activeRents = await prisma.rent.findFirst({
        where: {
            bookCopy: {
                bookId: id
            },
            status: 'ACTIVE',
            deletedAt: null
        }
    });

    if (activeRents) {
        throw new AppError('Cannot delete book with active rents', 400);
    }

    // Check for active reservations
    const activeReservations = await prisma.reservation.findFirst({
        where: {
            bookId: id,
            status: { in: ['PENDING', 'APPROVED'] },
            deletedAt: null
        }
    });

    if (activeReservations) {
        throw new AppError('Cannot delete book with active reservations', 400);
    }

    // Soft delete book and its copies
    await prisma.$transaction([
        // Soft delete all copies
        prisma.bookCopy.updateMany({
            where: { bookId: id, deletedAt: null },
            data: { deletedAt: new Date() }
        }),
        // Soft delete book
        prisma.book.update({
            where: { id },
            data: { deletedAt: new Date() }
        })
    ]);

    // Create audit log
    await prisma.auditLog.create({
        data: {
            action: 'DELETE',
            entity: 'BOOK',
            entityId: id,
            userId,
            oldValue: {
                title: book.title,
                isbn13: book.isbn13
            }
        }
    });
}

/**
 * Kitob nusxasi yaratish
 */
export async function createBookCopy(
    data: CreateBookCopyDto,
    userId: string
): Promise<BookCopyDto> {
    // Check if book exists
    const book = await prisma.book.findUnique({
        where: { id: data.bookId, deletedAt: null }
    });

    if (!book) {
        throw new AppError('Book not found', 404);
    }

    // Check if barcode is unique
    const existingBarcode = await prisma.bookCopy.findUnique({
        where: { barcode: data.barcode, deletedAt: null }
    });

    if (existingBarcode) {
        throw new AppError('Barcode already exists', 409);
    }

    // Validate branch exists
    const branch = await prisma.branch.findUnique({
        where: { id: data.branchId, deletedAt: null }
    });

    if (!branch) {
        throw new AppError('Branch not found', 404);
    }

    // Create book copy
    const bookCopy = await prisma.bookCopy.create({
        data: {
            barcode: data.barcode,
            qrCode: data.qrCode,
            bookId: data.bookId,
            branchId: data.branchId,
            locationId: data.locationId,
            shelfId: data.shelfId,
            status: data.status || 'AVAILABLE',
            condition: data.condition,
            purchaseDate: data.purchaseDate ? new Date(data.purchaseDate) : null,
            purchasePrice: data.purchasePrice,
            supplier: data.supplier
        }
    });

    // Create audit log
    await prisma.auditLog.create({
        data: {
            action: 'CREATE',
            entity: 'BOOK_COPY',
            entityId: bookCopy.id,
            userId,
            newValue: {
                barcode: bookCopy.barcode,
                bookId: bookCopy.bookId
            }
        }
    });

    return {
        ...bookCopy,
        purchasePrice: bookCopy.purchasePrice ? Number(bookCopy.purchasePrice) : null
    };
}

/**
 * Kitob nusxalarini batch yaratish
 * FR-03: BookCopy batch create
 */
export async function createBookCopiesBatch(
    bookId: string,
    data: CreateBookCopyBatchDto,
    userId: string
): Promise<BookCopyDto[]> {
    // Validate quantity
    if (data.quantity < 1 || data.quantity > 1000) {
        throw new AppError('Quantity must be between 1 and 1000', 400);
    }

    // Check if book exists
    const book = await prisma.book.findUnique({
        where: { id: bookId, deletedAt: null }
    });

    if (!book) {
        throw new AppError('Book not found', 404);
    }

    // Validate branch exists
    const branch = await prisma.branch.findUnique({
        where: { id: data.branchId, deletedAt: null }
    });

    if (!branch) {
        throw new AppError('Branch not found', 404);
    }

    // Generate unique barcodes
    const timestamp = Date.now().toString().slice(-8);
    const barcodes: string[] = [];
    
    for (let i = 0; i < data.quantity; i++) {
        const barcode = `BC${timestamp}${String(i + 1).padStart(5, '0')}`;
        barcodes.push(barcode);
    }

    // Create book copies in batch
    const bookCopies = await prisma.$transaction(
        barcodes.map(barcode =>
            prisma.bookCopy.create({
                data: {
                    barcode,
                    qrCode: data.generateQR ? `QR${timestamp}${barcodes.indexOf(barcode)}` : null,
                    bookId: bookId,
                    branchId: data.branchId,
                    locationId: data.locationId,
                    shelfId: data.shelfId,
                    status: data.status || 'AVAILABLE',
                    condition: data.condition,
                    purchaseDate: data.purchaseDate ? new Date(data.purchaseDate) : null,
                    purchasePrice: data.purchasePrice,
                    supplier: data.supplier
                }
            })
        )
    );

    // Create audit log
    await prisma.auditLog.create({
        data: {
            action: 'CREATE',
            entity: 'BOOK_COPY',
            entityId: bookId,
            userId,
            newValue: {
                quantity: data.quantity,
                barcodes: barcodes.slice(0, 10) // Log first 10
            }
        }
    });

    return bookCopies.map(copy => ({
        ...copy,
        purchasePrice: copy.purchasePrice ? Number(copy.purchasePrice) : null
    }));
}

/**
 * Kitob nusxasini yangilash
 */
export async function updateBookCopy(
    id: string,
    data: UpdateBookCopyDto,
    userId: string
): Promise<BookCopyDto> {
    // Check if copy exists
    const existingCopy = await prisma.bookCopy.findUnique({
        where: { id, deletedAt: null }
    });

    if (!existingCopy) {
        throw new AppError('Book copy not found', 404);
    }

    // Validate barcode uniqueness if changed
    if (data.barcode && data.barcode !== existingCopy.barcode) {
        const existingBarcode = await prisma.bookCopy.findUnique({
            where: { barcode: data.barcode, deletedAt: null }
        });
        if (existingBarcode) {
            throw new AppError('Barcode already exists', 409);
        }
    }

    // Update book copy
    const bookCopy = await prisma.bookCopy.update({
        where: { id },
        data: {
            barcode: data.barcode,
            qrCode: data.qrCode,
            locationId: data.locationId,
            shelfId: data.shelfId,
            status: data.status,
            condition: data.condition,
            purchaseDate: data.purchaseDate ? new Date(data.purchaseDate) : null,
            purchasePrice: data.purchasePrice,
            supplier: data.supplier,
            lastCheckedAt: data.lastCheckedAt ? new Date(data.lastCheckedAt) : null,
            repairHistory: data.repairHistory
        }
    });

    // Create audit log
    await prisma.auditLog.create({
        data: {
            action: 'UPDATE',
            entity: 'BOOK_COPY',
            entityId: id,
            userId,
            oldValue: {
                status: existingCopy.status,
                barcode: existingCopy.barcode
            },
            newValue: {
                status: bookCopy.status,
                barcode: bookCopy.barcode
            }
        }
    });

    return {
        ...bookCopy,
        purchasePrice: bookCopy.purchasePrice ? Number(bookCopy.purchasePrice) : null
    };
}

/**
 * Kitob nusxasi statusini o'zgartirish
 * FR-07: Copy status change
 */
export async function changeBookCopyStatus(
    id: string,
    status: BookCopyStatus,
    reason?: string,
    userId?: string
): Promise<BookCopyDto> {
    // Check if copy exists
    const copy = await prisma.bookCopy.findUnique({
        where: { id, deletedAt: null },
        include: { book: true }
    });

    if (!copy) {
        throw new AppError('Book copy not found', 404);
    }

    // Validate status transition
    const validTransitions: Record<BookCopyStatus, BookCopyStatus[]> = {
        AVAILABLE: ['RESERVED', 'ON_RENT', 'LOST', 'DAMAGED', 'UNDER_REPAIR', 'WITHDRAWN', 'IN_TRANSIT'],
        RESERVED: ['AVAILABLE', 'ON_RENT', 'LOST', 'DAMAGED', 'UNDER_REPAIR', 'WITHDRAWN'],
        ON_RENT: ['AVAILABLE', 'LOST', 'DAMAGED', 'UNDER_REPAIR', 'WITHDRAWN'],
        LOST: ['WITHDRAWN'],
        DAMAGED: ['AVAILABLE', 'UNDER_REPAIR', 'WITHDRAWN'],
        UNDER_REPAIR: ['AVAILABLE', 'DAMAGED', 'WITHDRAWN'],
        WITHDRAWN: [],
        IN_TRANSIT: ['AVAILABLE', 'LOST', 'DAMAGED']
    };

    if (!validTransitions[copy.status].includes(status)) {
        throw new AppError(
            `Invalid status transition from ${copy.status} to ${status}`,
            400
        );
    }

    // Require reason for LOST/DAMAGED status
    if ((status === 'LOST' || status === 'DAMAGED') && !reason) {
        throw new AppError('Reason is required for LOST/DAMAGED status', 400);
    }

    // Update status
    const updatedCopy = await prisma.bookCopy.update({
        where: { id },
        data: {
            status,
            repairHistory: reason ? { reason, date: new Date() } : undefined
        }
    });

    // Create audit log
    if (userId) {
        await prisma.auditLog.create({
            data: {
                action: 'UPDATE',
                entity: 'BOOK_COPY',
                entityId: id,
                userId,
                oldValue: { status: copy.status },
                newValue: { status, reason }
            }
        });
    }

    // Notify waiting list if status changed to AVAILABLE
    if (status === 'AVAILABLE') {
        // TODO: Implement notification to waiting list
        // await notifyWaitingList(copy.bookId);
    }

    return {
        ...updatedCopy,
        purchasePrice: updatedCopy.purchasePrice ? Number(updatedCopy.purchasePrice) : null
    };
}

/**
 * ISBN orqali kitob ma'lumotlarini olish (Google Books API)
 * FR-02: ISBN Auto-Fill
 */
export async function lookupIsbn(isbn13: string): Promise<any> {
    // Validate ISBN format
    if (!/^\d{13}$/.test(isbn13)) {
        throw new AppError('Invalid ISBN-13 format. Must be 13 digits', 400);
    }

    const startTime = Date.now();
    const timeout = 5000; // 5 seconds

    // Try Google Books API
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);

        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn13}`,
            { signal: controller.signal }
        );
        clearTimeout(timeoutId);

        if (response.ok) {
            const data = await response.json();
            
            if (data.totalItems > 0 && data.items[0]) {
                const bookData = data.items[0].volumeInfo;
                const apiResponseTime = Date.now() - startTime;

                return {
                    source: 'GOOGLE_BOOKS',
                    book: {
                        title: bookData.title,
                        titleEn: bookData.title,
                        subtitle: bookData.subtitle,
                        isbn13: isbn13,
                        isbn10: bookData.industryIdentifiers?.find((id: any) => id.type === 'ISBN_10')?.identifier,
                        publishYear: bookData.publishedDate?.split('-')[0],
                        language: bookData.language,
                        pageCount: bookData.pageCount,
                        description: bookData.description,
                        authors: bookData.authors?.map((name: string) => ({ name })),
                        publisher: bookData.publisher ? { name: bookData.publisher } : undefined,
                        coverImage: bookData.imageLinks?.thumbnail,
                        customTags: bookData.categories || []
                    },
                    fallbackUsed: false,
                    apiResponseTime
                };
            }
        }
    } catch (error) {
        // Continue to fallback
    }

    // Fallback: Open Library API
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);

        const response = await fetch(
            `https://openlibrary.org/isbn/${isbn13}.json`,
            { signal: controller.signal }
        );
        clearTimeout(timeoutId);

        if (response.ok) {
            const bookData = await response.json();
            const apiResponseTime = Date.now() - startTime;

            return {
                source: 'OPEN_LIBRARY',
                book: {
                    title: bookData.title,
                    titleEn: bookData.title,
                    isbn13: isbn13,
                    publishYear: bookData.created?.year,
                    language: bookData.languages?.[0]?.key?.replace('/languages/', '') || 'eng',
                    description: typeof bookData.description === 'string' ? bookData.description : undefined,
                    authors: bookData.authors?.map((a: any) => ({ name: a.name })),
                    publisher: bookData.publishers?.[0] ? { name: bookData.publishers[0] } : undefined
                },
                fallbackUsed: true,
                apiResponseTime
            };
        }
    } catch (error) {
        // Continue to manual entry
    }

    // Check internal database
    const internalBook = await prisma.book.findUnique({
        where: { isbn13, deletedAt: null },
        include: { authors: true, publisher: true }
    });

    if (internalBook) {
        return {
            source: 'INTERNAL_DB',
            book: {
                title: internalBook.title,
                titleEn: internalBook.titleEn,
                titleRu: internalBook.titleRu,
                subtitle: internalBook.subtitle,
                isbn13: internalBook.isbn13,
                isbn10: internalBook.isbn10,
                publishYear: internalBook.publishYear,
                language: internalBook.language,
                pageCount: internalBook.pageCount,
                description: internalBook.description,
                authors: internalBook.authors.map(a => ({ name: a.name })),
                publisher: internalBook.publisher ? { name: internalBook.publisher.name } : undefined
            },
            fallbackUsed: true,
            apiResponseTime: Date.now() - startTime
        };
    }

    // No data found
    throw new AppError('Book not found in external databases', 404);
}
