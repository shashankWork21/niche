/*
  Warnings:

  - You are about to drop the column `userId` on the `CustomerPersona` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Niche` table. All the data in the column will be lost.
  - Added the required column `userPersonaId` to the `CustomerPersona` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userPersonaId` to the `Niche` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CustomerPersona" DROP CONSTRAINT "CustomerPersona_userId_fkey";

-- DropForeignKey
ALTER TABLE "Niche" DROP CONSTRAINT "Niche_userId_fkey";

-- DropIndex
DROP INDEX "CustomerPersona_userId_idx";

-- DropIndex
DROP INDEX "Niche_userId_idx";

-- AlterTable
ALTER TABLE "CustomerPersona" DROP COLUMN "userId",
ADD COLUMN     "userPersonaId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Niche" DROP COLUMN "userId",
ADD COLUMN     "userPersonaId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "AiTokens" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "inputTokens" INTEGER NOT NULL DEFAULT 0,
    "outputTokens" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AiTokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AiTokens_userId_key" ON "AiTokens"("userId");

-- CreateIndex
CREATE INDEX "AiTokens_userId_idx" ON "AiTokens"("userId");

-- CreateIndex
CREATE INDEX "CustomerPersona_userPersonaId_idx" ON "CustomerPersona"("userPersonaId");

-- CreateIndex
CREATE INDEX "Niche_userPersonaId_idx" ON "Niche"("userPersonaId");

-- AddForeignKey
ALTER TABLE "CustomerPersona" ADD CONSTRAINT "CustomerPersona_userPersonaId_fkey" FOREIGN KEY ("userPersonaId") REFERENCES "UserPersona"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Niche" ADD CONSTRAINT "Niche_userPersonaId_fkey" FOREIGN KEY ("userPersonaId") REFERENCES "UserPersona"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AiTokens" ADD CONSTRAINT "AiTokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
