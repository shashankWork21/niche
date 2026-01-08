"use client";

import { Card } from "@/components/ui/card";
import { TrendingUp, AlertTriangle, Target } from "lucide-react";

interface StrengthsBlindpotsProps {
  data: any;
}

export function StrengthsBlindspots({ data }: StrengthsBlindpotsProps) {
  return (
    <section className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-12">
        Self-Awareness Map
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 space-y-4 border-emerald-200 bg-emerald-50/30">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
            <h3 className="font-semibold text-zinc-900">Natural Strengths</h3>
          </div>
          <ul className="space-y-2">
            {data.naturalStrengths.map((strength: string, idx: number) => (
              <li key={idx} className="text-sm text-zinc-700 leading-relaxed">
                • {strength}
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6 space-y-4 border-orange-200 bg-orange-50/30">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-orange-600" />
            <h3 className="font-semibold text-zinc-900">Blind Spots</h3>
          </div>
          <ul className="space-y-2">
            {data.blindSpots.map((spot: string, idx: number) => (
              <li key={idx} className="text-sm text-zinc-700 leading-relaxed">
                • {spot}
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6 space-y-4 border-blue-200 bg-blue-50/30">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-zinc-900">Development Areas</h3>
          </div>
          <ul className="space-y-2">
            {data.developmentAreas.map((area: string, idx: number) => (
              <li key={idx} className="text-sm text-zinc-700 leading-relaxed">
                • {area}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
