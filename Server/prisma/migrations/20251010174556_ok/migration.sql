/*
  Warnings:

  - A unique constraint covering the columns `[order_id]` on the table `Address` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `phone` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "order_id" TEXT;

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "phone" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Address_order_id_key" ON "Address"("order_id");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;
