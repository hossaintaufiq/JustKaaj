/*
  Warnings:

  - You are about to drop the column `service_id` on the `service_category` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "service_category" DROP CONSTRAINT "service_category_service_id_fkey";

-- AlterTable
ALTER TABLE "service_category" DROP COLUMN "service_id";

-- CreateTable
CREATE TABLE "service_on_category" (
    "id" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "service_on_category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "service_on_category_serviceId_categoryId_key" ON "service_on_category"("serviceId", "categoryId");

-- AddForeignKey
ALTER TABLE "service_on_category" ADD CONSTRAINT "service_on_category_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_on_category" ADD CONSTRAINT "service_on_category_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "service_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
