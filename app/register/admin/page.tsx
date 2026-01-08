import { Role } from "@/app/generated/prisma/enums";
import { RegisterFormView } from "@/views/auth/register-form-view";

export default async function RegisterAdminPage() {
  return <RegisterFormView role={Role.ADMIN} />;
}
