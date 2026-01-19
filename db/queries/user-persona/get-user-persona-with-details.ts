"use server";

import { db } from "@/db";

export async function getUserPersonaWithDetails(personaId: number) {
  const persona = await db.userPersona.findUnique({
    where: { id: personaId },
    include: {
      user: {
        omit: {
          password: true,
        },
      },
      niches: {
        include: {
          customerPersona: true,
          nicheSolutions: true,
        },
      },
      careerDirection: {
        include: {
          roleRecommendations: true,
          careerRoadmap: {
            include: {
              milestones: true,
            },
          },
        },
      },
    },
  });

  return persona;
}

export type UserPersonaWithDetails = NonNullable<
  Awaited<ReturnType<typeof getUserPersonaWithDetails>>
>;
