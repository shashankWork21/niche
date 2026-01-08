"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { requestPasswordReset } from "@/actions/user/request-reset";
// import { MarketingFooter } from "@/components/layout/marketing-footer";

export default function ForgotPasswordView() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    setSubmitting(true);
    try {
      await requestPasswordReset(email);
      setMessage("If an account exists for that email, we sent a reset link.");
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Failed to send email.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <div className="max-h-screen h-180">
        <Card className="w-full max-w-lg mx-auto mt-20 bg-radial from-white to-blue-50">
          <CardHeader>
            <CardTitle>Forgot password</CardTitle>
            <CardDescription>We’ll email you a reset link.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-black">
                  Email
                </label>
                <Input
                  className="mt-1 bg-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  disabled={submitting}
                />
              </div>
              {message ? (
                <div className="text-sm text-black">{message}</div>
              ) : null}
              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-linear-to-r from-blue-700 to-blue-900 hover:bg-blue-700"
              >
                {submitting ? "Sending..." : "Send reset link"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      {/* <MarketingFooter /> */}
    </>
  );
}
