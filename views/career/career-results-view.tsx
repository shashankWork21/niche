"use client";

import { CareerHeroSection } from "./components/career-hero-section";
import { CareerArchetypeCard } from "./components/career-archetype-card";
import { StrengthsBlindspots } from "./components/strengths-blindspots";
import { RoleRecommendations } from "./components/role-recommendations";
import { NextStepsTimeline } from "./components/next-steps-timeline";
import { Separator } from "@/components/ui/separator";
import { CareerDirectionWithRelations } from "@/db/queries/career-direction/get-career-direction-by-id";
import { ProtectedRoute } from "@/components/auth/protected-route";

interface CareerResultsViewProps {
  data: CareerDirectionWithRelations;
}

export function CareerResultsView({ data }: CareerResultsViewProps) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-linear-to-b from-blue-50 to-white">
        <CareerHeroSection data={data} />
        <Separator className="my-16 mx-auto max-w-5xl opacity-20" />

        <CareerArchetypeCard data={data} />
        <Separator className="my-16 mx-auto max-w-5xl opacity-20" />

        <StrengthsBlindspots data={data} />
        <Separator className="my-16 mx-auto max-w-5xl opacity-20" />

        <RoleRecommendations roles={data.roleRecommendations} />
        <Separator className="my-16 mx-auto max-w-5xl opacity-20" />

        <NextStepsTimeline
          steps={data.immediateNextSteps}
          vision={data.fiveYearVision || ""}
        />
      </div>
    </ProtectedRoute>
  );
}
