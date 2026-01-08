import { Role } from "@/app/generated/prisma/enums";
import { RegisterFormView } from "@/views/auth/register-form-view";

interface RegisterPageProps {
  searchParams: {
    personaId?: string;
  };
}

export default async function RegisterPage({
  searchParams,
}: RegisterPageProps) {
  const { personaId } = await searchParams;

  return (
    <RegisterFormView
      role={Role.USER}
      personaId={parseInt(personaId || "") || 0}
    />
  );
}
