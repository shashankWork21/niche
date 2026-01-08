"use client";

import { Badge } from "@/components/ui/badge";

interface NicheHeroSectionProps {
  data: {
    statement: string;
    whyYou: string;
  };
}

export function NicheHeroSection({ data }: NicheHeroSectionProps) {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-24 pb-16">
      <div className="space-y-6">
        <Badge
          variant="outline"
          className="bg-red-50 border-red-200 text-red-600"
        >
          Your Niche
        </Badge>

        <h1 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900 leading-tight max-w-4xl">
          {data.statement}
        </h1>
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Why You?</h3>
          <p className="text-base md:text-lg text-zinc-600 leading-relaxed max-w-3xl">
            {data.whyYou}
          </p>
        </div>
      </div>
    </section>
  );
}
