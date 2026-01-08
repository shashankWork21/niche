import { deleteTokenByUserId } from "@/db/mutations/token/delete-token-by-user-id";
import { verifyToken } from ".";

export async function deleteTokenByAccessToken(
  accessToken: string
): Promise<void> {
  const payload = verifyToken(accessToken, process.env.ACCESS_TOKEN_SECRET!);
  if (payload) {
    await deleteTokenByUserId(payload.userId);
  }
}
