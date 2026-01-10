import { Role } from "@/app/generated/prisma/enums";
import { createUserRecord } from "@/db/mutations/user/create-user";
import { findExistingUser } from "@/db/queries/user/find-existing-user";
import {
  checkRateLimit,
  getClientIdentifier,
  RATE_LIMITS,
} from "@/lib/utils/rate-limit";
import { validateUser } from "@/lib/validations/user";
import { FormState } from "@/lib/types";

import z from "zod";

export async function createUser({
  email,
  phone,
  firstName,
  lastName,
  password,
  confirmPassword,
  role,
  userPersonaId,
}: {
  email: string;
  phone?: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  role: Role;
  userPersonaId?: number | null;
}): Promise<FormState> {
  // Rate limiting for registration
  const identifier = await getClientIdentifier("ip");
  const rateLimitResult = checkRateLimit(identifier, RATE_LIMITS.REGISTER);
  console.log("Rate limit result:", rateLimitResult);
  if (!rateLimitResult.allowed) {
    const resetInMinutes = Math.ceil(
      (rateLimitResult.resetAt - Date.now()) / 60000
    );
    return {
      success: false,
      errors: {
        _form: {
          errors: [
            `Too many registration attempts. Please try again in ${resetInMinutes} minute${
              resetInMinutes !== 1 ? "s" : ""
            }.`,
          ],
        },
      },
    };
  }

  const existingUser = await findExistingUser(email, phone || "");

  if (existingUser) {
    return {
      success: false,
      errors: {
        _form: {
          errors: ["A user with this email or phone number already exists."],
        },
      },
    };
  }

  const result = validateUser({
    firstName,
    lastName,
    email,
    phone,
    password,
    confirmPassword,
  });

  if (!result.success) {
    return {
      success: false,
      errors: z.treeifyError(result.error).properties,
    };
  }

  return (await createUserRecord({
    email,
    firstName,
    lastName,
    phone: phone || "",
    password,
    role,
    userPersonaId,
  })) as FormState;
}
