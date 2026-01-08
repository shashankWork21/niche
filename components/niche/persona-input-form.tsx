"use client";

import usePersonaInput from "@/hooks/niche/use-persona-input";
import { Button } from "../ui/button";
import { useFormAction } from "@/hooks/form/use-from-action";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FormState } from "@/lib/types";
import { Loader2 } from "lucide-react";

import GoalStep from "./multi-step-form/goal-step";
import PassionStep from "./multi-step-form/passion-step";
import CuriosityStep from "./multi-step-form/curiosity-step";
import ImpactStep from "./multi-step-form/impact-step";
import DeepReflection from "./multi-step-form/deep-reflection";
import { validateCurrentStep } from "./multi-step-form/validate-current-step";
import HiddenInputs from "./multi-step-form/hidden-inputs";
import StepSummary from "./multi-step-form/step-summary";
import { createUserPersona } from "@/actions/user-persona/create-user-persona";

type ValidationErrors = {
  [key: string]: string;
};

export default function PersonaInputForm() {
  const router = useRouter();
  const [allowSubmit, setAllowSubmit] = useState(false);

  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {}
  );

  const {
    loseTrackOfTimeAreas,
    lovedDoingAt10,
    feelsLikePlay,
    continuouslyLearningAbout,
    handleAddInput,
    handleRemoveInput,
    goalOption,
    handleGoalChange,
    goal,
    helpedOthersWith,
    areasNeededHelp,
    issuesSpokenAbout,
    naturallyCuriousAbout,
    unspokenRules,
    formStep,
    handleFormStepChange: changeFormStep,
    updateFormValue,
    getFormValue,
    updateArrayValue,
  } = usePersonaInput();

  const handleFormStepChange = useCallback(
    (step: number) => {
      setAllowSubmit(false);
      changeFormStep(step);
    },
    [changeFormStep]
  );

  const handleSuccess = useCallback(
    (formState: FormState) => {
      if (formState.resultParams?.ids?.userPersonaId) {
        router.push(
          `/register?personaId=${formState.resultParams.ids.userPersonaId}`
        );
      }
    },
    [router]
  );

  const { formState, handleSubmit, isSubmitting } = useFormAction(
    createUserPersona.bind(null, goal!)
  );

  useEffect(() => {
    if (formState?.success) {
      handleSuccess(formState);
    }
  }, [formState, handleSuccess, router]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Only allow form submission on step 5 AND if allowSubmit is true
    if (formStep !== 5 || !allowSubmit) {
      return;
    }

    setValidationErrors({});

    if (
      validateCurrentStep({
        formStep,
        goal: goalOption || null,
        loseTrackOfTimeAreas,
        lovedDoingAt10,
        feelsLikePlay,
        continuouslyLearningAbout,
        issuesSpokenAbout,
        naturallyCuriousAbout,
        helpedOthersWith,
        areasNeededHelp,
        getFormValue,
        unspokenRules,
        setValidationErrors,
      })
    ) {
      handleSubmit(e);
    }
  };

  const handleNext = () => {
    // Capture the current step IMMEDIATELY before any state updates
    const stepToValidate = formStep;

    setValidationErrors({});

    const isValid = validateCurrentStep({
      formStep: stepToValidate,
      goal: goalOption || null,
      loseTrackOfTimeAreas,
      lovedDoingAt10,
      feelsLikePlay,
      continuouslyLearningAbout,
      issuesSpokenAbout,
      naturallyCuriousAbout,
      helpedOthersWith,
      areasNeededHelp,
      getFormValue,
      unspokenRules,
      setValidationErrors,
    });

    if (isValid && stepToValidate < 5) {
      handleFormStepChange(stepToValidate + 1);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="space-y-6"
      onKeyDown={(e) => {
        if (e.key === "Enter" && formStep !== 5) {
          e.preventDefault();
        }
      }}
    >
      {/* Hidden inputs to preserve all form state across steps */}
      <HiddenInputs
        formStep={formStep}
        loseTrackOfTimeAreas={loseTrackOfTimeAreas}
        lovedDoingAt10={lovedDoingAt10}
        feelsLikePlay={feelsLikePlay}
        issuesSpokenAbout={issuesSpokenAbout}
        naturallyCuriousAbout={naturallyCuriousAbout}
        continuouslyLearningAbout={continuouslyLearningAbout}
        helpedOthersWith={helpedOthersWith}
        areasNeededHelp={areasNeededHelp}
        unspokenRules={unspokenRules}
        getFormValue={getFormValue}
      />

      {/* Step 1: Goal Selection */}
      <StepSummary
        step={1}
        title="Goal Selection"
        formStep={formStep}
        handleFormStepChange={handleFormStepChange}
      />
      {formStep === 1 && (
        <div className="space-y-6">
          <GoalStep
            goalOption={goalOption}
            handleGoalChange={handleGoalChange}
          />
          {validationErrors.goal && (
            <p className="text-sm text-red-600 font-medium">
              {validationErrors.goal}
            </p>
          )}
        </div>
      )}

      {/* Step 2: Passion & Flow */}
      <StepSummary
        step={2}
        title="Passion & Flow"
        formStep={formStep}
        handleFormStepChange={handleFormStepChange}
      />
      {formStep === 2 && (
        <div className="space-y-6">
          <PassionStep
            loseTrackOfTimeAreas={loseTrackOfTimeAreas}
            lovedDoingAt10={lovedDoingAt10}
            feelsLikePlay={feelsLikePlay}
            handleAddInput={handleAddInput}
            handleRemoveInput={handleRemoveInput}
            errors={validationErrors}
            updateArrayValue={updateArrayValue}
          />
        </div>
      )}

      {/* Step 3: Curiosity */}
      <StepSummary
        step={3}
        title="Curiosity"
        formStep={formStep}
        handleFormStepChange={handleFormStepChange}
      />
      {formStep === 3 && (
        <div className="space-y-6">
          <CuriosityStep
            issuesSpokenAbout={issuesSpokenAbout}
            naturallyCuriousAbout={naturallyCuriousAbout}
            continuouslyLearningAbout={continuouslyLearningAbout}
            handleAddInput={handleAddInput}
            handleRemoveInput={handleRemoveInput}
            errors={validationErrors}
            updateArrayValue={updateArrayValue}
          />
        </div>
      )}

      {/* Step 4: Impact & Service */}
      <StepSummary
        step={4}
        title="Impact & Service"
        formStep={formStep}
        handleFormStepChange={handleFormStepChange}
      />
      {formStep === 4 && (
        <div className="space-y-6">
          <ImpactStep
            helpedOthersWith={helpedOthersWith}
            areasNeededHelp={areasNeededHelp}
            handleAddInput={handleAddInput}
            handleRemoveInput={handleRemoveInput}
            errors={validationErrors}
            updateArrayValue={updateArrayValue}
            updateFormValue={updateFormValue}
            getFormValue={getFormValue}
          />
        </div>
      )}

      {/* Step 5: Deep Reflection */}
      <StepSummary
        step={5}
        title="Deep Reflection"
        formStep={formStep}
        handleFormStepChange={handleFormStepChange}
      />
      {formStep === 5 && (
        <div className="space-y-6">
          <DeepReflection
            errors={validationErrors}
            updateFormValue={updateFormValue}
            getFormValue={getFormValue}
            updateArrayValue={updateArrayValue}
            unspokenRules={unspokenRules}
          />
        </div>
      )}
      {formStep === 5 ? (
        <Button
          type="submit"
          className="w-full text-base font-semibold bg-linear-to-r from-blue-700 to-blue-900 py-6 cursor-pointer disabled:cursor-not-allowed"
          disabled={isSubmitting}
          onClick={() => setAllowSubmit(true)}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Analyzing Your Responses...
            </>
          ) : (
            "Get Your Personalized Results"
          )}
        </Button>
      ) : (
        <Button
          type="button"
          className="w-full text-base font-semibold bg-linear-to-r from-blue-700 to-blue-900 py-6 cursor-pointer disabled:cursor-not-allowed"
          onClick={handleNext}
        >
          Next
        </Button>
      )}
    </form>
  );
}
