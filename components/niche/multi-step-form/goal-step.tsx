"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { goalOptions } from "@/lib/utils/niche/goal-options";

interface GoalStepProps {
  goalOption: string | undefined;
  handleGoalChange: (value: string) => void;
}

export default function GoalStep({
  goalOption,
  handleGoalChange,
}: GoalStepProps) {
  return (
    <div className="flex flex-col items-start space-y-3">
      <label className="text-sm font-semibold text-zinc-900">
        What are you looking for?
      </label>
      <Select name="goal" value={goalOption || ""} onValueChange={handleGoalChange}>
        <SelectTrigger className="w-full bg-white">
          <SelectValue placeholder="Select your Goal" />
        </SelectTrigger>
        <SelectContent>
          {goalOptions.map((option) => (
            <SelectItem key={option.enumValue} value={option.label}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
