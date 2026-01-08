"use server";

import { cookies } from "next/headers";
import { validateToken } from "./token";

export async function validateSession() {
  const c = await cookies();
  const accessToken = c.get("access_token")?.value || "";

  const user = await validateToken(accessToken);
  return user;
}
