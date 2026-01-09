import { redirect } from "next/navigation";
import { validateSession } from "@/actions/utils/auth/validate-session";
import { Role } from "@/app/generated/prisma/enums";
import { getNicheById } from "@/db/queries/niche/get-niche-by-id";
import { NicheResultsView } from "@/views/niche/niche-results-view";

export default async function NicheResultPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const nicheId = parseInt(id, 10);
  const niche = await getNicheById(nicheId);

  const user = await validateSession();

  if (!user) {
    redirect("/login");
  }

  const userPersonaId = user?.userPersonaId;

  if (niche?.userPersonaId !== userPersonaId && user.role !== Role.ADMIN) {
    redirect("/dashboard");
  }

  if (!niche) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-zinc-900 mb-2">
            Niche not found
          </h1>
          <p className="text-zinc-600">
            The niche you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  return <NicheResultsView data={niche} />;
}
