"use server";

import { DeliveryFormat, SolutionOutcome } from "@/app/generated/prisma/enums";
import { db } from "@/db";

interface NicheSolutionData {
  nicheId: number;
  outcome: SolutionOutcome;
  description: string[];
  solution: string;
  deliveryFormat: DeliveryFormat;
  timeframe: string;
  pricingGuidance: string;
  uniqueApproach: string;
  proofPoints: string[];
  idealForStage: string;
  bundlesWith: string[];
}

export async function createNicheSolutions(data: NicheSolutionData[]) {
  // Batch create niche solutions
  return await db.nicheSolution.createMany({
    data,
  });
}
