"use client";

import { Fragment, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Role } from "@/app/generated/prisma/enums";

export type AdminUserRow = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: Role;
  isEmailVerified: boolean;
  createdAt: string | Date;
};

function formatDate(value: string | Date) {
  const date = typeof value === "string" ? new Date(value) : value;
  return Number.isNaN(date.getTime()) ? "" : date.toLocaleDateString();
}

function RoleBadge({ role }: { role: Role }) {
  const { label, className } = useMemo(() => {
    if (role === "ADMIN") {
      return {
        label: "Admin",
        className: "bg-blue-700 text-white",
      };
    }
    return {
      label: "User",
      className: "bg-slate-100 text-slate-800",
    };
  }, [role]);

  return <Badge className={className}>{label}</Badge>;
}

export function UsersTable({ users }: { users: AdminUserRow[] }) {
  if (users.length === 0) {
    return (
      <div className="rounded-xl border bg-white p-10 text-center text-sm text-slate-600">
        No users yet.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-md border border-blue-200 bg-white">
      <Table>
        <TableHeader>
          <TableRow className="bg-linear-to-r from-blue-700 to-blue-900 border-none hover:bg-linear-to-r">
            <TableHead className="w-10 h-9 py-2 text-blue-50 font-semibold" />
            <TableHead className="h-9 px-4 py-2 font-semibold text-blue-50">
              Name
            </TableHead>
            <TableHead className="h-9 px-4 py-2 font-semibold text-blue-50">
              Email
            </TableHead>
            <TableHead className="h-9 px-4 py-2 font-semibold text-blue-50">
              Role
            </TableHead>
            <TableHead className="h-9 px-4 py-2 font-semibold text-blue-50">
              Signed up
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((u) => {
            return (
              <Fragment key={u.id}>
                <TableRow key={u.id} className="hover:bg-slate-50">
                  <TableCell className="px-4 font-medium text-slate-950">
                    {u.firstName} {u.lastName}
                  </TableCell>
                  <TableCell className="px-4 text-slate-700">
                    {u.email}
                  </TableCell>
                  <TableCell className="px-4">
                    <RoleBadge role={u.role} />
                  </TableCell>
                  <TableCell className="px-4 text-slate-700">
                    {formatDate(u.createdAt)}
                  </TableCell>
                </TableRow>
              </Fragment>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
