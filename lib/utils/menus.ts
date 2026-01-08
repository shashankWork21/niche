import { Home, User, Users } from "lucide-react";
import type React from "react";

export type MenuItem = {
  label: string;
  href: string;
  Icon: React.ElementType;
};

export const userMenu: MenuItem[] = [
  { label: "Dashboard", href: "/dashboard", Icon: Home },
  { label: "Profile", href: "/profile", Icon: User },
];

export const adminMenu: MenuItem[] = [
  { label: "Users", href: "/admin/users", Icon: Users },
];
