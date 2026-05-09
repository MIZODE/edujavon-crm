/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime';
import {  fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { UserController } from './../modules/user/user.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { PublisherController } from './../modules/book/publisher.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { GenreController } from './../modules/book/genre.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { BookController } from './../modules/book/book.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AuthorController } from './../modules/book/author.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AuthController } from './../modules/auth/auth.controller';
import { expressAuthentication } from './../authentication';
// @ts-ignore - no great way to install types from subpackage
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';

const expressAuthenticationRecasted = expressAuthentication as (req: ExRequest, securityName: string, scopes?: string[], res?: ExResponse) => Promise<any>;


// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "_36_Enums.UserRole": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["SUPER_ADMIN"]},{"dataType":"enum","enums":["OWNER"]},{"dataType":"enum","enums":["MANAGER"]},{"dataType":"enum","enums":["LIBRARIAN"]},{"dataType":"enum","enums":["USER"]},{"dataType":"enum","enums":["GUEST"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "_36_Enums.MembershipType": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["STANDARD"]},{"dataType":"enum","enums":["PREMIUM"]},{"dataType":"enum","enums":["VIP"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserRole": {
        "dataType": "refAlias",
        "type": {"ref":"_36_Enums.UserRole","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateUserDto": {
        "dataType": "refObject",
        "properties": {
            "phone": {"dataType":"string","required":true},
            "password": {"dataType":"string","required":true},
            "fullName": {"dataType":"string","required":true},
            "avatar": {"dataType":"string"},
            "role": {"ref":"UserRole"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateUserDto": {
        "dataType": "refObject",
        "properties": {
            "phone": {"dataType":"string"},
            "password": {"dataType":"string"},
            "fullName": {"dataType":"string"},
            "avatar": {"dataType":"string"},
            "role": {"ref":"UserRole"},
            "isActive": {"dataType":"boolean"},
            "isVerified": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreatePublisherDto": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "country": {"dataType":"string"},
            "city": {"dataType":"string"},
            "website": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdatePublisherDto": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string"},
            "country": {"dataType":"string"},
            "city": {"dataType":"string"},
            "website": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateGenreDto": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "slug": {"dataType":"string","required":true},
            "description": {"dataType":"string"},
            "parentId": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateGenreDto": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string"},
            "slug": {"dataType":"string"},
            "description": {"dataType":"string"},
            "parentId": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateBookDto": {
        "dataType": "refObject",
        "properties": {
            "title": {"dataType":"string","required":true},
            "titleEn": {"dataType":"string"},
            "titleRu": {"dataType":"string"},
            "subtitle": {"dataType":"string"},
            "description": {"dataType":"string"},
            "fullDescription": {"dataType":"string"},
            "isbn10": {"dataType":"string"},
            "isbn13": {"dataType":"string"},
            "internalCode": {"dataType":"string"},
            "publishYear": {"dataType":"double"},
            "language": {"dataType":"string","default":"uz"},
            "pageCount": {"dataType":"double"},
            "weight": {"dataType":"double"},
            "dimensions": {"dataType":"string"},
            "coverType": {"dataType":"string"},
            "coverImage": {"dataType":"string"},
            "backCoverImage": {"dataType":"string"},
            "ageGroup": {"dataType":"string"},
            "ddcCode": {"dataType":"string"},
            "udcCode": {"dataType":"string"},
            "customTags": {"dataType":"array","array":{"dataType":"string"}},
            "authorIds": {"dataType":"array","array":{"dataType":"string"}},
            "publisherId": {"dataType":"string"},
            "genreIds": {"dataType":"array","array":{"dataType":"string"}},
            "categoryIds": {"dataType":"array","array":{"dataType":"string"}},
            "isActive": {"dataType":"boolean","default":true},
            "isFeatured": {"dataType":"boolean","default":false},
            "isDraft": {"dataType":"boolean","default":false},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IsbnLookupDto": {
        "dataType": "refObject",
        "properties": {
            "isbn13": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateBookDto": {
        "dataType": "refObject",
        "properties": {
            "title": {"dataType":"string"},
            "titleEn": {"dataType":"string"},
            "titleRu": {"dataType":"string"},
            "subtitle": {"dataType":"string"},
            "description": {"dataType":"string"},
            "fullDescription": {"dataType":"string"},
            "isbn10": {"dataType":"string"},
            "isbn13": {"dataType":"string"},
            "internalCode": {"dataType":"string"},
            "publishYear": {"dataType":"double"},
            "language": {"dataType":"string","default":"uz"},
            "pageCount": {"dataType":"double"},
            "weight": {"dataType":"double"},
            "dimensions": {"dataType":"string"},
            "coverType": {"dataType":"string"},
            "coverImage": {"dataType":"string"},
            "backCoverImage": {"dataType":"string"},
            "ageGroup": {"dataType":"string"},
            "ddcCode": {"dataType":"string"},
            "udcCode": {"dataType":"string"},
            "customTags": {"dataType":"array","array":{"dataType":"string"}},
            "authorIds": {"dataType":"array","array":{"dataType":"string"}},
            "publisherId": {"dataType":"string"},
            "genreIds": {"dataType":"array","array":{"dataType":"string"}},
            "categoryIds": {"dataType":"array","array":{"dataType":"string"}},
            "isActive": {"dataType":"boolean","default":true},
            "isFeatured": {"dataType":"boolean","default":false},
            "isDraft": {"dataType":"boolean","default":false},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BookCopyStatus": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["AVAILABLE"]},{"dataType":"enum","enums":["RESERVED"]},{"dataType":"enum","enums":["ON_RENT"]},{"dataType":"enum","enums":["LOST"]},{"dataType":"enum","enums":["DAMAGED"]},{"dataType":"enum","enums":["UNDER_REPAIR"]},{"dataType":"enum","enums":["WITHDRAWN"]},{"dataType":"enum","enums":["IN_TRANSIT"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateBookCopyBatchDto": {
        "dataType": "refObject",
        "properties": {
            "quantity": {"dataType":"double","required":true},
            "branchId": {"dataType":"string","required":true},
            "locationId": {"dataType":"string"},
            "shelfId": {"dataType":"string"},
            "status": {"ref":"BookCopyStatus","default":"AVAILABLE"},
            "condition": {"dataType":"string"},
            "purchaseDate": {"dataType":"string"},
            "purchasePrice": {"dataType":"double"},
            "supplier": {"dataType":"string"},
            "generateQR": {"dataType":"boolean","default":true},
            "generateBarcodePDF": {"dataType":"boolean","default":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ChangeCopyStatusDto": {
        "dataType": "refObject",
        "properties": {
            "status": {"ref":"BookCopyStatus","required":true},
            "reason": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateBookCopyDto": {
        "dataType": "refObject",
        "properties": {
            "barcode": {"dataType":"string"},
            "qrCode": {"dataType":"string"},
            "locationId": {"dataType":"string"},
            "shelfId": {"dataType":"string"},
            "status": {"ref":"BookCopyStatus"},
            "condition": {"dataType":"string"},
            "purchaseDate": {"dataType":"string"},
            "purchasePrice": {"dataType":"double"},
            "supplier": {"dataType":"string"},
            "lastCheckedAt": {"dataType":"string"},
            "repairHistory": {"dataType":"any"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateAuthorDto": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "birthDate": {"dataType":"string"},
            "deathDate": {"dataType":"string"},
            "nationality": {"dataType":"string"},
            "biography": {"dataType":"string"},
            "photo": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateAuthorDto": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string"},
            "birthDate": {"dataType":"string"},
            "deathDate": {"dataType":"string"},
            "nationality": {"dataType":"string"},
            "biography": {"dataType":"string"},
            "photo": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "LoginDto": {
        "dataType": "refObject",
        "properties": {
            "phone": {"dataType":"string","required":true},
            "password": {"dataType":"string","required":true},
            "rememberMe": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RegisterInitDto": {
        "dataType": "refObject",
        "properties": {
            "phone": {"dataType":"string","required":true},
            "telegramChatId": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RegisterVerifyDto": {
        "dataType": "refObject",
        "properties": {
            "tempId": {"dataType":"string","required":true},
            "code": {"dataType":"string","required":true},
            "fullName": {"dataType":"string","required":true},
            "password": {"dataType":"string","required":true},
            "passwordConfirm": {"dataType":"string","required":true},
            "dateOfBirth": {"dataType":"string"},
            "city": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "LogOutDto": {
        "dataType": "refObject",
        "properties": {
            "revokeAll": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"throw-on-extras","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa




export function RegisterRoutes(app: Router) {

    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################


    
        const argsUserController_getUsers: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/api/v1/users',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.getUsers)),

            async function UserController_getUsers(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUserController_getUsers, request, response });

                const controller = new UserController();

              await templateService.apiHandler({
                methodName: 'getUsers',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsUserController_getUserById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.get('/api/v1/users/:id',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.getUserById)),

            async function UserController_getUserById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUserController_getUserById, request, response });

                const controller = new UserController();

              await templateService.apiHandler({
                methodName: 'getUserById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsUserController_createUser: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"CreateUserDto"},
        };
        app.post('/api/v1/users',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.createUser)),

            async function UserController_createUser(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUserController_createUser, request, response });

                const controller = new UserController();

              await templateService.apiHandler({
                methodName: 'createUser',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsUserController_updateUser: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
                body: {"in":"body","name":"body","required":true,"ref":"UpdateUserDto"},
        };
        app.put('/api/v1/users/:id',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.updateUser)),

            async function UserController_updateUser(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUserController_updateUser, request, response });

                const controller = new UserController();

              await templateService.apiHandler({
                methodName: 'updateUser',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsUserController_hardDelete: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.delete('/api/v1/users/hard/:id',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.hardDelete)),

            async function UserController_hardDelete(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUserController_hardDelete, request, response });

                const controller = new UserController();

              await templateService.apiHandler({
                methodName: 'hardDelete',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsUserController_softDelete: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.delete('/api/v1/users/soft/:id',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.softDelete)),

            async function UserController_softDelete(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUserController_softDelete, request, response });

                const controller = new UserController();

              await templateService.apiHandler({
                methodName: 'softDelete',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsPublisherController_createPublisher: Record<string, TsoaRoute.ParameterSchema> = {
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"CreatePublisherDto"},
                request: {"in":"request","name":"request","dataType":"object"},
        };
        app.post('/api/v1/publishers',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(PublisherController)),
            ...(fetchMiddlewares<RequestHandler>(PublisherController.prototype.createPublisher)),

            async function PublisherController_createPublisher(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsPublisherController_createPublisher, request, response });

                const controller = new PublisherController();

              await templateService.apiHandler({
                methodName: 'createPublisher',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsPublisherController_getAllPublishers: Record<string, TsoaRoute.ParameterSchema> = {
                page: {"in":"query","name":"page","dataType":"double"},
                limit: {"in":"query","name":"limit","dataType":"double"},
                search: {"in":"query","name":"search","dataType":"string"},
                country: {"in":"query","name":"country","dataType":"string"},
        };
        app.get('/api/v1/publishers',
            ...(fetchMiddlewares<RequestHandler>(PublisherController)),
            ...(fetchMiddlewares<RequestHandler>(PublisherController.prototype.getAllPublishers)),

            async function PublisherController_getAllPublishers(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsPublisherController_getAllPublishers, request, response });

                const controller = new PublisherController();

              await templateService.apiHandler({
                methodName: 'getAllPublishers',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsPublisherController_getPublisherById: Record<string, TsoaRoute.ParameterSchema> = {
                publisherId: {"in":"path","name":"publisherId","required":true,"dataType":"string"},
        };
        app.get('/api/v1/publishers/:publisherId',
            ...(fetchMiddlewares<RequestHandler>(PublisherController)),
            ...(fetchMiddlewares<RequestHandler>(PublisherController.prototype.getPublisherById)),

            async function PublisherController_getPublisherById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsPublisherController_getPublisherById, request, response });

                const controller = new PublisherController();

              await templateService.apiHandler({
                methodName: 'getPublisherById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsPublisherController_updatePublisher: Record<string, TsoaRoute.ParameterSchema> = {
                publisherId: {"in":"path","name":"publisherId","required":true,"dataType":"string"},
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"UpdatePublisherDto"},
                request: {"in":"request","name":"request","dataType":"object"},
        };
        app.patch('/api/v1/publishers/:publisherId',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(PublisherController)),
            ...(fetchMiddlewares<RequestHandler>(PublisherController.prototype.updatePublisher)),

            async function PublisherController_updatePublisher(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsPublisherController_updatePublisher, request, response });

                const controller = new PublisherController();

              await templateService.apiHandler({
                methodName: 'updatePublisher',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsPublisherController_deletePublisher: Record<string, TsoaRoute.ParameterSchema> = {
                publisherId: {"in":"path","name":"publisherId","required":true,"dataType":"string"},
                request: {"in":"request","name":"request","dataType":"object"},
        };
        app.delete('/api/v1/publishers/:publisherId',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(PublisherController)),
            ...(fetchMiddlewares<RequestHandler>(PublisherController.prototype.deletePublisher)),

            async function PublisherController_deletePublisher(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsPublisherController_deletePublisher, request, response });

                const controller = new PublisherController();

              await templateService.apiHandler({
                methodName: 'deletePublisher',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsGenreController_createGenre: Record<string, TsoaRoute.ParameterSchema> = {
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"CreateGenreDto"},
                request: {"in":"request","name":"request","dataType":"object"},
        };
        app.post('/api/v1/genres',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(GenreController)),
            ...(fetchMiddlewares<RequestHandler>(GenreController.prototype.createGenre)),

            async function GenreController_createGenre(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsGenreController_createGenre, request, response });

                const controller = new GenreController();

              await templateService.apiHandler({
                methodName: 'createGenre',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsGenreController_getAllGenres: Record<string, TsoaRoute.ParameterSchema> = {
                page: {"in":"query","name":"page","dataType":"double"},
                limit: {"in":"query","name":"limit","dataType":"double"},
                search: {"in":"query","name":"search","dataType":"string"},
                parentId: {"in":"query","name":"parentId","dataType":"string"},
        };
        app.get('/api/v1/genres',
            ...(fetchMiddlewares<RequestHandler>(GenreController)),
            ...(fetchMiddlewares<RequestHandler>(GenreController.prototype.getAllGenres)),

            async function GenreController_getAllGenres(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsGenreController_getAllGenres, request, response });

                const controller = new GenreController();

              await templateService.apiHandler({
                methodName: 'getAllGenres',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsGenreController_getGenreById: Record<string, TsoaRoute.ParameterSchema> = {
                genreId: {"in":"path","name":"genreId","required":true,"dataType":"string"},
        };
        app.get('/api/v1/genres/:genreId',
            ...(fetchMiddlewares<RequestHandler>(GenreController)),
            ...(fetchMiddlewares<RequestHandler>(GenreController.prototype.getGenreById)),

            async function GenreController_getGenreById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsGenreController_getGenreById, request, response });

                const controller = new GenreController();

              await templateService.apiHandler({
                methodName: 'getGenreById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsGenreController_updateGenre: Record<string, TsoaRoute.ParameterSchema> = {
                genreId: {"in":"path","name":"genreId","required":true,"dataType":"string"},
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"UpdateGenreDto"},
                request: {"in":"request","name":"request","dataType":"object"},
        };
        app.patch('/api/v1/genres/:genreId',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(GenreController)),
            ...(fetchMiddlewares<RequestHandler>(GenreController.prototype.updateGenre)),

            async function GenreController_updateGenre(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsGenreController_updateGenre, request, response });

                const controller = new GenreController();

              await templateService.apiHandler({
                methodName: 'updateGenre',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsGenreController_deleteGenre: Record<string, TsoaRoute.ParameterSchema> = {
                genreId: {"in":"path","name":"genreId","required":true,"dataType":"string"},
                request: {"in":"request","name":"request","dataType":"object"},
        };
        app.delete('/api/v1/genres/:genreId',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(GenreController)),
            ...(fetchMiddlewares<RequestHandler>(GenreController.prototype.deleteGenre)),

            async function GenreController_deleteGenre(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsGenreController_deleteGenre, request, response });

                const controller = new GenreController();

              await templateService.apiHandler({
                methodName: 'deleteGenre',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsBookController_createBook: Record<string, TsoaRoute.ParameterSchema> = {
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"CreateBookDto"},
                request: {"in":"request","name":"request","dataType":"object"},
        };
        app.post('/api/v1/books',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(BookController)),
            ...(fetchMiddlewares<RequestHandler>(BookController.prototype.createBook)),

            async function BookController_createBook(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsBookController_createBook, request, response });

                const controller = new BookController();

              await templateService.apiHandler({
                methodName: 'createBook',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsBookController_lookupIsbn: Record<string, TsoaRoute.ParameterSchema> = {
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"IsbnLookupDto"},
        };
        app.post('/api/v1/books/isbn-lookup',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(BookController)),
            ...(fetchMiddlewares<RequestHandler>(BookController.prototype.lookupIsbn)),

            async function BookController_lookupIsbn(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsBookController_lookupIsbn, request, response });

                const controller = new BookController();

              await templateService.apiHandler({
                methodName: 'lookupIsbn',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsBookController_getAllBooks: Record<string, TsoaRoute.ParameterSchema> = {
                page: {"in":"query","name":"page","dataType":"double"},
                limit: {"in":"query","name":"limit","dataType":"double"},
                isActive: {"in":"query","name":"isActive","dataType":"boolean"},
                language: {"in":"query","name":"language","dataType":"string"},
                publishYear: {"in":"query","name":"publishYear","dataType":"double"},
        };
        app.get('/api/v1/books',
            ...(fetchMiddlewares<RequestHandler>(BookController)),
            ...(fetchMiddlewares<RequestHandler>(BookController.prototype.getAllBooks)),

            async function BookController_getAllBooks(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsBookController_getAllBooks, request, response });

                const controller = new BookController();

              await templateService.apiHandler({
                methodName: 'getAllBooks',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsBookController_searchBooks: Record<string, TsoaRoute.ParameterSchema> = {
                q: {"in":"query","name":"q","dataType":"string"},
                genre: {"in":"query","name":"genre","dataType":"string"},
                year: {"in":"query","name":"year","dataType":"string"},
                language: {"in":"query","name":"language","dataType":"string"},
                available: {"in":"query","name":"available","dataType":"boolean"},
                branch: {"in":"query","name":"branch","dataType":"string"},
                page: {"in":"query","name":"page","dataType":"double"},
                limit: {"in":"query","name":"limit","dataType":"double"},
                sort: {"in":"query","name":"sort","dataType":"string"},
        };
        app.get('/api/v1/books/search',
            ...(fetchMiddlewares<RequestHandler>(BookController)),
            ...(fetchMiddlewares<RequestHandler>(BookController.prototype.searchBooks)),

            async function BookController_searchBooks(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsBookController_searchBooks, request, response });

                const controller = new BookController();

              await templateService.apiHandler({
                methodName: 'searchBooks',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsBookController_getBookById: Record<string, TsoaRoute.ParameterSchema> = {
                bookId: {"in":"path","name":"bookId","required":true,"dataType":"string"},
        };
        app.get('/api/v1/books/:bookId',
            ...(fetchMiddlewares<RequestHandler>(BookController)),
            ...(fetchMiddlewares<RequestHandler>(BookController.prototype.getBookById)),

            async function BookController_getBookById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsBookController_getBookById, request, response });

                const controller = new BookController();

              await templateService.apiHandler({
                methodName: 'getBookById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsBookController_updateBook: Record<string, TsoaRoute.ParameterSchema> = {
                bookId: {"in":"path","name":"bookId","required":true,"dataType":"string"},
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"UpdateBookDto"},
                request: {"in":"request","name":"request","dataType":"object"},
        };
        app.patch('/api/v1/books/:bookId',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(BookController)),
            ...(fetchMiddlewares<RequestHandler>(BookController.prototype.updateBook)),

            async function BookController_updateBook(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsBookController_updateBook, request, response });

                const controller = new BookController();

              await templateService.apiHandler({
                methodName: 'updateBook',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsBookController_deleteBook: Record<string, TsoaRoute.ParameterSchema> = {
                bookId: {"in":"path","name":"bookId","required":true,"dataType":"string"},
                request: {"in":"request","name":"request","dataType":"object"},
        };
        app.delete('/api/v1/books/:bookId',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(BookController)),
            ...(fetchMiddlewares<RequestHandler>(BookController.prototype.deleteBook)),

            async function BookController_deleteBook(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsBookController_deleteBook, request, response });

                const controller = new BookController();

              await templateService.apiHandler({
                methodName: 'deleteBook',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsBookController_createBookCopiesBatch: Record<string, TsoaRoute.ParameterSchema> = {
                bookId: {"in":"path","name":"bookId","required":true,"dataType":"string"},
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"CreateBookCopyBatchDto"},
                request: {"in":"request","name":"request","dataType":"object"},
        };
        app.post('/api/v1/books/:bookId/copies/batch',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(BookController)),
            ...(fetchMiddlewares<RequestHandler>(BookController.prototype.createBookCopiesBatch)),

            async function BookController_createBookCopiesBatch(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsBookController_createBookCopiesBatch, request, response });

                const controller = new BookController();

              await templateService.apiHandler({
                methodName: 'createBookCopiesBatch',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsBookController_changeBookCopyStatus: Record<string, TsoaRoute.ParameterSchema> = {
                copyId: {"in":"path","name":"copyId","required":true,"dataType":"string"},
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"ChangeCopyStatusDto"},
                request: {"in":"request","name":"request","dataType":"object"},
        };
        app.patch('/api/v1/books/copies/:copyId/status',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(BookController)),
            ...(fetchMiddlewares<RequestHandler>(BookController.prototype.changeBookCopyStatus)),

            async function BookController_changeBookCopyStatus(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsBookController_changeBookCopyStatus, request, response });

                const controller = new BookController();

              await templateService.apiHandler({
                methodName: 'changeBookCopyStatus',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsBookController_updateBookCopy: Record<string, TsoaRoute.ParameterSchema> = {
                copyId: {"in":"path","name":"copyId","required":true,"dataType":"string"},
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"UpdateBookCopyDto"},
                request: {"in":"request","name":"request","dataType":"object"},
        };
        app.patch('/api/v1/books/copies/:copyId',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(BookController)),
            ...(fetchMiddlewares<RequestHandler>(BookController.prototype.updateBookCopy)),

            async function BookController_updateBookCopy(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsBookController_updateBookCopy, request, response });

                const controller = new BookController();

              await templateService.apiHandler({
                methodName: 'updateBookCopy',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAuthorController_createAuthor: Record<string, TsoaRoute.ParameterSchema> = {
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"CreateAuthorDto"},
                request: {"in":"request","name":"request","dataType":"object"},
        };
        app.post('/api/v1/authors',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(AuthorController)),
            ...(fetchMiddlewares<RequestHandler>(AuthorController.prototype.createAuthor)),

            async function AuthorController_createAuthor(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuthorController_createAuthor, request, response });

                const controller = new AuthorController();

              await templateService.apiHandler({
                methodName: 'createAuthor',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAuthorController_getAllAuthors: Record<string, TsoaRoute.ParameterSchema> = {
                page: {"in":"query","name":"page","dataType":"double"},
                limit: {"in":"query","name":"limit","dataType":"double"},
                search: {"in":"query","name":"search","dataType":"string"},
        };
        app.get('/api/v1/authors',
            ...(fetchMiddlewares<RequestHandler>(AuthorController)),
            ...(fetchMiddlewares<RequestHandler>(AuthorController.prototype.getAllAuthors)),

            async function AuthorController_getAllAuthors(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuthorController_getAllAuthors, request, response });

                const controller = new AuthorController();

              await templateService.apiHandler({
                methodName: 'getAllAuthors',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAuthorController_getAuthorById: Record<string, TsoaRoute.ParameterSchema> = {
                authorId: {"in":"path","name":"authorId","required":true,"dataType":"string"},
        };
        app.get('/api/v1/authors/:authorId',
            ...(fetchMiddlewares<RequestHandler>(AuthorController)),
            ...(fetchMiddlewares<RequestHandler>(AuthorController.prototype.getAuthorById)),

            async function AuthorController_getAuthorById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuthorController_getAuthorById, request, response });

                const controller = new AuthorController();

              await templateService.apiHandler({
                methodName: 'getAuthorById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAuthorController_getAuthorBooks: Record<string, TsoaRoute.ParameterSchema> = {
                authorId: {"in":"path","name":"authorId","required":true,"dataType":"string"},
                page: {"in":"query","name":"page","dataType":"double"},
                limit: {"in":"query","name":"limit","dataType":"double"},
        };
        app.get('/api/v1/authors/:authorId/books',
            ...(fetchMiddlewares<RequestHandler>(AuthorController)),
            ...(fetchMiddlewares<RequestHandler>(AuthorController.prototype.getAuthorBooks)),

            async function AuthorController_getAuthorBooks(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuthorController_getAuthorBooks, request, response });

                const controller = new AuthorController();

              await templateService.apiHandler({
                methodName: 'getAuthorBooks',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAuthorController_updateAuthor: Record<string, TsoaRoute.ParameterSchema> = {
                authorId: {"in":"path","name":"authorId","required":true,"dataType":"string"},
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"UpdateAuthorDto"},
                request: {"in":"request","name":"request","dataType":"object"},
        };
        app.patch('/api/v1/authors/:authorId',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(AuthorController)),
            ...(fetchMiddlewares<RequestHandler>(AuthorController.prototype.updateAuthor)),

            async function AuthorController_updateAuthor(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuthorController_updateAuthor, request, response });

                const controller = new AuthorController();

              await templateService.apiHandler({
                methodName: 'updateAuthor',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAuthorController_deleteAuthor: Record<string, TsoaRoute.ParameterSchema> = {
                authorId: {"in":"path","name":"authorId","required":true,"dataType":"string"},
                request: {"in":"request","name":"request","dataType":"object"},
        };
        app.delete('/api/v1/authors/:authorId',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(AuthorController)),
            ...(fetchMiddlewares<RequestHandler>(AuthorController.prototype.deleteAuthor)),

            async function AuthorController_deleteAuthor(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuthorController_deleteAuthor, request, response });

                const controller = new AuthorController();

              await templateService.apiHandler({
                methodName: 'deleteAuthor',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAuthController_login: Record<string, TsoaRoute.ParameterSchema> = {
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"LoginDto"},
                request: {"in":"request","name":"request","required":true,"dataType":"object"},
        };
        app.post('/api/v1/auth/login',
            ...(fetchMiddlewares<RequestHandler>(AuthController)),
            ...(fetchMiddlewares<RequestHandler>(AuthController.prototype.login)),

            async function AuthController_login(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuthController_login, request, response });

                const controller = new AuthController();

              await templateService.apiHandler({
                methodName: 'login',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAuthController_registerInit: Record<string, TsoaRoute.ParameterSchema> = {
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"RegisterInitDto"},
        };
        app.post('/api/v1/auth/register/init',
            ...(fetchMiddlewares<RequestHandler>(AuthController)),
            ...(fetchMiddlewares<RequestHandler>(AuthController.prototype.registerInit)),

            async function AuthController_registerInit(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuthController_registerInit, request, response });

                const controller = new AuthController();

              await templateService.apiHandler({
                methodName: 'registerInit',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAuthController_registerVerify: Record<string, TsoaRoute.ParameterSchema> = {
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"RegisterVerifyDto"},
                request: {"in":"request","name":"request","required":true,"dataType":"object"},
        };
        app.post('/api/v1/auth/register/verify',
            ...(fetchMiddlewares<RequestHandler>(AuthController)),
            ...(fetchMiddlewares<RequestHandler>(AuthController.prototype.registerVerify)),

            async function AuthController_registerVerify(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuthController_registerVerify, request, response });

                const controller = new AuthController();

              await templateService.apiHandler({
                methodName: 'registerVerify',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAuthController_adminTest: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/api/v1/auth/admin-test',
            authenticateMiddleware([{"jwt":["admin"]}]),
            ...(fetchMiddlewares<RequestHandler>(AuthController)),
            ...(fetchMiddlewares<RequestHandler>(AuthController.prototype.adminTest)),

            async function AuthController_adminTest(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuthController_adminTest, request, response });

                const controller = new AuthController();

              await templateService.apiHandler({
                methodName: 'adminTest',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAuthController_logOut: Record<string, TsoaRoute.ParameterSchema> = {
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"LogOutDto"},
                request: {"in":"request","name":"request","required":true,"dataType":"object"},
        };
        app.post('/api/v1/auth/logout',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(AuthController)),
            ...(fetchMiddlewares<RequestHandler>(AuthController.prototype.logOut)),

            async function AuthController_logOut(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuthController_logOut, request, response });

                const controller = new AuthController();

              await templateService.apiHandler({
                methodName: 'logOut',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function authenticateMiddleware(security: TsoaRoute.Security[] = []) {
        return async function runAuthenticationMiddleware(request: any, response: any, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            // keep track of failed auth attempts so we can hand back the most
            // recent one.  This behavior was previously existing so preserving it
            // here
            const failedAttempts: any[] = [];
            const pushAndRethrow = (error: any) => {
                failedAttempts.push(error);
                throw error;
            };

            const secMethodOrPromises: Promise<any>[] = [];
            for (const secMethod of security) {
                if (Object.keys(secMethod).length > 1) {
                    const secMethodAndPromises: Promise<any>[] = [];

                    for (const name in secMethod) {
                        secMethodAndPromises.push(
                            expressAuthenticationRecasted(request, name, secMethod[name], response)
                                .catch(pushAndRethrow)
                        );
                    }

                    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

                    secMethodOrPromises.push(Promise.all(secMethodAndPromises)
                        .then(users => { return users[0]; }));
                } else {
                    for (const name in secMethod) {
                        secMethodOrPromises.push(
                            expressAuthenticationRecasted(request, name, secMethod[name], response)
                                .catch(pushAndRethrow)
                        );
                    }
                }
            }

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            try {
                request['user'] = await Promise.any(secMethodOrPromises);

                // Response was sent in middleware, abort
                if (response.writableEnded) {
                    return;
                }

                next();
            }
            catch(err) {
                // Show most recent error as response
                const error = failedAttempts.pop();
                error.status = error.status || 401;

                // Response was sent in middleware, abort
                if (response.writableEnded) {
                    return;
                }
                next(error);
            }

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        }
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
