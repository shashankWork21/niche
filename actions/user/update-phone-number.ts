"use server";

import { db } from "@/db";
import { FormState } from "@/lib/types";

export async function updateUserPhoneNumber(
  userId: number,
  formState: FormState,
  formData: FormData
): Promise<FormState> {
  const countryCode = formData.get("country_code") as string;
  const phoneNumber = formData.get("phone_number") as string;

  if (!phoneNumber || !countryCode) {
    return {
      success: false,
      errors: {
        _form: { errors: ["Country code and phone number are required."] },
      },
    };
  }

  const phone = `${countryCode}${phoneNumber}`;
  try {
    await db.user.update({
      where: { id: userId },
      data: { phone },
    });

    return {
      success: true,
      errors: {},
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        success: false,
        errors: {
          _form: { errors: [error.message] },
        },
      };
    } else {
      return {
        success: false,
        errors: {
          _form: {
            errors: [
              "Something went wrong while updating the phone number. Please try again.",
            ],
          },
        },
      };
    }
  }
}
