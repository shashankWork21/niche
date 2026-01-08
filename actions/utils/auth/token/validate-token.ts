import { User } from "@/app/generated/prisma/client";
import { verifyToken } from ".";
import { getUserById } from "@/db/queries/user/get-user-by-id";

export async function validateToken(
  accessToken: string
): Promise<Partial<User> | null> {
  const payload = verifyToken(accessToken, process.env.ACCESS_TOKEN_SECRET!);
  if (!payload) {
    return null;
  }

  // Fetch user from database
  const user = await getUserById(payload.userId);
  return user;
}
