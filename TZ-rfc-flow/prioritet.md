# 📊 30 ta Prisma Modeli - To'liq Ro'yxat va Prioritet

Men `prisma.txt` faylidagi barcha modellarini tahlil qilib chiqdim. Jami **30 ta model** mavjud. Quyida ularni **biznes ahamiyati** va **rivojlantirish tartibi (Sprint)** bo'yicha guruhladi.

## 📋 Barcha Modellar Ro'yxati (30 ta)

| # | Model | Kategoriya | Qisqacha Vazifasi |
|---|-------|------------|-------------------|
| 1 | `User` | Auth & User | Asosiy foydalanuvchi |
| 2 | `Staff` | Auth & User | Kutubxona xodimi |
| 3 | `Session` | Auth & User | Login sessiyalari (JWT) |
| 4 | `Library` | Library & Branch | Kutubxona tarmog'i (HQ) |
| 5 | `Branch` | Library & Branch | Konkret filial |
| 6 | `Author` | Book Catalog | Kitob mualliflari |
| 7 | `Publisher` | Book Catalog | Nashriyotlar |
| 8 | `Genre` | Book Catalog | Janrlar (Ierarxik) |
| 9 | `Category` | Book Catalog | Kategoriyalar (DDC/UDC) |
| 10 | `Book` | Book Catalog | Kitob katalogi (Asar) |
| 11 | `BookCopy` | Book Catalog | Kitob nusxasi (Jismoniy) |
| 12 | `Location` | Location & Storage | Xona/Zal (Filial ichida) |
| 13 | `Shelf` | Location & Storage | Javon (Joylashuv) |
| 14 | `Rent` | Rent & Reservation | Ijara jarayoni |
| 15 | `Reservation` | Rent & Reservation | Bron qilish |
| 16 | `WaitingList` | Rent & Reservation | Navbat (Kitob yo'q bo'lsa) |
| 17 | `Fine` | Payment & Fine | Jarimalar |
| 18 | `Payment` | Payment & Fine | To'lovlar (Jarima/A'zolik) |
| 19 | `Review` | Social & Gamification | Sharhlar |
| 20 | `Rating` | Social & Gamification | Reytinglar (1-5) |
| 21 | `Favorite` | Social & Gamification | Sevimlilar ro'yxati |
| 22 | `ReadingGoal` | Social & Gamification | O'qish maqsadlari |
| 23 | `Achievement` | Social & Gamification | Yutuq shablonlari |
| 24 | `UserAchievement` | Social & Gamification | Foydalanuvchi yutuqlari |
| 25 | `NotificationTemplate` | Notifications | Bildirishnoma shablonlari |
| 26 | `Notification` | Notifications | Yuborilgan xabarlar |
| 27 | `ImportLog` | Import & Audit | Excel import tarixi |
| 28 | `AuditLog` | Import & Audit | Xavfsizlik audit logi |
| 29 | `Transfer` | Transfer & System | Filiallararo kitob ko'chirish |
| 30 | `SystemSetting` | Transfer & System | Global sozlamalar |

---

## 🚀 Prioritet Bo'yicha Tasniflash (Development Order)

Men ushbu modellarini **4 ta prioritet darajasiga** ajratdim. Bu sizning **Sprint Rejangizga** to'liq mos keladi.

### 🔴 P0: Critical (Tizim Yuragi) - Sprint 0-3
*Bularsiz tizim ishlamaydi. Birinchi navbatda quriladi.*

| Model | Sabab | Sprint |
|-------|-------|--------|
| `User` | Tizimda kim bor? (Auth asosi) | Sprint 1 |
| `Session` | Xavfsiz kirish (JWT/Refresh) | Sprint 1 |
| `Library` | Tarmoq strukturasi | Sprint 0 |
| `Branch` | Xizmat ko'rsatish joyi | Sprint 0 |
| `Book` | Nima ijaraga beriladi? | Sprint 2 |
| `BookCopy` | Jismoniy nusxa (Barcode) | Sprint 2 |
| `Rent` | Asosiy biznes jarayon (Ijara) | Sprint 3 |
| `SystemSetting` | Jarima stavkalari, sozlamalar | Sprint 0 |

### 🟠 P1: High (Operatsion Zarur) - Sprint 3-5
*Tizim ishlaydi, lekin to'liq funksional bo'lishi uchun shart.*

| Model | Sabab | Sprint |
|-------|-------|--------|
| `Staff` | Xodimlar boshqaruvi (Librarian) | Sprint 1 |
| `Author` | Kitob katalogi to'liqligi | Sprint 2 |
| `Genre` | Qidiruv va filtr uchun | Sprint 2 |
| `Fine` | Jarima hisoblash (Rent bog'liq) | Sprint 3 |
| `Reservation` | Kitob band qilish | Sprint 4 |
| `Notification` | Telegram bot (Verifikatsiya) | Sprint 1 & 4 |
| `AuditLog` | Xavfsizlik va kuzatuv | Sprint 1 |
| `Location` & `Shelf` | Inventarizatsiya (Qayerda turibdi?) | Sprint 2 |

### 🟡 P2: Medium (Foydalanuvchi Tajribasi) - Sprint 6-7
*Tizimni qulay va jozibali qiladi.*

| Model | Sabab | Sprint |
|-------|-------|--------|
| `Review` & `Rating` | Ijtimoiy ishonch (Social Proof) | Sprint 6 |
| `Favorite` | Foydalanuvchi qulayligi | Sprint 6 |
| `Payment` | To'lov tarixi (Hozirda Naqd) | Sprint 3 |
| `NotificationTemplate` | Xabarlarni boshqarish | Sprint 4 |
| `Publisher` & `Category` | Katalog boyitish | Sprint 2 |
| `ImportLog` | Ommaviy yuklash | Sprint 2 |

### 🟢 P3: Low (Kelajak/Enhancement) - Sprint 7+
*MVP dan keyin qo'shilsa ham bo'ladi (Gamification & Logistics).*

| Model | Sabab | Sprint |
|-------|-------|--------|
| `Achievement` & `UserAchievement` | Gamification (Yutuqlar) | Sprint 7 |
| `ReadingGoal` | O'qish maqsadlari | Sprint 6 |
| `WaitingList` | Reservation alternativi | Sprint 4 |
| `Transfer` | Filiallararo logistika | Sprint 5 |
| `Staff` (Advanced) | Maosh, KPI (v2.0) | Sprint 8 |

---
