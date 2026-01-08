"use client";

import MultipleInputs from "@/components/form/multiple-input";
import { Input } from "@/components/ui/input";

interface ImpactStepProps {
  helpedOthersWith: string[];
  areasNeededHelp: string[];
  handleAddInput: (field: string) => void;
  handleRemoveInput: (field: string, index: number) => void;
  errors?: { [key: string]: string };
  updateArrayValue: (field: string, index: number, value: string) => void;
  updateFormValue: (name: string, value: string) => void;
  getFormValue: (name: string) => string;
}

export default function ImpactStep({
  helpedOthersWith,
  areasNeededHelp,
  handleAddInput,
  handleRemoveInput,
  errors = {},
  updateArrayValue,
  updateFormValue,
  getFormValue,
}: ImpactStepProps) {
  return (
    <div className="space-y-6 pt-6">
      <h3 className="text-xl font-semibold">Impact & Service</h3>
      <div className="flex flex-col">
        <MultipleInputs
          label="What's something you've helped others with (even informally) that they thanked you for?"
          name="helpedOthersWith"
          inputPlaceholder="Action"
          count={helpedOthersWith}
          values={helpedOthersWith}
          handleAddInput={handleAddInput}
          handleRemoveInput={handleRemoveInput}
          error={errors.helpedOthersWith}
          onChange={updateArrayValue}
        />

        <MultipleInputs
          label="What are some things that you find difficult, but are necessary for your growth?"
          name="areasNeededHelp"
          inputPlaceholder="Area"
          count={areasNeededHelp}
          values={areasNeededHelp}
          handleAddInput={handleAddInput}
          handleRemoveInput={handleRemoveInput}
          error={errors.areasNeededHelp}
          onChange={updateArrayValue}
        />
      </div>
      <div className="flex flex-col space-y-3 items-start">
        <label htmlFor="hereToDo" className="text-sm font-medium">
          If someone were to ask you, &quot;What are you here to do in this
          life?&quot;, what would you say?
        </label>
        <Input
          name="hereToDo"
          placeholder="I am here to ________"
          className={`bg-white ${errors.hereToDo ? "border-red-500" : ""}`}
          value={getFormValue("hereToDo")}
          onChange={(e) => updateFormValue("hereToDo", e.target.value)}
        />
        {errors.hereToDo && (
          <p className="text-sm text-red-600 font-medium">{errors.hereToDo}</p>
        )}
      </div>
    </div>
  );
}
