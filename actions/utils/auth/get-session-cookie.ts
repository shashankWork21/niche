import { cookies } from "next/headers";

export async function getSessionCookie() {
  const c = await cookies();
  return c.get("access_token")?.value || "";
}
