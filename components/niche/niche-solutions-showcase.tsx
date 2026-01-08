"use client";

import { NicheSolution } from "@/app/generated/prisma/client";
import { NicheSolutionCard } from "./niche-solution-card";

interface NicheSolutionsShowcaseProps {
  solutions: NicheSolution[];
}

export function NicheSolutionsShowcase({
  solutions,
}: NicheSolutionsShowcaseProps) {
  return (
    <section className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-12">
        Solutions Catalog
      </h2>

      <div className="space-y-6">
        {solutions.map((solution, idx) => (
          <NicheSolutionCard key={idx} solution={solution} />
        ))}
      </div>
    </section>
  );
}
