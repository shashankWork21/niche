"use server";

import { db } from "@/db";

export async function getNicheOrCareerDirectionByUserPersona(
  userPersonaId: number
) {
  if (userPersonaId === 0) {
    return { niches: [], careerDirection: null };
  }
  const niches = await db.niche.findMany({
    where: { userPersonaId },
    select: {
      id: true,
      statement: true,
    },
  });
  const careerDirection = await db.careerDirection.findUnique({
    where: { userPersonaId },
    select: {
      id: true,
      statement: true,
    },
  });

  return { niches, careerDirection };
}
