"use client";

import MultipleInputs from "@/components/form/multiple-input";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface DeepReflectionProps {
  errors?: { [key: string]: string };
  updateFormValue: (name: string, value: string) => void;
  getFormValue: (name: string) => string;
  updateArrayValue: (field: string, index: number, value: string) => void;
  unspokenRules: string[];
}

export default function DeepReflection({
  errors = {},
  updateFormValue,
  getFormValue,
  updateArrayValue,
  unspokenRules,
}: DeepReflectionProps) {
  return (
    <div className="space-y-6 pt-6 border-t border-zinc-200">
      <h3 className="text-lg font-semibold text-zinc-900">Deep Reflection</h3>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col space-y-2 items-start">
            <label htmlFor="wishMoreUnderstood" className="text-sm font-medium">
              What&apos;s something you wish more people understood?
            </label>
            <Textarea
              name="wishMoreUnderstood"
              placeholder="Example: Math is not about how well you can calculate, it's about how well you can reason"
              className={`bg-white ${
                errors.wishMoreUnderstood ? "border-red-500" : ""
              }`}
              value={getFormValue("wishMoreUnderstood")}
              onChange={(e) =>
                updateFormValue("wishMoreUnderstood", e.target.value)
              }
            />
            {errors.wishMoreUnderstood && (
              <p className="text-sm text-red-600 font-medium">
                {errors.wishMoreUnderstood}
              </p>
            )}
          </div>

          <div className="flex flex-col space-y-2 items-start">
            <label htmlFor="turningPoint" className="text-sm font-medium">
              Can you describe a turning point or pivotal moment in your life,
              no matter how big or small?
            </label>
            <Input
              name="turningPoint"
              placeholder="Turning Point"
              className={`bg-white ${
                errors.turningPoint ? "border-red-500" : ""
              }`}
              value={getFormValue("turningPoint")}
              onChange={(e) => updateFormValue("turningPoint", e.target.value)}
            />
            {errors.turningPoint && (
              <p className="text-sm text-red-600 font-medium">
                {errors.turningPoint}
              </p>
            )}
          </div>
        </div>
        <MultipleInputs
          label="If you could go back and give your 18-year-old self 3 rules to live by, what would they be?"
          name="unspokenRules"
          count={unspokenRules}
          values={unspokenRules}
          inputPlaceholder="Rule"
          error={errors.unspokenRules}
          onChange={updateArrayValue}
        />
      </div>
    </div>
  );
}
