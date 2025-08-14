/*
  Warnings:

  - You are about to drop the column `latitude` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `Address` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Address" DROP COLUMN "latitude",
DROP COLUMN "longitude";
