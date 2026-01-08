"use server";

import { db } from "@/db";
import { UserPersona } from "@/app/generated/prisma/client";

export async function getUserPersonaById(
  personaId: number
): Promise<UserPersona | null> {
  const persona = await db.userPersona.findUnique({
    where: { id: personaId },
  });

  return persona;
}
