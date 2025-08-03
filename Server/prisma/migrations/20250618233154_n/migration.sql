/*
  Warnings:

  - You are about to drop the column `is_default` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `is_active` on the `users` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Provider_Status" AS ENUM ('PENDING', 'ACTIVE');

-- AlterTable
ALTER TABLE "Address" DROP COLUMN "is_default";

-- AlterTable
ALTER TABLE "service_provider" ADD COLUMN     "status" "Provider_Status" NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "users" DROP COLUMN "is_active",
ALTER COLUMN "is_verified" SET DEFAULT false;
