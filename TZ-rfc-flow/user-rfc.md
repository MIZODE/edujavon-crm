# 📄 RFC: USER MODULE - Foydalanuvchi Boshqaruv Tizimi

| Dokument Ma'lumotlari | |
|----------------------|---|
| **RFC ID** | RFC-USER-001 |
| **Versiya** | 1.2 (Final Merged) |
| **Holat** | Draft |
| **Muallif** | Senior Architecture Team |
| **Sana** | 2025-11-19 |
| **Sprint** | Sprint 1 |
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

Ushbu RFC **User Module** (Foydalanuvchi Boshqaruv Tizimi) uchun to'liq texnik spesifikasiyani taqdim etadi. Module quyidagi funksiyalarni qamrab oladi:

- ✅ Ro'yxatdan o'tish (Telegram verifikatsiya bilan)
- ✅ Autentifikatsiya (Login/Logout)
- ✅ Parolni tiklash
- ✅ Profil boshqaruvi
- ✅ Telegram bog'lash
- ✅ Session boshqaruvi
- ✅ User bloklash (Admin)

**Muddat:** 2 hafta (Sprint 1)  
**Team:** 2-3 Backend Developer, 1 Frontend Developer, 1 QA

---

## 2. MOTIVATSIYA

### 2.1. Nima Muammo Yechiladi?

| Muammo | Hozirgi Holat | Yechim |
|--------|---------------|--------|
| Xavfsiz registratsiya | Yo'q | Telegram verifikatsiya |
| Session boshqaruvi | Yo'q | JWT + Refresh Token |
| Parol tiklash | Yo'q | Telegram bot orqali |
| Audit logging | Yo'q | To'liq audit tizimi |
| Rate limiting | Yo'q | Brute force himoya |

### 2.2. Biznes Qadriyati

```
┌─────────────────────────────────────────────────────────────┐
│  📈 Foydalanuvchi xavfsizligi: 100%                         │
│  ⏱️ Login vaqti: < 500ms                                    │
│  🔒 Brute force himoya: 5 urinish = 24 soat blok            │
│  📊 Audit trail: Barcha harakatlar logda                    │
│  🎯 User experience: 3 bosqichda registratsiya              │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. MAQSADLAR

### 3.1. Functional Requirements

| ID | Talab | Priority | Acceptance Criteria |
|----|-------|----------|---------------------|
| FR-01 | Telegram orqali registratsiya | P0 | Kod yuborish, 5 daqiqa muddat, 3 urinish |
| FR-02 | Login/Logout | P0 | JWT token, Refresh token, Session saqlash |
| FR-03 | Parolni tiklash | P0 | Telegram kod, Session revoke |
| FR-04 | Profil yangilash | P1 | Email/phone unique check, Audit log |
| FR-05 | Telegram bog'lash | P1 | /link command, Chat ID saqlash |
| FR-06 | User bloklash | P1 | Admin panel, Active rents check |
| FR-07 | Session boshqaruvi | P1 | Max 5 device, Token hash |

### 3.2. Non-Functional Requirements

| ID | Talab | Target |
|----|-------|--------|
| NFR-01 | Response Time | < 500ms (p95) |
| NFR-02 | Availability | 99.9% uptime |
| NFR-03 | Security | OWASP Top 10 compliance |
| NFR-04 | Scalability | 10,000 concurrent users |
| NFR-05 | Test Coverage | > 80% |

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
│                      USER MODULE                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │   Controller │  ┌──────────────┐  │  Repository  │          │
│  │              │  │   Service    │  │              │          │
│  │ - register   │  │              │  │ - createUser │          │
│  │ - login      │  │ - validate   │  │ - findUser   │          │
│  │ - logout     │  │ - hash       │  │ - update     │          │
│  │ - resetPwd   │  │ - token      │  │ - delete     │          │
│  └──────────────┘  │ - notify     │  └──────────────┘          │
│                    └──────────────┘                            │
└─────────────────────────────────────────────────────────────────┘
                                │
        ┌───────────────────────┼───────────────────────┐
        ▼                       ▼                       ▼
┌──────────────┐        ┌──────────────┐        ┌──────────────┐
│  PostgreSQL  │        │    Redis     │        │  Telegram    │
│  (User,      │        │  (Code,      │        │     Bot      │
│   Session)   │        │   Session)   │        │   (API)      │
└──────────────┘        └──────────────┘        └──────────────┘
```

### 4.2. Tech Stack

| Komponent | Texnologiya | Versiya |
|-----------|-------------|---------|
| Backend | NestJS + TypeScript | 10.x |
| Database | PostgreSQL + Prisma | 15+ / 5.x |
| Cache | Redis | 7.x |
| Queue | BullMQ | 5.x |
| Auth | JWT + BCrypt | - |
| Telegram | Telegraf | 4.x |

---

## 5. DATABASE SCHEMA

### 5.1. User Model

```prisma
model User {
  id                String         @id @default(uuid())
  email             String?        @unique
  phone             String         @unique
  password          String                      // BCrypt (12 rounds)
  fullName          String
  avatar            String?
  role              UserRole       @default(USER)
  
  // Telegram
  telegramId        String?        @unique
  telegramChatId    String?        @unique
  telegramUsername  String?
  telegramLinkedAt  DateTime?
  telegramVerified  Boolean        @default(false)
  
  // Profile
  dateOfBirth       DateTime?
  address           String?
  city              String?
  isVerified        Boolean        @default(false)
  isActive          Boolean        @default(true)
  isBlocked         Boolean        @default(false)
  blockedReason     String?
  blockedUntil      DateTime?
  
  // Membership
  membershipType    MembershipType @default(STANDARD)
  membershipExpiry  DateTime?
  joinDate          DateTime       @default(now())
  lastLoginAt       DateTime?
  
  // Stats
  booksReadCount    Int            @default(0)
  currentLevel      Int            @default(1)
  totalPoints       Int            @default(0)
  
  // Soft Delete
  deletedAt         DateTime?
  
  // Relations
  sessions          Session[]
  auditLogs         AuditLog[]
  // ... other relations
  
  createdAt         DateTime       @default(now())
  updatedAt         DateTime       @updatedAt
  
  @@index([email])
  @@index([phone])
  @@index([telegramId])
  @@index([telegramChatId])
  @@index([role])
  @@index([isActive])
  @@index([deletedAt])
}
```

### 5.2. Session Model

```prisma
model Session {
  id           String   @id @default(uuid())
  userId       String
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  token        String   @unique           // SHA256 hash
  refreshToken String?  @unique           // SHA256 hash
  device       String?
  ipAddress    String?
  userAgent    String?
  expiresAt    DateTime
  deletedAt    DateTime?
  createdAt    DateTime @default(now())
  
  @@index([userId])
  @@index([token])
  @@index([expiresAt])
  @@index([deletedAt])
}
```

### 5.3. Index Migration

```sql
-- Create indexes for performance
CREATE INDEX IF NOT EXISTS "User_email_idx" ON "User" ("email");
CREATE INDEX IF NOT EXISTS "User_phone_idx" ON "User" ("phone");
CREATE INDEX IF NOT EXISTS "User_telegramId_idx" ON "User" ("telegramId");
CREATE INDEX IF NOT EXISTS "User_isActive_idx" ON "User" ("isActive");
CREATE INDEX IF NOT EXISTS "User_deletedAt_idx" ON "User" ("deletedAt");

CREATE INDEX IF NOT EXISTS "Session_userId_idx" ON "Session" ("userId");
CREATE INDEX IF NOT EXISTS "Session_token_idx" ON "Session" ("token");
CREATE INDEX IF NOT EXISTS "Session_expiresAt_idx" ON "Session" ("expiresAt");

-- Partial index for soft delete
CREATE INDEX IF NOT EXISTS "User_active_users_idx" ON "User" ("id") 
WHERE "deletedAt" IS NULL;
```

---

## 6. API SPECIFICATIONS ⭐ (TO'LIQ)

### 6.1. Authentication Endpoints

---

#### 📍 POST `/api/v1/auth/register/init`

**Tavsif:** Ro'yxatdan o'tishni boshlash (Telegram kod yuborish)

**Request:**
```http
POST /api/v1/auth/register/init
Content-Type: application/json
X-Request-ID: uuid-here
X-Forwarded-For: 192.168.1.1

{
  "phone": "+998901234567",
  "telegramChatId": "123456789"
}
```

**Request Schema:**
```typescript
{
  phone: string;        // Required, +998 format, unique
  telegramChatId: string; // Required, from Telegram bot
}
```

**Validation Rules:**
| Field | Rule | Error Code |
|-------|------|------------|
| phone | Must start with +998, 12 digits | AUTH-010 |
| telegramChatId | Numeric string, max 20 chars | AUTH-011 |

**Success Response (201):**
```json
{
  "statusCode": 201,
  "message": "Verification code sent to Telegram",
  "data": {
    "tempId": "temp_uuid_here",
    "expiresIn": 300,
    "resendAfter": 60
  },
  "timestamp": "2025-11-19T10:30:00.000Z"
}
```

**Error Responses:**

| Status | Code | Example |
|--------|------|---------|
| 400 | AUTH-010 | `{"statusCode":400,"message":"Invalid phone format","error":"Bad Request","code":"AUTH-010"}` |
| 409 | AUTH-012 | `{"statusCode":409,"message":"Phone already registered","error":"Conflict","code":"AUTH-012"}` |
| 429 | AUTH-020 | `{"statusCode":429,"message":"Too many requests. Try again in 60 seconds","error":"Too Many Requests","code":"AUTH-020"}` |
| 500 | AUTH-999 | `{"statusCode":500,"message":"Internal server error","error":"Internal Server Error","code":"AUTH-999"}` |

**Rate Limit:** 3 requests per minute per phone

---

#### 📍 POST `/api/v1/auth/register/verify`

**Tavsif:** Telegram kodni tasdiqlash va account yaratish

**Request:**
```http
POST /api/v1/auth/register/verify
Content-Type: application/json
X-Request-ID: uuid-here
X-Forwarded-For: 192.168.1.1

{
  "tempId": "temp_uuid_here",
  "code": "847293",
  "fullName": "Ali Valiyev",
  "password": "SecurePass123!",
  "passwordConfirm": "SecurePass123!",
  "dateOfBirth": "2000-01-15",
  "city": "Tashkent"
}
```

**Request Schema:**
```typescript
{
  tempId: string;         // Required, from init response
  code: string;           // Required, 6 digits
  fullName: string;       // Required, 3-100 chars
  password: string;       // Required, min 8 chars, complexity
  passwordConfirm: string; // Required, must match password
  dateOfBirth?: string;   // Optional, ISO date, age >= 14
  city?: string;          // Optional, max 50 chars
}
```

**Validation Rules:**
| Field | Rule | Error Code |
|-------|------|------------|
| code | 6 digits, matches Redis | AUTH-030 |
| password | Min 8, 1 uppercase, 1 lowercase, 1 number, 1 special | AUTH-031 |
| passwordConfirm | Must match password | AUTH-032 |
| fullName | 3-100 characters | AUTH-033 |
| dateOfBirth | Age >= 14 years | AUTH-034 |

**Success Response (201):**
```json
{
  "statusCode": 201,
  "message": "Registration successful",
  "data": {
    "user": {
      "id": "user_uuid_here",
      "email": null,
      "phone": "+998901234567",
      "fullName": "Ali Valiyev",
      "role": "USER",
      "isVerified": true,
      "telegramVerified": true,
      "membershipType": "STANDARD",
      "createdAt": "2025-11-19T10:30:00.000Z"
    },
    "tokens": {
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "expiresIn": 900,
      "tokenType": "Bearer"
    }
  },
  "timestamp": "2025-11-19T10:30:00.000Z"
}
```

**Error Responses:**

| Status | Code | Example |
|--------|------|---------|
| 400 | AUTH-030 | `{"statusCode":400,"message":"Invalid verification code","error":"Bad Request","code":"AUTH-030","data":{"remainingAttempts":2}}` |
| 400 | AUTH-031 | `{"statusCode":400,"message":"Password must contain uppercase, lowercase, number and special character","error":"Bad Request","code":"AUTH-031"}` |
| 400 | AUTH-032 | `{"statusCode":400,"message":"Passwords do not match","error":"Bad Request","code":"AUTH-032"}` |
| 410 | AUTH-035 | `{"statusCode":410,"message":"Verification code expired","error":"Gone","code":"AUTH-035"}` |
| 429 | AUTH-020 | `{"statusCode":429,"message":"Too many attempts. Try again in 24 hours","error":"Too Many Requests","code":"AUTH-020"}` |

**Rate Limit:** 5 requests per minute per tempId

---

#### 📍 POST `/api/v1/auth/login`

**Tavsif:** Tizimga kirish

**Request:**
```http
POST /api/v1/auth/login
Content-Type: application/json
X-Request-ID: uuid-here
X-Forwarded-For: 192.168.1.1
X-Device-ID: device_uuid_here

{
  "phone": "+998901234567",
  "password": "SecurePass123!",
  "rememberMe": true
}
```

**Request Schema:**
```typescript
{
  phone: string;      // Required, +998 format
  password: string;   // Required
  rememberMe?: boolean; // Optional, default false (extends refresh token)
}
```

**Success Response (200):**
```json
{
  "statusCode": 200,
  "message": "Login successful",
  "data": {
    "user": {
      "id": "user_uuid_here",
      "phone": "+998901234567",
      "fullName": "Ali Valiyev",
      "avatar": "https://storage.library.uz/avatars/user_uuid.jpg",
      "role": "USER",
      "membershipType": "STANDARD",
      "membershipExpiry": "2026-11-19T10:30:00.000Z",
      "isVerified": true,
      "isBlocked": false,
      "lastLoginAt": "2025-11-19T10:30:00.000Z"
    },
    "tokens": {
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "expiresIn": 900,
      "refreshExpiresIn": 604800,
      "tokenType": "Bearer"
    },
    "session": {
      "id": "session_uuid_here",
      "device": "Chrome on Windows",
      "ipAddress": "192.168.1.1",
      "createdAt": "2025-11-19T10:30:00.000Z"
    }
  },
  "timestamp": "2025-11-19T10:30:00.000Z"
}
```

**Error Responses:**

| Status | Code | Example |
|--------|------|---------|
| 400 | AUTH-001 | `{"statusCode":400,"message":"Invalid phone format","error":"Bad Request","code":"AUTH-001"}` |
| 401 | AUTH-002 | `{"statusCode":401,"message":"Invalid credentials","error":"Unauthorized","code":"AUTH-002","data":{"remainingAttempts":3}}` |
| 403 | AUTH-003 | `{"statusCode":403,"message":"Account is blocked. Reason: Violation of terms","error":"Forbidden","code":"AUTH-003","data":{"blockedUntil":"2025-12-19T10:30:00.000Z"}}` |
| 403 | AUTH-004 | `{"statusCode":403,"message":"Account is not verified","error":"Forbidden","code":"AUTH-004"}` |
| 429 | AUTH-020 | `{"statusCode":429,"message":"Too many failed attempts. Account locked for 24 hours","error":"Too Many Requests","code":"AUTH-020","data":{"unlockAt":"2025-11-20T10:30:00.000Z"}}` |

**Rate Limit:** 5 requests per minute per phone/IP

---

#### 📍 POST `/api/v1/auth/refresh`

**Tavsif:** Access token yangilash

**Request:**
```http
POST /api/v1/auth/refresh
Content-Type: application/json
Authorization: Bearer <refresh_token>

{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Success Response (200):**
```json
{
  "statusCode": 200,
  "message": "Token refreshed successfully",
  "data": {
    "tokens": {
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "expiresIn": 900,
      "refreshExpiresIn": 604800,
      "tokenType": "Bearer"
    }
  },
  "timestamp": "2025-11-19T10:30:00.000Z"
}
```

**Error Responses:**

| Status | Code | Example |
|--------|------|---------|
| 401 | AUTH-050 | `{"statusCode":401,"message":"Invalid refresh token","error":"Unauthorized","code":"AUTH-050"}` |
| 401 | AUTH-051 | `{"statusCode":401,"message":"Refresh token expired","error":"Unauthorized","code":"AUTH-051"}` |
| 401 | AUTH-052 | `{"statusCode":401,"message":"Session revoked. Please login again","error":"Unauthorized","code":"AUTH-052"}` |

---

#### 📍 POST `/api/v1/auth/logout`

**Tavsif:** Tizimdan chiqish

**Request:**
```http
POST /api/v1/auth/logout
Content-Type: application/json
Authorization: Bearer <access_token>
X-Request-ID: uuid-here

{
  "revokeAll": false
}
```

**Success Response (200):**
```json
{
  "statusCode": 200,
  "message": "Logout successful",
  "data": {
    "sessionId": "session_uuid_here",
    "revokedAll": false
  },
  "timestamp": "2025-11-19T10:30:00.000Z"
}
```

**Error Responses:**

| Status | Code | Example |
|--------|------|---------|
| 401 | AUTH-060 | `{"statusCode":401,"message":"Unauthorized","error":"Unauthorized","code":"AUTH-060"}` |

---

#### 📍 POST `/api/v1/auth/reset-password/init`

**Tavsif:** Parolni tiklashni boshlash (Telegram kod yuborish)

**Request:**
```http
POST /api/v1/auth/reset-password/init
Content-Type: application/json
X-Request-ID: uuid-here

{
  "phone": "+998901234567"
}
```

**Success Response (200):**
```json
{
  "statusCode": 200,
  "message": "Verification code sent to Telegram",
  "data": {
    "tempId": "temp_uuid_here",
    "expiresIn": 300,
    "resendAfter": 60
  },
  "timestamp": "2025-11-19T10:30:00.000Z"
}
```

**Error Responses:**

| Status | Code | Example |
|--------|------|---------|
| 404 | AUTH-070 | `{"statusCode":404,"message":"User not found","error":"Not Found","code":"AUTH-070"}` |
| 429 | AUTH-020 | `{"statusCode":429,"message":"Too many requests","error":"Too Many Requests","code":"AUTH-020"}` |

---

#### 📍 POST `/api/v1/auth/reset-password/verify`

**Tavsif:** Parolni tiklashni tasdiqlash

**Request:**
```http
POST /api/v1/auth/reset-password/verify
Content-Type: application/json
X-Request-ID: uuid-here

{
  "tempId": "temp_uuid_here",
  "code": "847293",
  "newPassword": "NewSecurePass123!",
  "newPasswordConfirm": "NewSecurePass123!"
}
```

**Success Response (200):**
```json
{
  "statusCode": 200,
  "message": "Password reset successful. All sessions revoked.",
  "data": {
    "userId": "user_uuid_here",
    "sessionsRevoked": 3
  },
  "timestamp": "2025-11-19T10:30:00.000Z"
}
```

**Error Responses:**

| Status | Code | Example |
|--------|------|---------|
| 400 | AUTH-030 | `{"statusCode":400,"message":"Invalid verification code","error":"Bad Request","code":"AUTH-030"}` |
| 400 | AUTH-031 | `{"statusCode":400,"message":"Password does not meet requirements","error":"Bad Request","code":"AUTH-031"}` |
| 410 | AUTH-035 | `{"statusCode":410,"message":"Reset token expired","error":"Gone","code":"AUTH-035"}` |

---

### 6.2. User Endpoints

---

#### 📍 GET `/api/v1/users/me`

**Tavsif:** Joriy foydalanuvchi profilini olish

**Request:**
```http
GET /api/v1/users/me
Authorization: Bearer <access_token>
X-Request-ID: uuid-here
```

**Query Parameters:**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| include | string | - | Comma-separated: `rents,reservations,fines,achievements` |

**Success Response (200):**
```json
{
  "statusCode": 200,
  "message": "Profile retrieved successfully",
  "data": {
    "user": {
      "id": "user_uuid_here",
      "email": "ali@example.com",
      "phone": "+998901234567",
      "fullName": "Ali Valiyev",
      "avatar": "https://storage.library.uz/avatars/user_uuid.jpg",
      "role": "USER",
      "dateOfBirth": "2000-01-15",
      "address": "Tashkent, Yunusabad",
      "city": "Tashkent",
      "isVerified": true,
      "isActive": true,
      "isBlocked": false,
      "telegramVerified": true,
      "telegramUsername": "@alivaliyev",
      "membershipType": "STANDARD",
      "membershipExpiry": "2026-11-19T10:30:00.000Z",
      "joinDate": "2025-11-19T10:30:00.000Z",
      "lastLoginAt": "2025-11-19T10:30:00.000Z",
      "booksReadCount": 15,
      "currentLevel": 3,
      "totalPoints": 520,
      "createdAt": "2025-11-19T10:30:00.000Z",
      "updatedAt": "2025-11-19T10:30:00.000Z"
    },
    "stats": {
      "activeRents": 2,
      "activeReservations": 1,
      "unpaidFines": 0,
      "totalFines": 5000
    }
  },
  "timestamp": "2025-11-19T10:30:00.000Z"
}
```

---

#### 📍 PATCH `/api/v1/users/me`

**Tavsif:** Profil ma'lumotlarini yangilash

**Request:**
```http
PATCH /api/v1/users/me
Content-Type: application/json
Authorization: Bearer <access_token>
X-Request-ID: uuid-here

{
  "fullName": "Ali Valiyevich",
  "email": "ali.new@example.com",
  "address": "Tashkent, Chilanzar",
  "city": "Tashkent",
  "dateOfBirth": "2000-01-15"
}
```

**Success Response (200):**
```json
{
  "statusCode": 200,
  "message": "Profile updated successfully",
  "data": {
    "user": {
      "id": "user_uuid_here",
      "fullName": "Ali Valiyevich",
      "email": "ali.new@example.com",
      "phone": "+998901234567",
      "address": "Tashkent, Chilanzar",
      "city": "Tashkent",
      "dateOfBirth": "2000-01-15",
      "updatedAt": "2025-11-19T10:30:00.000Z"
    },
    "changed": ["fullName", "email", "address"]
  },
  "timestamp": "2025-11-19T10:30:00.000Z"
}
```

**Error Responses:**

| Status | Code | Example |
|--------|------|---------|
| 400 | USER-010 | `{"statusCode":400,"message":"Invalid email format","error":"Bad Request","code":"USER-010"}` |
| 409 | USER-011 | `{"statusCode":409,"message":"Email already exists","error":"Conflict","code":"USER-011"}` |
| 409 | USER-012 | `{"statusCode":409,"message":"Phone already exists","error":"Conflict","code":"USER-012"}` |

---

#### 📍 PATCH `/api/v1/users/me/password`

**Tavsif:** Parolni o'zgartirish

**Request:**
```http
PATCH /api/v1/users/me/password
Content-Type: application/json
Authorization: Bearer <access_token>
X-Request-ID: uuid-here

{
  "currentPassword": "OldSecurePass123!",
  "newPassword": "NewSecurePass123!",
  "newPasswordConfirm": "NewSecurePass123!"
}
```

**Success Response (200):**
```json
{
  "statusCode": 200,
  "message": "Password changed successfully. All other sessions revoked.",
  "data": {
    "sessionsRevoked": 2,
    "currentSessionKept": true
  },
  "timestamp": "2025-11-19T10:30:00.000Z"
}
```

**Error Responses:**

| Status | Code | Example |
|--------|------|---------|
| 400 | AUTH-031 | `{"statusCode":400,"message":"Password does not meet requirements","error":"Bad Request","code":"AUTH-031"}` |
| 401 | AUTH-080 | `{"statusCode":401,"message":"Current password is incorrect","error":"Unauthorized","code":"AUTH-080"}` |

---

#### 📍 POST `/api/v1/users/me/telegram/link`

**Tavsif:** Telegram accountni bog'lash

**Request:**
```http
POST /api/v1/users/me/telegram/link
Content-Type: application/json
Authorization: Bearer <access_token>
X-Request-ID: uuid-here

{
  "linkToken": "link_token_from_bot"
}
```

**Success Response (200):**
```json
{
  "statusCode": 200,
  "message": "Telegram account linked successfully",
  "data": {
    "telegramId": "123456789",
    "telegramUsername": "@alivaliyev",
    "telegramLinkedAt": "2025-11-19T10:30:00.000Z",
    "telegramVerified": true
  },
  "timestamp": "2025-11-19T10:30:00.000Z"
}
```

---

#### 📍 GET `/api/v1/users/me/sessions`

**Tavsif:** Aktiv sessiyalarni ko'rish

**Request:**
```http
GET /api/v1/users/me/sessions
Authorization: Bearer <access_token>
X-Request-ID: uuid-here
```

**Success Response (200):**
```json
{
  "statusCode": 200,
  "message": "Sessions retrieved successfully",
  "data": {
    "sessions": [
      {
        "id": "session_uuid_1",
        "device": "Chrome on Windows",
        "ipAddress": "192.168.1.1",
        "isActive": true,
        "isCurrent": true,
        "createdAt": "2025-11-19T10:30:00.000Z",
        "expiresAt": "2025-11-26T10:30:00.000Z"
      }
    ],
    "total": 2,
    "maxAllowed": 5
  },
  "timestamp": "2025-11-19T10:30:00.000Z"
}
```

---

#### 📍 DELETE `/api/v1/users/me/sessions/:id`

**Tavsif:** Sessiyani bekor qilish

**Request:**
```http
DELETE /api/v1/users/me/sessions/session_uuid_here
Authorization: Bearer <access_token>
X-Request-ID: uuid-here
```

**Success Response (200):**
```json
{
  "statusCode": 200,
  "message": "Session revoked successfully",
  "data": {
    "sessionId": "session_uuid_here",
    "revokedAt": "2025-11-19T10:30:00.000Z"
  },
  "timestamp": "2025-11-19T10:30:00.000Z"
}
```

---

### 6.3. Admin Endpoints

---

#### 📍 GET `/api/v1/admin/users`

**Tavsif:** Userlar ro'yxatini olish (Admin)

**Request:**
```http
GET /api/v1/admin/users?role=USER&isActive=true&search=Ali&page=1&limit=20
Authorization: Bearer <access_token>
X-Request-ID: uuid-here
```

**Success Response (200):**
```json
{
  "statusCode": 200,
  "message": "Users retrieved successfully",
  "data": {
    "users": [
      {
        "id": "user_uuid_here",
        "fullName": "Ali Valiyev",
        "phone": "+998901234567",
        "email": "ali@example.com",
        "role": "USER",
        "membershipType": "STANDARD",
        "isActive": true,
        "isBlocked": false,
        "isVerified": true,
        "booksReadCount": 15,
        "currentLevel": 3,
        "joinDate": "2025-11-19T10:30:00.000Z",
        "lastLoginAt": "2025-11-19T10:30:00.000Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 150,
      "totalPages": 8,
      "hasNext": true,
      "hasPrev": false
    }
  },
  "timestamp": "2025-11-19T10:30:00.000Z"
}
```

**Required Role:** MANAGER, OWNER, SUPER_ADMIN

---

#### 📍 PATCH `/api/v1/admin/users/:id/block`

**Tavsif:** Userni bloklash (Admin)

**Request:**
```http
PATCH /api/v1/admin/users/user_uuid_here/block
Content-Type: application/json
Authorization: Bearer <access_token>
X-Request-ID: uuid-here

{
  "reason": "Violation of terms of service",
  "blockedUntil": "2025-12-19T10:30:00.000Z",
  "revokeSessions": true,
  "notifyUser": true
}
```

**Success Response (200):**
```json
{
  "statusCode": 200,
  "message": "User blocked successfully",
  "data": {
    "userId": "user_uuid_here",
    "isBlocked": true,
    "blockedReason": "Violation of terms of service",
    "blockedUntil": "2025-12-19T10:30:00.000Z",
    "sessionsRevoked": 3,
    "notificationSent": true,
    "activeRents": {
      "count": 2,
      "mustReturn": true,
      "dueDates": ["2025-11-25", "2025-11-28"]
    }
  },
  "timestamp": "2025-11-19T10:30:00.000Z"
}
```

**Required Role:** MANAGER, OWNER, SUPER_ADMIN

---

#### 📍 PATCH `/api/v1/admin/users/:id/unblock`

**Tavsif:** Userni blokdan chiqarish (Admin)

**Request:**
```http
PATCH /api/v1/admin/users/user_uuid_here/unblock
Content-Type: application/json
Authorization: Bearer <access_token>
X-Request-ID: uuid-here

{
  "notifyUser": true
}
```

**Success Response (200):**
```json
{
  "statusCode": 200,
  "message": "User unblocked successfully",
  "data": {
    "userId": "user_uuid_here",
    "isBlocked": false,
    "unblockedAt": "2025-11-19T10:30:00.000Z",
    "notificationSent": true
  },
  "timestamp": "2025-11-19T10:30:00.000Z"
}
```

**Required Role:** MANAGER, OWNER, SUPER_ADMIN

---

### 6.4. HTTP Status Codes Summary

| Code | Meaning | When Used |
|------|---------|-----------|
| 200 | OK | Successful GET, PATCH, DELETE |
| 201 | Created | Successful POST (create resource) |
| 400 | Bad Request | Validation error, invalid input |
| 401 | Unauthorized | Invalid/missing token, wrong credentials |
| 403 | Forbidden | Valid token but insufficient permissions |
| 404 | Not Found | Resource doesn't exist |
| 409 | Conflict | Duplicate email/phone, already linked |
| 410 | Gone | Token/code expired |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Server error |

---

### 6.5. Common Response Structure

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
  "code": "AUTH-001",
  "data": { ... },
  "timestamp": "2025-11-19T10:30:00.000Z"
}
```

---

### 6.6. Common Headers

| Header | Required | Description |
|--------|----------|-------------|
| Content-Type | ✅ | `application/json` |
| Authorization | ✅ (auth endpoints) | `Bearer <token>` |
| X-Request-ID | ✅ | UUID for tracing |
| X-Forwarded-For | ✅ | Client IP address |
| X-Device-ID | ⚠️ | Device fingerprint |
| User-Agent | ✅ | Browser/app info |

---

## 7. FLOW DIAGRAMMALARI

### 7.1. Registration Flow

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  1. Botga    │ ──→ │  2. Telefon  │ ──→ │  3. Web      │ ──→ │  4. Telegram │
│  /start      │     │  yuborish    │     │  Form        │     │  Kod         │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
                                                                    │
                                                                    ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  7. JWT      │ ←── │  6. Session  │ ←── │  5. Kod      │ ←── │  4.2. Kod    │
│  Token       │     │  Yaratish    │     │  Tasdiqlash  │     │  Tekshirish  │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
```

### 7.2. Login Flow

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  1. Login    │ ──→ │  2. User     │ ──→ │  3. Password │ ──→ │  4. Session  │
│  Form        │     │  Qidirish    │     │  Tekshirish  │     │  Yaratish    │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
                                                                    │
                                                                    ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  7. Audit    │ ←── │  6. Last     │ ←── │  5. User     │ ←── │  4.2. Token  │
│  Log         │     │  Login       │     │  Status      │     │  Hash        │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
```

### 7.3. Reset Password Flow

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  1. Reset    │ ──→ │  2. User     │ ──→ │  3. Telegram │ ──→ │  4. Kod      │
│  So'rov      │     │  Qidirish    │     │  Kod         │     │  Yuborish    │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
                                                                    │
                                                                    ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  7. Session  │ ←── │  6. Password │ ←── │  5. Kod      │ ←── │  4.2. Kod    │
│  Revoke      │     │  Update      │     │  Tasdiqlash  │     │  Tekshirish  │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
```

---

## 8. XAVFSIZLIK TALABLARI

### 8.1. Password Security

| Talab | Implementation |
|-------|----------------|
| Hash Algorithm | BCrypt (12 rounds) |
| Min Length | 8 characters |
| Complexity | 1 uppercase, 1 lowercase, 1 number, 1 special |
| History | Last 5 passwords blocked |
| Expiry | 90 days (admin), none (user) |

### 8.2. Token Security

| Token Type | Expiry | Storage | Hash |
|------------|--------|---------|------|
| Access Token | 15 min | Client (memory) | SHA256 |
| Refresh Token | 7 days | Client (httpOnly cookie) | SHA256 |

### 8.3. Rate Limiting

```typescript
{
  throttlers: [
    { name: 'auth', ttl: 60000, limit: 5 },
    { name: 'register', ttl: 60000, limit: 3 },
  ]
}
```

### 8.4. Brute Force Protection

```typescript
{
  maxAttempts: 5,
  lockoutDuration: 86400000,
  trackBy: ['ip', 'phone']
}
```

### 8.5. Security Headers

```
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Content-Security-Policy: default-src 'self'
```

---

## 9. PERFORMANCE TALABLARI

### 9.1. Response Time Targets

| Endpoint | Target (p95) | Target (p99) |
|----------|--------------|--------------|
| POST /auth/login | < 500ms | < 1000ms |
| POST /auth/register | < 2000ms | < 3000ms |
| GET /users/me | < 200ms | < 500ms |
| PATCH /users/me | < 300ms | < 600ms |

### 9.2. Cache Strategy

| Data | TTL | Invalidation |
|------|-----|--------------|
| User Profile | 5 min | On update |
| Session | JWT expiry | On logout |
| Verification Code | 5 min | On verify |

---

## 10. TESTING STRATEGY

### 10.1. Test Coverage Requirements

| Test Type | Coverage | Tools |
|-----------|----------|-------|
| Unit Tests | 80%+ | Jest |
| Integration Tests | 70%+ | Supertest + Prisma |
| E2E Tests | Critical flows | Playwright |
| Security Tests | OWASP Top 10 | OWASP ZAP |
| Load Tests | API endpoints | k6 |

### 10.2. Test Cases (Priority)

| ID | Test Case | Priority | Status |
|----|-----------|----------|--------|
| TC-01 | Registration with valid data | P0 | ⏳ |
| TC-02 | Registration with duplicate phone | P0 | ⏳ |
| TC-03 | Login with correct credentials | P0 | ⏳ |
| TC-04 | Login with wrong password (5x) | P0 | ⏳ |
| TC-05 | Token refresh | P0 | ⏳ |
| TC-06 | Logout and session revoke | P0 | ⏳ |
| TC-07 | Reset password flow | P0 | ⏳ |
| TC-08 | Profile update | P1 | ⏳ |
| TC-09 | Telegram link | P1 | ⏳ |
| TC-10 | Admin block user | P1 | ⏳ |

---

## 11. MIGRATION PLAN

### 11.1. Database Migration

```bash
npx prisma migrate dev --name init_user_module
npx prisma migrate deploy
npx prisma db seed
```

### 11.2. Rollback Plan

```bash
npx prisma migrate resolve --rolled-back "migration_name"
pg_restore -d library_db backup_2025-11-19.sql
```

### 11.3. Deployment Checklist

- [ ] Database migrations applied
- [ ] Environment variables configured
- [ ] Redis connection tested
- [ ] Telegram bot token configured
- [ ] Rate limiting enabled
- [ ] Security headers configured
- [ ] Monitoring alerts setup
- [ ] Backup completed
- [ ] Rollback scripts tested

---

## 12. ALTERNATIV YECHIMLAR

| Variant | Pros | Cons | Decision |
|---------|------|------|----------|
| Email Verification | Standard, familiar | Email deliverability issues | ❌ Rejected |
| SMS Verification | Direct, reliable | Cost per SMS | ❌ Rejected |
| **Telegram Verification** | Free, fast, popular in UZ | Requires Telegram | ✅ Selected |
| OAuth (Google) | Easy login | Privacy concerns | ⏳ v2.0 |

---

## 13. RISK ASSESSMENT

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Telegram API downtime | Medium | High | Fallback to SMS (v2.0) |
| Brute force attack | Medium | Critical | Rate limiting, IP blocking |
| Database breach | Low | Critical | Encryption, Audit logs |
| Token leakage | Medium | High | Short expiry, HTTPS only |
| Redis failure | Low | Medium | Database fallback |

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

---

## 15. ILOVALAR

### A. Environment Variables

```bash
DATABASE_URL="postgresql://user:pass@localhost:5432/library_db"
REDIS_HOST="localhost"
REDIS_PORT="6379"
JWT_SECRET="your-super-secret-key"
JWT_EXPIRES_IN="15m"
JWT_REFRESH_EXPIRES_IN="7d"
TELEGRAM_BOT_TOKEN="your-bot-token"
BCRYPT_ROUNDS="12"
```

### B. Error Codes

| Code | Message | Solution |
|------|---------|----------|
| AUTH-001 | Invalid credentials | Check phone/password |
| AUTH-002 | Account blocked | Contact admin |
| AUTH-003 | Verification code expired | Request new code |
| AUTH-004 | Too many attempts | Wait 24 hours |
| USER-001 | User not found | Register first |
| USER-002 | Phone already exists | Use different phone |

---

## ✅ XULOSA

Ushbu RFC **User Module** uchun to'liq texnik yo'riqnoma hisoblanadi. Barcha xavfsizlik, performance va functional talablar belgilangan. API endpointlar uchun to'liq request/response misollari kiritilgan.

**Keyingi Qadam:** Team review → Feedback → Final approval → Implementation

---

| Dokument | Versiya | Sana | Muallif |
|----------|---------|------|---------|
| RFC-USER-001 | 1.2 (Final Merged) | 2025-11-19 | Senior Architecture Team |

---
