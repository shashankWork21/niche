/*
  Warnings:

  - Added the required column `goal` to the `UserPersona` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserGoal" AS ENUM ('BUSINESS', 'CAREER');

-- AlterTable
ALTER TABLE "UserPersona" ADD COLUMN     "coreValues" TEXT[],
ADD COLUMN     "goal" "UserGoal" NOT NULL;

-- CreateTable
CREATE TABLE "CareerDirection" (
    "id" SERIAL NOT NULL,
    "userPersonaId" INTEGER NOT NULL,
    "statement" TEXT NOT NULL,
    "whyYou" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CareerDirection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoleRecommendation" (
    "id" SERIAL NOT NULL,
    "careerDirectionId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "whyFit" TEXT NOT NULL,
    "salaryRange" TEXT NOT NULL,
    "skillGaps" TEXT[],
    "companies" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RoleRecommendation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CareerRoadmap" (
    "id" SERIAL NOT NULL,
    "careerDirectionId" INTEGER NOT NULL,
    "targetRole" TEXT NOT NULL,
    "currentGap" TEXT NOT NULL,
    "timelineMonths" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CareerRoadmap_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CareerMilestone" (
    "id" SERIAL NOT NULL,
    "careerRoadmapId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "actions" TEXT[],
    "resources" TEXT[],
    "timelineDays" INTEGER NOT NULL,
    "successCriterion" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CareerMilestone_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CareerDirection_userPersonaId_key" ON "CareerDirection"("userPersonaId");

-- CreateIndex
CREATE INDEX "CareerDirection_id_idx" ON "CareerDirection"("id");

-- CreateIndex
CREATE INDEX "CareerDirection_userPersonaId_idx" ON "CareerDirection"("userPersonaId");

-- CreateIndex
CREATE INDEX "RoleRecommendation_id_idx" ON "RoleRecommendation"("id");

-- CreateIndex
CREATE INDEX "RoleRecommendation_careerDirectionId_idx" ON "RoleRecommendation"("careerDirectionId");

-- CreateIndex
CREATE UNIQUE INDEX "CareerRoadmap_careerDirectionId_key" ON "CareerRoadmap"("careerDirectionId");

-- CreateIndex
CREATE INDEX "CareerRoadmap_id_idx" ON "CareerRoadmap"("id");

-- CreateIndex
CREATE INDEX "CareerRoadmap_careerDirectionId_idx" ON "CareerRoadmap"("careerDirectionId");

-- CreateIndex
CREATE INDEX "CareerMilestone_id_idx" ON "CareerMilestone"("id");

-- CreateIndex
CREATE INDEX "CareerMilestone_careerRoadmapId_idx" ON "CareerMilestone"("careerRoadmapId");

-- AddForeignKey
ALTER TABLE "CareerDirection" ADD CONSTRAINT "CareerDirection_userPersonaId_fkey" FOREIGN KEY ("userPersonaId") REFERENCES "UserPersona"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoleRecommendation" ADD CONSTRAINT "RoleRecommendation_careerDirectionId_fkey" FOREIGN KEY ("careerDirectionId") REFERENCES "CareerDirection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CareerRoadmap" ADD CONSTRAINT "CareerRoadmap_careerDirectionId_fkey" FOREIGN KEY ("careerDirectionId") REFERENCES "CareerDirection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CareerMilestone" ADD CONSTRAINT "CareerMilestone_careerRoadmapId_fkey" FOREIGN KEY ("careerRoadmapId") REFERENCES "CareerRoadmap"("id") ON DELETE CASCADE ON UPDATE CASCADE;
