import { redirect } from "next/navigation";
import { verifyEmailToken } from "@/actions/user/verify-email";

export default async function VerifyEmailPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;
  if (!token) redirect("/profile");

  try {
    await verifyEmailToken(token);
  } catch {
    // ignore
  }

  redirect("/profile");
}
