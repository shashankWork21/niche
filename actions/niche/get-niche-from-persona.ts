"use server";

import { FormState } from "@/lib/types";
import { UserGoal, UserPersona } from "@/app/generated/prisma/client";
import { getBusinessNicheFromOpenAI } from "../utils/ai/openai/niche-request";
import { getCareerDirectionFromOpenAi } from "../utils/ai/openai/career-request";
import { getUserPersonaById } from "@/db/queries/user-persona/get-user-persona-by-id";
import { getUserByPersonaId } from "@/db/queries/user/get-user-by-persona-id";
import { sendNicheReadyEmail } from "../user/send-niche-ready-email";
import { sendCareerReadyEmail } from "../user/send-career-ready-email";
import { revalidatePath } from "next/cache";

export async function getNicheFromPersona(
  userPersonaId: number
): Promise<FormState> {
  const userPersona = (await getUserPersonaById(userPersonaId)) as UserPersona;
  const goal = userPersona.goal;
  switch (goal) {
    case UserGoal.BUSINESS:
      try {
        const result = await getBusinessNicheFromOpenAI(userPersona.id, {
          wishMoreUnderstood: userPersona.wishMoreUnderstood || "",
          unspokenRules: userPersona.unspokenRules,
          loseTrackOfTimeAreas: userPersona.loseTrackOfTimeAreas,
          lovedDoingAt10: userPersona.lovedDoingAt10,
          issuesSpokenUpAbout: userPersona.issuesSpokenUpAbout,
          naturallyCuriousAbout: userPersona.naturallyCuriousAbout,
          feelsLikePlay: userPersona.feelsLikePlay,
          continuouslyLearningAbout: userPersona.continuouslyLearningAbout,
          helpedOthersWith: userPersona.helpedOthersWith,
          areasNeededHelp: userPersona.areasNeededHelp,
          hereToDo: userPersona.hereToDo,
          turningPoint: userPersona.turningPoint,
        });

        // Check if input was invalid
        if ("isInvalidInput" in result && result.isInvalidInput) {
          return {
            success: false,
            redirectTo: "/invalid-submission",
            errors: {
              _form: {
                errors: [
                  "It seems like your responses were not serious or thoughtful. Please try again with genuine answers.",
                ],
              },
            },
          };
        }

        const { nicheId, customerPersonaId } = result;

        if (!nicheId || !customerPersonaId) {
          throw new Error("Failed to generate niche or customer persona.");
        }

        // Send email notification
        const user = await getUserByPersonaId(userPersonaId);
        if (user) {
          console.log("Sending niche ready email to:", user.email);
          try {
            await sendNicheReadyEmail({
              email: user.email,
              firstName: user.firstName,
              nicheId,
            });
          } catch (emailError) {
            // Log email error but don't fail the entire operation
            console.error("Failed to send niche ready email:", emailError);
          }
        }

        revalidatePath(`/niche/${nicheId}`);
        revalidatePath("/dashboard");

        return {
          success: true,
          errors: {},
          redirectTo: `/niche/${nicheId}`,
          resultParams: {
            ids: {
              userPersonaId: userPersona.id,
              nicheId,
              customerPersonaId,
            },
          },
        };
      } catch (error: unknown) {
        if (error instanceof Error) {
          return {
            success: false,
            errors: {
              _form: {
                errors: [error.message],
              },
            },
          };
        } else {
          return {
            success: false,
            errors: {
              _form: {
                errors: ["An unknown error occurred."],
              },
            },
          };
        }
      }

    case UserGoal.CAREER:
      try {
        const result = await getCareerDirectionFromOpenAi(userPersona.id, {
          wishMoreUnderstood: userPersona.wishMoreUnderstood || "",
          unspokenRules: userPersona.unspokenRules,
          loseTrackOfTimeAreas: userPersona.loseTrackOfTimeAreas,
          lovedDoingAt10: userPersona.lovedDoingAt10,
          issuesSpokenUpAbout: userPersona.issuesSpokenUpAbout,
          naturallyCuriousAbout: userPersona.naturallyCuriousAbout,
          feelsLikePlay: userPersona.feelsLikePlay,
          continuouslyLearningAbout: userPersona.continuouslyLearningAbout,
          helpedOthersWith: userPersona.helpedOthersWith,
          areasNeededHelp: userPersona.areasNeededHelp,
          hereToDo: userPersona.hereToDo,
          turningPoint: userPersona.turningPoint,
        });

        // Check if input was invalid
        if ("isInvalidInput" in result && result.isInvalidInput) {
          return {
            success: false,
            redirectTo: "/invalid-submission",
            errors: {
              _form: {
                errors: [
                  "It seems like your responses were not serious or thoughtful. Please try again with genuine answers.",
                ],
              },
            },
          };
        }

        const { careerDirectionId } = result;

        if (!careerDirectionId) {
          throw new Error("Failed to generate career direction.");
        }

        // Send email notification
        const user = await getUserByPersonaId(userPersonaId);
        if (user) {
          try {
            await sendCareerReadyEmail({
              email: user.email,
              firstName: user.firstName,
              careerDirectionId,
            });
          } catch (emailError) {
            // Log email error but don't fail the entire operation
            console.error("Failed to send career ready email:", emailError);
          }
        }

        revalidatePath("/dashboard");
        revalidatePath(`/career-direction/${careerDirectionId}`);

        return {
          success: true,
          errors: {},
          redirectTo: `/career-direction/${careerDirectionId}`,
          resultParams: {
            ids: {
              userPersonaId: userPersona.id,
              careerDirectionId,
            },
          },
        };
      } catch (error: unknown) {
        if (error instanceof Error) {
          return {
            success: false,
            errors: {
              _form: {
                errors: [error.message],
              },
            },
          };
        } else {
          return {
            success: false,
            errors: {
              _form: {
                errors: ["An unknown error occurred."],
              },
            },
          };
        }
      }
  }
}
