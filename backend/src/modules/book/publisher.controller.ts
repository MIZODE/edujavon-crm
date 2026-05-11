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
import * as publisherService from './publisher.service';
import { CreatePublisherDto, UpdatePublisherDto } from './dto/book.dto';

@Route('publishers')
@Tags('Publishers')
export class PublisherController extends Controller {

    /**
     * Yangi nashriyot yaratish
     * @param requestBody Nashriyot ma'lumotlari
     * @param request HTTP request
     */
    @Security('jwt')
    @SuccessResponse('201', 'Created')
    @Post('/')
    public async createPublisher(
        @Body() requestBody: CreatePublisherDto,
        @Request() request?: any
    ): Promise<any> {
        try {
            const userId = request.user?.id || 'system';
            const publisher = await publisherService.createPublisher(requestBody, userId);
            this.setStatus(201);
            return {
                statusCode: 201,
                message: 'Publisher created successfully',
                data: { publisher }
            };
        } catch (err: any) {
            this.setStatus(err.statusCode || 400);
            return {
                statusCode: err.statusCode || 400,
                message: err.message || 'Failed to create publisher'
            };
        }
    }

    /**
     * Barcha nashriyotlarni olish
     * @param page Sahifa raqami
     * @param limit Limit
     * @param search Qidiruv
     * @param country Mamlakat
     */
    @Get('/')
    public async getAllPublishers(
        @Query() page?: number,
        @Query() limit?: number,
        @Query() search?: string,
        @Query() country?: string
    ): Promise<any> {
        try {
            const result = await publisherService.getAllPublishers(page || 1, limit || 20, search, country);
            return {
                statusCode: 200,
                message: 'Publishers retrieved successfully',
                data: {
                    publishers: result.publishers,
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
                message: err.message || 'Failed to fetch publishers'
            };
        }
    }

    /**
     * ID bo'yicha nashriyotni olish
     * @param publisherId Nashriyot ID
     */
    @Get('{publisherId}')
    public async getPublisherById(@Path() publisherId: string): Promise<any> {
        try {
            const publisher = await publisherService.getPublisherById(publisherId);
            
            if (!publisher) {
                this.setStatus(404);
                return {
                    statusCode: 404,
                    message: 'Publisher not found'
                };
            }

            return {
                statusCode: 200,
                message: 'Publisher retrieved successfully',
                data: { publisher }
            };
        } catch (err: any) {
            this.setStatus(500);
            return {
                statusCode: 500,
                message: err.message || 'Failed to fetch publisher'
            };
        }
    }

    /**
     * Nashriyotni yangilash
     * @param publisherId Nashriyot ID
     * @param requestBody Yangilanish ma'lumotlari
     * @param request HTTP request
     */
    @Security('jwt')
    @Patch('{publisherId}')
    public async updatePublisher(
        @Path() publisherId: string,
        @Body() requestBody: UpdatePublisherDto,
        @Request() request?: any
    ): Promise<any> {
        try {
            const userId = request.user?.id || 'system';
            const publisher = await publisherService.updatePublisher(publisherId, requestBody, userId);
            return {
                statusCode: 200,
                message: 'Publisher updated successfully',
                data: { publisher }
            };
        } catch (err: any) {
            this.setStatus(err.statusCode || 400);
            return {
                statusCode: err.statusCode || 400,
                message: err.message || 'Failed to update publisher'
            };
        }
    }

    /**
     * Nashriyotni o'chirish (Soft Delete)
     * @param publisherId Nashriyot ID
     * @param request HTTP request
     */
    @Security('jwt')
    @Delete('{publisherId}')
    public async deletePublisher(
        @Path() publisherId: string,
        @Request() request?: any
    ): Promise<any> {
        try {
            const userId = request.user?.id || 'system';
            await publisherService.deletePublisher(publisherId, userId);
            return {
                statusCode: 200,
                message: 'Publisher deleted successfully'
            };
        } catch (err: any) {
            this.setStatus(err.statusCode || 400);
            return {
                statusCode: err.statusCode || 400,
                message: err.message || 'Failed to delete publisher'
            };
        }
    }
}
