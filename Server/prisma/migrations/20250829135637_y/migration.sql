/*
  Warnings:

  - You are about to drop the column `area_name` on the `service_provider` table. All the data in the column will be lost.
  - Added the required column `area_name` to the `Address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "area_name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "service_provider" DROP COLUMN "area_name";
