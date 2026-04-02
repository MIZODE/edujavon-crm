# 📊 Loyiha Tuzilishi - Qismlar Soni

Loyihani **to'liq tahlil qilib chiqdim**. Quyida barcha qismlar (modullar) keltirilgan:

## 🎯 Asosiy Modullar (15 ta)

| # | Module | Vazifasi | Sprint |
|---|--------|----------|--------|
| 1 | **Auth** | Login, Register, JWT, Session | Sprint 1 |
| 2 | **User** | Foydalanuvchi profili, Telegram verification | Sprint 1 |
| 3 | **Book** | Kitoblar, ISBN auto-fill, Import | Sprint 2 |
| 4 | **BookCopy** | Nusxalar, Barcode, QR, Joylashuv | Sprint 2 |
| 5 | **Rent** | Ijara berish, Qaytarish, Extension | Sprint 3 |
| 6 | **Fine** | Jarima hisoblash, To'lov | Sprint 3 |
| 7 | **Reservation** | Bron qilish, Navbat tizimi | Sprint 4 |
| 8 | **Notification** | Telegram bot, Bildirishnomalar | Sprint 4 |
| 9 | **Search** | Qidiruv, Filtrlar, Sort | Sprint 5 |
| 10 | **Review** | Sharhlar, Reytinglar, Moderatsiya | Sprint 6 |
| 11 | **Favorite** | Sevimlilar, Wishlist | Sprint 6 |
| 12 | **Gamification** | Yutuqlar, Levels, Leaderboard | Sprint 7 |
| 13 | **Report** | Dashboard, Analitika, Hisobotlar | Sprint 8 |
| 14 | **Audit** | Loglar, Xavfsizlik kuzatuvi | Sprint 8 |
| 15 | **HR** | Xodimlar boshqaruvi | Sprint 8 |

---

## 📁 Prisma Schema Bo'yicha Guruhlar (10 ta)

```
┌─────────────────────────────────────────────────────────┐
│  1. AUTH & USER         → User, Staff, Session          │
│  2. LIBRARY & BRANCH    → Library, Branch               │
│  3. BOOK CATALOG        → Book, Author, Publisher...    │
│  4. LOCATION & STORAGE  → Location, Shelf               │
│  5. RENT & RESERVATION  → Rent, Reservation, WaitingList│
│  6. PAYMENT & FINE      → Fine, Payment                 │
│  7. SOCIAL & GAMIFICATION → Review, Rating, Achievement │
│  8. NOTIFICATIONS       → Notification, Template        │
│  9. IMPORT & AUDIT      → ImportLog, AuditLog           │
│  10. TRANSFER & SYSTEM  → Transfer, SystemSetting       │
└─────────────────────────────────────────────────────────┘
```

---

## 📊 Database Modellar (30+)

| Kategoriya | Modellar Soni |
|------------|---------------|
| User & Auth | 3 |
| Library & Branch | 2 |
| Book Catalog | 6 |
| Location & Storage | 2 |
| Rent & Reservation | 3 |
| Payment & Fine | 2 |
| Social & Gamification | 6 |
| Notifications | 2 |
| Import & Audit | 2 |
| Transfer & System | 2 |
| **JAMI** | **30+ model** |

---

## 📋 Enums (15 ta)

```
UserRole, BookCopyStatus, ReservationStatus, RentStatus,
NotificationType, NotificationChannel, ImportStatus,
AuditAction, MembershipType, PaymentStatus, PaymentMethod...
```

---

## 🚀 Sprint Rejasi (11 ta Sprint)

| Sprint | Davomiyligi | Modulelar |
|--------|-------------|-----------|
| Sprint 0 | 1 hafta | Foundation |
| Sprint 1-8 | 2 hafta har biri | Core Features |
| Sprint 9 | 2 hafta | PWA + Testing |
| Sprint 10 | 2 hafta | Deployment |
| **JAMI** | **21 hafta** | **Full Release** |

---

## ✅ XULOSA

| Kategoriya | Soni |
|------------|------|
| **Asosiy Modullar** | 15 ta |
| **Database Modellar** | 30+ |
| **Enum Turlari** | 15 ta |
| **Sprintlar** | 11 ta |
| **Rollar** | 6 ta |
| **Integratsiyalar** | 5+ ta |

---

## 🎯 Qaysi Qismdan Boshlaymiz?

Har bir qismni **alohida-alohida** ko'rib chiqamiz. Quyidagi tartibda ishlaymiz:

1. **🔐 Auth Module** (1-qism)
2. **👤 User Module** (2-qism)
3. **📚 Book Module** (3-qism)
4. **📋 Rent Module** (4-qism)
5. **🔔 Notification Module** (5-qism)
6. **📊 Report Module** (6-qism)
7. **🏗️ Infrastructure** (7-qism)

**Qaysi module'dan boshlaymiz?** Birinchisi **Auth Module** dan boshlashni tavsiya qilaman. 🎯