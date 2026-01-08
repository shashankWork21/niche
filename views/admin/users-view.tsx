"use client";

import { ProtectedRoute } from "@/components/auth/protected-route";
import {
  UsersTable,
  type AdminUserRow,
} from "@/components/admin/users/users-table";

export default function AdminUsersView({ users }: { users: AdminUserRow[] }) {
  return (
    <ProtectedRoute>
      <div className="mx-auto w-full max-w-6xl space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-950">
            Users
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            All users who have signed up.
          </p>
        </div>

        <UsersTable users={users} />
      </div>
    </ProtectedRoute>
  );
}
