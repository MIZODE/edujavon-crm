import { prisma } from '../../config/prisma';
import { AppError } from '../../common/errors/AppError';
import { CreatePublisherDto, UpdatePublisherDto, PublisherDto } from './dto/book.dto';

/**
 * Publisher Service
 * RFC: RFC-BOOK-002
 */

/**
 * Yangi nashriyot yaratish
 */
export async function createPublisher(data: CreatePublisherDto, userId: string): Promise<PublisherDto> {
    // Validation: Name required
    if (!data.name || data.name.length < 2) {
        throw new AppError('Publisher name must be at least 2 characters', 400);
    }

    // Check if publisher already exists (name unique)
    const existingPublisher = await prisma.publisher.findFirst({
        where: {
            name: data.name,
            deletedAt: null
        }
    });

    if (existingPublisher) {
        throw new AppError('Publisher name already exists', 409);
    }

    // Create publisher
    const publisher = await prisma.publisher.create({
        data: {
            name: data.name,
            country: data.country,
            city: data.city,
            website: data.website
        }
    });

    // Create audit log
    await prisma.auditLog.create({
        data: {
            action: 'CREATE',
            entity: 'PUBLISHER',
            entityId: publisher.id,
            userId,
            newValue: { name: publisher.name }
        }
    });

    return publisher;
}

/**
 * Nashriyot ma'lumotlarini ID bo'yicha olish
 */
export async function getPublisherById(id: string): Promise<PublisherDto | null> {
    const publisher = await prisma.publisher.findUnique({
        where: { id, deletedAt: null },
        include: {
            books: {
                where: { deletedAt: null },
                take: 10,
                include: {
                    _count: {
                        select: { copies: { where: { deletedAt: null } } }
                    }
                }
            },
            _count: {
                select: { books: { where: { deletedAt: null } } }
            }
        }
    });

    if (!publisher) {
        return null;
    }

    return {
        id: publisher.id,
        name: publisher.name,
        country: publisher.country,
        city: publisher.city,
        website: publisher.website,
        createdAt: publisher.createdAt,
        updatedAt: publisher.updatedAt,
        booksCount: publisher._count.books,
        books: publisher.books.map(book => ({
            ...book,
            copiesCount: book._count.copies,
            _count: undefined
        }))
    };
}

/**
 * Barcha nashriyotlarni olish
 */
export async function getAllPublishers(
    page: number = 1,
    limit: number = 20,
    search?: string,
    country?: string
): Promise<{ publishers: PublisherDto[]; total: number; totalPages: number }> {
    const skip = (page - 1) * limit;

    const where: any = {
        deletedAt: null
    };

    if (search) {
        where.name = {
            contains: search,
            mode: 'insensitive'
        };
    }

    if (country) {
        where.country = country;
    }

    const [publishers, total] = await Promise.all([
        prisma.publisher.findMany({
            where,
            skip,
            take: limit,
            include: {
                _count: {
                    select: { books: { where: { deletedAt: null } } }
                }
            },
            orderBy: { name: 'asc' }
        }),
        prisma.publisher.count({ where })
    ]);

    return {
        publishers: publishers.map(publisher => ({
            ...publisher,
            booksCount: publisher._count.books,
            _count: undefined
        })),
        total,
        totalPages: Math.ceil(total / limit)
    };
}

/**
 * Nashriyotni yangilash
 */
export async function updatePublisher(
    id: string,
    data: UpdatePublisherDto,
    userId: string
): Promise<PublisherDto> {
    // Check if publisher exists
    const existingPublisher = await prisma.publisher.findUnique({
        where: { id, deletedAt: null }
    });

    if (!existingPublisher) {
        throw new AppError('Publisher not found', 404);
    }

    // Validate name uniqueness if changed
    if (data.name && data.name !== existingPublisher.name) {
        const existingName = await prisma.publisher.findFirst({
            where: {
                name: data.name,
                id: { not: id },
                deletedAt: null
            }
        });

        if (existingName) {
            throw new AppError('Publisher name already exists', 409);
        }
    }

    // Update publisher
    const publisher = await prisma.publisher.update({
        where: { id },
        data: {
            name: data.name,
            country: data.country,
            city: data.city,
            website: data.website
        }
    });

    // Create audit log
    await prisma.auditLog.create({
        data: {
            action: 'UPDATE',
            entity: 'PUBLISHER',
            entityId: id,
            userId,
            oldValue: { name: existingPublisher.name },
            newValue: { name: publisher.name }
        }
    });

    return publisher;
}

/**
 * Nashriyotni o'chirish (Soft Delete)
 */
export async function deletePublisher(id: string, userId: string): Promise<void> {
    // Check if publisher exists
    const publisher = await prisma.publisher.findUnique({
        where: { id, deletedAt: null },
        include: {
            books: {
                where: { deletedAt: null }
            }
        }
    });

    if (!publisher) {
        throw new AppError('Publisher not found', 404);
    }

    // Soft delete publisher
    await prisma.publisher.update({
        where: { id },
        data: { deletedAt: new Date() }
    });

    // Create audit log
    await prisma.auditLog.create({
        data: {
            action: 'DELETE',
            entity: 'PUBLISHER',
            entityId: id,
            userId,
            oldValue: { name: publisher.name }
        }
    });
}
