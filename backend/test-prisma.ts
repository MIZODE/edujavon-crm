import { PrismaClient } from './generated/prisma/client';
const prisma = new PrismaClient();
async function main() {
  try {
    await prisma.user.create({
      data: {
        phone: '+998901234567',
        password: 'hash',
        fullName: 'Test',
        telegramChatId: null
      }
    });
    console.log("Success");
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}
main();
