-- DropForeignKey
ALTER TABLE "service_category" DROP CONSTRAINT "service_category_service_id_fkey";

-- AlterTable
ALTER TABLE "service_category" ALTER COLUMN "service_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "service_category" ADD CONSTRAINT "service_category_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "services"("id") ON DELETE SET NULL ON UPDATE CASCADE;
