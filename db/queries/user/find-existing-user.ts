"use server";

import { db } from "@/db";

export async function findExistingUser(email: string, phone: string) {
  return await db.user.findFirst({
    where: {
      OR: [{ email }, { phone }],
    },
  });
}
