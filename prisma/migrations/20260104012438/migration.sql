-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateEnum
CREATE TYPE "SolutionType" AS ENUM ('FEAR', 'INTEREST', 'GOAL', 'STRUGGLE');

-- CreateEnum
CREATE TYPE "TicketSize" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateEnum
CREATE TYPE "marketSize" AS ENUM ('LARGE', 'SMALL');

-- CreateEnum
CREATE TYPE "SupplyDemand" AS ENUM ('LOCAL', 'GLOBAL');

-- CreateEnum
CREATE TYPE "Proposition" AS ENUM ('SAVE_TIME', 'GROW_REVENUE');

-- CreateEnum
CREATE TYPE "Size" AS ENUM ('HIGH', 'LOW');

-- CreateEnum
CREATE TYPE "Scope" AS ENUM ('EMAIL', 'PROFILE', 'OPENID', 'CALENDAR');

-- CreateEnum
CREATE TYPE "SlotStatus" AS ENUM ('PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED');

-- AlterTable
ALTER TABLE "Token" ADD COLUMN     "scope" "Scope"[];

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "phone" DROP NOT NULL;

-- CreateTable
CREATE TABLE "CustomerPersona" (
    "id" SERIAL NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" "Gender" NOT NULL,
    "location" TEXT NOT NULL,
    "annualIncome" INTEGER NOT NULL,
    "skills" TEXT[],
    "interests" TEXT[],
    "fears" TEXT[],
    "struggles" TEXT[],
    "goals" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "nicheId" INTEGER NOT NULL,
    "timeRichAudience" BOOLEAN NOT NULL,
    "moneyRichAudience" BOOLEAN NOT NULL,
    "trustRichAudience" BOOLEAN NOT NULL,

    CONSTRAINT "CustomerPersona_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPersona" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "skills" TEXT[],
    "interests" TEXT[],
    "loseTrackOfTimeAreas" TEXT[],
    "lovedDoingAt10" TEXT[],
    "issuesSpokenUpAbout" TEXT[],
    "naturallyCuriousAbout" TEXT[],
    "feelsLikePlay" TEXT[],
    "continuoslyLearningAbout" TEXT[],
    "drivingBelief" TEXT NOT NULL,
    "hereToDo" TEXT NOT NULL,
    "turningPoint" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "areasNeededHelp" TEXT[],

    CONSTRAINT "UserPersona_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActionTowardsGoal" (
    "id" SERIAL NOT NULL,
    "cue" TEXT NOT NULL,
    "routine" TEXT NOT NULL,
    "reward" TEXT NOT NULL,
    "userPersonaId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ActionTowardsGoal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Niche" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "statement" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "whyYou" TEXT NOT NULL,

    CONSTRAINT "Niche_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NicheSolution" (
    "id" SERIAL NOT NULL,
    "nicheId" INTEGER NOT NULL,
    "type" "SolutionType" NOT NULL,
    "description" TEXT NOT NULL,
    "solution" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NicheSolution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OfferSuite" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "nicheId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OfferSuite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Offer" (
    "id" SERIAL NOT NULL,
    "offerSuiteId" INTEGER NOT NULL,
    "ticketSize" "TicketSize" NOT NULL,
    "result" TEXT NOT NULL,
    "product" TEXT,
    "service" TEXT,
    "timeInvestment" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "bonuses" TEXT[],
    "guarantee" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Offer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Step" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "timeFrame" INTEGER,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "inclusions" TEXT[],
    "offerId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Step_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MarketValidation" (
    "id" SERIAL NOT NULL,
    "offerSuiteId" INTEGER NOT NULL,
    "verdict" DOUBLE PRECISION NOT NULL,
    "tam" BIGINT NOT NULL,
    "sam" BIGINT NOT NULL,
    "som" BIGINT NOT NULL,
    "growthDriver" TEXT NOT NULL,
    "growthObstacle" TEXT NOT NULL,
    "uniqueSellingProposition" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "relatedSearches" TEXT[],
    "relatedQuestions" TEXT[],
    "contentOpportunities" TEXT[],
    "supply" "SupplyDemand",
    "demand" "SupplyDemand" NOT NULL,
    "proposition" "Proposition",
    "competitionSize" "Size" NOT NULL,
    "techDriven" BOOLEAN NOT NULL,
    "customerPersonaId" INTEGER,
    "perceivedValue" "Size" NOT NULL,
    "usageFrequency" "Size" NOT NULL,

    CONSTRAINT "MarketValidation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Competitor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "averagePrice" DOUBLE PRECISION NOT NULL,
    "marketSharePercent" DOUBLE PRECISION NOT NULL,
    "strengths" TEXT[],
    "gaps" TEXT[],
    "uniqueSellingProposition" TEXT NOT NULL,
    "marketValidationId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Competitor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BusinessRoadmap" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "mvpGoal" TEXT NOT NULL,
    "mvpPriority" TEXT[],
    "launchTimeline" INTEGER NOT NULL,
    "launchChannels" TEXT[],
    "keyMetrics" TEXT[],
    "raiseMoney" BOOLEAN NOT NULL DEFAULT false,
    "valuation" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BusinessRoadmap_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Milestone" (
    "id" SERIAL NOT NULL,
    "businessRoadmapId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "actions" TEXT[],
    "hiringRequirements" TEXT[],
    "timelineDays" INTEGER NOT NULL,
    "successCriterion" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Milestone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Slot" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,
    "status" "SlotStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "professionalId" INTEGER,
    "meetingLink" TEXT,
    "eventId" TEXT,
    "userId" INTEGER,

    CONSTRAINT "Slot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" TEXT NOT NULL,
    "daysOfWeek" INTEGER[],
    "slotLength" INTEGER NOT NULL,
    "startTime" TIMETZ NOT NULL,
    "endTime" TIMETZ NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "professionalId" INTEGER NOT NULL,
    "holidays" TIMESTAMPTZ[],
    "breakBetweenSlots" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactMessage" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContactMessage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CustomerPersona_nicheId_key" ON "CustomerPersona"("nicheId");

-- CreateIndex
CREATE INDEX "CustomerPersona_id_idx" ON "CustomerPersona"("id");

-- CreateIndex
CREATE INDEX "CustomerPersona_userId_idx" ON "CustomerPersona"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserPersona_userId_key" ON "UserPersona"("userId");

-- CreateIndex
CREATE INDEX "UserPersona_id_idx" ON "UserPersona"("id");

-- CreateIndex
CREATE INDEX "UserPersona_userId_idx" ON "UserPersona"("userId");

-- CreateIndex
CREATE INDEX "ActionTowardsGoal_id_idx" ON "ActionTowardsGoal"("id");

-- CreateIndex
CREATE INDEX "ActionTowardsGoal_userPersonaId_idx" ON "ActionTowardsGoal"("userPersonaId");

-- CreateIndex
CREATE INDEX "Niche_id_idx" ON "Niche"("id");

-- CreateIndex
CREATE INDEX "Niche_statement_idx" ON "Niche"("statement");

-- CreateIndex
CREATE INDEX "Niche_userId_idx" ON "Niche"("userId");

-- CreateIndex
CREATE INDEX "NicheSolution_id_idx" ON "NicheSolution"("id");

-- CreateIndex
CREATE INDEX "NicheSolution_nicheId_idx" ON "NicheSolution"("nicheId");

-- CreateIndex
CREATE INDEX "OfferSuite_id_idx" ON "OfferSuite"("id");

-- CreateIndex
CREATE INDEX "OfferSuite_nicheId_userId_idx" ON "OfferSuite"("nicheId", "userId");

-- CreateIndex
CREATE INDEX "OfferSuite_userId_idx" ON "OfferSuite"("userId");

-- CreateIndex
CREATE INDEX "Offer_id_idx" ON "Offer"("id");

-- CreateIndex
CREATE INDEX "Offer_offerSuiteId_idx" ON "Offer"("offerSuiteId");

-- CreateIndex
CREATE INDEX "Step_id_idx" ON "Step"("id");

-- CreateIndex
CREATE INDEX "Step_offerId_idx" ON "Step"("offerId");

-- CreateIndex
CREATE INDEX "MarketValidation_customerPersonaId_idx" ON "MarketValidation"("customerPersonaId");

-- CreateIndex
CREATE INDEX "MarketValidation_id_idx" ON "MarketValidation"("id");

-- CreateIndex
CREATE INDEX "MarketValidation_offerSuiteId_idx" ON "MarketValidation"("offerSuiteId");

-- CreateIndex
CREATE INDEX "Competitor_id_idx" ON "Competitor"("id");

-- CreateIndex
CREATE INDEX "Competitor_marketValidationId_idx" ON "Competitor"("marketValidationId");

-- CreateIndex
CREATE INDEX "BusinessRoadmap_id_idx" ON "BusinessRoadmap"("id");

-- CreateIndex
CREATE INDEX "BusinessRoadmap_userId_idx" ON "BusinessRoadmap"("userId");

-- CreateIndex
CREATE INDEX "Milestone_id_idx" ON "Milestone"("id");

-- CreateIndex
CREATE INDEX "Milestone_businessRoadmapId_idx" ON "Milestone"("businessRoadmapId");

-- CreateIndex
CREATE INDEX "Slot_professionalId_idx" ON "Slot"("professionalId");

-- CreateIndex
CREATE INDEX "Slot_userId_idx" ON "Slot"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Schedule_professionalId_key" ON "Schedule"("professionalId");

-- CreateIndex
CREATE INDEX "ContactMessage_email_idx" ON "ContactMessage"("email");

-- CreateIndex
CREATE INDEX "ContactMessage_createdAt_idx" ON "ContactMessage"("createdAt");

-- CreateIndex
CREATE INDEX "Token_id_idx" ON "Token"("id");

-- CreateIndex
CREATE INDEX "User_id_idx" ON "User"("id");

-- AddForeignKey
ALTER TABLE "CustomerPersona" ADD CONSTRAINT "CustomerPersona_nicheId_fkey" FOREIGN KEY ("nicheId") REFERENCES "Niche"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerPersona" ADD CONSTRAINT "CustomerPersona_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPersona" ADD CONSTRAINT "UserPersona_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionTowardsGoal" ADD CONSTRAINT "ActionTowardsGoal_userPersonaId_fkey" FOREIGN KEY ("userPersonaId") REFERENCES "UserPersona"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Niche" ADD CONSTRAINT "Niche_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NicheSolution" ADD CONSTRAINT "NicheSolution_nicheId_fkey" FOREIGN KEY ("nicheId") REFERENCES "Niche"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfferSuite" ADD CONSTRAINT "OfferSuite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfferSuite" ADD CONSTRAINT "OfferSuite_nicheId_fkey" FOREIGN KEY ("nicheId") REFERENCES "Niche"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_offerSuiteId_fkey" FOREIGN KEY ("offerSuiteId") REFERENCES "OfferSuite"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Step" ADD CONSTRAINT "Step_offerId_fkey" FOREIGN KEY ("offerId") REFERENCES "Offer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketValidation" ADD CONSTRAINT "MarketValidation_offerSuiteId_fkey" FOREIGN KEY ("offerSuiteId") REFERENCES "OfferSuite"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketValidation" ADD CONSTRAINT "MarketValidation_customerPersonaId_fkey" FOREIGN KEY ("customerPersonaId") REFERENCES "CustomerPersona"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Competitor" ADD CONSTRAINT "Competitor_marketValidationId_fkey" FOREIGN KEY ("marketValidationId") REFERENCES "MarketValidation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BusinessRoadmap" ADD CONSTRAINT "BusinessRoadmap_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Milestone" ADD CONSTRAINT "Milestone_businessRoadmapId_fkey" FOREIGN KEY ("businessRoadmapId") REFERENCES "BusinessRoadmap"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Slot" ADD CONSTRAINT "Slot_professionalId_fkey" FOREIGN KEY ("professionalId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Slot" ADD CONSTRAINT "Slot_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_professionalId_fkey" FOREIGN KEY ("professionalId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
