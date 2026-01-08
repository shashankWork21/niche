"use server";

import {
  BusinessModel,
  Criticality,
  Proposition,
  SupplyDemand,
} from "@/app/generated/prisma/enums";
import { db } from "@/db";

interface createNicheData {
  userPersonaId: number;
  statement: string;
  whyYou: string;
  validationQuestions: string[];
  uniqueValue: string;
  marketGap: string;
  competitiveEdge: string;
  businessModel: BusinessModel;
  supplyType: SupplyDemand;
  demandType: SupplyDemand;
  proposition: Proposition;
  criticality: Criticality;
  adjacentNiches: string[];
  scalabilityNote: string;
}

export async function createNiche(data: createNicheData) {
  return await db.niche.create({ data });
}
