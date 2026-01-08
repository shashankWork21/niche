import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod";
import { NichePromptData } from "./get-business-niche-prompt";
import {
  CareerExtraction,
  careerExtractionSchema,
} from "./career-response-format";

import { updateUserPersona } from "@/db/mutations/user-persona/update-user-persona";
import { createCareerDirection } from "@/db/mutations/career-direction/create-career-direction";
import { createRoleRecommendations } from "@/db/mutations/role-recommendations/create-role-recommendations";
import { getCareerSystemPrompt } from "./get-career-system-prompt";
import { getCareerPrompt } from "./get-career-prompt";
import { createAITokens } from "@/db/mutations/ai-tokens/create-ai-tokens";

const openai = new OpenAI();

export async function getCareerDirectionFromOpenAi(
  userPersonaId: number,
  promptData: NichePromptData
) {
  const response = await openai.responses.parse({
    model: "gpt-5-nano",
    input: [
      { role: "system", content: getCareerSystemPrompt("India") },
      {
        role: "user",
        content: getCareerPrompt(promptData),
      },
    ],
    text: {
      format: zodTextFormat(careerExtractionSchema, "career_response"),
    },
  });

  const career_response = response.output_parsed as CareerExtraction;

  // Check if input is valid
  if (!career_response.isValidInput) {
    return {
      careerDirectionId: null,
      isInvalidInput: true,
    };
  }

  const {
    skills,
    interests,
    coreValues,
    drivingBelief,
    careerDirection,
    roleRecommendations,
  } = career_response;

  await updateUserPersona(userPersonaId, {
    skills,
    interests,
    coreValues,
    drivingBelief,
  });

  const careerDirectionData = {
    ...careerDirection,
    userPersonaId,
  };
  const createdCareerDirection = await createCareerDirection(
    careerDirectionData
  );

  const careerDirectionId = createdCareerDirection.id;
  const { model, usage } = response;

  await createAITokens({
    model,
    careerDirectionId,
    inputTokens: usage?.input_tokens || 0,
    outputTokens: usage?.output_tokens || 0,
  });

  const roleRecommendationData = roleRecommendations.map((recommendation) => ({
    careerDirectionId,
    ...recommendation,
  }));

  await createRoleRecommendations(roleRecommendationData);
  return {
    careerDirectionId,
  };
}
