import { redirect } from "next/navigation";
import { validateAdminAccess } from "@/actions/utils/auth/validate-admin-access";
import { getAllUsers } from "@/db/queries/user/get-all-users";
import AdminUsersView from "@/views/admin/users-view";

export default async function AdminUsersPage() {
  const { isAdmin } = await validateAdminAccess();
  if (!isAdmin) redirect("/dashboard");

  const users = await getAllUsers();
  return <AdminUsersView users={users} />;
}
