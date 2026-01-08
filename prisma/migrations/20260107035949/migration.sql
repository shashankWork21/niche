/*
  Warnings:

  - The `careerArchetype` column on the `CareerDirection` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "CareerDirection" DROP COLUMN "careerArchetype",
ADD COLUMN     "careerArchetype" "CareerArchetype";
