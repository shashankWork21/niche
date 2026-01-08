"use server";

import { cookies } from "next/headers";
import { deleteTokenByAccessToken } from "@/actions/utils/auth/token/delete-token-by-access-token";

export async function logout() {
  try {
    const c = await cookies();
    await deleteTokenByAccessToken(c.get("access_token")?.value || "");
    c.delete("access_token");
    c.delete("refresh_token");
    return {
      success: true,
      errors: {},
    };
  } catch (error) {
    console.error("Error during logout:", error);
    return {
      success: false,
      errors: {
        _form: {
          errors: ["An error occurred during logout. Please try again."],
        },
      },
    };
  }
}
