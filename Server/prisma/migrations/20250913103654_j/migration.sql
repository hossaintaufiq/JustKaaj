/*
  Warnings:

  - You are about to drop the column `base_price` on the `services` table. All the data in the column will be lost.
  - You are about to drop the column `price_unit` on the `services` table. All the data in the column will be lost.
  - Added the required column `area` to the `services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `availability` to the `services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `services` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "services" DROP COLUMN "base_price",
DROP COLUMN "price_unit",
ADD COLUMN     "area" TEXT NOT NULL,
ADD COLUMN     "availability" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;
