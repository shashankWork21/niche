// schemas/career-extraction.ts

import {
  CareerArchetype,
  CompetitionLevel,
  DemandOutlook,
  IdealEnvironment,
  RemoteViability,
  StressLevel,
  WorkingStyle,
  WorkLifeBalance,
} from "@/app/generated/prisma/enums";
import { z } from "zod";

export const careerExtractionSchema = z.object({
  isValidInput: z
    .boolean()
    .describe(
      "Return false if the user's responses are nonsense, gibberish, not serious, or clearly fake (e.g., single letters, random characters, joke responses). Return true if the responses are genuine and thoughtful, even if brief."
    ),
  skills: z
    .array(z.string())
    .describe(
      "3-7 specific skills extracted from their activities, learning areas, and flow states. Not generic like 'communication' - specific like 'breaking down complex topics for beginners'"
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
  careerDirection: z.object({
    statement: z
      .string()
      .describe(
        "Format: 'You're best suited for [TYPE OF WORK] because [REASON]'. Be specific - not 'tech' but 'product roles at early-stage startups'"
      ),
    whyYou: z
      .string()
      .describe(
        "2-3 sentences connecting their turning point, natural abilities, and story to why this career direction fits them"
      ),
    careerArchetype: z
      .enum(CareerArchetype)
      .describe(
        "The career archetype that best fits the user: Builder, Connector, Analyst, Creator, Leader, Supporter, Visionary, Organizer"
      ),
    workingStyle: z
      .enum(WorkingStyle)
      .describe(
        "The working style that best fits the user: Independent, Collaborative, Leading Teams, Hybrid"
      ),
    idealEnvironment: z
      .enum(IdealEnvironment)
      .describe("The ideal work environment that best fits the user"),
    naturalStrengths: z
      .array(z.string())
      .describe(
        "3-5 strengths that come naturally to the user in a work context"
      ),
    blindSpots: z
      .array(z.string())
      .describe(
        "3-5 potential blind spots the user should be aware of in their career"
      ),
    developmentAreas: z
      .array(z.string())
      .describe(
        "3-5 areas for growth that would help the user advance in their career"
      ),
    demandOutlook: z
      .enum(DemandOutlook)
      .describe("The demand outlook for this career direction"),
    salaryExpectation: z
      .string()
      .describe("Realistic salary expectation range"),
    growthPotential: z
      .string()
      .describe("Potential growth opportunities in this career direction"),
    validationQuestions: z
      .array(z.string())
      .describe(
        "3 questions the user needs to ask in the real world to validate this career direction"
      )
      .min(3)
      .max(3),
    immediateNextSteps: z
      .array(z.string())
      .describe(
        "3-5 specific actions the user can take in the next 30 days to explore this career direction"
      )
      .min(3)
      .max(5),
    networkingAdvice: z
      .string()
      .describe(
        "Advice on how to network effectively in this career direction"
      ),
    fiveYearVision: z
      .string()
      .describe(
        "A compelling vision of where this career direction could lead in 5 years"
      ),
    transitionStrategy: z
      .string()
      .describe(
        "Strategy to transition into this career direction, if applicable"
      ),
  }),
  roleRecommendations: z
    .array(
      z.object({
        title: z
          .string()
          .describe("Specific job title, e.g., 'Product Manager'"),
        industry: z.string().describe("Specific industry, e.g., 'B2B SaaS'"),
        whyFit: z
          .string()
          .describe("Why this role matches their profile - be specific"),
        salaryRange: z
          .string()
          .describe("Realistic salary range, e.g., '₹15-30 LPA'"),
        skillGaps: z
          .array(z.string())
          .describe("What they need to learn to get this role"),
        companies: z
          .array(z.string())
          .describe("3-5 example companies to target"),
        experienceRequired: z
          .string()
          .describe("Experience level required for this role"),
        requiredSkills: z
          .array(z.string())
          .describe("Key skills required for this role"),
        niceToHaveSkills: z
          .array(z.string())
          .describe("Additional nice-to-have skills for this role"),
        certifications: z
          .array(z.string())
          .describe("Relevant certifications, if any"),
        portfolioProjects: z
          .array(z.string())
          .describe("Example portfolio projects to showcase skills"),
        learningResources: z
          .array(z.string())
          .describe("Top resources to learn required skills"),
        estimatedPrepTime: z
          .string()
          .describe("Estimated time to prepare for this role"),
        jobBoards: z
          .array(z.string())
          .describe("Best job boards to find openings"),
        keywordsTags: z
          .array(z.string())
          .describe("Important keywords/tags to include"),
        interviewFocus: z
          .array(z.string())
          .describe("Key interview focus areas"),
        competitionLevel: z
          .enum(CompetitionLevel)
          .describe("Level of competition for this role"),
        remoteViability: z
          .enum(RemoteViability)
          .describe("Viability of remote work for this role"),
        workLifeBalance: z
          .enum(WorkLifeBalance)
          .describe("Expected work-life balance in this role"),
        stressLevel: z
          .enum(StressLevel)
          .describe("Expected stress level in this role"),
        typicalDayDescription: z
          .array(z.string())
          .describe("Description of a typical day in this role"),
        keyResponsibilities: z
          .array(z.string())
          .describe("Key responsibilities in this role"),
        collaborationStyle: z
          .string()
          .describe("Typical collaboration style in this role"),
      })
    )
    .min(3)
    .max(5),
});

export type CareerExtraction = z.infer<typeof careerExtractionSchema>;
