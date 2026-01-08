"use server";

import { validateSession } from "@/actions/utils/auth/validate-session";
import { db } from "@/db";

export async function updateMyProfile(formData: FormData) {
  const user = await validateSession();
  if (!user) throw new Error("Unauthorized");

  const firstName = String(formData.get("firstName") ?? "").trim();
  const lastName = String(formData.get("lastName") ?? "").trim();
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();

  if (!firstName || !lastName || !email) {
    throw new Error("All fields are required.");
  }

  const existing = await db.user.findUnique({ where: { id: user.id } });
  if (!existing) throw new Error("User not found");

  const isEmailChanged = existing.email !== email;
  if (isEmailChanged) {
    const emailTaken = await db.user.findUnique({ where: { email } });
    if (emailTaken && emailTaken.id !== existing.id) {
      throw new Error("Email is already in use.");
    }
  }

  await db.user.update({
    where: { id: existing.id },
    data: {
      firstName,
      lastName,
      email,
      ...(isEmailChanged ? { isEmailVerified: false } : {}),
    },
  });

  return { success: true };
}
