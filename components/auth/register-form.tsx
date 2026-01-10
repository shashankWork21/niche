"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

import { Role } from "@/app/generated/prisma/enums";
import { registerUser } from "@/actions/auth/register-user";
import { validateSession } from "@/actions/utils/auth/validate-session";
import { useFormAction } from "@/hooks/form/use-from-action";
import { useAuth } from "@/context/auth.context";

import { FormErrors } from "@/components/form/form-errors";

import { TermsDialog } from "@/components/legal/terms-dialog";

import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { FormState } from "@/lib/types";
import ValidationItem from "./password-validation";

interface RegisterFormProps {
  role: Role;
  personaId?: number;
}

export function RegisterForm({ role, personaId }: RegisterFormProps) {
  const router = useRouter();
  const { setUser } = useAuth();
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Password validation derived state
  const validations = {
    minLength: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    passwordsMatch: password === confirmPassword && password.length > 0,
  };

  const handleSuccess = useCallback(
    (formState: FormState) => {
      async function redirectUser() {
        if (!formState.success) return;
        try {
          const user = await validateSession();
          if (user && setUser) {
            setUser(user);
          }
          if (formState?.redirectTo) {
            router.push(formState.redirectTo);
          }
        } catch (error) {
          console.error("Failed to refresh session:", error);
        }
      }
      redirectUser();
    },
    [router, setUser]
  );

  const { isSubmitting, formState, handleSubmit } = useFormAction(
    registerUser.bind(null, role, personaId || 0)
  );

  useEffect(() => {
    if (formState?.success) {
      handleSuccess(formState);
    } else if (formState.redirectTo) {
      router.push(formState.redirectTo);
    }
  }, [formState, handleSuccess, router]);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex flex-row justify-between gap-4">
        <div className="w-1/2">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-black dark:text-blue-300"
          >
            First Name
          </label>
          <div className="mt-1">
            <Input
              className="bg-white"
              name="firstName"
              type="text"
              disabled={isSubmitting}
            />
          </div>
          {formState.errors?.firstName && (
            <FormErrors property={formState.errors?.firstName} />
          )}
        </div>
        <div className="w-1/2">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-black dark:text-blue-300"
          >
            Last Name
          </label>
          <div className="mt-1">
            <Input
              className="bg-white"
              name="lastName"
              type="text"
              disabled={isSubmitting}
            />
          </div>
          {formState.errors?.lastName && (
            <FormErrors property={formState.errors?.lastName} />
          )}
        </div>
      </div>
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
          htmlFor="phone"
          className="block text-sm font-medium text-black dark:text-blue-300"
        >
          Phone Number
        </label>
        <div className="mt-1 flex gap-2">
          <Input
            className="bg-white w-24"
            name="country_code"
            type="text"
            placeholder="+91"
            disabled={isSubmitting}
          />
          <Input
            className="bg-white flex-1"
            name="phone_number"
            type="tel"
            disabled={isSubmitting}
          />
        </div>
        {formState.errors?.phone && (
          <FormErrors property={formState.errors?.phone} />
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500 hover:text-black cursor-pointer"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Password Requirements Checklist */}
        {password.length > 0 && (
          <div className="mt-3 space-y-2">
            <ValidationItem
              isValid={validations.minLength}
              text="Password must be at least 8 characters"
            />
            <ValidationItem
              isValid={validations.hasUppercase}
              text="Must contain at least one uppercase letter"
            />
            <ValidationItem
              isValid={validations.hasLowercase}
              text="Must contain at least one lowercase letter"
            />
            <ValidationItem
              isValid={validations.hasNumber}
              text="Must contain at least one number"
            />
            <ValidationItem
              isValid={validations.hasSpecialChar}
              text="Must contain at least one special character"
            />
          </div>
        )}

        {formState.errors?.password && (
          <FormErrors property={formState.errors?.password} />
        )}
      </div>
      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-black dark:text-blue-300"
        >
          Confirm Password
        </label>
        <div className="mt-1 relative">
          <Input
            className="bg-white pr-10"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            disabled={isSubmitting}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500 hover:text-black cursor-pointer"
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Password Match Validation */}
        {confirmPassword.length > 0 && (
          <div className="mt-3">
            <ValidationItem
              isValid={validations.passwordsMatch}
              text="Passwords must match"
            />
          </div>
        )}

        {formState.errors?.confirmPassword && (
          <FormErrors property={formState.errors?.confirmPassword} />
        )}
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={acceptedTerms}
          onCheckedChange={(checked) => setAcceptedTerms(checked === true)}
          disabled={isSubmitting}
          className="cursor-pointer bg-white"
        />
        <label
          htmlFor="terms"
          className="text-sm text-black dark:text-blue-300"
        >
          I agree to the <TermsDialog onAccept={() => setAcceptedTerms(true)} />
        </label>
      </div>
      <div>
        <Button
          type="submit"
          disabled={isSubmitting || !acceptedTerms}
          className="flex w-full justify-center rounded-md border border-transparent bg-linear-to-r from-blue-700 to-blue-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 cursor-pointer"
        >
          {isSubmitting ? "Registering..." : "Register"}
        </Button>
      </div>
      {formState.errors?._form && (
        <FormErrors property={formState.errors?._form} />
      )}
    </form>
  );
}
