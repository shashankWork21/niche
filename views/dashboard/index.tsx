import { ProtectedRoute } from "@/components/auth/protected-route";
import CareerDirectionView from "@/components/dashboard/career-direction-view";
import EmptyView from "@/components/dashboard/empty-view";
import GenerateForm from "@/components/dashboard/generate-form";
import NicheView from "@/components/dashboard/niche-view";
import { NicheOrCareerData } from "@/lib/types";

interface DashboardPageViewProps {
  userPersonaId: number | null;
  careerDirection: NicheOrCareerData | null;
  niches?: NicheOrCareerData[];
}

export function DashboardPageView({
  userPersonaId,
  niches,
  careerDirection,
}: DashboardPageViewProps) {
  let content;

  if (!userPersonaId) {
    content = <EmptyView />;
  } else if (niches && niches.length > 0) {
    content = <NicheView niches={niches} />;
  } else if (careerDirection) {
    content = <CareerDirectionView careerDirection={careerDirection} />;
  } else {
    content = <GenerateForm userPersonaId={userPersonaId} />;
  }

  return <ProtectedRoute>{content}</ProtectedRoute>;
}
