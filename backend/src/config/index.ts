import { prisma } from './prisma';

export const testPrismaConnection = async () => {
    try {
        await prisma.$connect();
        console.log('✅ Ma\'lumotlar bazasiga ulanish muvaffaqiyatli');
    } catch (error) {
        console.error('❌ Ma\'lumotlar bazasiga ulanishda xatolik:', error);
        process.exit(1);
    }
};

export { prisma };
