"use server";

import { db } from "@/db";

export async function getUserByPersonaId(userPersonaId: number) {
  const user = await db.user.findFirst({
    where: { userPersonaId },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
    },
  });

  return user;
}
