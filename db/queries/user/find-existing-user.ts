"use server";

import { db } from "@/db";

export async function findExistingUser(email: string, phone: string) {
  if (phone) {
    return await db.user.findFirst({
      where: {
        OR: [{ email }, { phone }],
      },
    });
  }
  return await db.user.findUnique({
    where: { email },
  });
}
