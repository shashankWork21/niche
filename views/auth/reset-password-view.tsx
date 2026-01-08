"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { resetPasswordWithToken } from "@/actions/user/password-reset";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { MarketingFooter } from "@/components/marketing/marketing-footer";

export default function ResetPasswordView({ token }: { token: string }) {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    setSubmitting(true);
    try {
      await resetPasswordWithToken(token, password, confirmPassword);
      setMessage("Password reset. Redirecting to login…");
      setTimeout(() => router.push("/login"), 800);
    } catch (err) {
      setMessage(
        err instanceof Error ? err.message : "Failed to reset password."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <div className="max-h-screen h-180">
        <Card className="w-full max-w-lg mx-auto mt-20 bg-radial from-white to-blue-50">
          <CardHeader>
            <CardTitle>Reset password</CardTitle>
            <CardDescription>
              Choose a new password for your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!token ? (
              <div className="text-sm text-black">Missing reset token.</div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-black">
                    New password
                  </label>
                  <div className="mt-1 relative">
                    <Input
                      className="bg-white pr-10"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type={showPassword ? "text" : "password"}
                      required
                      disabled={submitting}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500 hover:text-blue-700 cursor-pointer"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-black">
                    Confirm password
                  </label>
                  <div className="mt-1 relative">
                    <Input
                      className="bg-white pr-10"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      type={showConfirmPassword ? "text" : "password"}
                      required
                      disabled={submitting}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500 hover:text-blue-700 cursor-pointer"
                      aria-label={
                        showConfirmPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </div>
                {message ? (
                  <div className="text-sm text-black">{message}</div>
                ) : null}
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-linear-to-r from-blue-700 to-blue-900 hover:bg-blue-700"
                >
                  {submitting ? "Resetting..." : "Reset password"}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
      <MarketingFooter />
    </>
  );
}
