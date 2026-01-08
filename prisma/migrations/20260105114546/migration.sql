/*
  Warnings:

  - You are about to drop the column `continuoslyLearningAbout` on the `UserPersona` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserPersona" DROP COLUMN "continuoslyLearningAbout",
ADD COLUMN     "continuouslyLearningAbout" TEXT[];
