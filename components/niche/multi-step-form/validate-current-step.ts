interface ValidationErrors {
  [key: string]: string;
}

interface ValidateCurrentStepParams {
  formStep: number;
  goal: string | null;
  loseTrackOfTimeAreas: string[];
  lovedDoingAt10: string[];
  feelsLikePlay: string[];
  continuouslyLearningAbout: string[];
  issuesSpokenAbout: string[];
  naturallyCuriousAbout: string[];
  helpedOthersWith: string[];
  areasNeededHelp: string[];
  getFormValue: (field: string) => string | undefined;
  unspokenRules: string[];
  setValidationErrors: (errors: ValidationErrors) => void;
}

export const validateCurrentStep = ({
  formStep,
  goal,
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
}: ValidateCurrentStepParams): boolean => {
  const errors: ValidationErrors = {};

  // Step 1: Goal Selection
  if (formStep === 1) {
    if (!goal) {
      errors.goal = "Please select your goal";
    }
  }

  // Step 2: Passion & Flow
  if (formStep === 2) {
    const loseTrackValues = loseTrackOfTimeAreas.filter(
      (val) => val.trim() !== ""
    );
    const lovedDoingValues = lovedDoingAt10.filter((val) => val.trim() !== "");
    const feelsLikePlayValues = feelsLikePlay.filter(
      (val) => val.trim() !== ""
    );

    if (loseTrackValues.length === 0) {
      errors.loseTrackOfTimeAreas = "Please provide at least one activity";
    }
    if (lovedDoingValues.length === 0) {
      errors.lovedDoingAt10 = "Please provide at least one activity";
    }
    if (feelsLikePlayValues.length === 0) {
      errors.feelsLikePlay = "Please provide at least one activity";
    }
  }

  // Step 3: Curiosity
  if (formStep === 3) {
    const issuesValues = issuesSpokenAbout.filter((val) => val.trim() !== "");
    const curiousValues = naturallyCuriousAbout.filter(
      (val) => val.trim() !== ""
    );
    const learningValues = continuouslyLearningAbout.filter(
      (val) => val.trim() !== ""
    );

    if (issuesValues.length === 0) {
      errors.issuesSpokenAbout = "Please provide at least one issue";
    }
    if (curiousValues.length === 0) {
      errors.naturallyCuriousAbout = "Please provide at least one topic";
    }
    if (learningValues.length === 0) {
      errors.continuouslyLearningAbout = "Please provide at least one topic";
    }
  }

  // Step 4: Impact & Service
  if (formStep === 4) {
    const helpedValues = helpedOthersWith.filter((val) => val.trim() !== "");
    const neededHelpValues = areasNeededHelp.filter((val) => val.trim() !== "");
    const hereToDo = getFormValue("hereToDo");

    if (helpedValues.length === 0) {
      errors.helpedOthersWith = "Please provide at least one example";
    }
    if (neededHelpValues.length === 0) {
      errors.areasNeededHelp = "Please provide at least one area";
    }
    if (!hereToDo || hereToDo.trim() === "") {
      errors.hereToDo = "Please answer this question";
    }
  }

  // Step 5: Deep Reflection
  if (formStep === 5) {
    const wishMoreUnderstood = getFormValue("wishMoreUnderstood");
    const turningPoint = getFormValue("turningPoint");
    const rulesValues = unspokenRules.filter((val) => val.trim() !== "");

    if (!wishMoreUnderstood || wishMoreUnderstood.trim() === "") {
      errors.wishMoreUnderstood = "Please answer this question";
    }
    if (!turningPoint || turningPoint.trim() === "") {
      errors.turningPoint = "Please answer this question";
    }
    if (rulesValues.length < 3) {
      errors.unspokenRules = "Please provide all 3 rules";
    }
  }

  if (Object.keys(errors).length > 0) {
    setValidationErrors(errors);
    return false;
  }

  return true;
};
