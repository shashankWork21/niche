"use server";

import { db } from "@/db";

export async function getUserById(userId: number) {
  const user = await db.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      role: true,
      isEmailVerified: true,
      phone: true,
      createdAt: true,
      updatedAt: true,
      userPersonaId: true,
    },
  });

  return user;
}
