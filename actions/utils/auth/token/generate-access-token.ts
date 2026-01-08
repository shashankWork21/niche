import jwt from "jsonwebtoken";
import { TokenPayload } from "./token-payload";

/**
 * Generate access token (stateless JWT)
 */
export function generateAccessToken(userId: number, tokenId?: number): string {
  const payload: TokenPayload = { userId };
  if (tokenId) {
    payload.tokenId = tokenId;
  }

  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: "12h",
  });
}
