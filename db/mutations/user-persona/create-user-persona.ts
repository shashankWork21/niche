"use server";

import { UserGoal } from "@/app/generated/prisma/enums";
import { db } from "@/db";

interface createPersonaData {
  goal: UserGoal;
  loseTrackOfTimeAreas: string[];
  lovedDoingAt10: string[];
  issuesSpokenUpAbout: string[];
  naturallyCuriousAbout: string[];
  feelsLikePlay: string[];
  continuouslyLearningAbout: string[];
  helpedOthersWith: string[];
  areasNeededHelp: string[];
  hereToDo: string;
  turningPoint: string;
  wishMoreUnderstood: string;
  unspokenRules: string[];
}
export async function createPersona(data: createPersonaData) {
  return await db.userPersona.create({
    data,
  });
}
