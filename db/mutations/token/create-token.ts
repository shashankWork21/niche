import { db } from "@/db";

export async function createToken(
  userId: number,
  refreshToken: string,
  refreshExpiresAt: Date
) {
  return await db.token.create({
    data: {
      userId,
      refreshToken,
      refreshExpiresAt,
    },
  });
}
