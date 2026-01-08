import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod";
import {
  NichePromptData,
  getBusinessNichePrompt,
} from "./get-business-niche-prompt";
import { getBusinessSystemPrompt } from "./get-business-niche-system-prompt";
import {
  BusinessExtraction,
  businessExtractionSchema,
} from "./niche-response-format";
import { createNiche } from "@/db/mutations/niche/create-niche";
import { createNicheSolutions } from "@/db/mutations/niche/create-niche-solutions";
import { createCustomerPersona } from "@/db/mutations/customer-persona/create-customer-persona";
import { updateUserPersona } from "@/db/mutations/user-persona/update-user-persona";
import { createAITokens } from "@/db/mutations/ai-tokens/create-ai-tokens";

const openai = new OpenAI();

export async function getBusinessNicheFromOpenAI(
  userPersonaId: number,
  promptData: NichePromptData
) {
  try {
    const response = await openai.responses.parse({
      model: "gpt-5-nano",
      input: [
        { role: "system", content: getBusinessSystemPrompt("India") },
        {
          role: "user",
          content: getBusinessNichePrompt(promptData),
        },
      ],
      text: {
        format: zodTextFormat(businessExtractionSchema, "niche_response"),
      },
    });

    console.log(response);
    const niche_response = response.output_parsed as BusinessExtraction;

    // Check if input is valid
    if (!niche_response.isValidInput) {
      return {
        nicheId: null,
        customerPersonaId: null,
        isInvalidInput: true,
      };
    }

    const {
      skills,
      interests,
      coreValues,
      drivingBelief,
      niche,
      customerPersona,
      nicheSolutions,
    } = niche_response;

    const createdNiche = await createNiche({
      userPersonaId,
      ...niche,
    });

    const nicheId = createdNiche.id;
    const { model, usage } = response;

    await createAITokens({
      model,
      nicheId,
      inputTokens: usage?.input_tokens || 0,
      outputTokens: usage?.output_tokens || 0,
    });

    const solutionsData = nicheSolutions.map((solution) => ({
      nicheId,
      ...solution,
    }));

    await createNicheSolutions(solutionsData);

    const customerPersonaData = {
      ...customerPersona,
      userPersonaId,
      nicheId,
    };

    const createdCustomerPersona = await createCustomerPersona(
      customerPersonaData
    );

    await updateUserPersona(userPersonaId, {
      skills,
      interests,
      coreValues,
      drivingBelief,
    });

    return {
      nicheId,
      customerPersonaId: createdCustomerPersona?.id,
    };
  } catch (error) {
    console.log("Error in getBusinessNicheFromOpenAI:", error);
    return {
      nicheId: null,
      customerPersonaId: null,
    };
  }
}
