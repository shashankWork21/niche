import { db } from "@/db";

export async function deleteTokenByUserId(userId: number): Promise<void> {
  await db.token.deleteMany({
    where: { userId },
  });
}
