/*
  Warnings:

  - You are about to drop the `ActionTowardsGoal` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ActionTowardsGoal" DROP CONSTRAINT "ActionTowardsGoal_userPersonaId_fkey";

-- AlterTable
ALTER TABLE "UserPersona" ADD COLUMN     "actionsTowardsGoal" TEXT[];

-- DropTable
DROP TABLE "ActionTowardsGoal";
