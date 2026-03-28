import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Body,
    Route,
    Tags,
    Path,
    Query,
    SuccessResponse,
    Security,
    Request
} from 'tsoa';
import * as bookService from './book.service';
import {
    CreateBookDto,
    UpdateBookDto,
    BookDto,
    IsbnLookupDto
} from './dto/book.dto';
import {
    CreateBookCopyDto,
    CreateBookCopyBatchDto,
    UpdateBookCopyDto,
    ChangeCopyStatusDto
} from './dto/book-copy.dto';

@Route('books')
@Tags('Books')
export class BookController extends Controller {

    /**
     * Yangi kitob yaratish (Manual)
     * FR-01: Kitob yaratish (Manual)
     * @param requestBody Kitob ma'lumotlari
     * @param request HTTP request
     */
    @Security('jwt')
    @SuccessResponse('201', 'Created')
    @Post('/')
    public async createBook(
        @Body() requestBody: CreateBookDto,
        @Request() request?: any
    ): Promise<any> {
        try {
            const userId = request.user?.id || 'system';
            const book = await bookService.createBook(requestBody, userId);
            this.setStatus(201);
            return {
                statusCode: 201,
                message: 'Book created successfully',
                data: { book }
            };
        } catch (err: any) {
            this.setStatus(err.statusCode || 400);
            return {
                statusCode: err.statusCode || 400,
                message: err.message || 'Failed to create book',
                code: this.getErrorCode(err.message)
            };
        }
    }

    /**
     * ISBN orqali kitob ma'lumotlarini avtomatik olish (Google Books API)
     * FR-02: ISBN Auto-Fill
     * @param requestBody ISBN-13 kodi
     */
    @Security('jwt')
    @Post('isbn-lookup')
    public async lookupIsbn(@Body() requestBody: IsbnLookupDto): Promise<any> {
        try {
            const result = await bookService.lookupIsbn(requestBody.isbn13);
            this.setStatus(200);
            return {
                statusCode: 200,
                message: 'Book data retrieved successfully',
                data: result
            };
        } catch (err: any) {
            this.setStatus(err.statusCode || 400);
            return {
                statusCode: err.statusCode || 400,
                message: err.message || 'Failed to lookup ISBN',
                code: this.getErrorCode(err.message)
            };
        }
    }

    /**
     * Barcha kitoblarni olish (pagination bilan)
     * @param page Sahifa raqami
     * @param limit Bir sahifada nechta kitob
     * @param isActive Faol kitoblar
     * @param language Til
     * @param publishYear Nashr yili
     */
    @Get('/')
    public async getAllBooks(
        @Query() page?: number,
        @Query() limit?: number,
        @Query() isActive?: boolean,
        @Query() language?: string,
        @Query() publishYear?: number
    ): Promise<any> {
        try {
            const result = await bookService.getAllBooks(page || 1, limit || 20, {
                isActive,
                language,
                publishYear
            });
            return {
                statusCode: 200,
                message: 'Books retrieved successfully',
                data: {
                    books: result.books,
                    pagination: {
                        page: page || 1,
                        limit: limit || 20,
                        total: result.total,
                        totalPages: result.totalPages
                    }
                }
            };
        } catch (err: any) {
            this.setStatus(500);
            return {
                statusCode: 500,
                message: err.message || 'Failed to fetch books'
            };
        }
    }

    /**
     * Kitoblarni qidirish (Full-Text + Filters)
     * FR-08: Qidiruv va filtrlar
     * @param q Qidiruv so'zi
     * @param genre Janr slug
     * @param year Yil oralig'i (2020-2025)
     * @param language Til
     * @param available Faqat mavjud nusxalar
     * @param branch Filial ID
     * @param page Sahifa
     * @param limit Limit
     * @param sort Sortlash (field:direction)
     */
    @Get('search')
    public async searchBooks(
        @Query() q?: string,
        @Query() genre?: string,
        @Query() year?: string,
        @Query() language?: string,
        @Query() available?: boolean,
        @Query() branch?: string,
        @Query() page?: number,
        @Query() limit?: number,
        @Query() sort?: string
    ): Promise<any> {
        try {
            const result = await bookService.searchBooks(q || '', {
                genre,
                year,
                language,
                available,
                branch,
                page,
                limit,
                sort
            });
            return {
                statusCode: 200,
                message: 'Search completed successfully',
                data: {
                    books: result.books,
                    pagination: {
                        page: page || 1,
                        limit: limit || 20,
                        total: result.total,
                        totalPages: result.totalPages
                    }
                }
            };
        } catch (err: any) {
            this.setStatus(500);
            return {
                statusCode: 500,
                message: err.message || 'Search failed'
            };
        }
    }

    /**
     * ID bo'yicha bitta kitobni olish
     * @param bookId Kitob ID
     */
    @Get('{bookId}')
    public async getBookById(@Path() bookId: string): Promise<any> {
        try {
            const book = await bookService.getBookById(bookId);
            
            if (!book) {
                this.setStatus(404);
                return {
                    statusCode: 404,
                    message: 'Book not found',
                    code: 'BOOK-051'
                };
            }

            return {
                statusCode: 200,
                message: 'Book retrieved successfully',
                data: { book }
            };
        } catch (err: any) {
            this.setStatus(500);
            return {
                statusCode: 500,
                message: err.message || 'Failed to fetch book'
            };
        }
    }

    /**
     * Kitobni yangilash
     * FR-05: Kitob yangilash
     * @param bookId Kitob ID
     * @param requestBody Yangilanish ma'lumotlari
     * @param request HTTP request
     */
    @Security('jwt')
    @Patch('{bookId}')
    public async updateBook(
        @Path() bookId: string,
        @Body() requestBody: UpdateBookDto,
        @Request() request?: any
    ): Promise<any> {
        try {
            const userId = request.user?.id || 'system';
            const book = await bookService.updateBook(bookId, requestBody, userId);
            return {
                statusCode: 200,
                message: 'Book updated successfully',
                data: { book }
            };
        } catch (err: any) {
            this.setStatus(err.statusCode || 400);
            return {
                statusCode: err.statusCode || 400,
                message: err.message || 'Failed to update book',
                code: this.getErrorCode(err.message)
            };
        }
    }

    /**
     * Kitobni o'chirish (Soft Delete)
     * FR-06: Kitob o'chirish
     * @param bookId Kitob ID
     * @param request HTTP request
     */
    @Security('jwt')
    @Delete('{bookId}')
    public async deleteBook(
        @Path() bookId: string,
        @Request() request?: any
    ): Promise<any> {
        try {
            const userId = request.user?.id || 'system';
            await bookService.deleteBook(bookId, userId);
            return {
                statusCode: 200,
                message: 'Book deleted successfully'
            };
        } catch (err: any) {
            this.setStatus(err.statusCode || 400);
            return {
                statusCode: err.statusCode || 400,
                message: err.message || 'Failed to delete book',
                code: this.getErrorCode(err.message)
            };
        }
    }

    /**
     * Kitob nusxalarini batch yaratish
     * FR-03: BookCopy batch create
     * @param bookId Kitob ID
     * @param requestBody Batch ma'lumotlari
     * @param request HTTP request
     */
    @Security('jwt')
    @SuccessResponse('201', 'Created')
    @Post('{bookId}/copies/batch')
    public async createBookCopiesBatch(
        @Path() bookId: string,
        @Body() requestBody: CreateBookCopyBatchDto,
        @Request() request?: any
    ): Promise<any> {
        try {
            const userId = request.user?.id || 'system';
            const copies = await bookService.createBookCopiesBatch(bookId, requestBody, userId);
            this.setStatus(201);
            return {
                statusCode: 201,
                message: 'Book copies created successfully',
                data: {
                    bookId,
                    copiesCreated: copies.length,
                    copies: copies.slice(0, 10), // Return first 10
                    totalCopies: copies.length
                }
            };
        } catch (err: any) {
            this.setStatus(err.statusCode || 400);
            return {
                statusCode: err.statusCode || 400,
                message: err.message || 'Failed to create book copies',
                code: this.getErrorCode(err.message)
            };
        }
    }

    /**
     * Kitob nusxasi statusini o'zgartirish
     * FR-07: Copy status change
     * @param copyId Nusxa ID
     * @param requestBody Status va sabab
     * @param request HTTP request
     */
    @Security('jwt')
    @Patch('copies/{copyId}/status')
    public async changeBookCopyStatus(
        @Path() copyId: string,
        @Body() requestBody: ChangeCopyStatusDto,
        @Request() request?: any
    ): Promise<any> {
        try {
            const userId = request.user?.id || 'system';
            const copy = await bookService.changeBookCopyStatus(
                copyId,
                requestBody.status,
                requestBody.reason,
                userId
            );
            return {
                statusCode: 200,
                message: 'Book copy status updated successfully',
                data: { copy }
            };
        } catch (err: any) {
            this.setStatus(err.statusCode || 400);
            return {
                statusCode: err.statusCode || 400,
                message: err.message || 'Failed to update book copy status',
                code: this.getErrorCode(err.message)
            };
        }
    }

    /**
     * Kitob nusxasini yangilash
     * @param copyId Nusxa ID
     * @param requestBody Yangilanish ma'lumotlari
     * @param request HTTP request
     */
    @Security('jwt')
    @Patch('copies/{copyId}')
    public async updateBookCopy(
        @Path() copyId: string,
        @Body() requestBody: UpdateBookCopyDto,
        @Request() request?: any
    ): Promise<any> {
        try {
            const userId = request.user?.id || 'system';
            const copy = await bookService.updateBookCopy(copyId, requestBody, userId);
            return {
                statusCode: 200,
                message: 'Book copy updated successfully',
                data: { copy }
            };
        } catch (err: any) {
            this.setStatus(err.statusCode || 400);
            return {
                statusCode: err.statusCode || 400,
                message: err.message || 'Failed to update book copy',
                code: this.getErrorCode(err.message)
            };
        }
    }

    /**
     * Error code mapping helper
     */
    private getErrorCode(message: string): string {
        const errorMap: Record<string, string> = {
            'Title must be between': 'BOOK-010',
            'ISBN-13 already exists': 'BOOK-011',
            'ISBN-10 already exists': 'BOOK-012',
            'Publish year must be': 'BOOK-013',
            'authors not found': 'BOOK-014',
            'Publisher not found': 'BOOK-015',
            'genres not found': 'BOOK-016',
            'categories not found': 'BOOK-017',
            'Book not found': 'BOOK-051',
            'Barcode already exists': 'BOOK-053',
            'Branch not found': 'BOOK-052',
            'Quantity must be between': 'BOOK-050',
            'Invalid ISBN': 'BOOK-040',
            'Book not found in external': 'BOOK-041',
            'Invalid status transition': 'BOOK-070',
            'Reason is required': 'BOOK-071'
        };

        for (const [key, code] of Object.entries(errorMap)) {
            if (message.includes(key)) {
                return code;
            }
        }

        return 'BOOK-000';
    }
}
