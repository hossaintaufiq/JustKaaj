/*
  Warnings:

  - You are about to drop the column `user_id` on the `admins` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `service_provider` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `admins` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `service_provider` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `admins` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `admins` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `service_provider` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `service_provider` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "admins" DROP CONSTRAINT "admins_user_id_fkey";

-- DropForeignKey
ALTER TABLE "service_provider" DROP CONSTRAINT "service_provider_userId_fkey";

-- DropIndex
DROP INDEX "admins_user_id_key";

-- DropIndex
DROP INDEX "service_provider_userId_key";

-- AlterTable
ALTER TABLE "admins" DROP COLUMN "user_id",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "fullName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "service_provider" DROP COLUMN "userId",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "fullName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "admins_email_key" ON "admins"("email");

-- CreateIndex
CREATE UNIQUE INDEX "service_provider_email_key" ON "service_provider"("email");

-- AddForeignKey
ALTER TABLE "admins" ADD CONSTRAINT "admins_email_fkey" FOREIGN KEY ("email") REFERENCES "users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_provider" ADD CONSTRAINT "service_provider_email_fkey" FOREIGN KEY ("email") REFERENCES "users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
