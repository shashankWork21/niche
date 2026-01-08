"use client";

import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface ValidationChecklistProps {
  questions: string[];
}

export function ValidationChecklist({ questions }: ValidationChecklistProps) {
  return (
    <section className="max-w-5xl mx-auto px-6 pb-24">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-12">
        Validation Questions
      </h2>

      <Card className="p-8">
        <p className="text-base text-zinc-600 mb-6 leading-relaxed">
          Ask these questions to your prospective customers to validate if this
          niche is the right fit for you:
        </p>

        <div className="space-y-4">
          {questions.map((question, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 rounded-lg bg-zinc-50 hover:bg-zinc-100 transition-colors"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-base text-zinc-900 leading-relaxed">
                {question}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
