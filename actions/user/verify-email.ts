"use server";

import jwt from "jsonwebtoken";
import { validateSession } from "@/actions/utils/auth/validate-session";
import { db } from "@/db";
import { getBaseUrl, buildEmailTemplate } from "@/lib/utils/email";
import { sendEmail } from "./email";
import { getJwtSecret } from "./jwt";
import {
  checkRateLimit,
  getClientIdentifier,
  RATE_LIMITS,
} from "@/lib/utils/rate-limit";

export async function sendVerifyEmail() {
  const user = await validateSession();
  if (!user) throw new Error("Unauthorized");

  // Rate limiting by user ID
  const identifier = await getClientIdentifier("email", user?.id?.toString());
  const rateLimitResult = checkRateLimit(
    identifier,
    RATE_LIMITS.EMAIL_VERIFICATION
  );

  if (!rateLimitResult.allowed) {
    const resetInMinutes = Math.ceil(
      (rateLimitResult.resetAt - Date.now()) / 60000
    );
    throw new Error(
      `Too many verification email requests. Please try again in ${resetInMinutes} minute${
        resetInMinutes !== 1 ? "s" : ""
      }.`
    );
  }

  const dbUser = await db.user.findUnique({ where: { id: user.id } });
  if (!dbUser) throw new Error("User not found");
  if (dbUser.isEmailVerified) return { success: true };

  const token = jwt.sign(
    { userId: dbUser.id, type: "verify_email" },
    getJwtSecret(),
    { expiresIn: "24h" }
  );

  const link = `${getBaseUrl()}/verify-email?token=${encodeURIComponent(
    token
  )}`;
  const tpl = buildEmailTemplate({
    title: "Verify your email",
    preheader: "Confirm your email address to finish setting up your account.",
    intro:
      "Please verify your email address to finish setting up your account and enable emails from us.",
    buttonText: "Verify email",
    buttonUrl: link,
    footerNote: "If you didn't create an account, you can ignore this email.",
  });
  await sendEmail(dbUser.email, "Verify your email", tpl.html);

  return { success: true };
}

export async function verifyEmailToken(token: string) {
  const decoded = jwt.verify(token, getJwtSecret()) as {
    userId: number;
    type?: string;
  };
  if (decoded.type !== "verify_email") throw new Error("Invalid token");

  await db.user.update({
    where: { id: decoded.userId },
    data: { isEmailVerified: true },
  });
  return { success: true };
}
