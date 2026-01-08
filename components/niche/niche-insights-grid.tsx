"use client";

import { BusinessModel } from "@/app/generated/prisma/enums";
import { Card } from "@/components/ui/card";
import { Sparkles, Target, Zap, Building2 } from "lucide-react";

interface NicheInsightsGridProps {
  data: {
    uniqueValue: string;
    marketGap: string;
    competitiveEdge: string;
    businessModel: BusinessModel;
  };
}

const iconMap = {
  "Unique Value": Sparkles,
  "Market Gap": Target,
  "Competitive Edge": Zap,
  "Business Model": Building2,
};

export function NicheInsightsGrid({ data }: NicheInsightsGridProps) {
  const insights = [
    { label: "Unique Value", value: data.uniqueValue },
    { label: "Market Gap", value: data.marketGap },
    { label: "Competitive Edge", value: data.competitiveEdge },
    {
      label: "Business Model",
      value:
        data.businessModel === BusinessModel.BOTH
          ? "Both B2B and B2C"
          : data.businessModel,
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {insights.map((insight, index) => {
          const Icon = iconMap[insight.label as keyof typeof iconMap];
          return (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-zinc-200 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-red-50 group-hover:bg-red-100 transition-colors">
                  <Icon className="w-5 h-5 text-red-600" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-sm font-semibold tracking-wide uppercase text-zinc-500">
                    {insight.label}
                  </h3>
                  <p className="text-base text-zinc-900 leading-relaxed">
                    {insight.value}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
