"use server";

import { db } from "@/db";

interface UpdateUserPersonaData {
  skills: string[];
  interests: string[];
  coreValues: string[];
  drivingBelief: string;
}

export async function updateUserPersona(
  userPersonaId: number,
  data: UpdateUserPersonaData
) {
  return await db.userPersona.update({
    where: { id: userPersonaId },
    data,
  });
}
