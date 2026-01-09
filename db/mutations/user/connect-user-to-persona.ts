"use server";

import { db } from "@/db";

export async function connectUserToPersona(
  userId: number,
  userPersonaId: number
): Promise<void> {
  await db.user.update({
    where: { id: userId },
    data: { userPersonaId },
  });
}
