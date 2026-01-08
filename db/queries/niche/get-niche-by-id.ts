"use server";

import { db } from "@/db";
import { Prisma } from "@/app/generated/prisma/client";

export async function getNicheById(nicheId: number) {
  return await db.niche.findUnique({
    where: {
      id: nicheId,
    },
    include: {
      nicheSolutions: true,
      customerPersona: true,
    },
  });
}

export type NicheWithRelations = Prisma.NicheGetPayload<{
  include: {
    nicheSolutions: true;
    customerPersona: true;
  };
}>;
