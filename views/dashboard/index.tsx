import { ProtectedRoute } from "@/components/auth/protected-route";

export function DashboardPageView() {
  return (
    <ProtectedRoute>
      <div>Dashboard Content</div>
    </ProtectedRoute>
  );
}
