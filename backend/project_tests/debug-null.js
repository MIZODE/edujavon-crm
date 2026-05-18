const { PrismaClient } = require('./generated/prisma/client');
const prisma = new PrismaClient({ log: ['query', 'error'] });

async function main() {
    try {
        await prisma.user.create({
            data: {
                phone: '+99899' + Math.floor(Math.random() * 10000000),
                password: 'hash',
                fullName: 'Test User',
                role: 'USER'
            }
        });
        console.log("Insert successful!");
    } catch(e) {
        console.error("Failed to insert:", e.message);
    } finally {
        await prisma.$disconnect();
    }
}

main();
