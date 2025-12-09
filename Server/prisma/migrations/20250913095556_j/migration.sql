/*
  Warnings:

  - You are about to drop the column `description` on the `parent_category` table. All the data in the column will be lost.
  - You are about to drop the column `icon` on the `parent_category` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "parent_category" DROP COLUMN "description",
DROP COLUMN "icon",
ALTER COLUMN "is_Active" SET DEFAULT true;
