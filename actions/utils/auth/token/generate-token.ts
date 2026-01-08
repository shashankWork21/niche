import { generateAccessToken, generateRefreshToken } from ".";

export async function generateToken(userId: number) {
  const tokenRecord = await generateRefreshToken(userId);
  const accessToken = generateAccessToken(userId, tokenRecord.id);

  return {
    accessToken,
    refreshToken: tokenRecord.refreshToken,
    accessExpiresAt: new Date(Date.now() + 12 * 60 * 60 * 1000),
    refreshExpiresAt: tokenRecord.refreshExpiresAt,
  };
}
