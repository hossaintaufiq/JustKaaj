/*
  Warnings:

  - Changed the type of `business_license` on the `service_provider` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `nid_number` on the `service_provider` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `govt_id_or_tin` on the `service_provider` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "service_provider" DROP COLUMN "business_license",
ADD COLUMN     "business_license" INTEGER NOT NULL,
DROP COLUMN "nid_number",
ADD COLUMN     "nid_number" INTEGER NOT NULL,
DROP COLUMN "govt_id_or_tin",
ADD COLUMN     "govt_id_or_tin" INTEGER NOT NULL;
