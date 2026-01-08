"use client";

import { NicheHeroSection } from "../../components/niche/niche-hero-section";
import { NicheInsightsGrid } from "../../components/niche/niche-insights-grid";
import { NicheSolutionsShowcase } from "../../components/niche/niche-solutions-showcase";
import { CustomerPersonaCard } from "../../components/niche/customer-persona-card";
import { ValidationChecklist } from "../../components/niche/validation-checklist";
import { Separator } from "@/components/ui/separator";
import { NicheWithRelations } from "@/db/queries/niche/get-niche-by-id";
import { BusinessModel } from "@/app/generated/prisma/enums";
import { ProtectedRoute } from "@/components/auth/protected-route";

interface NicheResultsViewProps {
  data: NicheWithRelations;
}

export function NicheResultsView({ data }: NicheResultsViewProps) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-linear-to-b from-zinc-50 to-white">
        <NicheHeroSection data={data} />

        <NicheInsightsGrid
          data={{
            uniqueValue: data.uniqueValue || "",
            marketGap: data.marketGap || "",
            competitiveEdge: data.competitiveEdge || "",
            businessModel: data.businessModel || BusinessModel.BOTH,
          }}
        />
        <Separator className="my-16 mx-auto max-w-5xl opacity-20" />

        <NicheSolutionsShowcase solutions={data.nicheSolutions} />
        <Separator className="my-16 mx-auto max-w-5xl opacity-20" />

        {data.customerPersona && (
          <>
            <CustomerPersonaCard persona={data.customerPersona} />
            <Separator className="my-16 mx-auto max-w-5xl opacity-20" />
          </>
        )}

        <ValidationChecklist questions={data.validationQuestions} />
      </div>
    </ProtectedRoute>
  );
}
