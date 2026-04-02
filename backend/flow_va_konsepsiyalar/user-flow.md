# 👤 USER MODULE - FLOW DOCUMENT

## 📋 Flow Ma'lumotlari

| Parametr | Qiymat |
|----------|--------|
| **Module** | User & Auth |
| **Sprint** | Sprint 1 |
| **Priority** | P0 (Critical) |
| **Modellar** | `User`, `Session`, `Staff` |
| **Holat** | Flow Draft |

---

## 🔄 1. RO'YXATDAN O'TISH FLOW (Registration)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    TELEGRAM BOT ORQALI VERIFIKATSIYA                     │
└─────────────────────────────────────────────────────────────────────────┘

┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  1. Botga    │ ──→ │  2. Telefon  │ ──→ │  3. Web      │ ──→ │  4. Telegram │
│  /start      │     │  yuborish    │     │  Form to'ldirish│   │  Kod yuborish│
│  bosish      │     │  (Share)     │     │  (fullName,   │     │  (6 xonali)  │
│              │     │              │     │   password)   │     │              │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
                                                                    │
                                                                    ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  7. JWT      │ ←── │  6. Session  │ ←── │  5. Kod      │ ←── │  4.2. Kod    │
│  Token       │     │  Yaratish    │     │  Tasdiqlash  │     │  Tekshirish  │
│  Berish      │     │              │     │              │     │              │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
```

### 📝 Bosqichma-Bosqich Tavsif

| # | Bosqich | Input | Process | Output | Model |
|---|---------|-------|---------|--------|-------|
| 1 | Botga start | `/start` | `telegramId`, `telegramChatId` saqlash (Redis) | `tempId` | Redis |
| 2 | Telefon yuborish | `+998901234567` | Telefon validatsiya, Redis ga saqlash | `verifyToken` | Redis |
| 3 | Web form | `fullName, password, passwordConfirm` | Password hash (BCrypt 12 rounds) | `userData` | - |
| 4 | Telegram kod | - | 6 xonali kod generatsiya, Bot orqali yuborish | `codeHash` | Redis |
| 4.2 | Kod tekshirish | `6 xonali kod` | Hash solishtirish, 3 urinish | `verified` | Redis |
| 5 | Kod tasdiqlash | `verified=true` | User DB ga yozish, `isVerified=true` | `userId` | `User` |
| 6 | Session yaratish | `userId` | Access + Refresh token generatsiya | `tokens` | `Session` |
| 7 | JWT berish | - | Response qaytarish | `accessToken, refreshToken` | - |

---

## 🔄 2. LOGIN FLOW (Authentication)

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  1. Login    │ ──→ │  2. User     │ ──→ │  3. Password │ ──→ │  4. Session  │
│  Form        │     │  Qidirish    │     │  Tekshirish  │     │  Yaratish    │
│  (phone/     │     │  (phone/     │     │  (BCrypt     │     │  (JWT +      │
│   email)     │     │   email)     │     │   compare)   │     │   Refresh)   │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
                                                                    │
                                                                    ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  7. Audit    │ ←── │  6. Last     │ ←── │  5. User     │ ←── │  4.2. Token  │
│  Log Yozish  │     │  Login       │     │  Status      │     │  Hash        │
│  (LOGIN)     │     │  Update      │     │  Tekshirish  │     │  (SHA256)    │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
```

### 📝 Bosqichma-Bosqich Tavsif

| # | Bosqich | Input | Process | Output | Model |
|---|---------|-------|---------|--------|-------|
| 1 | Login form | `phone/email`, `password` | Validatsiya | `credentials` | - |
| 2 | User qidirish | `phone/email` | DB dan user topish | `user` | `User` |
| 3 | Password tekshirish | `password`, `user.password` | BCrypt compare | `isValid` | - |
| 4 | Session yaratish | `userId` | Access (15min) + Refresh (7 kun) | `tokens` | `Session` |
| 4.2 | Token hash | `token` | SHA256 hash, DB ga saqlash | `hashedToken` | `Session` |
| 5 | User status | `user.isBlocked`, `user.isActive` | Blok/aktiv tekshirish | `allowed` | `User` |
| 6 | Last login update | `userId` | `lastLoginAt=now()` | `updated` | `User` |
| 7 | Audit log | - | `action=LOGIN` yozish | `auditId` | `AuditLog` |

---

## 🔄 3. PAROLNI TIKLASH FLOW (Reset Password)

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  1. "Parolni │ ──→ │  2. User     │ ──→ │  3. Telegram │ ──→ │  4. Kod      │
│  unutdim"    │     │  Qidirish    │     │  Botga kod   │     │  Yuborish    │
│  Click       │     │  (phone)     │     │  yuborish    │     │  (6 xonali)  │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
                                                                    │
                                                                    ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  7. Session  │ ←── │  6. Password │ ←── │  5. Kod      │ ←── │  4.2. Kod    │
│  Revoke      │     │  Update      │     │  Tasdiqlash  │     │  Tekshirish  │
│  (Barcha)    │     │  (BCrypt)    │     │              │     │              │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
```

### 📝 Bosqichma-Bosqich Tavsif

| # | Bosqich | Input | Process | Output | Model |
|---|---------|-------|---------|--------|-------|
| 1 | Reset so'rov | `phone` | Validatsiya | `phone` | - |
| 2 | User qidirish | `phone` | DB dan user topish | `user` | `User` |
| 3 | Telegram bot | `telegramChatId` | Chat ID topish | `chatId` | `User` |
| 4 | Kod yuborish | - | 6 xonali kod, 5 daqiqa | `codeHash` | Redis |
| 4.2 | Kod tekshirish | `6 xonali kod` | Hash solishtirish | `verified` | Redis |
| 5 | Kod tasdiqlash | `verified=true` | Reset token yaratish | `resetToken` | Redis |
| 6 | Password update | `newPassword`, `resetToken` | BCrypt hash, DB update | `updated` | `User` |
| 7 | Session revoke | `userId` | Barcha sessionlarni o'chirish | `revoked` | `Session` |

---

## 🔄 4. PROFIL YANGILASH FLOW (Update Profile)

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  1. Profile  │ ──→ │  2. JWT      │ ──→ │  3. Data     │ ──→ │  4. Validatsiya│
│  Edit Form   │     │  Verify      │     │  O'zgartirish│     │  (Email unique)│
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
| 1 | Profile form | `fullName, email, phone, address...` | Validatsiya | `data` | - |
| 2 | JWT verify | `accessToken` | User ID olish | `userId` | `Session` |
| 3 | Data o'zgartirish | `data` | Oldingi qiymatlarni saqlash | `oldValue` | - |
| 4 | Validatsiya | `email, phone` | Unique check | `valid` | `User` |
| 4.2 | Conflict check | `email/phone` | Boshqa user yo'qligi | `allowed` | `User` |
| 5 | DB update | `userId`, `data` | `updatedAt=now()` | `updated` | `User` |
| 6 | Audit log | - | `action=UPDATE`, `oldValue`, `newValue` | `auditId` | `AuditLog` |
| 7 | Cache invalidate | `userId` | `user:{id}` cache tozalash | `cleared` | Redis |

---

## 🔄 5. TELEGRAM BOGLASH FLOW (Link Telegram)

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  1. Botda    │ ──→ │  2. Link     │ ──→ │  3. Web      │ ──→ │  4. User     │
│  /link       │     │  Token       │     │  Login       │     │  Qidirish    │
│  bosish      │     │  Generatsiya │     │  (JWT)       │     │  (token)     │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
                                                                    │
                                                                    ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  7. Botga    │ ←── │  6. Cache    │ ←── │  5. Telegram │ ←── │  4.2. Bog'lash│
│  Xabar       │     │  Invalidate  │     │  Fields      │     │  (telegramId) │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
```

### 📝 Bosqichma-Bosqich Tavsif

| # | Bosqich | Input | Process | Output | Model |
|---|---------|-------|---------|--------|-------|
| 1 | /link command | `/link` | Link token generatsiya | `linkToken` | Redis |
| 2 | Link token | - | 10 daqiqa muddat, Redis saqlash | `token` | Redis |
| 3 | Web login | `accessToken` | User autentifikatsiya | `userId` | `Session` |
| 4 | User qidirish | `linkToken` | Redis dan user ID olish | `userId` | Redis |
| 4.2 | Bog'lash | `userId`, `telegramId` | `telegramLinkedAt=now()` | `linked` | `User` |
| 5 | Telegram fields | `telegramId, chatId, username` | DB update | `updated` | `User` |
| 6 | Cache invalidate | `userId` | `user:{id}` cache tozalash | `cleared` | Redis |
| 7 | Botga xabar | - | "Muvaffaqiyatli bog'landi" | `message` | - |

---

## 🔄 6. LOGOUT FLOW (Session Termination)

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  1. Logout   │ ──→ │  2. JWT      │ ──→ │  3. Session  │ ──→ │  4. Session  │
│  Click       │     │  Verify      │     │  Qidirish    │     │  Delete      │
│              │     │              │     │  (token)     │     │  (Soft)      │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
                                                                    │
                                                                    ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  6. Response │ ←── │  5. Audit    │ ←── │  4.2. Cache  │
│  (200 OK)    │     │  Log (LOGOUT)│     │  Clear       │
└──────────────┘     └──────────────┘     └──────────────┘
```

### 📝 Bosqichma-Bosqich Tavsif

| # | Bosqich | Input | Process | Output | Model |
|---|---------|-------|---------|--------|-------|
| 1 | Logout click | - | API chaqirish | `request` | - |
| 2 | JWT verify | `accessToken` | User ID olish | `userId` | `Session` |
| 3 | Session qidirish | `token` | DB dan session topish | `session` | `Session` |
| 4 | Session delete | `sessionId` | `deletedAt=now()` (Soft) | `deleted` | `Session` |
| 4.2 | Cache clear | `userId` | Session cache tozalash | `cleared` | Redis |
| 5 | Audit log | - | `action=LOGOUT` yozish | `auditId` | `AuditLog` |
| 6 | Response | - | `200 OK` qaytarish | `success` | - |

---

## 🔄 7. USER BLOKLASH FLOW (Admin Action)

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  1. Admin    │ ──→ │  2. User     │ ──→ │  3. Reason   │ ──→ │  4. Block    │
│  Panel       │     │  Qidirish    │     │  Kiritish    │     │  Update      │
│  (Block)     │     │  (userId)    │     │  (Optional)  │     │  (isBlocked) │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
                                                                    │
                                                                    ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  7. Admin    │ ←── │  6. Active   │ ←── │  5. Session  │ ←── │  4.2. Active │
│  Notification│     │  Rents Check │     │  Revoke      │     │  Rents Check │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
```

### 📝 Bosqichma-Bosqich Tavsif

| # | Bosqich | Input | Process | Output | Model |
|---|---------|-------|---------|--------|-------|
| 1 | Admin panel | `userId` | Admin ruxsat tekshirish | `allowed` | `User` |
| 2 | User qidirish | `userId` | DB dan user topish | `user` | `User` |
| 3 | Reason kiritish | `blockedReason, blockedUntil` | Validatsiya | `reason` | - |
| 4 | Block update | `isBlocked=true` | DB update | `blocked` | `User` |
| 4.2 | Active rents | `userId` | Faol ijaralar tekshirish | `rents` | `Rent` |
| 5 | Session revoke | `userId` | Barcha sessionlarni o'chirish | `revoked` | `Session` |
| 6 | Active rents | `rents` | Qaytarish talabi (agar bor bo'lsa) | `notice` | `Rent` |
| 7 | Admin notification | - | Blok haqida xabar | `notified` | `Notification` |

---

## 📊 FLOW STATISTIKASI

| Flow | Bosqich | Modellar | Redis | Audit | Cache |
|------|---------|----------|-------|-------|-------|
| Registration | 7 | User, Session | ✅ | ✅ | - |
| Login | 7 | User, Session, AuditLog | ✅ | ✅ | - |
| Reset Password | 7 | User, Session | ✅ | ✅ | - |
| Update Profile | 7 | User, AuditLog | ✅ | ✅ | ✅ |
| Link Telegram | 7 | User, Session | ✅ | - | ✅ |
| Logout | 6 | Session, AuditLog | ✅ | ✅ | ✅ |
| Block User | 7 | User, Session, Rent, Notification | ✅ | ✅ | ✅ |

---

## ⚠️ MUHIM ESLATMALAR

### 🔐 Xavfsizlik
| Element | Talab |
|---------|-------|
| Password | BCrypt 12 rounds + salt |
| Token | SHA256 hash (Session model) |
| Rate Limiting | Login: 5/min, Register: 3/min |
| Brute Force | 5 noto'g'ri urinish = 24 soat blok |
| JWT | Access: 15min, Refresh: 7 kun |

### 🗄️ Database
| Element | Talab |
|---------|-------|
| Soft Delete | Barcha modellar `deletedAt` field |
| Unique | `email`, `phone`, `telegramId`, `telegramChatId` |
| Index | `email`, `phone`, `telegramId`, `role`, `isActive` |
| Transaction | Password change + Session revoke |

### ⚡ Performance
| Element | Target |
|---------|--------|
| Login Time | < 500ms |
| Registration | < 2s (Telegram kod bilan) |
| Cache Hit Rate | > 95% (Session) |
| Concurrent Sessions | Max 5 devices |

---
