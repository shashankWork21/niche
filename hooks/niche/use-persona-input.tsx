"use client";

import { goalOptions, handleValueChange } from "@/lib/utils/niche/goal-options";
import { UserGoal } from "@/app/generated/prisma/enums";
import { useState } from "react";

type FormValues = {
  [key: string]: string;
};

export default function usePersonaInput() {
  const [formStep, setFormStep] = useState<number>(1);
  const [loseTrackOfTimeAreas, setLoseTrackOfTimeAreas] = useState<string[]>([
    "",
  ]);
  const [lovedDoingAt10, setLovedDoingAt10] = useState<string[]>([""]);
  const [feelsLikePlay, setFeelsLikePlay] = useState<string[]>([""]);
  const [continuouslyLearningAbout, setContinuouslyLearningAbout] = useState<
    string[]
  >([""]);
  const [helpedOthersWith, setHelpedOthersWith] = useState<string[]>([""]);
  const [areasNeededHelp, setAreasNeededHelp] = useState<string[]>([""]);
  const [issuesSpokenAbout, setIssuesSpokenAbout] = useState<string[]>([""]);
  const [naturallyCuriousAbout, setNaturallyCuriousAbout] = useState<string[]>([
    "",
  ]);
  const [unspokenRules, setUnspokenRules] = useState<string[]>(["", "", ""]);
  const [goal, setGoal] = useState<UserGoal | null>(null);
  const [formValues, setFormValues] = useState<FormValues>({});

  const goalOption = goalOptions.find(
    (option) => option.enumValue === goal
  )?.label;

  const handleGoalChange = (value: string) => {
    const goalSetter = (val: UserGoal) => setGoal(val as UserGoal);
    handleValueChange(value, goalSetter, "goal");
  };

  const handleAddInput = (field: string) => {
    switch (field) {
      case "loseTrackOfTimeAreas":
        setLoseTrackOfTimeAreas((prev) => [...prev, ""]);
        break;
      case "lovedDoingAt10":
        setLovedDoingAt10((prev) => [...prev, ""]);
        break;
      case "feelsLikePlay":
        setFeelsLikePlay((prev) => [...prev, ""]);
        break;
      case "continuouslyLearningAbout":
        setContinuouslyLearningAbout((prev) => [...prev, ""]);
        break;
      case "helpedOthersWith":
        setHelpedOthersWith((prev) => [...prev, ""]);
        break;
      case "areasNeededHelp":
        setAreasNeededHelp((prev) => [...prev, ""]);
        break;
      case "issuesSpokenAbout":
        setIssuesSpokenAbout((prev) => [...prev, ""]);
        break;
      case "naturallyCuriousAbout":
        setNaturallyCuriousAbout((prev) => [...prev, ""]);
        break;
    }
  };
  const handleRemoveInput = (field: string, index: number) => {
    switch (field) {
      case "loseTrackOfTimeAreas":
        setLoseTrackOfTimeAreas((prev) => prev.filter((_, i) => i !== index));
        break;
      case "lovedDoingAt10":
        setLovedDoingAt10((prev) => prev.filter((_, i) => i !== index));
        break;
      case "feelsLikePlay":
        setFeelsLikePlay((prev) => prev.filter((_, i) => i !== index));
        break;
      case "continuouslyLearningAbout":
        setContinuouslyLearningAbout((prev) =>
          prev.filter((_, i) => i !== index)
        );
        break;
      case "helpedOthersWith":
        setHelpedOthersWith((prev) => prev.filter((_, i) => i !== index));
        break;
      case "areasNeededHelp":
        setAreasNeededHelp((prev) => prev.filter((_, i) => i !== index));
        break;
      case "issuesSpokenAbout":
        setIssuesSpokenAbout((prev) => prev.filter((_, i) => i !== index));
        break;
      case "naturallyCuriousAbout":
        setNaturallyCuriousAbout((prev) => prev.filter((_, i) => i !== index));
        break;
    }
  };

  const handleFormStepChange = (step: number) => {
    setFormStep(step);
  };

  const updateFormValue = (name: string, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getFormValue = (name: string): string => {
    return formValues[name] || "";
  };

  const updateArrayValue = (field: string, index: number, value: string) => {
    switch (field) {
      case "loseTrackOfTimeAreas":
        setLoseTrackOfTimeAreas((prev) => {
          const newValues = [...prev];
          newValues[index] = value;
          return newValues;
        });
        break;
      case "lovedDoingAt10":
        setLovedDoingAt10((prev) => {
          const newValues = [...prev];
          newValues[index] = value;
          return newValues;
        });
        break;
      case "feelsLikePlay":
        setFeelsLikePlay((prev) => {
          const newValues = [...prev];
          newValues[index] = value;
          return newValues;
        });
        break;
      case "continuouslyLearningAbout":
        setContinuouslyLearningAbout((prev) => {
          const newValues = [...prev];
          newValues[index] = value;
          return newValues;
        });
        break;
      case "helpedOthersWith":
        setHelpedOthersWith((prev) => {
          const newValues = [...prev];
          newValues[index] = value;
          return newValues;
        });
        break;
      case "areasNeededHelp":
        setAreasNeededHelp((prev) => {
          const newValues = [...prev];
          newValues[index] = value;
          return newValues;
        });
        break;
      case "issuesSpokenAbout":
        setIssuesSpokenAbout((prev) => {
          const newValues = [...prev];
          newValues[index] = value;
          return newValues;
        });
        break;
      case "naturallyCuriousAbout":
        setNaturallyCuriousAbout((prev) => {
          const newValues = [...prev];
          newValues[index] = value;
          return newValues;
        });
        break;
      case "unspokenRules":
        setUnspokenRules((prev) => {
          const newValues = [...prev];
          newValues[index] = value;
          return newValues;
        });
        break;
    }
  };

  return {
    loseTrackOfTimeAreas,
    lovedDoingAt10,
    feelsLikePlay,
    continuouslyLearningAbout,
    handleAddInput,
    handleRemoveInput,
    goal,
    goalOption,
    handleGoalChange,
    helpedOthersWith,
    areasNeededHelp,
    issuesSpokenAbout,
    naturallyCuriousAbout,
    unspokenRules,
    formStep,
    handleFormStepChange,
    updateFormValue,
    getFormValue,
    updateArrayValue,
  };
}
