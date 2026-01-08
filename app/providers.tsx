"use client";

import { UserProvider } from "@/context/auth.context";

export function Providers({ children }: { children: React.ReactNode }) {
  return <UserProvider>{children}</UserProvider>;
}

