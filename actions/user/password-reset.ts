"use server";

import jwt from "jsonwebtoken";

import { db } from "@/db";
import { hashPassword } from "@/actions/utils/auth/password";
import { getJwtSecret } from "./jwt";

export async function resetPasswordWithToken(
  token: string,
  password: string,
  confirmPassword: string
) {
  if (!password || password.length < 8) {
    throw new Error("Password must be at least 8 characters.");
  }
  if (password !== confirmPassword) {
    throw new Error("Passwords do not match.");
  }

  const decoded = jwt.verify(token, getJwtSecret()) as {
    userId: number;
    type?: string;
  };
  if (decoded.type !== "reset_password") throw new Error("Invalid token");

  const hashed = await hashPassword(password);
  await db.user.update({
    where: { id: decoded.userId },
    data: { password: hashed },
  });
  return { success: true };
}
