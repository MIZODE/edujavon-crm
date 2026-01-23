// src/config/prisma.ts
import * as dotenv from "dotenv";
dotenv.config();

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

// PostgreSQL pool with explicit password string conversion
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is not defined");
}

const url = new URL(connectionString);

const pool = new Pool({
  host: url.hostname,
  port: parseInt(url.port) || 5432,
  database: url.pathname.slice(1).split('?')[0],
  user: url.username,
  password: String(url.password), 
});

// Prisma adapter
const adapter = new PrismaPg(pool);

// Global singleton
const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
    log: ["query", "error", "warn"],
  });

// if (process.env.NODE_ENV !== "production") {
//   globalForPrisma.prisma = prisma;
// }

export async function testPrismaConnection() {
  try {
    await prisma.$connect();
    console.log("✅ Prisma Client muvaffaqiyatli ulandi");

    const result = await prisma.$queryRaw`SELECT version()`;
    console.log("📊 Database:", result);
  } catch (error) {
    console.error("❌ Prisma connection xatosi:", error);
    process.exit(1);
  }
}

// Graceful shutdown
export async function disconnectPrisma() {
  await prisma.$disconnect();
  console.log("🔌 Prisma Client disconnect bo'ldi");
}
