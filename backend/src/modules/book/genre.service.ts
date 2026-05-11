import { prisma } from '../../config/prisma';
import { AppError } from '../../common/errors/AppError';
import { CreateGenreDto, UpdateGenreDto, GenreDto } from './dto/book.dto';

/**
 * Genre Service
 * RFC: RFC-BOOK-002
 */

/**
 * Yangi janr yaratish
 */
export async function createGenre(data: CreateGenreDto, userId: string): Promise<GenreDto> {
    // Validation: Name required
    if (!data.name || data.name.length < 2) {
        throw new AppError('Genre name must be at least 2 characters', 400);
    }

    // Validation: Slug required
    if (!data.slug) {
        throw new AppError('Genre slug is required', 400);
    }

    // Check if genre already exists (name unique)
    const existingGenre = await prisma.genre.findFirst({
        where: {
            OR: [
                { name: data.name, deletedAt: null },
                { slug: data.slug, deletedAt: null }
            ]
        }
    });

    if (existingGenre) {
        throw new AppError('Genre with this name or slug already exists', 409);
    }

    // Validate parent genre if provided
    if (data.parentId) {
        const parent = await prisma.genre.findUnique({
            where: { id: data.parentId, deletedAt: null }
        });

        if (!parent) {
            throw new AppError('Parent genre not found', 404);
        }
    }

    // Create genre
    const genre = await prisma.genre.create({
        data: {
            name: data.name,
            slug: data.slug,
            description: data.description,
            parentId: data.parentId
        }
    });

    // Create audit log
    await prisma.auditLog.create({
        data: {
            action: 'CREATE',
            entity: 'GENRE',
            entityId: genre.id,
            userId,
            newValue: { name: genre.name, slug: genre.slug }
        }
    });

    return genre;
}

/**
 * Janr ma'lumotlarini ID bo'yicha olish
 */
export async function getGenreById(id: string): Promise<GenreDto | null> {
    const genre = await prisma.genre.findUnique({
        where: { id, deletedAt: null },
        include: {
            parent: true,
            children: {
                where: { deletedAt: null }
            },
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
                select: {
                    books: { where: { deletedAt: null } },
                    children: { where: { deletedAt: null } }
                }
            }
        }
    });

    if (!genre) {
        return null;
    }

    return {
        id: genre.id,
        name: genre.name,
        slug: genre.slug,
        description: genre.description,
        parentId: genre.parentId,
        createdAt: genre.createdAt,
        updatedAt: genre.updatedAt,
        booksCount: genre._count.books,
        childrenCount: genre._count.children,
        books: genre.books.map(book => ({
            ...book,
            copiesCount: book._count.copies,
            _count: undefined
        }))
    };
}

/**
 * Barcha janrlarni olish
 */
export async function getAllGenres(
    page: number = 1,
    limit: number = 20,
    search?: string,
    parentId?: string
): Promise<{ genres: GenreDto[]; total: number; totalPages: number }> {
    const skip = (page - 1) * limit;

    const where: any = {
        deletedAt: null
    };

    if (search) {
        where.OR = [
            { name: { contains: search, mode: 'insensitive' } },
            { slug: { contains: search, mode: 'insensitive' } }
        ];
    }

    if (parentId) {
        where.parentId = parentId;
    } else {
        // Only show top-level genres if no parent specified
        where.parentId = null;
    }

    const [genres, total] = await Promise.all([
        prisma.genre.findMany({
            where,
            skip,
            take: limit,
            include: {
                _count: {
                    select: {
                        books: { where: { deletedAt: null } },
                        children: { where: { deletedAt: null } }
                    }
                }
            },
            orderBy: { name: 'asc' }
        }),
        prisma.genre.count({ where })
    ]);

    return {
        genres: genres.map(genre => ({
            ...genre,
            booksCount: genre._count.books,
            childrenCount: genre._count.children,
            _count: undefined
        })),
        total,
        totalPages: Math.ceil(total / limit)
    };
}

/**
 * Janrni yangilash
 */
export async function updateGenre(
    id: string,
    data: UpdateGenreDto,
    userId: string
): Promise<GenreDto> {
    // Check if genre exists
    const existingGenre = await prisma.genre.findUnique({
        where: { id, deletedAt: null }
    });

    if (!existingGenre) {
        throw new AppError('Genre not found', 404);
    }

    // Validate name uniqueness if changed
    if (data.name && data.name !== existingGenre.name) {
        const existingName = await prisma.genre.findFirst({
            where: {
                name: data.name,
                id: { not: id },
                deletedAt: null
            }
        });

        if (existingName) {
            throw new AppError('Genre name already exists', 409);
        }
    }

    // Validate slug uniqueness if changed
    if (data.slug && data.slug !== existingGenre.slug) {
        const existingSlug = await prisma.genre.findFirst({
            where: {
                slug: data.slug,
                id: { not: id },
                deletedAt: null
            }
        });

        if (existingSlug) {
            throw new AppError('Genre slug already exists', 409);
        }
    }

    // Validate parent genre if changed
    if (data.parentId && data.parentId !== existingGenre.parentId) {
        // Prevent self-parenting
        if (data.parentId === id) {
            throw new AppError('Genre cannot be its own parent', 400);
        }

        const parent = await prisma.genre.findUnique({
            where: { id: data.parentId, deletedAt: null }
        });

        if (!parent) {
            throw new AppError('Parent genre not found', 404);
        }
    }

    // Update genre
    const genre = await prisma.genre.update({
        where: { id },
        data: {
            name: data.name,
            slug: data.slug,
            description: data.description,
            parentId: data.parentId
        }
    });

    // Create audit log
    await prisma.auditLog.create({
        data: {
            action: 'UPDATE',
            entity: 'GENRE',
            entityId: id,
            userId,
            oldValue: { name: existingGenre.name, slug: existingGenre.slug },
            newValue: { name: genre.name, slug: genre.slug }
        }
    });

    return genre;
}

/**
 * Janrni o'chirish (Soft Delete)
 */
export async function deleteGenre(id: string, userId: string): Promise<void> {
    // Check if genre exists
    const genre = await prisma.genre.findUnique({
        where: { id, deletedAt: null },
        include: {
            children: {
                where: { deletedAt: null }
            },
            books: {
                where: { deletedAt: null }
            }
        }
    });

    if (!genre) {
        throw new AppError('Genre not found', 404);
    }

    // Check if genre has children
    if (genre.children.length > 0) {
        throw new AppError('Cannot delete genre with child genres', 400);
    }

    // Soft delete genre
    await prisma.genre.update({
        where: { id },
        data: { deletedAt: new Date() }
    });

    // Create audit log
    await prisma.auditLog.create({
        data: {
            action: 'DELETE',
            entity: 'GENRE',
            entityId: id,
            userId,
            oldValue: { name: genre.name, slug: genre.slug }
        }
    });
}
