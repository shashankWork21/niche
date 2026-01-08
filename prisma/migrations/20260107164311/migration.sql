/*
  Warnings:

  - You are about to drop the column `type` on the `NicheSolution` table. All the data in the column will be lost.
  - The `description` column on the `NicheSolution` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `userId` on the `UserPersona` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userPersonaId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `outcome` to the `NicheSolution` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SolutionOutcome" AS ENUM ('REMOVES_FEAR', 'BUILDS_MOMENTUM', 'SIMPLIFIES_EXECUTION', 'REWARDS_CURIOSITY');

-- DropForeignKey
ALTER TABLE "UserPersona" DROP CONSTRAINT "UserPersona_userId_fkey";

-- DropIndex
DROP INDEX "UserPersona_userId_idx";

-- DropIndex
DROP INDEX "UserPersona_userId_key";

-- AlterTable
ALTER TABLE "NicheSolution" DROP COLUMN "type",
ADD COLUMN     "outcome" "SolutionOutcome" NOT NULL,
DROP COLUMN "description",
ADD COLUMN     "description" TEXT[];

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "userPersonaId" INTEGER;

-- AlterTable
ALTER TABLE "UserPersona" DROP COLUMN "userId";

-- DropEnum
DROP TYPE "SolutionType";

-- CreateIndex
CREATE UNIQUE INDEX "User_userPersonaId_key" ON "User"("userPersonaId");

-- CreateIndex
CREATE INDEX "User_userPersonaId_idx" ON "User"("userPersonaId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userPersonaId_fkey" FOREIGN KEY ("userPersonaId") REFERENCES "UserPersona"("id") ON DELETE CASCADE ON UPDATE CASCADE;
