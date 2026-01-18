"use server";

import { db } from "@/db";

export async function getUserByEmail(email: string) {
  return await db.user.findUnique({
    where: { email },
  });
}

export async function getAllUsers() {
  const users = await db.user.findMany({
    omit: {
      password: true,
    },
    orderBy: { createdAt: "desc" },
    include: {
      userPersona: {
        include: {
          niches: true,
          careerDirection: true,
        },
      },
    },
  });
  return users;
}
