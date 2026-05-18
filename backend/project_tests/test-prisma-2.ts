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
        id: "123e4567-e89b-12d3-a456-426614174000",
        phone: "+998901112244",
        password: "hash",
        fullName: "Test",
        role: "USER",
        isVerified: true
      }
    });
    console.log("Success", user);
  } catch (e) {
    console.error("ERROR CAUGHT");
    console.error(e);
  } finally {
    // await prisma.$disconnect();
  }
}
main();
