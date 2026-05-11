# 📄 RFC: BOOK MODULE - Kitob Katalogi va Inventarizatsiya Tizimi

| Dokument Ma'lumotlari | |
|----------------------|---|
| **RFC ID** | RFC-BOOK-002 |
| **Versiya** | 1.0 |
| **Holat** | Draft |
| **Muallif** | Senior Architecture Team |
| **Sana** | 2025-11-19 |
| **Sprint** | Sprint 2 |
| **Priority** | P0 (Critical) |

---

## 📋 MUNDAARIJA

1. [Qisqacha Mazmun](#1-qisqacha-mazmun)
2. [Motivatsiya](#2-motivatsiya)
3. [Maqsadlar](#3-maqsadlar)
4. [Tizim Arxitekturasi](#4-tizim-arxitekturasi)
5. [Database Schema](#5-database-schema)
6. [API Specifications](#6-api-specifications) ⭐ **TO'LIQ**
7. [Flow Diagrammalari](#7-flow-diagrammalari)
8. [Xavfsizlik Talablari](#8-xavfsizlik-talablari)
9. [Performance Talablari](#9-performance-talablari)
10. [Testing Strategy](#10-testing-strategy)
11. [Migration Plan](#11-migration-plan)
12. [Alternativ Yechimlar](#12-alternativ-yechimlar)
13. [Risk Assessment](#13-risk-assessment)
14. [Approval](#14-approval)
15. [Ilovalar](#15-ilovalar)

---

## 1. QISQACHA MAZMUN

Ushbu RFC **Book Module** (Kitob Katalogi va Inventarizatsiya Tizimi) uchun to'liq texnik spesifikasiyani taqdim etadi. Module quyidagi funksiyalarni qamrab oladi:

- ✅ Kitob yaratish (Manual + ISBN Auto-Fill)
- ✅ Kitob nusxalari (BookCopy) boshqaruvi
- ✅ Excel import (Ommaviy yuklash)
- ✅ Kitob yangilash/o'chirish
- ✅ Copy status o'zgarishi
- ✅ Qidiruv va filtrlash
- ✅ Joylashuv boshqaruvi (Location, Shelf)

**Muddat:** 2 hafta (Sprint 2)  
**Team:** 2-3 Backend Developer, 1 Frontend Developer, 1 QA

---

## 2. MOTIVATSIYA

### 2.1. Nima Muammo Yechiladi?

| Muammo | Hozirgi Holat | Yechim |
|--------|---------------|--------|
| Kitob qo'shish sekin | Qo'lda kiritish | ISBN Auto-Fill (90% tezlashadi) |
| Ommaviy yuklash yo'q | Har biri alohida | Excel Import + Error Report |
| Nusxa boshqaruvi yo'q | Bitta kitob = bitta | Book → BookCopy (1:N) |
| Qidiruv sekin | LIKE query | PostgreSQL Full-Text + GIN Index |
| Joylashuv noma'lum | Qog'ozda | Location + Shelf tizimi |
| Import tracking yo'q | Noma'lum | ImportLog + Status tracking |

### 2.2. Biznes Qadriyati

```
┌─────────────────────────────────────────────────────────────┐
│  ⏱️ Kitob qo'shish vaqti: 10 min → 1 min (90% tezlashuv)    │
│  📦 Ommaviy yuklash: 1000 kitob < 5 daqiqa (async)          │
│  🔍 Qidiruv tezligi: < 200ms (p95)                          │
│  📊 Inventarizatsiya: 100% aniq joylashuv                   │
│  🎯 Kitobxonachi unumdorligi: 80% oshadi                    │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. MAQSADLAR

### 3.1. Functional Requirements

| ID | Talab | Priority | Acceptance Criteria |
|----|-------|----------|---------------------|
| FR-01 | Kitob yaratish (Manual) | P0 | Barcha maydonlar, validation, audit |
| FR-02 | ISBN Auto-Fill | P0 | Google Books API + Fallback strategy |
| FR-03 | BookCopy batch create | P0 | 1-1000 nusxa, barcode generatsiya |
| FR-04 | Excel Import | P0 | Validation, error report, async queue |
| FR-05 | Kitob yangilash | P1 | Version control, audit log |
| FR-06 | Kitob o'chirish (Soft) | P1 | Active rent/check, cascade |
| FR-07 | Copy status change | P1 | Status transition rules, notify |
| FR-08 | Qidiruv va filtrlar | P1 | Full-text, GIN index, cache |
| FR-09 | Joylashuv boshqaruvi | P2 | Location, Shelf hierarchy |

### 3.2. Non-Functional Requirements

| ID | Talab | Target |
|----|-------|--------|
| NFR-01 | Response Time | < 500ms (create), < 200ms (search) |
| NFR-02 | Availability | 99.9% uptime |
| NFR-03 | Security | RBAC (LIBRARIAN+ for write) |
| NFR-04 | Scalability | 100,000+ books |
| NFR-05 | Test Coverage | > 80% |
| NFR-06 | Import Performance | 1000 rows < 5 min (async) |
| NFR-07 | Cache Hit Rate | > 80% (search), > 95% (details) |

---

## 4. TIZIM ARXITEKTURASI

### 4.1. Module Diagrammasi

```
┌─────────────────────────────────────────────────────────────────┐
│                         API GATEWAY                              │
│                   (Rate Limiting, Auth)                          │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                      BOOK MODULE                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │   Controller │  │   Service    │  │  Repository  │          │
│  │              │  │              │  │              │          │
│  │ - create     │  │ - validate   │  │ - createBook │          │
│  │ - update     │  │ - isbnLookup │  │ - findBook   │          │
│  │ - delete     │  │ - import     │  │ - update     │          │
│  │ - search     │  │ - notify     │  │ - delete     │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
└─────────────────────────────────────────────────────────────────┘
                                │
        ┌───────────────────────┼───────────────────────┐
        ▼                       ▼                       ▼
┌──────────────┐        ┌──────────────┐        ┌──────────────┐
│  PostgreSQL  │        │    Redis     │        │  External    │
│  (Book,      │        │  (Cache,     │        │  APIs        │
│   BookCopy)  │        │   Queue)     │        │  (Google)    │
└──────────────┘        └──────────────┘        └──────────────┘
                                │
                                ▼
                        ┌──────────────┐
                        │    MinIO     │
                        │  (Files)     │
                        └──────────────┘
```

### 4.2. Tech Stack

| Komponent | Texnologiya | Versiya |
|-----------|-------------|---------|
| Backend | NestJS + TypeScript | 10.x |
| Database | PostgreSQL + Prisma | 15+ / 5.x |
| Cache | Redis | 7.x |
| Queue | BullMQ | 5.x |
| File Storage | MinIO | Latest |
| External API | Google Books, Open Library | - |
| Excel Processing | xlsx / exceljs | Latest |

---

## 5. DATABASE SCHEMA

### 5.1. Book Model

```prisma
model Book {
  id              String   @id @default(uuid())
  // Identifiers
  isbn10          String?  @unique
  isbn13          String?  @unique
  internalCode    String?  @unique
  // Basic Info
  title           String
  titleEn         String?
  titleRu         String?
  subtitle        String?
  description     String?  @db.Text
  fullDescription String?  @db.Text
  // Publishing
  publishYear     Int?
  language        String   @default("uz")
  pageCount       Int?
  weight          Decimal? @db.Decimal(8, 2)
  dimensions      String?
  coverType       String?
  // Media
  coverImage      String?
  backCoverImage  String?
  // Classification
  ageGroup        String?
  ddcCode         String?
  udcCode         String?
  customTags      String[]
  // Stats
  avgRating       Decimal  @default(0) @db.Decimal(3, 2)
  ratingsCount    Int      @default(0)
  reviewsCount    Int      @default(0)
  readCount       Int      @default(0)
  popularityScore Int      @default(0)
  // Status
  isActive        Boolean  @default(true)
  isFeatured      Boolean  @default(false)
  isDraft         Boolean  @default(false)
  // Soft Delete
  deletedAt       DateTime?
  // Relations
  authors         Author[]
  publisherId     String?
  publisher       Publisher? @relation(fields: [publisherId], references: [id])
  genres          Genre[]
  categories      Category[]
  copies          BookCopy[]
  reviews         Review[]
  ratings         Rating[]
  favorites       Favorite[]
  importLogId     String?
  importLog       ImportLog? @relation(fields: [importLogId], references: [id])
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  
  @@index([isbn10])
  @@index([isbn13])
  @@index([title])
  @@index([publishYear])
  @@index([language])
  @@index([isActive])
  @@index([isFeatured])
  @@index([avgRating])
  @@index([createdAt])
  @@index([deletedAt])
  @@index([title, subtitle])
}
```

### 5.2. BookCopy Model

```prisma
model BookCopy {
  id              String         @id @default(uuid())
  barcode         String         @unique
  qrCode          String?        @unique
  bookId          String
  book            Book           @relation(fields: [bookId], references: [id], onDelete: Cascade)
  // Location
  branchId        String
  branch          Branch         @relation(fields: [branchId], references: [id])
  locationId      String?
  location        Location?      @relation(fields: [locationId], references: [id])
  shelfId         String?
  shelf           Shelf?         @relation(fields: [shelfId], references: [id])
  // Status
  status          BookCopyStatus @default(AVAILABLE)
  condition       String?
  // Purchase Info
  purchaseDate    DateTime?
  purchasePrice   Decimal?       @db.Decimal(10, 2)
  supplier        String?
  // Tracking
  lastCheckedAt   DateTime?
  repairHistory   Json?
  // Relations
  rents           Rent[]
  transfers       Transfer[]
  auditLogs       AuditLog[]
  // Soft Delete
  deletedAt       DateTime?
  createdAt       DateTime       @default(now())
  updatedAt       DateTime       @updatedAt
  
  @@index([barcode])
  @@index([qrCode])
  @@index([bookId])
  @@index([branchId])
  @@index([status])
  @@index([locationId])
  @@index([shelfId])
  @@index([deletedAt])
}
```

### 5.3. Supporting Models

```prisma
model Author {
  id          String   @id @default(uuid())
  name        String
  birthDate   DateTime?
  deathDate   DateTime?
  nationality String?
  biography   String?
  photo       String?
  books       Book[]
  deletedAt   DateTime?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@index([name])
  @@unique([name, birthDate])
  @@index([deletedAt])
}

model Publisher {
  id          String   @id @default(uuid())
  name        String   @unique
  country     String?
  city        String?
  website     String?
  books       Book[]
  deletedAt   DateTime?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@index([name])
  @@index([deletedAt])
}

model Genre {
  id          String   @id @default(uuid())
  name        String   @unique
  slug        String   @unique
  description String?
  parentId    String?
  parent      Genre?   @relation("GenreHierarchy", fields: [parentId], references: [id])
  children    Genre[]  @relation("GenreHierarchy")
  books       Book[]
  deletedAt   DateTime?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@index([slug])
  @@index([parentId])
  @@index([deletedAt])
}

model ImportLog {
  id          String       @id @default(uuid())
  fileName    String
  fileType    String
  totalRows   Int
  successRows Int          @default(0)
  failedRows  Int          @default(0)
  status      ImportStatus @default(PENDING)
  errorLog    String?      @db.Text
  uploadedBy  String
  startedAt   DateTime?
  completedAt DateTime?
  books       Book[]
  deletedAt   DateTime?
  createdAt   DateTime     @default(now())
  updatedAt   DateTime     @updatedAt
  
  @@index([status])
  @@index([uploadedBy])
  @@index([createdAt])
  @@index([deletedAt])
}
```

### 5.4. Full-Text Search Index Migration

```sql
-- Create GIN index for full-text search
CREATE INDEX IF NOT EXISTS "book_search_idx" ON "Book" 
USING GIN (to_tsvector('uzbek', title || ' ' || COALESCE(subtitle, '')));

-- Create composite index for common filters
CREATE INDEX IF NOT EXISTS "book_filters_idx" ON "Book" 
(isActive, deletedAt, publishYear, language);

-- Partial index for active books only
CREATE INDEX IF NOT EXISTS "book_active_idx" ON "Book" (id) 
WHERE "deletedAt" IS NULL AND "isActive" = true;

-- Index for ISBN lookups
CREATE INDEX IF NOT EXISTS "book_isbn13_idx" ON "Book" ("isbn13") 
WHERE "deletedAt" IS NULL;
```

---

## 6. API SPECIFICATIONS ⭐ (TO'LIQ)

### 6.1. Book Management Endpoints

---

#### 📍 POST `/api/v1/books`

**Tavsif:** Yangi kitob yaratish (Manual)

**Request:**
```http
POST /api/v1/books
Content-Type: application/json
Authorization: Bearer <access_token>
X-Request-ID: uuid-here

{
  "title": "Alisher Navoiy Asarlari",
  "titleEn": "Works of Alisher Navoi",
  "titleRu": "Произведения Алишера Навои",
  "subtitle": "To'liq to'plam",
  "isbn13": "9789943123456",
  "isbn10": "9943123456",
  "publishYear": 2020,
  "language": "uz",
  "pageCount": 500,
  "description": "Buyuk shoirning to'liq asarlari to'plami",
  "authorIds": ["author_uuid_1", "author_uuid_2"],
  "publisherId": "publisher_uuid",
  "genreIds": ["genre_uuid_1", "genre_uuid_2"],
  "categoryIds": ["category_uuid"],
  "coverImage": "https://storage.library.uz/covers/book_uuid.jpg",
  "ageGroup": "ADULTS",
  "customTags": ["klassika", "she'riyat"]
}
```

**Request Schema:**
```typescript
{
  title: string;           // Required, 3-200 chars
  titleEn?: string;        // Optional, max 200
  titleRu?: string;        // Optional, max 200
  subtitle?: string;       // Optional, max 200
  isbn13?: string;         // Optional, 13 digits, unique
  isbn10?: string;         // Optional, 10 digits, unique
  publishYear?: number;    // Optional, 1000-current
  language?: string;       // Optional, default "uz"
  pageCount?: number;      // Optional, > 0
  description?: string;    // Optional, max 1000
  authorIds?: string[];    // Optional, UUID array
  publisherId?: string;    // Optional, UUID
  genreIds?: string[];     // Optional, UUID array
  categoryIds?: string[];  // Optional, UUID array
  coverImage?: string;     // Optional, URL
  ageGroup?: string;       // Optional
  customTags?: string[];   // Optional
}
```

**Validation Rules:**
| Field | Rule | Error Code |
|-------|------|------------|
| title | 3-200 characters | BOOK-010 |
| isbn13 | 13 digits, unique | BOOK-011 |
| isbn10 | 10 digits, unique | BOOK-012 |
| publishYear | 1000-current year | BOOK-013 |
| authorIds | Valid UUIDs, exist | BOOK-014 |
| publisherId | Valid UUID, exist | BOOK-015 |

**Success Response (201):**
```json
{
  "statusCode": 201,
  "message": "Book created successfully",
  "data": {
    "book": {
      "id": "book_uuid_here",
      "title": "Alisher Navoiy Asarlari",
      "isbn13": "9789943123456",
      "isbn10": "9943123456",
      "publishYear": 2020,
      "language": "uz",
      "pageCount": 500,
      "isActive": true,
      "isDraft": false,
      "isFeatured": false,
      "avgRating": 0,
      "ratingsCount": 0,
      "reviewsCount": 0,
      "authors": [
        {
          "id": "author_uuid_1",
          "name": "Alisher Navoiy"
        }
      ],
      "publisher": {
        "id": "publisher_uuid",
        "name": "Sharq Nashriyoti"
      },
      "genres": [
        {
          "id": "genre_uuid_1",
          "name": "She'riyat",
          "slug": "she'riyat"
        }
      ],
      "createdAt": "2025-11-19T10:30:00.000Z",
      "updatedAt": "2025-11-19T10:30:00.000Z"
    },
    "auditLogId": "audit_uuid"
  },
  "timestamp": "2025-11-19T10:30:00.000Z"
}
```

**Error Responses:**

| Status | Code | Example |
|--------|------|---------|
| 400 | BOOK-010 | `{"statusCode":400,"message":"Title must be between 3 and 200 characters","error":"Bad Request","code":"BOOK-010"}` |
| 409 | BOOK-011 | `{"statusCode":409,"message":"ISBN-13 already exists","error":"Conflict","code":"BOOK-011"}` |
| 404 | BOOK-014 | `{"statusCode":404,"message":"Author not found","error":"Not Found","code":"BOOK-014"}` |
| 403 | BOOK-020 | `{"statusCode":403,"message":"Insufficient permissions. LIBRARIAN role required","error":"Forbidden","code":"BOOK-020"}` |
| 429 | BOOK-030 | `{"statusCode":429,"message":"Too many requests. Try again in 60 seconds","error":"Too Many Requests","code":"BOOK-030"}` |

**Required Role:** LIBRARIAN, MANAGER, OWNER, SUPER_ADMIN  
**Rate Limit:** 30 requests per minute

---

#### 📍 POST `/api/v1/books/isbn-lookup`

**Tavsif:** ISBN orqali kitob ma'lumotlarini avtomatik olish (Google Books API)

**Request:**
```http
POST /api/v1/books/isbn-lookup
Content-Type: application/json
Authorization: Bearer <access_token>
X-Request-ID: uuid-here

{
  "isbn13": "9789943123456"
}
```

**Success Response (200):**
```json
{
  "statusCode": 200,
  "message": "Book data retrieved successfully",
  "data": {
    "source": "GOOGLE_BOOKS",
    "book": {
      "title": "Alisher Navoiy Asarlari",
      "titleEn": "Works of Alisher Navoi",
      "isbn13": "9789943123456",
      "isbn10": "9943123456",
      "publishYear": 2020,
      "language": "uz",
      "pageCount": 500,
      "description": "Buyuk shoirning to'liq asarlari to'plami",
      "authors": [
        {
          "name": "Alisher Navoiy",
          "birthDate": "1441-02-09",
          "nationality": "Uzbek"
        }
      ],
      "publisher": {
        "name": "Sharq Nashriyoti",
        "country": "Uzbekistan"
      },
      "coverImage": "https://books.google.com/books/content?id=xxx&printsec=frontcover&img=1",
      "categories": ["Poetry", "Classics"]
    },
    "fallbackUsed": false,
    "apiResponseTime": 1250
  },
  "timestamp": "2025-11-19T10:30:00.000Z"
}
```

**Error Responses:**

| Status | Code | Example |
|--------|------|---------|
| 400 | BOOK-040 | `{"statusCode":400,"message":"Invalid ISBN format","error":"Bad Request","code":"BOOK-040"}` |
| 404 | BOOK-041 | `{"statusCode":404,"message":"Book not found in external databases","error":"Not Found","code":"BOOK-041"}` |
| 504 | BOOK-042 | `{"statusCode":504,"message":"External API timeout. Please try manual entry","error":"Gateway Timeout","code":"BOOK-042"}` |

**Fallback Strategy:**
```
Google Books API (5s timeout) → Open Library API (5s timeout) → Internal DB (2s) → Manual Entry
```

**Rate Limit:** 10 requests per minute

---

#### 📍 POST `/api/v1/books/:id/copies/batch`

**Tavsif:** Kitob uchun ko'p nusxa yaratish (Batch)

**Request:**
```http
POST /api/v1/books/book_uuid_here/copies/batch
Content-Type: application/json
Authorization: Bearer <access_token>
X-Request-ID: uuid-here

{
  "quantity": 10,
  "branchId": "branch_uuid",
  "locationId": "location_uuid",
  "shelfId": "shelf_uuid",
  "purchasePrice": "50000.00",
  "purchaseDate": "2025-11-19",
  "supplier": "Kitob Dunyosi MChJ",
  "generateQR": true,
  "generateBarcodePDF": true
}
```

**Request Schema:**
```typescript
{
  quantity: number;        // Required, 1-1000
  branchId: string;        // Required, UUID
  locationId?: string;     // Optional, UUID
  shelfId?: string;        // Optional, UUID
  purchasePrice?: string;  // Optional, Decimal
  purchaseDate?: string;   // Optional, ISO date
  supplier?: string;       // Optional, max 100
  generateQR?: boolean;    // Optional, default true
  generateBarcodePDF?: boolean; // Optional, default true
}
```

**Success Response (201):**
```json
{
  "statusCode": 201,
  "message": "Book copies created successfully",
  "data": {
    "bookId": "book_uuid_here",
    "copiesCreated": 10,
    "copies": [
      {
        "id": "copy_uuid_1",
        "barcode": "BC2025111900001",
        "qrCode": "QR2025111900001",
        "status": "AVAILABLE",
        "branchId": "branch_uuid",
        "locationId": "location_uuid",
        "shelfId": "shelf_uuid"
      }
    ],
    "barcodePDF": "https://storage.library.uz/barcodes/book_uuid_20251119.pdf",
    "processingTime": 1850
  },
  "timestamp": "2025-11-19T10:30:00.000Z"
}
```

**Error Responses:**

| Status | Code | Example |
|--------|------|---------|
| 400 | BOOK-050 | `{"statusCode":400,"message":"Quantity must be between 1 and 1000","error":"Bad Request","code":"BOOK-050"}` |
| 404 | BOOK-051 | `{"statusCode":404,"message":"Book not found","error":"Not Found","code":"BOOK-051"}` |
| 404 | BOOK-052 | `{"statusCode":404,"message":"Branch not found","error":"Not Found","code":"BOOK-052"}` |
| 403 | BOOK-020 | `{"statusCode":403,"message":"Insufficient permissions","error":"Forbidden","code":"BOOK-020"}` |

**Required Role:** LIBRARIAN, MANAGER, OWNER, SUPER_ADMIN  
**Rate Limit:** 10 requests per minute

---

#### 📍 POST `/api/v1/books/import`

**Tavsif:** Excel fayl orqali ommaviy kitob yuklash

**Request:**
```http
POST /api/v1/books/import
Content-Type: multipart/form-data
Authorization: Bearer <access_token>
X-Request-ID: uuid-here

FormData:
  file: books_import.xlsx (max 50MB)
  branchId: branch_uuid
  notifyOnComplete: true
```

**Success Response (202):**
```json
{
  "statusCode": 202,
  "message": "Import job queued successfully",
  "data": {
    "importLogId": "import_log_uuid",
    "fileName": "books_import.xlsx",
    "status": "PENDING",
    "estimatedTime": "2-5 minutes",
    "jobId": "bullmq_job_id",
    "statusCheckUrl": "/api/v1/books/import/import_log_uuid/status"
  },
  "timestamp": "2025-11-19T10:30:00.000Z"
}
```

**Error Responses:**

| Status | Code | Example |
|--------|------|---------|
| 400 | BOOK-060 | `{"statusCode":400,"message":"Invalid file type. Only .xlsx allowed","error":"Bad Request","code":"BOOK-060"}` |
| 413 | BOOK-061 | `{"statusCode":413,"message":"File too large. Max 50MB","error":"Payload Too Large","code":"BOOK-061"}` |
| 429 | BOOK-062 | `{"statusCode":429,"message":"Import limit reached. Max 5 imports per hour","error":"Too Many Requests","code":"BOOK-062"}` |

**Required Role:** MANAGER, OWNER, SUPER_ADMIN  
**Rate Limit:** 5 requests per hour

---

#### 📍 GET `/api/v1/books/import/:id/status`

**Tavsif:** Import jarayoni statusini tekshirish

**Request:**
```http
GET /api/v1/books/import/import_log_uuid/status
Authorization: Bearer <access_token>
X-Request-ID: uuid-here
```

**Success Response (200):**
```json
{
  "statusCode": 200,
  "message": "Import status retrieved successfully",
  "data": {
    "importLog": {
      "id": "import_log_uuid",
      "fileName": "books_import.xlsx",
      "fileType": "xlsx",
      "totalRows": 500,
      "successRows": 485,
      "failedRows": 15,
      "status": "COMPLETED",
      "uploadedBy": "staff_uuid",
      "startedAt": "2025-11-19T10:30:00.000Z",
      "completedAt": "2025-11-19T10:33:45.000Z",
      "processingTime": 225000
    },
    "errorReport": {
      "available": true,
      "url": "https://storage.library.uz/reports/import_log_uuid_errors.xlsx",
      "expiresAt": "2025-11-26T10:33:45.000Z"
    },
    "summary": {
      "successRate": "97%",
      "booksCreated": 485,
      "authorsCreated": 25,
      "publishersCreated": 5,
      "errors": [
        {
          "row": 45,
          "column": "isbn13",
          "reason": "ISBN already exists",
          "value": "9789943123456"
        }
      ]
    }
  },
  "timestamp": "2025-11-19T10:33:45.000Z"
}
```

**Error Responses:**

| Status | Code | Example |
|--------|------|---------|
| 404 | BOOK-070 | `{"statusCode":404,"message":"Import log not found","error":"Not Found","code":"BOOK-070"}` |
| 403 | BOOK-071 | `{"statusCode":403,"message":"Access denied to this import log","error":"Forbidden","code":"BOOK-071"}` |

---

#### 📍 GET `/api/v1/books/search`

**Tavsif:** Kitoblarni qidirish (Full-Text + Filters)

**Request:**
```http
GET /api/v1/books/search?q=navoiy&genre=she'riyat&year=2020-2025&language=uz&available=true&branch=branch_uuid&page=1&limit=20&sort=popularity:desc
Authorization: Bearer <access_token>
X-Request-ID: uuid-here
```

**Query Parameters:**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| q | string | - | Search query (title, author, ISBN) |
| genre | string | - | Genre slug |
| year | string | - | Year range (2020-2025) |
| language | string | - | Language code (uz, ru, en) |
| available | boolean | - | Only available copies |
| branch | string | - | Filter by branch |
| page | number | 1 | Page number |
| limit | number | 20 | Items per page (max 100) |
| sort | string | popularity:desc | Sort field:direction |
| fields | string | all | Comma-separated fields |

**Success Response (200):**
```json
{
  "statusCode": 200,
  "message": "Search completed successfully",
  "data": {
    "books": [
      {
        "id": "book_uuid_here",
        "title": "Alisher Navoiy Asarlari",
        "subtitle": "To'liq to'plam",
        "isbn13": "9789943123456",
        "publishYear": 2020,
        "language": "uz",
        "pageCount": 500,
        "coverImage": "https://storage.library.uz/covers/book_uuid.jpg",
        "avgRating": 4.8,
        "ratingsCount": 125,
        "reviewsCount": 45,
        "popularityScore": 950,
        "authors": [
          {
            "id": "author_uuid",
            "name": "Alisher Navoiy"
          }
        ],
        "genres": [
          {
            "id": "genre_uuid",
            "name": "She'riyat",
            "slug": "she'riyat"
          }
        ],
        "availability": {
          "totalCopies": 10,
          "availableCopies": 7,
          "isAvailable": true
        },
        "searchRank": 0.95
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 150,
      "totalPages": 8,
      "hasNext": true,
      "hasPrev": false
    },
    "filters": {
      "appliedFilters": {
        "query": "navoiy",
        "genre": "she'riyat",
        "year": "2020-2025",
        "language": "uz",
        "available": true
      },
      "suggestedFilters": {
        "ageGroup": ["ADULTS", "TEENS"],
        "publishYear": [2020, 2021, 2022, 2023, 2024, 2025]
      }
    },
    "searchMetadata": {
      "queryTime": 145,
      "cacheHit": false,
      "indexUsed": "book_search_idx"
    }
  },
  "timestamp": "2025-11-19T10:30:00.000Z"
}
```

**Rate Limit:** 30 requests per minute

---

#### 📍 GET `/api/v1/books/:id`

**Tavsif:** Kitob detallarini olish

**Request:**
```http
GET /api/v1/books/book_uuid_here
Authorization: Bearer <access_token>
X-Request-ID: uuid-here
```

**Query Parameters:**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| include | string | - | Comma-separated: `copies,authors,publisher,genres,reviews` |

**Success Response (200):**
```json
{
  "statusCode": 200,
  "message": "Book retrieved successfully",
  "data": {
    "book": {
      "id": "book_uuid_here",
      "title": "Alisher Navoiy Asarlari",
      "titleEn": "Works of Alisher Navoi",
      "titleRu": "Произведения Алишера Навои",
      "subtitle": "To'liq to'plam",
      "isbn13": "9789943123456",
      "isbn10": "9943123456",
      "publishYear": 2020,
      "language": "uz",
      "pageCount": 500,
      "description": "Buyuk shoirning to'liq asarlari to'plami",
      "coverImage": "https://storage.library.uz/covers/book_uuid.jpg",
      "backCoverImage": "https://storage.library.uz/covers/book_uuid_back.jpg",
      "ageGroup": "ADULTS",
      "avgRating": 4.8,
      "ratingsCount": 125,
      "reviewsCount": 45,
      "readCount": 350,
      "popularityScore": 950,
      "isActive": true,
      "isFeatured": true,
      "isDraft": false,
      "authors": [
        {
          "id": "author_uuid",
          "name": "Alisher Navoiy",
          "birthDate": "1441-02-09",
          "nationality": "Uzbek",
          "biography": "Buyuk o'zbek shoiri..."
        }
      ],
      "publisher": {
        "id": "publisher_uuid",
        "name": "Sharq Nashriyoti",
        "country": "Uzbekistan",
        "city": "Tashkent"
      },
      "genres": [
        {
          "id": "genre_uuid",
          "name": "She'riyat",
          "slug": "she'riyat"
        }
      ],
      "categories": [
        {
          "id": "category_uuid",
          "name": "Badiiy Adabiyot",
          "code": "821.511.133"
        }
      ],
      "availability": {
        "totalCopies": 10,
        "availableCopies": 7,
        "onRentCopies": 2,
        "reservedCopies": 1,
        "isAvailable": true,
        "branches": [
          {
            "branchId": "branch_uuid",
            "branchName": "Markaziy Filial",
            "availableCopies": 5
          }
        ]
      },
      "createdAt": "2025-11-19T10:30:00.000Z",
      "updatedAt": "2025-11-19T10:30:00.000Z"
    },
    "cacheInfo": {
      "cached": true,
      "cacheAge": 120,
      "cacheTTL": 300
    }
  },
  "timestamp": "2025-11-19T10:30:00.000Z"
}
```

---

#### 📍 PATCH `/api/v1/books/:id`

**Tavsif:** Kitob ma'lumotlarini yangilash

**Request:**
```http
PATCH /api/v1/books/book_uuid_here
Content-Type: application/json
Authorization: Bearer <access_token>
X-Request-ID: uuid-here

{
  "title": "Alisher Navoiy Asarlari (Yangi Nashr)",
  "publishYear": 2024,
  "pageCount": 550,
  "description": "Yangilangan va to'ldirilgan nashr",
  "isFeatured": true,
  "genreIds": ["genre_uuid_1", "genre_uuid_2", "genre_uuid_3"]
}
```

**Success Response (200):**
```json
{
  "statusCode": 200,
  "message": "Book updated successfully",
  "data": {
    "book": {
      "id": "book_uuid_here",
      "title": "Alisher Navoiy Asarlari (Yangi Nashr)",
      "publishYear": 2024,
      "pageCount": 550,
      "isFeatured": true,
      "updatedAt": "2025-11-19T10:30:00.000Z"
    },
    "changed": ["title", "publishYear", "pageCount", "description", "isFeatured", "genreIds"],
    "auditLogId": "audit_uuid"
  },
  "timestamp": "2025-11-19T10:30:00.000Z"
}
```

**Error Responses:**

| Status | Code | Example |
|--------|------|---------|
| 404 | BOOK-051 | `{"statusCode":404,"message":"Book not found","error":"Not Found","code":"BOOK-051"}` |
| 409 | BOOK-011 | `{"statusCode":409,"message":"ISBN already exists","error":"Conflict","code":"BOOK-011"}` |
| 403 | BOOK-020 | `{"statusCode":403,"message":"Insufficient permissions","error":"Forbidden","code":"BOOK-020"}` |

**Required Role:** LIBRARIAN, MANAGER, OWNER, SUPER_ADMIN

---

#### 📍 DELETE `/api/v1/books/:id`

**Tavsif:** Kitobni o'chirish (Soft Delete)

**Request:**
```http
DELETE /api/v1/books/book_uuid_here
Authorization: Bearer <access_token>
X-Request-ID: uuid-here

{
  "reason": "Kitob noto'g'ri qo'shilgan",
  "deleteCopies": true
}
```

**Success Response (200):**
```json
{
  "statusCode": 200,
  "message": "Book deleted successfully",
  "data": {
    "bookId": "book_uuid_here",
    "deletedAt": "2025-11-19T10:30:00.000Z",
    "copiesDeleted": 10,
    "auditLogId": "audit_uuid"
  },
  "timestamp": "2025-11-19T10:30:00.000Z"
}
```

**Error Responses:**

| Status | Code | Example |
|--------|------|---------|
| 400 | BOOK-080 | `{"statusCode":400,"message":"Cannot delete book with active rents","error":"Bad Request","code":"BOOK-080","data":{"activeRents":2}}` |
| 400 | BOOK-081 | `{"statusCode":400,"message":"Cannot delete book with active reservations","error":"Bad Request","code":"BOOK-081"}` |
| 403 | BOOK-082 | `{"statusCode":403,"message":"Insufficient permissions. MANAGER role required","error":"Forbidden","code":"BOOK-082"}` |

**Required Role:** MANAGER, OWNER, SUPER_ADMIN

---

#### 📍 PATCH `/api/v1/books/copies/:id/status`

**Tavsif:** BookCopy statusini o'zgartirish

**Request:**
```http
PATCH /api/v1/books/copies/copy_uuid_here/status
Content-Type: application/json
Authorization: Bearer <access_token>
X-Request-ID: uuid-here

{
  "status": "DAMAGED",
  "reason": "Sahifalar yirtilgan",
  "notifyWaitingList": true
}
```

**Success Response (200):**
```json
{
  "statusCode": 200,
  "message": "Book copy status updated successfully",
  "data": {
    "bookCopy": {
      "id": "copy_uuid_here",
      "barcode": "BC2025111900001",
      "status": "DAMAGED",
      "previousStatus": "AVAILABLE",
      "condition": "Sahifalar yirtilgan",
      "updatedAt": "2025-11-19T10:30:00.000Z"
    },
    "waitingListNotified": true,
    "notificationsSent": 3,
    "auditLogId": "audit_uuid"
  },
  "timestamp": "2025-11-19T10:30:00.000Z"
}
```

**Status Transition Rules:**

| From \ To | AVAILABLE | RESERVED | ON_RENT | LOST | DAMAGED | UNDER_REPAIR | WITHDRAWN |
|-----------|-----------|----------|---------|------|---------|--------------|-----------|
| AVAILABLE | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| RESERVED | ✅ | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| ON_RENT | ✅ | ❌ | - | ✅ | ✅ | ✅ | ✅ |
| LOST | ❌ | ❌ | ❌ | - | ❌ | ❌ | ✅ |
| DAMAGED | ✅ | ❌ | ❌ | ❌ | - | ✅ | ✅ |
| UNDER_REPAIR | ✅ | ❌ | ❌ | ❌ | ✅ | - | ✅ |
| WITHDRAWN | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | - |

**Required Role:** LIBRARIAN, MANAGER, OWNER, SUPER_ADMIN

---

### 6.2. HTTP Status Codes Summary

| Code | Meaning | When Used |
|------|---------|-----------|
| 200 | OK | Successful GET, PATCH, DELETE |
| 201 | Created | Successful POST (create resource) |
| 202 | Accepted | Import job queued (async) |
| 400 | Bad Request | Validation error, invalid input |
| 403 | Forbidden | Insufficient permissions |
| 404 | Not Found | Resource doesn't exist |
| 409 | Conflict | Duplicate ISBN, barcode |
| 413 | Payload Too Large | File exceeds limit |
| 429 | Too Many Requests | Rate limit exceeded |
| 504 | Gateway Timeout | External API timeout |
| 500 | Internal Server Error | Server error |

---

### 6.3. Common Response Structure

**Success:**
```json
{
  "statusCode": 200,
  "message": "Success message",
  "data": { ... },
  "timestamp": "2025-11-19T10:30:00.000Z"
}
```

**Error:**
```json
{
  "statusCode": 400,
  "message": "Error message",
  "error": "Bad Request",
  "code": "BOOK-010",
  "data": { ... },
  "timestamp": "2025-11-19T10:30:00.000Z"
}
```

---

### 6.4. Common Headers

| Header | Required | Description |
|--------|----------|-------------|
| Content-Type | ✅ | `application/json` or `multipart/form-data` |
| Authorization | ✅ | `Bearer <token>` |
| X-Request-ID | ✅ | UUID for tracing |
| X-Forwarded-For | ✅ | Client IP address |
| User-Agent | ✅ | Browser/app info |

---

## 7. FLOW DIAGRAMMALARI

### 7.1. Book Create (Manual) Flow

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  1. Librarian│ ──→ │  2. Form     │ ──→ │  3. Validatsiya│ ──→ │  4. Author/  │
│  "Add Book"  │     │  To'ldirish  │     │  (ISBN unique)│     │  Publisher   │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
                                                                    │
                                                                    ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  7. Cache    │ ←── │  6. Audit    │ ←── │  5. Book     │ ←── │  4.2. Yangi  │
│  Invalidate  │     │  Log         │     │  Create      │     │  Yaratish    │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
```

### 7.2. ISBN Auto-Fill Flow

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Google     │ ──→ │  Open       │ ──→ │  Internal   │ ──→ │  Manual     │
│  Books API  │     │  Library API│     │  Database   │     │  Entry      │
│  (5s timeout)│     │  (5s timeout)│     │  Search     │     │             │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
```

### 7.3. Excel Import Flow

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  1. Excel    │ ──→ │  2. File     │ ──→ │  3. Queue    │ ──→ │  4. Validate │
│  Upload      │     │  Upload      │     │  (BullMQ)    │     │  (Row by     │
│  (.xlsx)     │     │  (MinIO)     │     │  (Import     │     │   Row)       │
│              │     │              │     │   Job)       │     │              │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
                                                                    │
                                                                    ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  7. Report   │ ←── │  6. ImportLog│ ←── │  5. Create   │ ←── │  4.2. Error  │
│  Generate    │     │  Update      │     │  Books       │     │  Collect     │
│  (Excel)     │     │  (Status)    │     │  (Batch)     │     │              │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
```

### 7.4. Book Search Flow

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  1. Search   │ ──→ │  2. Query    │ ──→ │  3. Cache    │ ──→ │  4. DB       │
│  Query       │     │  Parse       │     │  Check       │     │  Search      │
│  (Text)      │     │  (Keywords)  │     │  (Redis)     │     │  (GIN Index) │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
                                                                    │
                                                                    ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  7. Response │ ←── │  6. Cache    │ ←── │  5. Filter/  │ ←── │  4.2. Full-  │
│  (Paginated) │     │  Set         │     │  Sort        │     │  Text Search │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
```

---

## 8. XAVFSIZLIK TALABLARI

### 8.1. Role-Based Access Control (RBAC)

| Operatsiya | SuperAdmin | Owner | Manager | Librarian | User | Guest |
|------------|------------|-------|---------|-----------|------|-------|
| Kitob qo'shish | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| Kitob yangilash | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| Kitob o'chirish | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Copy yaratish | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| Copy status | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| Excel Import | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Qidiruv | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

### 8.2. Input Validation

| Field | Validation | Sanitization |
|-------|------------|--------------|
| title | 3-200 chars | Trim, XSS filter |
| ISBN | 10/13 digits | Format check |
| description | Max 1000 chars | HTML strip |
| file upload | .xlsx only, 50MB | MIME type check |
| URLs | Valid URL format | Domain whitelist |

### 8.3. Audit Logging

| Action | Logged Fields |
|--------|---------------|
| CREATE | userId, oldValue=null, newValue |
| UPDATE | userId, oldValue, newValue, changed |
| DELETE | userId, oldValue, reason |
| STATUS_CHANGE | userId, oldStatus, newStatus, reason |
| IMPORT | userId, fileName, totalRows, successRows, failedRows |

### 8.4. Rate Limiting

| Endpoint | Limit | Window |
|----------|-------|--------|
| POST /books | 30 | 1 minute |
| POST /books/isbn-lookup | 10 | 1 minute |
| POST /books/import | 5 | 1 hour |
| GET /books/search | 30 | 1 minute |

---

## 9. PERFORMANCE TALABLARI

### 9.1. Response Time Targets

| Endpoint | Target (p95) | Target (p99) |
|----------|--------------|--------------|
| POST /books | < 500ms | < 1000ms |
| POST /books/isbn-lookup | < 5000ms | < 10000ms |
| POST /books/:id/copies/batch (100) | < 2000ms | < 5000ms |
| POST /books/import | < 500ms (queue) | < 1000ms |
| GET /books/search | < 200ms | < 500ms |
| GET /books/:id | < 100ms | < 200ms |

### 9.2. Cache Strategy

| Data | TTL | Invalidation |
|------|-----|--------------|
| Book details | 5 min | On update/delete |
| Search results | 5 min | On book change |
| Genre tree | 1 hour | On genre change |
| Featured books | 15 min | On feature change |
| System settings | 10 min | On setting change |

### 9.3. Database Optimization

```sql
-- Connection pool settings
{
  max: 20,
  min: 5,
  idleTimeoutMillis: 30000,
  connectTimeoutMillis: 2000
}

-- Query optimization example
EXPLAIN ANALYZE SELECT * FROM "Book"
WHERE to_tsvector('uzbek', title || ' ' || COALESCE(subtitle, ''))
      @@ to_tsquery('uzbek', 'navoiy')
AND "deletedAt" IS NULL
AND "isActive" = true;
```

### 9.4. Import Performance

| Quantity | Expected Time | Processing |
|----------|---------------|------------|
| 1-100 | < 30s | Single batch |
| 101-500 | < 2 min | Chunked (100) |
| 501-1000 | < 5 min | Chunked (100) |
| 1000+ | Queue + Notify | Async |

---

## 10. TESTING STRATEGY

### 10.1. Test Coverage Requirements

| Test Type | Coverage | Tools |
|-----------|----------|-------|
| Unit Tests | 80%+ | Jest |
| Integration Tests | 70%+ | Supertest + Prisma |
| E2E Tests | Critical flows | Playwright |
| Load Tests | API endpoints | k6 |
| Security Tests | OWASP Top 10 | OWASP ZAP |

### 10.2. Test Cases (Priority)

| ID | Test Case | Priority | Status |
|----|-----------|----------|--------|
| TC-01 | Create book with valid data | P0 | ⏳ |
| TC-02 | Create book with duplicate ISBN | P0 | ⏳ |
| TC-03 | ISBN lookup (Google API) | P0 | ⏳ |
| TC-04 | ISBN lookup (Fallback) | P0 | ⏳ |
| TC-05 | Batch copy create (100) | P0 | ⏳ |
| TC-06 | Excel import (success) | P0 | ⏳ |
| TC-07 | Excel import (partial fail) | P0 | ⏳ |
| TC-08 | Book search (full-text) | P0 | ⏳ |
| TC-09 | Book update | P1 | ⏳ |
| TC-10 | Book delete (with rents) | P1 | ⏳ |
| TC-11 | Copy status transition | P1 | ⏳ |
| TC-12 | Cache invalidation | P1 | ⏳ |

### 10.3. Example Test Code

```typescript
// book.e2e-spec.ts
describe('BookController (e2e)', () => {
  it('/books (POST) - Create with valid data', async () => {
    const response = await request(app.getHttpServer())
      .post('/api/v1/books')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        title: 'Test Book',
        isbn13: '9789943123456',
        publishYear: 2024,
        language: 'uz'
      });
    
    expect(response.status).toBe(201);
    expect(response.body.data.book).toHaveProperty('id');
  });

  it('/books (POST) - Duplicate ISBN', async () => {
    const response = await request(app.getHttpServer())
      .post('/api/v1/books')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        title: 'Test Book 2',
        isbn13: '9789943123456', // Duplicate
      });
    
    expect(response.status).toBe(409);
    expect(response.body.code).toBe('BOOK-011');
  });

  it('/books/search (GET) - Full-text search', async () => {
    const response = await request(app.getHttpServer())
      .get('/api/v1/books/search?q=navoiy')
      .set('Authorization', `Bearer ${userToken}`);
    
    expect(response.status).toBe(200);
    expect(response.body.data.books).toBeInstanceOf(Array);
    expect(response.body.data.searchMetadata.queryTime).toBeLessThan(500);
  });
});
```

---

## 11. MIGRATION PLAN

### 11.1. Database Migration

```bash
# Generate migration
npx prisma migrate dev --name init_book_module

# Apply to production
npx prisma migrate deploy

# Create full-text search index
npx prisma db execute --file ./sql/fulltext_search.sql

# Seed initial data
npx prisma db seed
```

### 11.2. Rollback Plan

```bash
# Rollback last migration
npx prisma migrate resolve --rolled-back "migration_name"

# Restore from backup
pg_restore -d library_db backup_2025-11-19.sql
```

### 11.3. Deployment Checklist

- [ ] Database migrations applied
- [ ] Full-text search index created
- [ ] Redis cache configured
- [ ] MinIO storage configured
- [ ] External API keys configured (Google Books)
- [ ] Queue workers started
- [ ] Rate limiting enabled
- [ ] Monitoring alerts setup
- [ ] Backup completed
- [ ] Rollback scripts tested

---

## 12. ALTERNATIV YECHIMLAR

### 12.1. Search Engine Alternatives

| Variant | Pros | Cons | Decision |
|---------|------|------|----------|
| PostgreSQL Full-Text | Built-in, no extra infra | Limited for 100k+ books | ✅ Selected (v1.0) |
| Elasticsearch | Powerful, scalable | Extra infrastructure, cost | ⏳ v2.0 |
| Algolia | Easy, fast | Expensive, external | ❌ Rejected |

### 12.2. Import Processing Alternatives

| Variant | Pros | Cons | Decision |
|---------|------|------|----------|
| Sync Processing | Simple, immediate | Blocks request, timeout | ❌ Rejected |
| **Queue (BullMQ)** | Async, scalable, retry | Extra infrastructure | ✅ Selected |
| Serverless Functions | Auto-scale, pay-per-use | Cold start, vendor lock | ⏳ v2.0 |

### 12.3. ISBN Lookup Alternatives

| Variant | Pros | Cons | Decision |
|---------|------|------|----------|
| Google Books API | Comprehensive, free | Rate limits, downtime | ✅ Primary |
| Open Library API | Open, no auth | Less data | ✅ Fallback |
| Internal DB | Fast, reliable | Limited coverage | ✅ Fallback 2 |
| Manual Entry | Always works | Time consuming | ✅ Last resort |

---

## 13. RISK ASSESSMENT

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| External API downtime | Medium | Medium | Fallback strategy, caching |
| Import job failure | Medium | High | Retry logic, error reports |
| Database performance | Low | High | Indexing, query optimization |
| File storage full | Low | Medium | Monitoring, auto-cleanup |
| ISBN duplicates | Medium | Low | Unique constraint, validation |
| Cache inconsistency | Low | Medium | Event-driven invalidation |

### 13.1. Monitoring & Alerting

```yaml
# Prometheus alerts
alerts:
  - alert: HighBookSearchLatency
    expr: histogram_quantile(0.95, rate(book_search_duration_seconds_bucket[5m])) > 0.5
    for: 5m
    
  - alert: ImportQueueBacklog
    expr: bullmq_queue_length{queue="import"} > 100
    for: 5m
    
  - alert: ExternalAPITimeout
    expr: rate(book_isbn_lookup_timeouts_total[5m]) > 0.1
    for: 5m
```

---

## 14. APPROVAL

### 14.1. Reviewers

| Role | Name | Status | Date |
|------|------|--------|------|
| Senior Architect | [Name] | ⏳ Pending | - |
| Tech Lead | [Name] | ⏳ Pending | - |
| Security Lead | [Name] | ⏳ Pending | - |
| Product Owner | [Name] | ⏳ Pending | - |

### 14.2. Approval Criteria

- [ ] All security requirements met
- [ ] Performance targets achievable
- [ ] Test coverage > 80%
- [ ] Documentation complete
- [ ] Rollback plan tested
- [ ] External API fallbacks configured

### 14.3. Sign-Off

```
┌─────────────────────────────────────────────────────────────┐
│  RFC Status: DRAFT → REVIEW → APPROVED → IMPLEMENTED        │
│                                                             │
│  Next Step: Team review → Feedback → Final approval         │
│  Timeline: 3 days for review, 2 weeks for implementation    │
└─────────────────────────────────────────────────────────────┘
```

---

## 15. ILOVALAR

### A. Environment Variables

```bash
# Database
DATABASE_URL="postgresql://user:pass@localhost:5432/library_db"

# Redis
REDIS_HOST="localhost"
REDIS_PORT="6379"
REDIS_PASSWORD=""

# MinIO (File Storage)
MINIO_ENDPOINT="localhost:9000"
MINIO_ACCESS_KEY="minioadmin"
MINIO_SECRET_KEY="minioadmin"
MINIO_BUCKET="library-books"

# External APIs
GOOGLE_BOOKS_API_KEY="your-api-key"
OPEN_LIBRARY_API_URL="https://openlibrary.org"

# Queue
BULLMQ_PREFIX="library"
BULLMQ_CONCURRENCY="5"

# Import Limits
IMPORT_MAX_FILE_SIZE="52428800"
IMPORT_MAX_ROWS="1000"
IMPORT_RATE_LIMIT="5"
```

### B. Excel Import Template

| Column | Required | Type | Validation |
|--------|----------|------|------------|
| title | ✅ | String | Min 3, Max 200 |
| isbn13 | ❌ | String | 13 digits, unique |
| isbn10 | ❌ | String | 10 digits |
| author | ✅ | String | Min 2 chars |
| publisher | ❌ | String | Max 100 |
| publishYear | ❌ | Number | 1000-current |
| language | ❌ | String | uz/ru/en |
| pageCount | ❌ | Number | > 0 |
| genre | ❌ | String | Existing genre |
| quantity | ❌ | Number | 1-1000 |

### C. Error Codes

| Code | Message | Solution |
|------|---------|----------|
| BOOK-010 | Title must be between 3 and 200 characters | Check title length |
| BOOK-011 | ISBN-13 already exists | Use different ISBN |
| BOOK-014 | Author not found | Create author first |
| BOOK-020 | Insufficient permissions | Contact admin |
| BOOK-040 | Invalid ISBN format | Check ISBN format |
| BOOK-041 | Book not found in external databases | Try manual entry |
| BOOK-042 | External API timeout | Try again later |
| BOOK-050 | Quantity must be between 1 and 1000 | Check quantity |
| BOOK-060 | Invalid file type | Use .xlsx format |
| BOOK-080 | Cannot delete book with active rents | Return books first |

### D. Barcode Format

```
Format: BC{YYYYMMDD}{SEQUENCE}
Example: BC2025111900001

- BC: Prefix (Book Copy)
- YYYYMMDD: Date
- SEQUENCE: Daily sequence (00001-99999)
```

---

## ✅ XULOSA

Ushbu RFC **Book Module** uchun to'liq texnik yo'riqnoma hisoblanadi. Barcha xavfsizlik, performance va functional talablar belgilangan. API endpointlar uchun to'liq request/response misollari kiritilgan.

**Keyingi Qadam:** Team review → Feedback → Final approval → Implementation

---

| Dokument | Versiya | Sana | Muallif |
|----------|---------|------|---------|
| RFC-BOOK-002 | 1.0 | 2025-11-19 | Senior Architecture Team |

---

**🎯 RFC To'liq Tayyor!**

Endi quyidagi variantlardan birini tanlang:

1. **✅ RFC Review** - Jamoa bilan ko'rib chiqish, feedback olish
2. **📚 Keyingi Module Flow** - Rent Module uchun flow yozish
3. **📚 Keyingi Module RFC** - Rent Module uchun RFC yozish
4. **🔔 Notification Module Flow** - Notification uchun flow

**Qaysi birini bajaray?** 🚀