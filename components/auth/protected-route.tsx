"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

import { useAuth } from "@/context/auth.context";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { userMenu, adminMenu } from "@/lib/utils/menus";
import { Role } from "@/app/generated/prisma/enums";
import { logout } from "@/actions/auth/logout";
import { validateSession } from "@/actions/utils/auth/validate-session";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, loading, setUser } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (!user || !setUser) return;
    let cancelled = false;
    validateSession()
      .then((fresh) => {
        if (cancelled || !fresh) return;
        const shouldUpdate =
          fresh.id !== user.id ||
          fresh.email !== user.email ||
          fresh.firstName !== user.firstName ||
          fresh.lastName !== user.lastName ||
          fresh.isEmailVerified !== user.isEmailVerified ||
          fresh.role !== user.role ||
          fresh.userPersonaId !== user.userPersonaId;
        if (shouldUpdate) setUser(fresh);
      })
      .catch(() => {
        // ignore
      });
    return () => {
      cancelled = true;
    };
  }, [pathname, setUser, user]);

  const handleLogout = async () => {
    await logout();
    if (setUser) {
      setUser(null as never);
    }
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-31.25 w-62.5 rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-62.5" />
            <Skeleton className="h-4 w-50" />
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="border-b px-4 py-4 bg-linear-to-b from-white to-blue-50">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-950 text-white font-semibold">
              {user.firstName?.[0] || "U"}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">
                {user.firstName} {user.lastName}
              </span>
              <span className="text-xs text-muted-foreground">
                {user.email}
              </span>
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent className="flex-1 bg-linear-to-b from-blue-50 to-blue-100">
          <div className="flex flex-row items-center gap-3 py-3 px-3">
            <div className="flex h-8 w-12 items-center justify-center rounded-lg bg-linear-to-r from-blue-700 to-blue-900">
              <div className="text-sm font-bold text-white">Niche</div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xs font-medium text-slate-600">
                by Smart Algorhythm
              </h3>
            </div>
          </div>
          <SidebarMenu className="p-2">
            {/* Menu arrays mapped to menu items */}
            {userMenu.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  className="hover:bg-blue-700 hover:text-white text-black cursor-pointer"
                >
                  <Link href={item.href}>
                    <item.Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}

            {user?.role === Role.ADMIN && (
              <>
                <div className="mt-4 px-3 text-xs font-semibold uppercase text-muted-foreground">
                  Admin
                </div>

                {adminMenu.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      className="hover:bg-blue-700 hover:text-white text-black cursor-pointer"
                    >
                      <Link href={item.href}>
                        <item.Icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </>
            )}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="border-t p-2 bg-linear-to-b from-blue-100 to-blue-200">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={handleLogout}
                className="hover:bg-blue-700 hover:text-white text-black cursor-pointer"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        {!user.isEmailVerified ? (
          <div className="border-b bg-amber-50 px-4 py-3">
            <div className="mx-auto flex max-w-5xl items-center justify-between gap-3">
              <div className="text-sm text-amber-900">
                Please verify your email to enable email notifications.
              </div>
              <Button
                asChild
                size="sm"
                className="bg-amber-600 hover:bg-amber-700"
              >
                <Link href="/profile">Verify email</Link>
              </Button>
            </div>
          </div>
        ) : null}
        <header className="flex h-14 items-center gap-4 border-b px-4">
          <SidebarTrigger />
        </header>
        <main className="flex-1 p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
