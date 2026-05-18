import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from './generated/prisma/client';
require('dotenv').config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool as any);
const prisma = new PrismaClient({ adapter, log: ['query', 'error', 'info', 'warn'] });

async function main() {
  try {
    const user = await prisma.user.create({
      data: {
        phone: "+998901112299",
        password: "hash",
        fullName: "Test",
        role: "USER",
        isVerified: true
      }
    });
    console.log("Success", user);
  } catch (e: any) {
    console.error("ERROR CAUGHT", e.message);
  } finally {
    await prisma.$disconnect();
  }
}
main();
