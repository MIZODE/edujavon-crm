import { PrismaClient } from './generated/prisma/client';
require('dotenv').config();

const prisma = new PrismaClient({ log: ['query', 'error', 'info', 'warn'] });

async function main() {
  try {
    const user = await prisma.user.create({
      data: {
        phone: "+998901112233",
        password: "hash",
        fullName: "Test",
        role: "USER",
        telegramChatId: null,
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
