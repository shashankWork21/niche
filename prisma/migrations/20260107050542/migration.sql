/*
  Warnings:

  - Added the required column `model` to the `AiTokens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AiTokens" ADD COLUMN     "careerDirectionId" INTEGER,
ADD COLUMN     "model" TEXT NOT NULL,
ADD COLUMN     "nicheId" INTEGER;

-- AddForeignKey
ALTER TABLE "AiTokens" ADD CONSTRAINT "AiTokens_careerDirectionId_fkey" FOREIGN KEY ("careerDirectionId") REFERENCES "CareerDirection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AiTokens" ADD CONSTRAINT "AiTokens_nicheId_fkey" FOREIGN KEY ("nicheId") REFERENCES "Niche"("id") ON DELETE CASCADE ON UPDATE CASCADE;
