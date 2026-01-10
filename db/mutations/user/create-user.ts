"use server";

import { Role } from "@/app/generated/prisma/enums";
import { hashPassword } from "@/actions/utils/auth/password";
import { db } from "@/db";

export async function createUserRecord({
  email,
  firstName,
  lastName,
  phone,
  password,
  role,
  userPersonaId,
}: {
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  password: string;
  role: Role;
  userPersonaId?: number | null;
}) {
  try {
    const data: {
      firstName: string;
      lastName: string;
      email: string;
      phone?: string;
      password: string;
      role: Role;
      userPersonaId?: number | null;
    } = {
      firstName,
      lastName,
      email,
      password,
      role,
    };
    if (phone) {
      data.phone = phone;
    }
    if (userPersonaId) {
      data.userPersonaId = userPersonaId;
    }
    const hashedPassword = await hashPassword(password);
    data.password = hashedPassword;
    const user = await db.user.create({
      data,
    });
    return {
      success: true,
      errors: {},
      redirectTo: "/dashboard",
      resultParams: {
        ids: {
          userId: user.id,
        },
      },
    };
  } catch (error: unknown) {
    console.log(error);
    if (error instanceof Error) {
      return {
        success: false,
        errors: {
          _form: {
            errors: [error.message],
          },
        },
      };
    } else {
      return {
        success: false,
        errors: {
          _form: {
            errors: [
              "Something went wrong while creating the account. Please try again.",
            ],
          },
        },
      };
    }
  }
}
