import jwt from "jsonwebtoken";
import { TokenPayload } from ".";

export function verifyToken(
  token: string,
  secret: string
): TokenPayload | null {
  try {
    return jwt.verify(token, secret) as TokenPayload;
  } catch (error: unknown) {
    console.log(error);
    return null;
  }
}
