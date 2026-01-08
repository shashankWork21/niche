"use server";

import { FormState } from "@/lib/types";
import { loginUserByPassword } from "../utils/auth/login-user-by-password";

export async function login(formState: FormState, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  return await loginUserByPassword(email, password);
}
