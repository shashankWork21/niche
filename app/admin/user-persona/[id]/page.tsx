import { redirect } from "next/navigation";
import { validateAdminAccess } from "@/actions/utils/auth/validate-admin-access";
import { getUserPersonaWithDetails } from "@/db/queries/user-persona/get-user-persona-with-details";
import AdminUserPersonaView from "@/views/admin/user-persona-view";

export default async function AdminUserPersonaPage({
  params,
}: {
  params: { id: string };
}) {
  const { isAdmin } = await validateAdminAccess();
  if (!isAdmin) redirect("/dashboard");

  const { id } = await params;
  const personaId = parseInt(id, 10);

  if (isNaN(personaId)) {
    redirect("/admin/users");
  }

  const persona = await getUserPersonaWithDetails(personaId);

  if (!persona) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-zinc-900 mb-2">
            User Persona not found
          </h1>
          <p className="text-zinc-600">
            The user persona you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  return <AdminUserPersonaView persona={persona} />;
}
