"use server";

import { db } from "@/db";
import { Prisma } from "@/app/generated/prisma/client";

export async function getCareerDirectionById(careerDirectionId: number) {
  return await db.careerDirection.findUnique({
    where: {
      id: careerDirectionId,
    },
    include: {
      roleRecommendations: true,
    },
  });
}

export type CareerDirectionWithRelations = Prisma.CareerDirectionGetPayload<{
  include: {
    roleRecommendations: true;
  };
}>;
