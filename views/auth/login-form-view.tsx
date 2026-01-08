"use client";
import LoginForm from "@/components/auth/login-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MarketingFooter } from "@/components/marketing/marketing-footer";

export function LoginFormView() {
  return (
    <>
      <div className="max-h-screen h-180">
        <Card className="w-full max-w-lg mx-auto mt-20 bg-radial from-white to-blue-50">
          <CardHeader>
            <CardTitle>Welcome back</CardTitle>
            <CardDescription>Sign in to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </div>
      <MarketingFooter />
    </>
  );
}
