"use client";

import { Badge } from "@/components/ui/badge";

interface CareerHeroSectionProps {
  data: any;
}

export function CareerHeroSection({ data }: CareerHeroSectionProps) {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-24 pb-16">
      <div className="space-y-6">
        <Badge variant="outline" className="bg-blue-50 border-blue-200 text-blue-600">
          Your Career Direction
        </Badge>

        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 leading-tight max-w-4xl">
          {data.statement}
        </h1>

        <p className="text-base md:text-lg text-zinc-600 leading-relaxed max-w-3xl">
          {data.whyYou}
        </p>

        {data.salaryExpectation && (
          <div className="flex flex-wrap gap-3">
            <Badge className="bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100">
              Expected Salary: {data.salaryExpectation}
            </Badge>
            {data.demandOutlook && (
              <Badge className="bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100">
                Demand: {data.demandOutlook.replace("_", " ")}
              </Badge>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
