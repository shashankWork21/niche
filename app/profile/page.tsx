import { validateSession } from "@/actions/utils/auth/validate-session";

import ProfileView from "@/views/profile/profile-view";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const user = await validateSession();
  if (!user) {
    redirect("/login");
  }

  return <ProfileView />;
}
