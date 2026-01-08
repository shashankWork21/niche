"use client";

import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

interface NextStepsTimelineProps {
  steps: string[];
  vision?: string;
}

export function NextStepsTimeline({ steps, vision }: NextStepsTimelineProps) {
  return (
    <section className="max-w-5xl mx-auto px-6 pb-24">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-12">
        Your Action Plan
      </h2>

      <div className="space-y-8">
        <Card className="p-8">
          <h3 className="text-xl font-semibold text-zinc-900 mb-6">
            Immediate Next Steps
          </h3>

          <div className="space-y-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-lg bg-zinc-50 hover:bg-blue-50 transition-colors group"
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 group-hover:bg-blue-500 flex items-center justify-center transition-colors">
                  <span className="text-sm font-bold text-blue-600 group-hover:text-white">
                    {idx + 1}
                  </span>
                </div>
                <p className="text-base text-zinc-900 leading-relaxed pt-1">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {vision && (
          <Card className="p-8 bg-linear-to-br from-purple-50 to-blue-50 border-purple-200">
            <div className="flex items-start gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-purple-600 shrink-0" />
              <h3 className="text-xl font-semibold text-zinc-900">
                5-Year Vision
              </h3>
            </div>
            <p className="text-base text-zinc-700 leading-relaxed pl-9">
              {vision}
            </p>
          </Card>
        )}
      </div>
    </section>
  );
}
