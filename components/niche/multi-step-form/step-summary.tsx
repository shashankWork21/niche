"use client";

import { Button } from "@/components/ui/button";

interface StepSummaryProps {
  step: number;
  title: string;
  formStep: number;
  handleFormStepChange: (step: number) => void;
}

export default function StepSummary({
  step,
  title,
  formStep,
  handleFormStepChange,
}: StepSummaryProps) {
  if (formStep <= step) return null;

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-semibold">
            ✓
          </div>
          <span className="font-semibold text-zinc-900">{title}</span>
        </div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="cur"
          onClick={() => handleFormStepChange(step)}
        >
          Edit
        </Button>
      </div>
    </div>
  );
}
