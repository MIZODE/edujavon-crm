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
import * as authorService from './author.service';
import { CreateAuthorDto, UpdateAuthorDto } from './dto/book.dto';

@Route('authors')
@Tags('Authors')
export class AuthorController extends Controller {

    /**
     * Yangi muallif yaratish
     * @param requestBody Muallif ma'lumotlari
     * @param request HTTP request
     */
    @Security('jwt')
    @SuccessResponse('201', 'Created')
    @Post('/')
    public async createAuthor(
        @Body() requestBody: CreateAuthorDto,
        @Request() request?: any
    ): Promise<any> {
        try {
            const userId = request.user?.id || 'system';
            const author = await authorService.createAuthor(requestBody, userId);
            this.setStatus(201);
            return {
                statusCode: 201,
                message: 'Author created successfully',
                data: { author }
            };
        } catch (err: any) {
            this.setStatus(err.statusCode || 400);
            return {
                statusCode: err.statusCode || 400,
                message: err.message || 'Failed to create author'
            };
        }
    }

    /**
     * Barcha mualliflarni olish
     * @param page Sahifa raqami
     * @param limit Limit
     * @param search Qidiruv
     */
    @Get('/')
    public async getAllAuthors(
        @Query() page?: number,
        @Query() limit?: number,
        @Query() search?: string
    ): Promise<any> {
        try {
            const result = await authorService.getAllAuthors(page || 1, limit || 20, search);
            return {
                statusCode: 200,
                message: 'Authors retrieved successfully',
                data: {
                    authors: result.authors,
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
                message: err.message || 'Failed to fetch authors'
            };
        }
    }

    /**
     * ID bo'yicha muallifni olish
     * @param authorId Muallif ID
     */
    @Get('{authorId}')
    public async getAuthorById(@Path() authorId: string): Promise<any> {
        try {
            const author = await authorService.getAuthorById(authorId);
            
            if (!author) {
                this.setStatus(404);
                return {
                    statusCode: 404,
                    message: 'Author not found'
                };
            }

            return {
                statusCode: 200,
                message: 'Author retrieved successfully',
                data: { author }
            };
        } catch (err: any) {
            this.setStatus(500);
            return {
                statusCode: 500,
                message: err.message || 'Failed to fetch author'
            };
        }
    }

    /**
     * Muallifning kitoblarini olish
     * @param authorId Muallif ID
     * @param page Sahifa
     * @param limit Limit
     */
    @Get('{authorId}/books')
    public async getAuthorBooks(
        @Path() authorId: string,
        @Query() page?: number,
        @Query() limit?: number
    ): Promise<any> {
        try {
            const result = await authorService.getAuthorBooks(authorId, page || 1, limit || 20);
            return {
                statusCode: 200,
                message: 'Author books retrieved successfully',
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
            this.setStatus(err.statusCode || 500);
            return {
                statusCode: err.statusCode || 500,
                message: err.message || 'Failed to fetch author books'
            };
        }
    }

    /**
     * Muallifni yangilash
     * @param authorId Muallif ID
     * @param requestBody Yangilanish ma'lumotlari
     * @param request HTTP request
     */
    @Security('jwt')
    @Patch('{authorId}')
    public async updateAuthor(
        @Path() authorId: string,
        @Body() requestBody: UpdateAuthorDto,
        @Request() request?: any
    ): Promise<any> {
        try {
            const userId = request.user?.id || 'system';
            const author = await authorService.updateAuthor(authorId, requestBody, userId);
            return {
                statusCode: 200,
                message: 'Author updated successfully',
                data: { author }
            };
        } catch (err: any) {
            this.setStatus(err.statusCode || 400);
            return {
                statusCode: err.statusCode || 400,
                message: err.message || 'Failed to update author'
            };
        }
    }

    /**
     * Muallifni o'chirish (Soft Delete)
     * @param authorId Muallif ID
     * @param request HTTP request
     */
    @Security('jwt')
    @Delete('{authorId}')
    public async deleteAuthor(
        @Path() authorId: string,
        @Request() request?: any
    ): Promise<any> {
        try {
            const userId = request.user?.id || 'system';
            await authorService.deleteAuthor(authorId, userId);
            return {
                statusCode: 200,
                message: 'Author deleted successfully'
            };
        } catch (err: any) {
            this.setStatus(err.statusCode || 400);
            return {
                statusCode: err.statusCode || 400,
                message: err.message || 'Failed to delete author'
            };
        }
    }
}
