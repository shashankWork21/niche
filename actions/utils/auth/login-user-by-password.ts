"use server";

import {
  checkRateLimit,
  getClientIdentifier,
  RATE_LIMITS,
} from "@/lib/utils/rate-limit";
import { FormState } from "@/lib/types";
import { cookies } from "next/headers";
import { comparePassword } from "../auth/password";
import { generateToken } from "../auth/token";
import { getUserByEmail } from "@/db/queries/user/get-user-by-email";

export async function loginUserByPassword(
  email: string,
  password: string
): Promise<FormState> {
  // Rate limiting for login attempts (by IP)
  const identifier = await getClientIdentifier("ip");
  const rateLimitResult = checkRateLimit(identifier, RATE_LIMITS.LOGIN);

  if (!rateLimitResult.allowed) {
    const resetInMinutes = Math.ceil(
      (rateLimitResult.resetAt - Date.now()) / 60000
    );
    return {
      success: false,
      errors: {
        _form: {
          errors: [
            `Too many login attempts. Please try again in ${resetInMinutes} minute${
              resetInMinutes !== 1 ? "s" : ""
            }.`,
          ],
        },
      },
    };
  }

  const c = await cookies();

  const user = await getUserByEmail(email);

  if (!user) {
    return {
      success: false,
      errors: {
        email: { errors: ["No user found with this email."] },
      },
    };
  }

  const isPasswordValid = await comparePassword(
    password,
    user.password as string
  );

  if (!isPasswordValid) {
    return {
      success: false,
      errors: {
        password: { errors: ["Incorrect password."] },
      },
    };
  }

  // Create token
  const token = await generateToken(user.id);

  c.set("access_token", token.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    expires: token.accessExpiresAt,
    path: "/", // make token available across the entire app
  });

  c.set("refresh_token", token.refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    expires: token.refreshExpiresAt,
    path: "/", // make token available across the entire app
  });

  return { success: true, errors: {} };
}
