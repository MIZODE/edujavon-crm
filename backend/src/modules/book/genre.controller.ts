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
import * as genreService from './genre.service';
import { CreateGenreDto, UpdateGenreDto } from './dto/book.dto';

@Route('genres')
@Tags('Genres')
export class GenreController extends Controller {

    /**
     * Yangi janr yaratish
     * @param requestBody Janr ma'lumotlari
     * @param request HTTP request
     */
    @Security('jwt')
    @SuccessResponse('201', 'Created')
    @Post('/')
    public async createGenre(
        @Body() requestBody: CreateGenreDto,
        @Request() request?: any
    ): Promise<any> {
        try {
            const userId = request.user?.id || 'system';
            const genre = await genreService.createGenre(requestBody, userId);
            this.setStatus(201);
            return {
                statusCode: 201,
                message: 'Genre created successfully',
                data: { genre }
            };
        } catch (err: any) {
            this.setStatus(err.statusCode || 400);
            return {
                statusCode: err.statusCode || 400,
                message: err.message || 'Failed to create genre'
            };
        }
    }

    /**
     * Barcha janrlarni olish
     * @param page Sahifa raqami
     * @param limit Limit
     * @param search Qidiruv
     * @param parentId Ota janr ID
     */
    @Get('/')
    public async getAllGenres(
        @Query() page?: number,
        @Query() limit?: number,
        @Query() search?: string,
        @Query() parentId?: string
    ): Promise<any> {
        try {
            const result = await genreService.getAllGenres(page || 1, limit || 20, search, parentId);
            return {
                statusCode: 200,
                message: 'Genres retrieved successfully',
                data: {
                    genres: result.genres,
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
                message: err.message || 'Failed to fetch genres'
            };
        }
    }

    /**
     * ID bo'yicha janrni olish
     * @param genreId Janr ID
     */
    @Get('{genreId}')
    public async getGenreById(@Path() genreId: string): Promise<any> {
        try {
            const genre = await genreService.getGenreById(genreId);
            
            if (!genre) {
                this.setStatus(404);
                return {
                    statusCode: 404,
                    message: 'Genre not found'
                };
            }

            return {
                statusCode: 200,
                message: 'Genre retrieved successfully',
                data: { genre }
            };
        } catch (err: any) {
            this.setStatus(500);
            return {
                statusCode: 500,
                message: err.message || 'Failed to fetch genre'
            };
        }
    }

    /**
     * Janrni yangilash
     * @param genreId Janr ID
     * @param requestBody Yangilanish ma'lumotlari
     * @param request HTTP request
     */
    @Security('jwt')
    @Patch('{genreId}')
    public async updateGenre(
        @Path() genreId: string,
        @Body() requestBody: UpdateGenreDto,
        @Request() request?: any
    ): Promise<any> {
        try {
            const userId = request.user?.id || 'system';
            const genre = await genreService.updateGenre(genreId, requestBody, userId);
            return {
                statusCode: 200,
                message: 'Genre updated successfully',
                data: { genre }
            };
        } catch (err: any) {
            this.setStatus(err.statusCode || 400);
            return {
                statusCode: err.statusCode || 400,
                message: err.message || 'Failed to update genre'
            };
        }
    }

    /**
     * Janrni o'chirish (Soft Delete)
     * @param genreId Janr ID
     * @param request HTTP request
     */
    @Security('jwt')
    @Delete('{genreId}')
    public async deleteGenre(
        @Path() genreId: string,
        @Request() request?: any
    ): Promise<any> {
        try {
            const userId = request.user?.id || 'system';
            await genreService.deleteGenre(genreId, userId);
            return {
                statusCode: 200,
                message: 'Genre deleted successfully'
            };
        } catch (err: any) {
            this.setStatus(err.statusCode || 400);
            return {
                statusCode: err.statusCode || 400,
                message: err.message || 'Failed to delete genre'
            };
        }
    }
}
