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

export const careerExtractionSchema = z
  .object({
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
  careerDirection: z
    .object({
      statement: z
        .string()
        .describe(
          "Format: 'You're best suited for [TYPE OF WORK] because [REASON]'. Be hyper-specific - not 'tech jobs' but 'Product Manager at early-stage B2B SaaS startups in India'. The reason should connect to their proven strengths and flow states."
        ),
      whyYou: z
        .string()
        .describe(
          "2-3 sentences connecting their turning point, natural abilities, and story to why this career direction fits them perfectly. Make it personal and compelling, not generic."
        ),
      careerArchetype: z
        .enum(CareerArchetype)
        .describe(
          "The career archetype that best fits the user based on their flow states and natural inclinations: Builder (creates products/systems), Connector (facilitates relationships), Analyst (drives decisions from data), Creator (generates original content), Leader (guides teams), Supporter (enables others), Visionary (sees possibilities), or Organizer (optimizes systems)."
        ),
      workingStyle: z
        .enum(WorkingStyle)
        .describe(
          "The working style that best fits the user's natural rhythm and productivity patterns: Independent (solo deep work), Collaborative (thrives in team settings), Leading Teams (energized by guiding others), or Hybrid (mix of solo and collaborative work)."
        ),
      idealEnvironment: z
        .enum(IdealEnvironment)
        .describe(
          "The work environment that brings out their best performance based on their values and work preferences (e.g., startup, corporate, agency, remote-first, etc.)."
        ),
      naturalStrengths: z
        .array(z.string())
        .min(3)
        .max(5)
        .describe(
          "3-5 strengths that come naturally to the user in a work context. Extract from their flow activities and what they've helped others with. Be specific, not generic."
        ),
      blindSpots: z
        .array(z.string())
        .min(3)
        .max(5)
        .describe(
          "3-5 potential blind spots or growth edges the user should be aware of. These are areas where their strengths might become weaknesses or where they might struggle. Be honest but constructive."
        ),
      developmentAreas: z
        .array(z.string())
        .min(3)
        .max(5)
        .describe(
          "3-5 specific areas for growth that would help the user advance in their career direction. Focus on skills or competencies they can develop, not personality changes."
        ),
      demandOutlook: z
        .enum(DemandOutlook)
        .describe(
          "The market demand outlook for this career direction. Consider industry trends, automation risk, and future job market projections."
        ),
      salaryExpectation: z
        .string()
        .describe(
          "Realistic salary expectation range in local currency for their target market and experience level. Be specific (e.g., '₹15-30 LPA in India for 3-5 years experience') not vague."
        ),
      growthPotential: z
        .string()
        .describe(
          "Concrete growth opportunities in this career direction over 3-5 years. What roles or positions could they progress into? What income or impact growth is realistic?"
        ),
      validationQuestions: z
        .array(z.string())
        .length(3)
        .describe(
          "3 specific questions the user should ask people currently in these roles to validate whether this career direction is truly right for them. Questions should uncover day-to-day reality, required trade-offs, and career trajectory."
        ),
      immediateNextSteps: z
        .array(z.string())
        .min(3)
        .max(5)
        .describe(
          "3-5 specific, actionable steps the user can take in the next 30 days to explore this career direction. Each step should be concrete and achievable within the timeframe."
        ),
      networkingAdvice: z
        .string()
        .describe(
          "Specific advice on how to network effectively in this career direction. Where should they show up? What communities should they join? How should they position themselves? Be tactical, not generic."
        ),
      fiveYearVision: z
        .string()
        .describe(
          "A compelling, realistic vision of where this career direction could lead in 5 years if they commit to it. Paint a specific picture: role, impact, income, lifestyle, recognition. Make it inspiring but grounded."
        ),
      transitionStrategy: z
        .string()
        .describe(
          "Concrete strategy to transition into this career direction from where they are now. Address the gap between current state and target role. Include timeline considerations, skill-building sequence, and potential stepping stones."
        ),
    })
    .describe(
      "The ideal career direction for this person based on their proven abilities, flow states, values, and driving belief. This must align with who they naturally are, not who they think they should be."
    ),
  roleRecommendations: z
    .array(
      z.object({
        title: z
          .string()
          .describe(
            "Specific job title that matches their skills and career direction. Be precise (e.g., 'Product Manager' not 'tech role', 'Content Marketing Manager' not 'marketing')."
          ),
        industry: z
          .string()
          .describe(
            "Specific industry or sector for this role. Be precise (e.g., 'B2B SaaS', 'healthcare tech', 'fintech') not generic (e.g., 'technology', 'business')."
          ),
        whyFit: z
          .string()
          .describe(
            "Why this specific role matches their unique profile. Connect to their proven skills, flow states, and values. Make it personal, not a generic job description."
          ),
        salaryRange: z
          .string()
          .describe(
            "Realistic salary range in local currency for their target market and experience level. Be specific with numbers (e.g., '₹15-30 LPA', '$80k-$120k') not vague terms."
          ),
        skillGaps: z
          .array(z.string())
          .describe(
            "Specific skills or knowledge they need to develop to be competitive for this role. Be honest about gaps but focus on learnable skills, not personality traits."
          ),
        companies: z
          .array(z.string())
          .min(3)
          .max(5)
          .describe(
            "3-5 specific example companies they should target for this role. Use real company names, not categories (e.g., 'Notion, Linear, Coda' not 'productivity startups')."
          ),
        experienceRequired: z
          .string()
          .describe(
            "Typical experience level required for this role (e.g., '2-4 years', 'Entry level', '5+ years'). Consider what's realistic for them to achieve."
          ),
        requiredSkills: z
          .array(z.string())
          .describe(
            "Key skills that are non-negotiable for this role. These are the must-haves that every job posting will require."
          ),
        niceToHaveSkills: z
          .array(z.string())
          .describe(
            "Additional skills that would make them more competitive but aren't strictly required. These can help them stand out from other candidates."
          ),
        certifications: z
          .array(z.string())
          .describe(
            "Relevant certifications or credentials that would boost their candidacy. Only include if they're genuinely valued in this role/industry. Can be empty if none are relevant."
          ),
        portfolioProjects: z
          .array(z.string())
          .describe(
            "3-5 specific portfolio project ideas they could build to demonstrate skills for this role. Each should be concrete and achievable, not vague suggestions."
          ),
        learningResources: z
          .array(z.string())
          .describe(
            "Top 3-5 specific resources to learn required skills. Include actual course names, books, platforms, or communities - not generic suggestions like 'online courses'."
          ),
        estimatedPrepTime: z
          .string()
          .describe(
            "Realistic time estimate to prepare for this role from their current state (e.g., '3-6 months of focused learning', '1 year with part-time study'). Be honest about the investment required."
          ),
        jobBoards: z
          .array(z.string())
          .describe(
            "Best job boards or platforms to find openings for this specific role. Be specific (e.g., 'YC Jobs', 'AngelList', 'Built In') not generic (e.g., 'job sites')."
          ),
        keywordsTags: z
          .array(z.string())
          .describe(
            "Important keywords and tags they should include in their resume, LinkedIn, and portfolio for this role. These help with ATS systems and recruiter searches."
          ),
        interviewFocus: z
          .array(z.string())
          .describe(
            "Key areas interviewers will focus on for this role. What should they prepare for? What will they be tested on? Be specific to the role type."
          ),
        competitionLevel: z
          .enum(CompetitionLevel)
          .describe(
            "Level of competition for this role in the current market. Consider supply/demand dynamics and how many people are competing for these positions."
          ),
        remoteViability: z
          .enum(RemoteViability)
          .describe(
            "How viable remote work is for this role type. Consider industry norms and whether the work can effectively be done remotely."
          ),
        workLifeBalance: z
          .enum(WorkLifeBalance)
          .describe(
            "Expected work-life balance in this role based on industry norms and typical demands. Be honest about what they're signing up for."
          ),
        stressLevel: z
          .enum(StressLevel)
          .describe(
            "Expected stress level in this role. Consider deadlines, pressure, ambiguity, and typical challenges. Set realistic expectations."
          ),
        typicalDayDescription: z
          .array(z.string())
          .describe(
            "3-5 bullet points describing what a typical day looks like in this role. Give them a realistic picture of day-to-day activities, not just high-level responsibilities."
          ),
        keyResponsibilities: z
          .array(z.string())
          .describe(
            "Key responsibilities they'd own in this role. What are they accountable for? What outcomes are they measured on? Be specific and realistic."
          ),
        collaborationStyle: z
          .string()
          .describe(
            "Typical collaboration style and team dynamics in this role. Who do they work with? How much is solo vs. collaborative? What's the communication cadence?"
          ),
      })
    )
    .min(3)
    .max(5)
    .describe(
      "3-5 specific role recommendations that align with the user's career direction. Each role should be actionable with clear path to entry, not aspirational wish-list positions. Prioritize roles where their proven skills transfer well and gaps are bridgeable within a reasonable timeframe."
    ),
  })
  .describe(
    "Comprehensive career direction analysis based on the user's proven abilities, flow states, values, and driving belief. The career direction must be grounded in what they've ALREADY demonstrated success in, not what they're trying to learn or aspire to become. Role recommendations should be realistic stepping stones, not fantasy positions. The goal is clarity and actionable next steps, not generic career advice."
  );

export type CareerExtraction = z.infer<typeof careerExtractionSchema>;
