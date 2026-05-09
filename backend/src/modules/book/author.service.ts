import { prisma } from '../../config/prisma';
import { AppError } from '../../common/errors/AppError';
import { CreateAuthorDto, UpdateAuthorDto, AuthorDto } from './dto/book.dto';

/**
 * Author Service
 * RFC: RFC-BOOK-002
 */

/**
 * Yangi muallif yaratish
 */
export async function createAuthor(data: CreateAuthorDto, userId: string): Promise<AuthorDto> {
    // Validation: Name required
    if (!data.name || data.name.length < 2) {
        throw new AppError('Author name must be at least 2 characters', 400);
    }

    // Check if author already exists (name + birthDate unique)
    const existingAuthor = await prisma.author.findFirst({
        where: {
            name: data.name,
            birthDate: data.birthDate ? new Date(data.birthDate) : null,
            deletedAt: null
        }
    });

    if (existingAuthor) {
        throw new AppError('Author already exists', 409);
    }

    // Create author
    const author = await prisma.author.create({
        data: {
            name: data.name,
            birthDate: data.birthDate ? new Date(data.birthDate) : null,
            deathDate: data.deathDate ? new Date(data.deathDate) : null,
            nationality: data.nationality,
            biography: data.biography,
            photo: data.photo
        }
    });

    // Create audit log
    await prisma.auditLog.create({
        data: {
            action: 'CREATE',
            entity: 'AUTHOR',
            entityId: author.id,
            userId,
            newValue: { name: author.name }
        }
    });

    return author;
}

/**
 * Muallif ma'lumotlarini ID bo'yicha olish
 */
export async function getAuthorById(id: string): Promise<AuthorDto | null> {
    const author = await prisma.author.findUnique({
        where: { id, deletedAt: null },
        include: {
            books: {
                where: { deletedAt: null },
                include: {
                    _count: {
                        select: { copies: { where: { deletedAt: null } } }
                    }
                }
            }
        }
    });

    if (!author) {
        return null;
    }

    return {
        ...author,
        books: author.books.map(book => ({
            ...book,
            copiesCount: book._count.copies,
            _count: undefined
        }))
    };
}

/**
 * Barcha mualliflarni olish
 */
export async function getAllAuthors(
    page: number = 1,
    limit: number = 20,
    search?: string
): Promise<{ authors: AuthorDto[]; total: number; totalPages: number }> {
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

    const [authors, total] = await Promise.all([
        prisma.author.findMany({
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
        prisma.author.count({ where })
    ]);

    return {
        authors: authors.map(author => ({
            ...author,
            booksCount: author._count.books,
            _count: undefined
        })),
        total,
        totalPages: Math.ceil(total / limit)
    };
}

/**
 * Muallifni yangilash
 */
export async function updateAuthor(
    id: string,
    data: UpdateAuthorDto,
    userId: string
): Promise<AuthorDto> {
    // Check if author exists
    const existingAuthor = await prisma.author.findUnique({
        where: { id, deletedAt: null }
    });

    if (!existingAuthor) {
        throw new AppError('Author not found', 404);
    }

    // Validate name
    if (data.name && data.name.length < 2) {
        throw new AppError('Author name must be at least 2 characters', 400);
    }

    // Update author
    const author = await prisma.author.update({
        where: { id },
        data: {
            name: data.name,
            birthDate: data.birthDate ? new Date(data.birthDate) : undefined,
            deathDate: data.deathDate ? new Date(data.deathDate) : undefined,
            nationality: data.nationality,
            biography: data.biography,
            photo: data.photo
        }
    });

    // Create audit log
    await prisma.auditLog.create({
        data: {
            action: 'UPDATE',
            entity: 'AUTHOR',
            entityId: id,
            userId,
            oldValue: { name: existingAuthor.name },
            newValue: { name: author.name }
        }
    });

    return author;
}

/**
 * Muallifni o'chirish (Soft Delete)
 */
export async function deleteAuthor(id: string, userId: string): Promise<void> {
    // Check if author exists
    const author = await prisma.author.findUnique({
        where: { id, deletedAt: null },
        include: {
            books: {
                where: { deletedAt: null }
            }
        }
    });

    if (!author) {
        throw new AppError('Author not found', 404);
    }

    // Soft delete author
    await prisma.author.update({
        where: { id },
        data: { deletedAt: new Date() }
    });

    // Create audit log
    await prisma.auditLog.create({
        data: {
            action: 'DELETE',
            entity: 'AUTHOR',
            entityId: id,
            userId,
            oldValue: { name: author.name }
        }
    });
}

/**
 * Muallifning kitoblarini olish
 */
export async function getAuthorBooks(
    authorId: string,
    page: number = 1,
    limit: number = 20
): Promise<{ books: any[]; total: number; totalPages: number }> {
    const skip = (page - 1) * limit;

    const author = await prisma.author.findUnique({
        where: { id: authorId, deletedAt: null }
    });

    if (!author) {
        throw new AppError('Author not found', 404);
    }

    const [books, total] = await Promise.all([
        prisma.book.findMany({
            where: {
                deletedAt: null,
                authors: {
                    some: { id: authorId }
                }
            },
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
            orderBy: { createdAt: 'desc' }
        }),
        prisma.book.count({
            where: {
                deletedAt: null,
                authors: {
                    some: { id: authorId }
                }
            }
        })
    ]);

    return {
        books: books.map(book => ({
            ...book,
            copiesCount: book._count.copies,
            _count: undefined
        })),
        total,
        totalPages: Math.ceil(total / limit)
    };
}
