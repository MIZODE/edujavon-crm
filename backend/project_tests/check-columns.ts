import { PrismaClient } from './generated/prisma/client';
const prisma = new PrismaClient();

async function checkColumns() {
    try {
        const columns = await prisma.$queryRaw`
            SELECT column_name, is_nullable, column_default 
            FROM information_schema.columns 
            WHERE table_name = 'User'
        `;
        console.dir(columns, { depth: null });
    } catch(e) {
        console.error(e);
    } finally {
        await prisma.$disconnect();
    }
}
checkColumns();
