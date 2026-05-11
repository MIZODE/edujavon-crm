-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_id_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "avatar" TEXT;
