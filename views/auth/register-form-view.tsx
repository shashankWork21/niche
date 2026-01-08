"use client";

import { Role } from "@/app/generated/prisma/enums";
import { RegisterForm } from "@/components/auth/register-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MarketingFooter } from "@/components/marketing/marketing-footer";

interface RegisterFormViewProps {
  role: Role;
  personaId?: number;
}

export function RegisterFormView({ role, personaId }: RegisterFormViewProps) {
  return (
    <>
      <div className="max-h-screen h-198">
        <Card className="w-full max-w-lg mx-auto mt-20 bg-radial from-white to-blue-50">
          <CardHeader>
            <CardTitle>Create an account</CardTitle>
            <CardDescription>
              Register as a {role.toLowerCase()}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RegisterForm role={role} personaId={personaId} />
          </CardContent>
        </Card>
      </div>
      <MarketingFooter />
    </>
  );
}
