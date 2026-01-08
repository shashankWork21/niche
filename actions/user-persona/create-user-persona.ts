"use server";

import { UserGoal } from "@/app/generated/prisma/enums";
import { createPersona } from "@/db/mutations/user-persona/create-user-persona";
import { FormState } from "@/lib/types";

export async function createUserPersona(
  goal: UserGoal,
  formState: FormState,
  formData: FormData
): Promise<FormState> {
  console.log(formData);
  const loseTrackOfTimeAreas = formData.getAll(
    "loseTrackOfTimeAreas"
  ) as string[];
  const lovedDoingAt10 = formData.getAll("lovedDoingAt10") as string[];
  const issuesSpokenUpAbout = formData.getAll("issuesSpokenAbout") as string[];
  const naturallyCuriousAbout = formData.getAll(
    "naturallyCuriousAbout"
  ) as string[];
  const feelsLikePlay = formData.getAll("feelsLikePlay") as string[];
  const continuouslyLearningAbout = formData.getAll(
    "continuouslyLearningAbout"
  ) as string[];
  const helpedOthersWith = formData.getAll("helpedOthersWith") as string[];
  const areasNeededHelp = formData.getAll("areasNeededHelp") as string[];
  const hereToDo = formData.get("hereToDo") as string;
  const turningPoint = formData.get("turningPoint") as string;

  const wishMoreUnderstood = formData.get("wishMoreUnderstood") as string;
  const unspokenRules = formData.getAll("unspokenRules") as string[];

  const userPersona = await createPersona({
    goal,
    loseTrackOfTimeAreas,
    lovedDoingAt10,
    issuesSpokenUpAbout,
    naturallyCuriousAbout,
    feelsLikePlay,
    continuouslyLearningAbout,
    helpedOthersWith,
    areasNeededHelp,
    hereToDo,
    turningPoint,
    wishMoreUnderstood,
    unspokenRules,
  });

  return {
    success: true,
    errors: {},
    resultParams: {
      ids: {
        userPersonaId: userPersona.id,
      },
    },
  };
}
