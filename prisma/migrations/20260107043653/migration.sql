/*
  Warnings:

  - The `typicalDayDescription` column on the `RoleRecommendation` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "RoleRecommendation" DROP COLUMN "typicalDayDescription",
ADD COLUMN     "typicalDayDescription" TEXT[];
