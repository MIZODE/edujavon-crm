# 📚 BOOK MODULE - FLOW DOCUMENT

## 📋 Flow Ma'lumotlari

| Parametr | Qiymat |
|----------|--------|
| **Module** | Book & Inventory |
| **Sprint** | Sprint 2 |
| **Priority** | P0 (Critical) |
| **Modellar** | `Book`, `BookCopy`, `Author`, `Publisher`, `Genre`, `Category`, `Location`, `Shelf`, `ImportLog` |
| **Holat** | Flow Draft |

---

## 🔄 1. KITOB YARATISH FLOW (Manual)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    QO'LDA KITOB QO'SHISH (MANUAL)                        │
└─────────────────────────────────────────────────────────────────────────┘

┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  1. Librarian│ ──→ │  2. Form     │ ──→ │  3. Validatsiya│ ──→ │  4. Author/  │
│  "Add Book"  │     │  To'ldirish  │     │  (ISBN unique)│     │  Publisher   │
│  Click       │     │  (Title,     │     │              │     │  Tanlash     │
│              │     │   ISBN, etc) │     │              │     │              │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
                                                                    │
                                                                    ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  7. Cache    │ ←── │  6. Audit    │ ←── │  5. Book     │ ←── │  4.2. Yangi  │
│  Invalidate  │     │  Log (CREATE)│     │  Create      │     │  Yaratish    │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
```

### 📝 Bosqichma-Bosqich Tavsif

| # | Bosqich | Input | Process | Output | Model |
|---|---------|-------|---------|--------|-------|
| 1 | Add Book click | - | Ruxsat tekshirish (LIBRARIAN+) | `allowed` | `Staff` |
| 2 | Form to'ldirish | `title, isbn13, publishYear, language, pageCount` | Validatsiya | `bookData` | - |
| 3 | Validatsiya | `isbn13` | Unique check (ISBN) | `unique` | `Book` |
| 4 | Author/Publisher | `authorIds, publisherId` | Mavjudligini tekshirish | `exists` | `Author`, `Publisher` |
| 4.2 | Yangi yaratish | `authorName` | Agar yo'q bo'lsa yaratish | `authorId` | `Author` |
| 5 | Book create | `bookData` | `status=DRAFT`, `isDraft=true` | `bookId` | `Book` |
| 6 | Audit log | - | `action=CREATE`, `entity=BOOK` | `auditId` | `AuditLog` |
| 7 | Cache invalidate | - | `book:*`, `search:*` cache tozalash | `cleared` | Redis |

---

## 🔄 2. KITOB YARATISH FLOW (ISBN Auto-Fill) ⭐

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    ISBN AUTO-FILL (Google Books API)                     │
└─────────────────────────────────────────────────────────────────────────┘

┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  1. ISBN     │ ──→ │  2. Google   │ ──→ │  3. Data     │ ──→ │  4. Fallback │
│  Kiritish    │     │  Books API   │     │  Parse       │     │  (Open       │
│  (13 digit)  │     │  Request     │     │  (JSON)      │     │   Library)   │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
                                                                    │
                                                                    ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  7. Cache    │ ←── │  6. Audit    │ ←── │  5. Book     │ ←── │  4.2. Manual │
│  Invalidate  │     │  Log         │     │  Create      │     │  Fill        │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
```

### 📝 Bosqichma-Bosqich Tavsif

| # | Bosqich | Input | Process | Output | Model |
|---|---------|-------|---------|--------|-------|
| 1 | ISBN kiritish | `isbn13` (13 digit) | Format validatsiya | `validISBN` | - |
| 2 | Google Books API | `isbn13` | API request (timeout: 5s) | `apiData` | External |
| 3 | Data parse | `apiData` | Title, authors, publisher, pages | `parsedData` | - |
| 4 | Fallback | - | Agar Google fails → Open Library API | `fallbackData` | External |
| 4.2 | Manual fill | - | Agar API fails → Qo'lda to'ldirish | `manualData` | - |
| 5 | Book create | `parsedData` | Auto-fill form, user confirms | `bookId` | `Book` |
| 6 | Audit log | - | `action=CREATE`, `source=ISBN_API` | `auditId` | `AuditLog` |
| 7 | Cache invalidate | - | `book:*`, `search:*` cache tozalash | `cleared` | Redis |

### ⚡ API Fallback Strategy

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Google     │ ──→ │  Open       │ ──→ │  Internal   │ ──→ │  Manual     │
│  Books API  │     │  Library API│     │  Database   │     │  Entry      │
│  (5s timeout)│     │  (5s timeout)│     │  Search     │     │             │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
```

| API | Priority | Timeout | Fallback |
|-----|----------|---------|----------|
| Google Books | 1 | 5s | Open Library |
| Open Library | 2 | 5s | Internal DB |
| Internal DB | 3 | 2s | Manual Entry |

---

## 🔄 3. BOOK COPY YARATISH FLOW (Batch)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    KITOB NUSXALARI (BATCH CREATE)                        │
└─────────────────────────────────────────────────────────────────────────┘

┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  1. Book     │ ──→ │  2. Copy     │ ──→ │  3. Barcode  │ ──→ │  4. Location │
│  Tanlash     │     │  Soni        │     │  Generatsiya │     │  Tanlash     │
│  (Search)    │     │  Kiritish    │     │  (Unique)    │     │  (Branch)    │
│              │     │  (1-1000)    │     │              │     │              │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
                                                                    │
                                                                    ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  7. QR Code  │ ←── │  6. Audit    │ ←── │  5. Batch    │ ←── │  4.2. Shelf  │
│  Generate    │     │  Log         │     │  Create      │     │  Tanlash     │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
```

### 📝 Bosqichma-Bosqich Tavsif

| # | Bosqich | Input | Process | Output | Model |
|---|---------|-------|---------|--------|-------|
| 1 | Book tanlash | `bookId` | Book mavjudligi | `book` | `Book` |
| 2 | Copy soni | `quantity` (1-1000) | Validatsiya | `qty` | - |
| 3 | Barcode generatsiya | `bookId, branchId` | Unique barcode (EAN-13) | `barcodes[]` | - |
| 4 | Location tanlash | `branchId` | Filial tanlash | `branch` | `Branch` |
| 4.2 | Shelf tanlash | `locationId, shelfId` | Joylashuv | `location` | `Location`, `Shelf` |
| 5 | Batch create | `barcodes[], bookId, branchId` | Transaction (bulk insert) | `copyIds[]` | `BookCopy` |
| 6 | Audit log | - | `action=CREATE`, `entity=BOOK_COPY` | `auditId` | `AuditLog` |
| 7 | QR Code generate | `copyIds[]` | QR code PDF generatsiya | `pdfUrl` | MinIO |

### 📊 Batch Create Performance

| Quantity | Expected Time | Transaction |
|----------|---------------|-------------|
| 1-10 | < 500ms | Single |
| 11-100 | < 2s | Batch |
| 101-500 | < 5s | Chunked (100) |
| 501-1000 | < 10s | Chunked (100) |

---

## 🔄 4. EXCEL IMPORT FLOW (Ommaviy Yuklash) ⭐

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    EXCEL IMPORT (BULK UPLOAD)                            │
└─────────────────────────────────────────────────────────────────────────┘

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

### 📝 Bosqichma-Bosqich Tavsif

| # | Bosqich | Input | Process | Output | Model |
|---|---------|-------|---------|--------|-------|
| 1 | Excel upload | `.xlsx` file | File type check (max 50MB) | `fileId` | MinIO |
| 2 | File upload | `fileId` | MinIO ga yuklash | `fileUrl` | MinIO |
| 3 | Queue job | `fileId, userId` | Import job create | `jobId` | BullMQ |
| 4 | Validate | `rows[]` | Row by row validation | `validRows[], errors[]` | - |
| 4.2 | Error collect | `errors[]` | Error log (line, column, reason) | `errorReport` | - |
| 5 | Create books | `validRows[]` | Batch create (chunk 100) | `bookIds[]` | `Book`, `ImportLog` |
| 6 | ImportLog update | `jobId` | `status=COMPLETED/FAILED` | `importLog` | `ImportLog` |
| 7 | Report generate | `errorReport` | Excel report with errors | `reportUrl` | MinIO |

### 📋 Excel Template Structure

| Column | Required | Type | Validation |
|--------|----------|------|------------|
| title | ✅ | String | Min 3, Max 200 |
| isbn13 | ❌ | String | 13 digits, unique |
| author | ✅ | String | Min 2 chars |
| publisher | ❌ | String | Max 100 |
| publishYear | ❌ | Number | 1000-current |
| language | ❌ | String | uz/ru/en |
| pageCount | ❌ | Number | > 0 |
| genre | ❌ | String | Existing genre |
| quantity | ❌ | Number | 1-1000 |

### ⚡ Import Status Flow

```
PENDING → PROCESSING → COMPLETED/PARTIAL/FAILED
```

| Status | Description |
|--------|-------------|
| PENDING | Job queued |
| PROCESSING | Import in progress |
| COMPLETED | 100% success |
| PARTIAL | Some rows failed |
| FAILED | Critical error |

---

## 🔄 5. KITOB YANGILASH FLOW (Update)

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  1. Book     │ ──→ │  2. JWT      │ ──→ │  3. Data     │ ──→ │  4. Validatsiya│
│  Edit Form   │     │  Verify      │     │  O'zgartirish│     │  (ISBN unique)│
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
                                                                    │
                                                                    ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  7. Cache    │ ←── │  6. Audit    │ ←── │  5. DB       │ ←── │  4.2. Conflict │
│  Invalidate  │     │  Log (UPDATE)│     │  Update      │     │  Check        │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
```

### 📝 Bosqichma-Bosqich Tavsif

| # | Bosqich | Input | Process | Output | Model |
|---|---------|-------|---------|--------|-------|
| 1 | Edit form | `bookId, title, isbn, description...` | Validatsiya | `data` | - |
| 2 | JWT verify | `accessToken` | User/Staff ID olish | `userId` | `Session` |
| 3 | Data o'zgartirish | `data` | Oldingi qiymatlarni saqlash | `oldValue` | - |
| 4 | Validatsiya | `isbn13` | Unique check (boshqa book) | `valid` | `Book` |
| 4.2 | Conflict check | `isbn` | Boshqa book yo'qligi | `allowed` | `Book` |
| 5 | DB update | `bookId`, `data` | `updatedAt=now()` | `updated` | `Book` |
| 6 | Audit log | - | `action=UPDATE`, `oldValue`, `newValue` | `auditId` | `AuditLog` |
| 7 | Cache invalidate | `bookId` | `book:{id}`, `search:*` cache tozalash | `cleared` | Redis |

### 📊 Audit Log Example

```json
{
  "action": "UPDATE",
  "entity": "BOOK",
  "entityId": "book_uuid",
  "userId": "staff_uuid",
  "oldValue": {
    "title": "Old Title",
    "isbn13": "9781234567890"
  },
  "newValue": {
    "title": "New Title",
    "isbn13": "9781234567891"
  }
}
```

---

## 🔄 6. KITOB O'CHIRISH FLOW (Soft Delete)

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  1. Delete   │ ──→ │  2. Check    │ ──→ │  3. Copy     │ ──→ │  4. Soft     │
│  Click       │     │  Active Rents│     │  Status      │     │  Delete      │
│              │     │              │     │  Check       │     │  (deletedAt) │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
                                                                    │
                                                                    ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  7. Admin    │ ←── │  6. Cache    │ ←── │  5. Audit    │ ←── │  4.2. Book   │
│  Notification│     │  Invalidate  │     │  Log (DELETE)│     │  Copies Hide │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
```

### 📝 Bosqichma-Bosqich Tavsif

| # | Bosqich | Input | Process | Output | Model |
|---|---------|-------|---------|--------|-------|
| 1 | Delete click | `bookId` | Ruxsat tekshirish (MANAGER+) | `allowed` | `Staff` |
| 2 | Active rents check | `bookId` | Faol ijara yo'qligi | `noRents` | `Rent` |
| 3 | Copy status check | `bookId` | AVAILABLE statusdagi copylar | `availableCopies` | `BookCopy` |
| 4 | Soft delete | `bookId` | `deletedAt=now()` | `deleted` | `Book` |
| 4.2 | Book copies hide | `bookId` | Copylarni ham soft delete | `copiesHidden` | `BookCopy` |
| 5 | Audit log | - | `action=DELETE`, `entity=BOOK` | `auditId` | `AuditLog` |
| 6 | Cache invalidate | `bookId` | `book:{id}`, `search:*` cache | `cleared` | Redis |
| 7 | Admin notification | - | Delete haqida xabar | `notified` | `Notification` |

### ⚠️ Delete Constraints

| Constraint | Check | Error |
|------------|-------|-------|
| Active Rents | `Rent.status = ACTIVE` | "Kitobda faol ijara bor" |
| Active Reservations | `Reservation.status = PENDING/APPROVED` | "Kitobda faol bron bor" |
| Book Copies | `BookCopy.status != AVAILABLE` | "Mavjud nusxalar bor" |

---

## 🔄 7. BOOK COPY STATUS O'ZGARISH FLOW

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    BOOK COPY STATUS CHANGE                               │
└─────────────────────────────────────────────────────────────────────────┘

┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  1. Copy     │ ──→ │  2. Current  │ ──→ │  3. New      │ ──→ │  4. Validatsiya│
│  Scan        │     │  Status      │     │  Status      │     │  (Transition │
│  (Barcode)   │     │  Check       │     │  Select      │     │   Rules)     │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
                                                                    │
                                                                    ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  7. Notify   │ ←── │  6. Audit    │ ←── │  5. Status   │ ←── │  4.2. Reason │
│  (WaitingList)│    │  Log         │     │  Update      │     │  (If needed) │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
```

### 📝 Status Transition Rules

| From \ To | AVAILABLE | RESERVED | ON_RENT | LOST | DAMAGED | UNDER_REPAIR | WITHDRAWN |
|-----------|-----------|----------|---------|------|---------|--------------|-----------|
| AVAILABLE | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| RESERVED | ✅ | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| ON_RENT | ✅ | ❌ | - | ✅ | ✅ | ✅ | ✅ |
| LOST | ❌ | ❌ | ❌ | - | ❌ | ❌ | ✅ |
| DAMAGED | ✅ | ❌ | ❌ | ❌ | - | ✅ | ✅ |
| UNDER_REPAIR | ✅ | ❌ | ❌ | ❌ | ✅ | - | ✅ |
| WITHDRAWN | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | - |

### 📝 Bosqichma-Bosqich Tavsif

| # | Bosqich | Input | Process | Output | Model |
|---|---------|-------|---------|--------|-------|
| 1 | Copy scan | `barcode` | Barcode lookup | `bookCopy` | `BookCopy` |
| 2 | Current status | `bookCopy.status` | Current status check | `currentStatus` | `BookCopy` |
| 3 | New status | `newStatus` | Status select | `newStatus` | - |
| 4 | Validatsiya | `currentStatus, newStatus` | Transition rules check | `allowed` | - |
| 4.2 | Reason | `reason` | Agar LOST/DAMAGED bo'lsa | `reason` | - |
| 5 | Status update | `bookCopyId, newStatus` | `updatedAt=now()` | `updated` | `BookCopy` |
| 6 | Audit log | - | `action=UPDATE`, `entity=BOOK_COPY` | `auditId` | `AuditLog` |
| 7 | Notify | `bookId` | WaitingList ga xabar (agar AVAILABLE) | `notified` | `Notification` |

---

## 🔄 8. KITOB QIDIRUV FLOW (Search)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    BOOK SEARCH (Full-Text + Filters)                     │
└─────────────────────────────────────────────────────────────────────────┘

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

### 📝 Bosqichma-Bosqich Tavsif

| # | Bosqich | Input | Process | Output | Model |
|---|---------|-------|---------|--------|-------|
| 1 | Search query | `q, genre, year, language, branch` | Query parse | `searchParams` | - |
| 2 | Query parse | `searchParams` | Keywords extract | `keywords[]` | - |
| 3 | Cache check | `searchParams hash` | Redis cache lookup | `cachedResults` | Redis |
| 4 | DB search | `keywords[]` | PostgreSQL Full-Text (GIN) | `books[]` | `Book` |
| 4.2 | Full-Text | `title, subtitle` | `to_tsvector` search | `rankedBooks[]` | `Book` |
| 5 | Filter/Sort | `books[]` | Genre, year, availability | `filteredBooks[]` | `Book` |
| 6 | Cache set | `searchParams hash, results` | TTL: 5 min | `cached` | Redis |
| 7 | Response | `filteredBooks[]` | Pagination + metadata | `response` | - |

### 🔍 Search Query Example

```
GET /api/v1/books/search?q=alisher+navoi&genre=adabiyot&year=2020-2025&language=uz&available=true&page=1&limit=20
```

### ⚡ Search Performance Targets

| Query Type | Target (p95) | Optimization |
|------------|--------------|--------------|
| Simple search | < 100ms | GIN Index |
| Advanced filter | < 500ms | Composite Index |
| Full-text | < 200ms | Full-Text Search |
| Suggestions | < 50ms | Cache + Trie |

---

## 📊 FLOW STATISTIKASI

| Flow | Bosqich | Modellar | Redis | Queue | Audit | Cache |
|------|---------|----------|-------|-------|-------|-------|
| Book Create (Manual) | 7 | Book, Author, Publisher | ✅ | - | ✅ | ✅ |
| Book Create (ISBN) | 7 | Book, Author, Publisher | ✅ | - | ✅ | ✅ |
| BookCopy Batch | 7 | BookCopy, Branch, Location | ✅ | - | ✅ | ✅ |
| Excel Import | 7 | Book, ImportLog | ✅ | ✅ | ✅ | ✅ |
| Book Update | 7 | Book | ✅ | - | ✅ | ✅ |
| Book Delete | 7 | Book, BookCopy | ✅ | - | ✅ | ✅ |
| Copy Status Change | 7 | BookCopy | ✅ | - | ✅ | ✅ |
| Book Search | 7 | Book | ✅ | - | - | ✅ |

---

## ⚠️ MUHIM ESLATMALAR

### 🔐 Xavfsizlik
| Element | Talab |
|---------|-------|
| Role Check | LIBRARIAN+ for create/update |
| Role Check | MANAGER+ for delete |
| Audit | Barcha o'zgarishlar logda |
| Rate Limiting | Import: 5/hour, Search: 30/min |

### 🗄️ Database
| Element | Talab |
|---------|-------|
| Soft Delete | Barcha modellar `deletedAt` field |
| Unique | `isbn10`, `isbn13`, `barcode`, `qrCode` |
| Index | GIN index for full-text search |
| Transaction | Book + BookCopy create |

### ⚡ Performance
| Element | Target |
|---------|--------|
| Book Create | < 500ms |
| Batch Copy (100) | < 2s |
| Excel Import (1000) | < 5 min (async) |
| Search | < 200ms (p95) |
| Cache Hit Rate | > 80% (search) |

### 📦 Import Validation
| Rule | Error Message |
|------|---------------|
| ISBN unique | "ISBN allaqachon mavjud" |
| Title required | "Nomi majburiy" |
| Author required | "Muallif majburiy" |
| Year range | "Nashr yili 1000-{current} oralig'ida" |

---
