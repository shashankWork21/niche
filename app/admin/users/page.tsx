import { redirect } from "next/navigation";
import { validateAdminAccess } from "@/actions/utils/auth/validate-admin-access";
import { getAllUsers } from "@/db/queries/user/get-all-users";
import AdminUsersView from "@/views/admin/users-view";
import { UserGoal } from "@/app/generated/prisma/enums";

export default async function AdminUsersPage() {
  const { isAdmin } = await validateAdminAccess();
  if (!isAdmin) redirect("/dashboard");

  const users = await getAllUsers();

  const userData = users.map((user) => {
    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      isEmailVerified: user.isEmailVerified,
      createdAt: user.createdAt,
      goal: user.userPersona?.goal || UserGoal.CAREER,
      links:
        user?.userPersona?.goal === UserGoal.CAREER
          ? [
              `https://${process.env.BASE_URL}/career-direction/${
                user?.userPersona?.careerDirection?.id || 0
              }`,
            ]
          : user.userPersona?.niches.map(
              (niche) => `https://${process.env.BASE_URL}/niche/${niche.id}`
            ) || [],
    };
  });
  return <AdminUsersView users={userData} />;
}
