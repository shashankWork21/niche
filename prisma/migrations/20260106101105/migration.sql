/*
  Warnings:

  - Added the required column `demandType` to the `Niche` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "BusinessModel" AS ENUM ('B2B', 'B2C', 'BOTH');

-- CreateEnum
CREATE TYPE "Criticality" AS ENUM ('CRITICAL', 'NICE_TO_HAVE');

-- CreateEnum
CREATE TYPE "UrgencyLevel" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateEnum
CREATE TYPE "AwarenessStage" AS ENUM ('UNAWARE', 'PROBLEM_AWARE', 'SOLUTION_AWARE', 'PRODUCT_AWARE');

-- CreateEnum
CREATE TYPE "CompanySize" AS ENUM ('SOLO', 'SMALL_2_10', 'MEDIUM_11_50', 'LARGE_51_200', 'ENTERPRISE_200_PLUS');

-- CreateEnum
CREATE TYPE "BuyingPower" AS ENUM ('BUDGET_HOLDER', 'INFLUENCER', 'END_USER', 'CHAMPION');

-- CreateEnum
CREATE TYPE "TechSavviness" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateEnum
CREATE TYPE "EducationLevel" AS ENUM ('HIGH_SCHOOL', 'BACHELORS', 'MASTERS', 'PHD', 'PROFESSIONAL', 'SELF_TAUGHT');

-- CreateEnum
CREATE TYPE "DemandOutlook" AS ENUM ('HIGH_DEMAND', 'MODERATE_DEMAND', 'NICHE_DEMAND', 'DECLINING');

-- CreateEnum
CREATE TYPE "CompetitionLevel" AS ENUM ('LOW', 'MODERATE', 'HIGH');

-- CreateEnum
CREATE TYPE "RemoteViability" AS ENUM ('FULLY_REMOTE', 'HYBRID', 'ONSITE_MOSTLY', 'ONSITE_ONLY');

-- CreateEnum
CREATE TYPE "WorkLifeBalance" AS ENUM ('EXCELLENT', 'GOOD', 'MODERATE', 'DEMANDING', 'INTENSE');

-- CreateEnum
CREATE TYPE "StressLevel" AS ENUM ('LOW', 'MODERATE', 'HIGH', 'VERY_HIGH');

-- CreateEnum
CREATE TYPE "DeliveryFormat" AS ENUM ('DONE_FOR_YOU', 'DONE_WITH_YOU', 'SELF_SERVICE', 'HYBRID');

-- AlterTable
ALTER TABLE "CareerDirection" ADD COLUMN     "blindSpots" TEXT[],
ADD COLUMN     "careerArchetype" TEXT,
ADD COLUMN     "demandOutlook" "DemandOutlook",
ADD COLUMN     "developmentAreas" TEXT[],
ADD COLUMN     "fiveYearVision" TEXT,
ADD COLUMN     "growthPotential" TEXT,
ADD COLUMN     "idealEnvironment" TEXT,
ADD COLUMN     "immediateNextSteps" TEXT[],
ADD COLUMN     "naturalStrengths" TEXT[],
ADD COLUMN     "networkingAdvice" TEXT,
ADD COLUMN     "salaryExpectation" TEXT,
ADD COLUMN     "transitionStrategy" TEXT,
ADD COLUMN     "validationQuestions" TEXT[],
ADD COLUMN     "workingStyle" TEXT;

-- AlterTable
ALTER TABLE "CustomerPersona" ADD COLUMN     "aspirations" TEXT[],
ADD COLUMN     "awarenessStage" "AwarenessStage",
ADD COLUMN     "buyingPower" "BuyingPower",
ADD COLUMN     "companySize" "CompanySize",
ADD COLUMN     "contentConsumption" TEXT[],
ADD COLUMN     "currentSolutions" TEXT[],
ADD COLUMN     "educationLevel" "EducationLevel",
ADD COLUMN     "familyStatus" TEXT,
ADD COLUMN     "frustrations" TEXT[],
ADD COLUMN     "industryVerticals" TEXT[],
ADD COLUMN     "jobTitles" TEXT[],
ADD COLUMN     "painLevel" INTEGER,
ADD COLUMN     "preferredChannels" TEXT[],
ADD COLUMN     "techSavviness" "TechSavviness",
ADD COLUMN     "urgencyLevel" "UrgencyLevel";

-- AlterTable
ALTER TABLE "Niche" ADD COLUMN     "adjacentNiches" TEXT[],
ADD COLUMN     "businessModel" "BusinessModel",
ADD COLUMN     "competitiveEdge" TEXT,
ADD COLUMN     "criticality" "Criticality",
ADD COLUMN     "demandType" "SupplyDemand" NOT NULL,
ADD COLUMN     "marketGap" TEXT,
ADD COLUMN     "proposition" "Proposition",
ADD COLUMN     "scalabilityNote" TEXT,
ADD COLUMN     "supplyType" "SupplyDemand",
ADD COLUMN     "uniqueValue" TEXT,
ADD COLUMN     "validationQuestions" TEXT[];

-- AlterTable
ALTER TABLE "NicheSolution" ADD COLUMN     "bundlesWith" TEXT[],
ADD COLUMN     "deliveryFormat" "DeliveryFormat",
ADD COLUMN     "idealForStage" TEXT,
ADD COLUMN     "pricingGuidance" TEXT,
ADD COLUMN     "proofPoints" TEXT[],
ADD COLUMN     "timeframe" TEXT,
ADD COLUMN     "uniqueApproach" TEXT;

-- AlterTable
ALTER TABLE "RoleRecommendation" ADD COLUMN     "certifications" TEXT[],
ADD COLUMN     "collaborationStyle" TEXT,
ADD COLUMN     "competitionLevel" "CompetitionLevel",
ADD COLUMN     "estimatedPrepTime" TEXT,
ADD COLUMN     "experienceRequired" TEXT,
ADD COLUMN     "interviewFocus" TEXT[],
ADD COLUMN     "jobBoards" TEXT[],
ADD COLUMN     "keyResponsibilities" TEXT[],
ADD COLUMN     "keywordsTags" TEXT[],
ADD COLUMN     "learningResources" TEXT[],
ADD COLUMN     "niceToHaveSkills" TEXT[],
ADD COLUMN     "portfolioProjects" TEXT[],
ADD COLUMN     "remoteViability" "RemoteViability",
ADD COLUMN     "requiredSkills" TEXT[],
ADD COLUMN     "stressLevel" "StressLevel",
ADD COLUMN     "typicalDayDescription" TEXT,
ADD COLUMN     "workLifeBalance" "WorkLifeBalance";
