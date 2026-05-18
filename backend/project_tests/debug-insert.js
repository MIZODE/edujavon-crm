const { PrismaClient } = require('./generated/prisma/client');
const prisma = new PrismaClient({ log: ['info', 'warn', 'error'] });

async function insertUser() {
    try {
        const u = await prisma.user.create({
            data: {
                phone: '+998901234567',
                password: 'hash',
                fullName: 'Test User'
            }
        });
        console.log("Success", u);
    } catch(e) {
        console.error("Prisma error:", e.message);
    } finally {
        await prisma.$disconnect();
    }
}
insertUser();
