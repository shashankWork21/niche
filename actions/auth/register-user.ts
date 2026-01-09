"use server";

import { Role } from "@/app/generated/prisma/client";
import { FormState } from "@/lib/types";
import { revalidatePath } from "next/cache";
import { createUser } from "../utils/auth/create-user";
// import { getUserPersonaById } from "@/db/queries/user-persona/get-user-persona-by-id";
// import { getNicheFromPersona } from "../niche/get-niche-from-persona";
import { generateToken } from "../utils/auth/token";
import { cookies } from "next/headers";

export async function registerUser(
  role: Role,
  personaId: number,
  formState: FormState,
  formData: FormData
) {
  const c = await cookies();
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const countryCode = formData.get("country_code") as string;
  const phoneNumber = formData.get("phone_number") as string;
  const phone =
    countryCode && phoneNumber ? `${countryCode}${phoneNumber}` : "";
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  const result = await createUser({
    email,
    userPersonaId: personaId || null,
    firstName,
    lastName,
    phone,
    password,
    confirmPassword,
    role,
  });

  if (result.success) {
    revalidatePath("/admin/users");
  }

  const token = await generateToken(result?.resultParams?.ids.userId as number);

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
  return result;
}
