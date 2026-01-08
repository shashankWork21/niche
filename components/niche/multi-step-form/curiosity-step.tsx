"use client";

import MultipleInputs from "@/components/form/multiple-input";

interface CuriosityStepProps {
  issuesSpokenAbout: string[];
  naturallyCuriousAbout: string[];
  continuouslyLearningAbout: string[];
  handleAddInput: (field: string) => void;
  handleRemoveInput: (field: string, index: number) => void;
  errors?: { [key: string]: string };
  updateArrayValue: (field: string, index: number, value: string) => void;
}

export default function CuriosityStep({
  issuesSpokenAbout,
  naturallyCuriousAbout,
  continuouslyLearningAbout,
  handleAddInput,
  handleRemoveInput,
  errors = {},
  updateArrayValue,
}: CuriosityStepProps) {
  return (
    <div className="space-y-6 pt-6">
      <h3 className="text-xl font-semibold">Curiosity & Learning</h3>

      <div className="flex flex-col">
        <MultipleInputs
          label="What issues would make you lose sleep?"
          name="issuesSpokenAbout"
          inputPlaceholder="Issue"
          count={issuesSpokenAbout}
          values={issuesSpokenAbout}
          handleAddInput={handleAddInput}
          handleRemoveInput={handleRemoveInput}
          error={errors.issuesSpokenAbout}
          onChange={updateArrayValue}
        />

        <MultipleInputs
          label="What about the world are you naturally curious about?"
          name="naturallyCuriousAbout"
          inputPlaceholder="Question or Topic"
          count={naturallyCuriousAbout}
          values={naturallyCuriousAbout}
          handleAddInput={handleAddInput}
          handleRemoveInput={handleRemoveInput}
          error={errors.naturallyCuriousAbout}
          onChange={updateArrayValue}
        />

        <MultipleInputs
          label="What topics do you find yourself exploring continuously?"
          name="continuouslyLearningAbout"
          inputPlaceholder="Topic"
          count={continuouslyLearningAbout}
          values={continuouslyLearningAbout}
          handleAddInput={handleAddInput}
          handleRemoveInput={handleRemoveInput}
          error={errors.continuouslyLearningAbout}
          onChange={updateArrayValue}
        />
      </div>
    </div>
  );
}
