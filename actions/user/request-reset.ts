"use server";

import jwt from "jsonwebtoken";

import { sendEmail } from "./email";
import { getJwtSecret } from "./jwt";
import { db } from "@/db";
import {
  checkRateLimit,
  getClientIdentifier,
  RATE_LIMITS,
} from "@/lib/utils/rate-limit";
import { buildEmailTemplate, getBaseUrl } from "@/lib/utils/email";

export async function requestPasswordReset(email: string) {
  const normalized = email.trim().toLowerCase();
  if (!normalized) return { success: true };

  // Rate limiting by email address
  const identifier = await getClientIdentifier("email", normalized);
  const rateLimitResult = checkRateLimit(
    identifier,
    RATE_LIMITS.PASSWORD_RESET
  );

  if (!rateLimitResult.allowed) {
    // Still return success to prevent email enumeration
    return { success: true };
  }

  const user = await db.user.findUnique({ where: { email: normalized } });
  if (!user) return { success: true };

  const token = jwt.sign(
    { userId: user.id, type: "reset_password" },
    getJwtSecret(),
    { expiresIn: "1h" }
  );

  const link = `${getBaseUrl()}/reset-password?token=${encodeURIComponent(
    token
  )}`;
  const tpl = buildEmailTemplate({
    title: "Reset your password",
    preheader: "Reset your password securely in one step.",
    intro:
      "We received a request to reset your password. Use the button below to set a new password.",
    buttonText: "Reset password",
    buttonUrl: link,
    footerNote:
      "If you didn't request this, you can ignore this email. This link expires in 1 hour.",
  });
  await sendEmail(user.email, "Reset your password", tpl.html);

  return { success: true };
}
