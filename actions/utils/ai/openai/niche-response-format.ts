// schemas/business-extraction.ts

import {
  AwarenessStage,
  BusinessModel,
  BuyingPower,
  CompanySize,
  Criticality,
  DeliveryFormat,
  EducationLevel,
  Gender,
  Proposition,
  SolutionOutcome,
  SupplyDemand,
  TechSavviness,
  UrgencyLevel,
} from "@/app/generated/prisma/enums";
import { z } from "zod";

export const businessExtractionSchema = z.object({
  isValidInput: z
    .boolean()
    .describe(
      "Return false if the user's responses are nonsense, gibberish, not serious, or clearly fake (e.g., single letters, random characters, joke responses). Return true if the responses are genuine and thoughtful, even if brief."
    ),
  skills: z
    .array(z.string())
    .describe(
      "3-7 specific skills extracted from their activities, learning areas, and flow states. Not generic like 'communication'. Be specific like 'breaking down complex topics for beginners'"
    ),
  interests: z
    .array(z.string())
    .describe(
      "3-7 interest areas based on their curiosity, play activities, and continuous learning topics"
    ),
  coreValues: z
    .array(z.string())
    .length(3)
    .describe(
      "Convert their 3 rules into 3 single-word or two-word core values. Examples: Independence, Truth, Growth, Courage, Simplicity, Resilience, Curiosity, Integrity, Freedom, Depth"
    ),
  drivingBelief: z
    .string()
    .describe(
      "Convert their 'wish more people understood' into format: '[Topic] is really about [their insight], not [common misconception]'. Use their words."
    ),
  niche: z.object({
    statement: z
      .string()
      .describe(
        "Format: 'I help [SPECIFIC PERSON] who struggle with [SPECIFIC PROBLEM] to achieve [SPECIFIC RESULT]'. Be specific - not 'entrepreneurs' but 'first-time founders in India who just quit their jobs'"
      ),
    whyYou: z
      .string()
      .describe(
        "2-3 sentences connecting their turning point, skills, and story to why they're the right person to solve this problem"
      ),
    validationQuestions: z
      .array(z.string())
      .describe(
        " 3 questions that the user needs to ask prospects to validate the niche and refine it"
      ),
    uniqueValue: z.string().describe("What makes this niche uniquely valuable"),
    marketGap: z
      .string()
      .describe("The specific gap in the market this niche addresses"),
    competitiveEdge: z
      .string()
      .describe("How the user's background gives them an edge in this niche"),
    businessModel: z.enum(BusinessModel).describe("B2B, B2C or Both"),
    supplyType: z
      .enum(SupplyDemand)
      .describe("Local or Global. This is applicable for B2C niches"),
    demandType: z.enum(SupplyDemand).describe("Local or Global"),
    proposition: z
      .enum(Proposition)
      .describe(
        "Saving time, or growing revenue, applicable for B2B niches. If it's B2C, return null"
      ),
    criticality: z
      .enum(Criticality)
      .describe(
        "Is it critical, or nice to have? Applicable for B2B niches. If it's B2C, return null"
      ),
    adjacentNiches: z
      .array(z.string())
      .describe("3 related niches that the user can explore"),
    scalabilityNote: z
      .string()
      .describe(
        "A note on how this niche can be scaled over time (e.g., new markets, new products/services)"
      ),
  }),
  customerPersona: z.object({
    minAge: z.number().int(),
    maxAge: z.number().int(),
    genders: z.array(z.enum(Gender)),
    location: z.string(),
    annualIncome: z.number().int(),
    skills: z
      .array(z.string())
      .describe(
        "Skills the CUSTOMER already has (not the user's skills). What is the customer good at in their own work/life?"
      ),
    interests: z
      .array(z.string())
      .describe(
        "What the CUSTOMER is interested in (not the user's interests). What does the customer care about, read about, talk about?"
      ),
    fears: z
      .array(z.string())
      .describe(
        "What keeps the CUSTOMER up at night? Their anxieties and worries about the problem you solve."
      ),
    struggles: z
      .array(z.string())
      .describe(
        "What is the CUSTOMER battling daily? The friction they face that your solution addresses."
      ),
    goals: z
      .array(z.string())
      .describe(
        "What does the CUSTOMER want to achieve? The outcome they're paying for."
      ),
    painLevel: z
      .int()
      .describe("On a scale of 1-10, how intense is their pain point?")
      .min(1)
      .max(10),
    urgencyLevel: z
      .enum(UrgencyLevel)
      .describe("How urgently do they need a solution?"),
    awarenessStage: z
      .enum(AwarenessStage)
      .describe(
        "The customer's awareness stage regarding their problem and your solution"
      ),
    currentSolutions: z
      .array(z.string())
      .describe(
        "What solutions are they currently using to address their problem"
      ),
    frustrations: z
      .array(z.string())
      .describe("What frustrates them about current solutions"),
    aspirations: z
      .array(z.string())
      .describe("What are their hopes and aspirations?"),
    jobTitles: z
      .array(z.string())
      .describe("Common job titles they hold (For B2B niches)"),
    companySize: z
      .enum(CompanySize)
      .describe("Size of their company (For B2B niches)"),
    industryVerticals: z
      .array(z.string())
      .describe("Their specific industry verticals (For B2B niches)"),
    buyingPower: z
      .enum(BuyingPower)
      .describe("Their specific buying power (For B2B niches)"),
    educationLevel: z
      .enum(EducationLevel)
      .describe("Their highest education level completed"),
    familyStatus: z
      .string()
      .describe(
        "Their family status, e.g., single, married, with/without children"
      ),
    techSavviness: z
      .enum(TechSavviness)
      .describe("Their comfort level with technology"),
    preferredChannels: z
      .array(z.string())
      .describe(
        "Channels they use to seek information and hang out (e.g., social media, forums, professional networks)"
      ),
    contentConsumption: z
      .array(z.string())
      .describe(
        "Types of content they consume - what they watch, read or listen to"
      ),
  }),
  nicheSolutions: z
    .array(
      z.object({
        outcome: z.enum(SolutionOutcome),
        solution: z
          .string()
          .refine((val) => val.length <= 100)
          .describe("Title of the solution"),
        description: z
          .array(z.string())
          .describe(
            "Point by point description of the solution (3-5 points each under 100 characters)"
          )
          .min(3)
          .max(5),
        deliveryFormat: z
          .enum(DeliveryFormat)
          .describe("How the solution is delivered"),
        timeframe: z
          .string()
          .describe("Estimated time to deliver the solution"),
        pricingGuidance: z
          .string()
          .describe(
            "Suggested Pricing Range in the currency of the user's country. If the demand is global, suggest a range in USD."
          ),
        uniqueApproach: z
          .string()
          .describe(
            "What makes your approach unique,  different and effective"
          ),
        proofPoints: z.array(z.string()).describe("Evidence that this works"),
        idealForStage: z
          .string()
          .describe("Which stage of customer awareness is this ideal for"),
        bundlesWith: z
          .array(z.string())
          .describe("What other solutions this bundles with"),
      })
    )
    .min(3)
    .max(6),
});

export type BusinessExtraction = z.infer<typeof businessExtractionSchema>;
