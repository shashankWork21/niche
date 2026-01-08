"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { ProtectedRoute } from "@/components/auth/protected-route";
import { useAuth } from "@/context/auth.context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sendVerifyEmail } from "@/actions/user/verify-email";
import { updateMyProfile } from "@/actions/user/profile";
import { validateSession } from "@/actions/utils/auth/validate-session";
import { User, Mail, CheckCircle2, AlertCircle } from "lucide-react";

export default function ProfileView() {
  const router = useRouter();
  const { user, setUser } = useAuth();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  const [saving, setSaving] = useState(false);
  const [sendingVerify, setSendingVerify] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const onSave = useCallback(
    async (formData: FormData) => {
      setMessage(null);
      setSaving(true);
      try {
        await updateMyProfile(formData);
        const fresh = await validateSession();
        if (fresh && setUser) setUser(fresh);
        setMessage("Profile updated successfully!");
      } catch (e) {
        setMessage(
          e instanceof Error ? e.message : "Failed to update profile."
        );
      } finally {
        setSaving(false);
      }
    },
    [setUser]
  );

  const onSendVerify = useCallback(async () => {
    setMessage(null);
    setSendingVerify(true);
    try {
      await sendVerifyEmail();
      setMessage("Verification email sent to your inbox!");
    } catch (e) {
      setMessage(e instanceof Error ? e.message : "Failed to send email.");
    } finally {
      setSendingVerify(false);
    }
  }, []);

  if (!user) return null;

  return (
    <ProtectedRoute>
      <div className="mx-auto w-full max-w-4xl space-y-8">
        {/* Premium Header */}
        <div className="relative overflow-hidden rounded-2xl border border-blue-200 bg-linear-to-br from-blue-50 via-white to-blue-50/30 p-8 shadow-sm">
          <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 translate-x-20 -translate-y-20 rounded-full bg-blue-200/30 blur-3xl" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm">
                <User className="h-3 w-3" />
                Account Settings
              </div>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
                Your Profile
              </h1>
              <p className="mt-2 text-lg text-slate-600">
                Manage your account information and preferences.
              </p>
            </div>
            {!user.isEmailVerified && (
              <Button
                onClick={onSendVerify}
                disabled={sendingVerify}
                className="bg-linear-to-r from-blue-700 to-blue-900 font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
              >
                {sendingVerify ? "Sending…" : "Verify email"}
              </Button>
            )}
          </div>
        </div>

        {/* Success/Error Message */}
        {message && (
          <div
            className={`rounded-xl border p-4 ${
              message.includes("successfully") || message.includes("sent")
                ? "border-emerald-200 bg-emerald-50"
                : "border-amber-200 bg-amber-50"
            }`}
          >
            <div className="flex items-center gap-3">
              {message.includes("successfully") || message.includes("sent") ? (
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              ) : (
                <AlertCircle className="h-5 w-5 text-amber-600" />
              )}
              <p
                className={`text-sm font-medium ${
                  message.includes("successfully") || message.includes("sent")
                    ? "text-emerald-900"
                    : "text-amber-900"
                }`}
              >
                {message}
              </p>
            </div>
          </div>
        )}

        {/* Profile Form */}
        <form
          action={onSave}
          className="rounded-2xl border border-blue-200 bg-white shadow-sm"
        >
          <div className="border-b border-blue-100 bg-linear-to-r from-blue-50/50 to-white px-6 py-5">
            <h2 className="text-lg font-semibold text-slate-950">
              Personal Information
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Update your name and email address.
            </p>
          </div>

          <div className="p-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-slate-700">
                  First name
                </label>
                <Input
                  name="firstName"
                  defaultValue={user.firstName || ""}
                  className="mt-2 border-blue-200 bg-white transition-all focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  disabled={saving}
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700">
                  Last name
                </label>
                <Input
                  name="lastName"
                  defaultValue={user.lastName || ""}
                  className="mt-2 border-blue-200 bg-white transition-all focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  disabled={saving}
                  placeholder="Enter your last name"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-slate-700">
                  Email address
                </label>
                <div className="relative mt-2">
                  <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <Input
                    name="email"
                    type="email"
                    defaultValue={user.email || ""}
                    className="border-blue-200 bg-white pl-10 transition-all focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                    disabled={saving}
                    placeholder="your@email.com"
                  />
                </div>
                {!user.isEmailVerified ? (
                  <div className="mt-3 flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2">
                    <AlertCircle className="h-4 w-4 text-amber-600" />
                    <p className="text-xs font-medium text-amber-900">
                      Your email is not verified yet. Please check your inbox.
                    </p>
                  </div>
                ) : (
                  <div className="mt-3 flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <p className="text-xs font-medium text-emerald-900">
                      Email verified successfully!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-end border-t border-blue-100 bg-linear-to-r from-blue-50/50 to-white px-6 py-4">
            <Button
              type="submit"
              disabled={saving}
              className="bg-linear-to-r from-blue-700 to-blue-900 font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
            >
              {saving ? "Saving changes…" : "Save changes"}
            </Button>
          </div>
        </form>
      </div>
    </ProtectedRoute>
  );
}
