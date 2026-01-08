"use server";

import {
  CareerArchetype,
  DemandOutlook,
  IdealEnvironment,
  WorkingStyle,
} from "@/app/generated/prisma/enums";
import { db } from "@/db";

interface CreateCareerDirectionData {
  userPersonaId: number;
  statement: string;
  whyYou: string;
  careerArchetype?: CareerArchetype;
  workingStyle?: WorkingStyle;
  idealEnvironment?: IdealEnvironment;
  naturalStrengths: string[];
  blindSpots: string[];
  developmentAreas: string[];
  demandOutlook: DemandOutlook;
  salaryExpectation: string;
  growthPotential: string;
  validationQuestions: string[];
  networkingAdvice: string;
  fiveYearVision: string;
  transitionStrategy: string;
}

export async function createCareerDirection(data: CreateCareerDirectionData) {
  return await db.careerDirection.create({ data });
}
