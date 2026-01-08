import jwt from "jsonwebtoken";
import { createToken } from "@/db/mutations/token/create-token";

export async function generateRefreshToken(userId: number) {
  const refreshToken = jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET!, {
    expiresIn: "60d",
  });

  const refreshExpiresAt = new Date(Date.now() + 60 * 24 * 60 * 60 * 1000);

  const tokenRecord = await createToken(userId, refreshToken, refreshExpiresAt);

  return tokenRecord;
}
