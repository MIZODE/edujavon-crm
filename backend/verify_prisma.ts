import { prisma } from './src/config/prisma';

async function main() {
    try {
        console.log('Attempting to connect to database...');
        await prisma.$connect();
        console.log('Successfully connected to database via Prisma Adapter!');
        await prisma.$disconnect();
        process.exit(0);
    } catch (error) {
        console.error('Failed to connect:', error);
        process.exit(1);
    }
}

main();
