/*
  Warnings:

  - You are about to drop the column `actionsTowardsGoal` on the `UserPersona` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserPersona" DROP COLUMN "actionsTowardsGoal",
ADD COLUMN     "helpedOthersWith" TEXT[];
