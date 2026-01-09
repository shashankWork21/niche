import { validateSession } from "@/actions/utils/auth/validate-session";
import { connectUserToPersona } from "@/db/mutations/user/connect-user-to-persona";
import { getNicheOrCareerDirectionByUserPersona } from "@/db/queries/user-persona/get-niche-or-career-direction";
import { DashboardPageView } from "@/views/dashboard";
import { redirect } from "next/navigation";

interface DashboardPageProps {
  searchParams: {
    personaId?: string;
  };
}

export default async function DashboardPage({
  searchParams,
}: DashboardPageProps) {
  const user = await validateSession();

  const { personaId } = await searchParams;

  if (personaId) {
    await connectUserToPersona(user?.id as number, parseInt(personaId, 10));
    return (
      <DashboardPageView
        userPersonaId={parseInt(personaId, 10)}
        careerDirection={null}
        niches={[]}
      />
    );
  }

  const { niches, careerDirection } =
    await getNicheOrCareerDirectionByUserPersona(user?.userPersonaId || 0);

  return (
    <DashboardPageView
      userPersonaId={user?.userPersonaId || null}
      niches={niches}
      careerDirection={careerDirection}
    />
  );
}
