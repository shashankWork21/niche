/*
  Warnings:

  - The `idealEnvironment` column on the `CareerDirection` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `workingStyle` column on the `CareerDirection` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "WorkingStyle" AS ENUM ('INDEPENDENT', 'COLLABORATIVE', 'LEADING_TEAMS', 'HYBRID');

-- CreateEnum
CREATE TYPE "IdealEnvironment" AS ENUM ('STARTUP', 'CORPORATE', 'REMOTE_FIRST', 'CONSULTING', 'AGENCY', 'FREELANCE', 'NONPROFIT', 'GOVERNMENT');

-- AlterTable
ALTER TABLE "CareerDirection" DROP COLUMN "idealEnvironment",
ADD COLUMN     "idealEnvironment" "IdealEnvironment",
DROP COLUMN "workingStyle",
ADD COLUMN     "workingStyle" "WorkingStyle";
