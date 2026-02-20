# TSOA va Swaggerdan Foydalanish Qo'llanmasi

Ushbu loyihada API hujjatlarini (Swagger UI) avtomatik generatsiya qilish uchun **TSOA** ishlatilmoqda. Siz endi `swagger.json` yoki `routes.ts` fayllarini qo'lda yozmaysiz.

## 1. Controller Yaratish

Har bir yangi modul uchun `Controller` klassini yarating va uni `tsoa` dan import qilingan `Controller` dan meros (extend) qilib oling.

**Misol:** `src/modules/book/book.controller.ts`

```typescript
import { Controller, Get, Post, Body, Route, Tags, Path, Query, SuccessResponse } from 'tsoa';
import { BookService } from './book.service';
import { BookDto, CreateBookDto } from './dto/book.dto';

@Route("books") // API yo'li: /api/v1/books
@Tags("Books") // Swaggerda "Books" bo'limida ko'rinadi
export class BookController extends Controller {

    /**
     * Barcha kitoblarni olish
     * @param page Sahifa raqami (default: 1)
     * @param limit Bir sahifada nechta kitob chiqishi (default: 10)
     */
    @Get("/")
    public async getBooks(
        @Query() page: number = 1,
        @Query() limit: number = 10
    ): Promise<BookDto[]> {
        return new BookService().getAll(page, limit);
    }

    /**
     * ID orqali bitta kitobni olish
     * @param bookId Kitobning ID raqami
     */
    @Get("{bookId}")
    public async getBookById(@Path() bookId: number): Promise<BookDto | null> {
        return new BookService().getById(bookId);
    }

    /**
     * Yangi kitob qo'shish
     * @param requestBody Kitob ma'lumotlari
     */
    @SuccessResponse("201", "Created") // Muvaffaqiyatli kod
    @Post("/")
    public async createBook(@Body() requestBody: CreateBookDto): Promise<BookDto> {
        this.setStatus(201); // Javob statusini o'rnatish
        return new BookService().create(requestBody);
    }
}
```

## 2. DTO (Data Transfer Object) Yaratish

Request va Response uchun interfeyslarni (DTO) alohida faylda yarating. TSOA ularni avtomatik Swagger sxemasiga aylantiradi.

**Misol:** `src/modules/book/dto/book.dto.ts`

```typescript
/**
 * Kitob yaratish uchun DTO
 */
export interface CreateBookDto {
    /**
     * Kitob nomi
     * @example "O'tgan kunlar"
     */
    title: string;
    
    /**
     * Muallif ismi
     * @example "Abdulla Qodiriy"
     */
    author: string;

    /**
     * Nashr yili
     * @example 1926
     */
    year: number;
}

/**
 * Kitob ma'lumotlari DTO
 */
export interface BookDto extends CreateBookDto {
    id: number;
}
```

## 3. Asosiy Decoratorlar

| Decorator | Vazifasi | Misol |
| :--- | :--- | :--- |
| `@Route("path")` | Asosiy API yo'li (Controller tepasida) | `@Route("users")` -> `/users` |
| `@Tags("Name")` | Swaggerda guruhlash nomi | `@Tags("Auth")` |
| `@Get("subpath")` | GET so'rovi | `@Get("/")`, `@Get("{id}")` |
| `@Post("subpath")` | POST so'rovi | `@Post("login")` |
| `@Put`, `@Delete`, `@Patch` | Boshqa HTTP metodlar | `@Delete("{id}")` |
| `@Body()` | Request body (POST/PUT uchun) | `create(@Body() body: Dto)` |
| `@Path()` | URL parametrlari | `get(@Path() id: number)` |
| `@Query()` | Query parametrlari (`?page=1`) | `list(@Query() page: number)` |
| `@Header()` | Header parametrlari | `check(@Header() auth: string)` |
| `@SuccessResponse(code, desc)` | Muvaffaqiyatli javob kodi | `@SuccessResponse("201", "Created")` |

## 4. Ishga Tushirish

Loyihani odatdagidek ishga tushiring:

```bash
npm run dev
```

Bu buyruq avtomatik ravishda:

1. `tsoa spec-and-routes` ni ishga tushiradi (Swagger va Routelarni yangilaydi).
2. Serverni ishga tushiradi.
3. Fayllar o'zgarganda (Ctrl+S) avtomatik qayta generatsiya qiladi.

Swagger UI manzili: [http://localhost:8080/api-docs](http://localhost:8080/api-docs)

## 5. Muhim Eslatmalar

* **`server.ts`**: Yangi controller qo'shganda `server.ts` ni o'zgartirish shart emas. TSOA o'zi topadi (agar u `src/modules/**/*.controller.ts` patterniga tushsa).
* **Response**: Controller metodlari to'g'ridan-to'g'ri `return data` qilishi kerak ( `res.json(data)` EMAS). Status kodni `this.setStatus(200)` orqali qo'yasiz.
* **JSDoc**: Metodlar va DTOlar tepasiga yozilgan commentlar (`/** ... */`) Swaggerda tavsif (description) sifatida chiqadi.
