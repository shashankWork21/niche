"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

import { login } from "@/actions/auth/login";
import { validateSession } from "@/actions/utils/auth/validate-session";
import { useFormAction } from "@/hooks/form/use-from-action";
import { useLogin } from "@/hooks/auth/use-login";
import { FormErrors } from "../form/form-errors";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function LoginForm() {
  const router = useRouter();
  const { setUser } = useLogin();
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    async function verifyUser() {
      try {
        const user = await validateSession();
        if (user) {
          setRedirecting(true);
          router.push("/dashboard");
        }
      } catch (error) {
        console.log(error);
      }
    }
    verifyUser();
  }, [router]);

  const [showPassword, setShowPassword] = useState(false);

  const handleLoginSuccess = useCallback(() => {
    async function redirectUser() {
      try {
        const user = await validateSession();
        if (user && setUser) {
          setUser(user);
        }
        router.push("/dashboard");
      } catch (error) {
        console.error("Failed to refresh session:", error);
      }
    }
    redirectUser();
  }, [router, setUser]);

  const { formState, isSubmitting, handleSubmit } = useFormAction(
    login,
    handleLoginSuccess
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-black dark:text-blue-300"
        >
          Email address
        </label>
        <div className="mt-1">
          <Input
            className="bg-white"
            name="email"
            type="email"
            disabled={isSubmitting}
          />
        </div>
        {formState.errors?.email && (
          <FormErrors property={formState.errors?.email} />
        )}
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-black dark:text-blue-300"
        >
          Password
        </label>
        <div className="mt-1 relative">
          <Input
            className="bg-white pr-10"
            name="password"
            type={showPassword ? "text" : "password"}
            disabled={isSubmitting}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500 hover:text-black cursor-pointer"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {formState.errors?.password && (
          <FormErrors property={formState.errors?.password} />
        )}
      </div>
      <div>
        <Button
          type="submit"
          disabled={isSubmitting || redirecting}
          className="flex w-full justify-center rounded-md border border-transparent bg-linear-to-r from-blue-700 to-blue-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 cursor-pointer"
        >
          {isSubmitting ? "Signing in..." : "Sign in"}
        </Button>
      </div>
      <div className="text-center">
        <Link
          href="/forgot-password"
          className="text-sm font-medium text-black hover:text-blue-900 hover:underline underline-offset-2"
        >
          Forgot password?
        </Link>
      </div>
    </form>
  );
}
