"use server";

import { Role } from "@/app/generated/prisma/enums";
import { validateSession } from "@/actions/utils/auth/validate-session";

export async function validateAdminAccess() {
  const user = await validateSession();
  return { user, isAdmin: user?.role === Role.ADMIN };
}
