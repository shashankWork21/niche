"use client";

import MultipleInputs from "@/components/form/multiple-input";

interface PassionStepProps {
  loseTrackOfTimeAreas: string[];
  lovedDoingAt10: string[];
  feelsLikePlay: string[];
  handleAddInput: (field: string) => void;
  handleRemoveInput: (field: string, index: number) => void;
  errors?: { [key: string]: string };
  updateArrayValue: (field: string, index: number, value: string) => void;
}

export default function PassionStep({
  loseTrackOfTimeAreas,
  lovedDoingAt10,
  feelsLikePlay,
  handleAddInput,
  handleRemoveInput,
  errors = {},
  updateArrayValue,
}: PassionStepProps) {
  return (
    <div className="space-y-6 pt-6">
      <h3 className="text-xl font-semibold text-zinc-900">Passion & Flow</h3>

      <div className="flex flex-col">
        <MultipleInputs
          label="What activities make you lose track of time? (List as many as you can think of)"
          name="loseTrackOfTimeAreas"
          inputPlaceholder="Activity"
          count={loseTrackOfTimeAreas}
          values={loseTrackOfTimeAreas}
          handleAddInput={handleAddInput}
          handleRemoveInput={handleRemoveInput}
          error={errors.loseTrackOfTimeAreas}
          onChange={updateArrayValue}
        />

        <MultipleInputs
          label="What did you love doing at age 10?"
          name="lovedDoingAt10"
          inputPlaceholder="Activity"
          count={lovedDoingAt10}
          values={lovedDoingAt10}
          handleAddInput={handleAddInput}
          handleRemoveInput={handleRemoveInput}
          error={errors.lovedDoingAt10}
          onChange={updateArrayValue}
        />

        <MultipleInputs
          label="What activities feel like play to you?"
          name="feelsLikePlay"
          inputPlaceholder="Activity"
          count={feelsLikePlay}
          values={feelsLikePlay}
          handleAddInput={handleAddInput}
          handleRemoveInput={handleRemoveInput}
          error={errors.feelsLikePlay}
          onChange={updateArrayValue}
        />
      </div>
    </div>
  );
}
