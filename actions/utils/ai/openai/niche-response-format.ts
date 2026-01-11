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

export const businessExtractionSchema = z
  .object({
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
    niche: z
      .object({
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
          .length(3)
          .describe(
            "3 specific questions the user should ask potential customers to validate whether this niche truly resonates and to refine their positioning. Questions should reveal pain intensity, willingness to pay, and current solution inadequacy."
          ),
        uniqueValue: z
          .string()
          .describe(
            "What makes this niche uniquely valuable in the market. Why should customers choose this over alternatives? What specific transformation or outcome makes it worth paying for?"
          ),
        marketGap: z
          .string()
          .describe(
            "The specific gap in the market this niche addresses. What are competitors missing? What need is currently underserved or poorly served?"
          ),
        competitiveEdge: z
          .string()
          .describe(
            "How the user's unique background, experience, and turning point give them an unfair advantage in serving this niche. Why can THEY do this better than others?"
          ),
        businessModel: z
          .enum(BusinessModel)
          .describe(
            "B2B (selling to businesses), B2C (selling to consumers), or BOTH. Choose based on who will be paying for the solution."
          ),
        supplyType: z
          .enum(SupplyDemand)
          .describe(
            "LOCAL (user can only serve customers in their geographic area) or GLOBAL (user can serve customers anywhere). Primarily applicable for B2C niches."
          ),
        demandType: z
          .enum(SupplyDemand)
          .describe(
            "LOCAL (customers are primarily in the user's geographic area) or GLOBAL (customers can be anywhere in the world)"
          ),
        proposition: z
          .enum(Proposition)
          .describe(
            "SAVE_TIME (helps customers be more efficient/productive) or GROW_REVENUE (helps customers make more money). Only applicable for B2B niches - use null for B2C."
          ),
        criticality: z
          .enum(Criticality)
          .describe(
            "CRITICAL (must-have, business will suffer without it) or NICE_TO_HAVE (improves things but not essential). Only applicable for B2B niches - use null for B2C."
          ),
        adjacentNiches: z
          .array(z.string())
          .length(3)
          .describe(
            "3 related niches that naturally branch from this core niche. These should represent logical expansion opportunities once the user has proven success in their primary niche."
          ),
        scalabilityNote: z
          .string()
          .describe(
            "Concrete ideas for how this niche can be scaled over time. Consider: expanding to new geographic markets, adding complementary products/services, moving upmarket/downmarket, or productizing services. Be specific, not generic."
          ),
      })
      .describe(
        "The niche that the user is best suited to serve. This niche must align with their values, bring out their skills in a way that makes them flow, and match their interests in a way they feel fulfilled, and excitement comes naturally to them. Their driving belief must enable them to serve this niche automatically, rather than standing in their way."
      ),
    customerPersona: z
      .object({
        minAge: z
          .number()
          .int()
          .describe(
            "Minimum age of the ideal customer. Be specific based on life stage and purchasing power."
          ),
        maxAge: z
          .number()
          .int()
          .describe(
            "Maximum age of the ideal customer. Consider career stage and life circumstances."
          ),
        genders: z
          .array(z.enum(Gender))
          .describe(
            "Gender(s) of the ideal customer. Include all relevant options if the solution applies broadly."
          ),
        location: z
          .string()
          .describe(
            "Geographic location of the ideal customer. Be specific (e.g., 'urban India', 'San Francisco Bay Area', 'Southeast Asia') rather than vague."
          ),
        annualIncome: z
          .number()
          .int()
          .describe(
            "Average annual income of the ideal customer in their local currency. This should reflect their purchasing power and ability to pay for the solution."
          ),
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
          .describe(
            "How urgently the customer needs a solution. Consider whether they're actively searching now or just exploring for the future."
          ),
        awarenessStage: z
          .enum(AwarenessStage)
          .describe(
            "The customer's awareness stage: are they unaware of the problem, aware of the problem but not solutions, aware of solutions but not yours, or ready to buy? This determines messaging strategy."
          ),
        currentSolutions: z
          .array(z.string())
          .describe(
            "What solutions are they currently using to address their problem? Include DIY approaches, competitors, or makeshift workarounds. Be specific."
          ),
        frustrations: z
          .array(z.string())
          .describe(
            "What frustrates them about current solutions? These frustrations are opportunities for differentiation and positioning."
          ),
        aspirations: z
          .array(z.string())
          .describe(
            "What are their hopes and aspirations? What does success look like for them? What are they trying to become or achieve in the next 1-3 years?"
          ),
        jobTitles: z
          .array(z.string())
          .describe(
            "Common job titles they hold. For B2B niches only - be specific (e.g., 'VP of Sales at 50-200 person companies' not just 'sales leader')."
          ),
        companySize: z
          .enum(CompanySize)
          .describe(
            "Size of their company by employee count. For B2B niches only. Company size affects budget, decision-making process, and pain points."
          ),
        industryVerticals: z
          .array(z.string())
          .describe(
            "Their specific industry verticals. For B2B niches only. Be specific (e.g., 'B2B SaaS', 'healthcare tech', 'fintech') not generic (e.g., 'technology')."
          ),
        buyingPower: z
          .enum(BuyingPower)
          .describe(
            "Their buying power: are they the decision maker, influencer, or end user? For B2B niches only. This affects sales cycle and messaging."
          ),
        educationLevel: z
          .enum(EducationLevel)
          .describe(
            "Their highest education level completed. This affects how you communicate, pricing expectations, and sophistication level."
          ),
        familyStatus: z
          .string()
          .describe(
            "Their family status and life situation (e.g., 'single professional', 'married with young children', 'empty nester'). This affects time availability, priorities, and pain points."
          ),
        techSavviness: z
          .enum(TechSavviness)
          .describe(
            "Their comfort level with technology. This determines delivery format, onboarding complexity, and feature set."
          ),
        preferredChannels: z
          .array(z.string())
          .describe(
            "Specific channels they use to seek information and hang out. Be precise (e.g., 'LinkedIn', 'Reddit r/entrepreneur', 'Y Combinator alumni Slack') not vague (e.g., 'social media')."
          ),
        contentConsumption: z
          .array(z.string())
          .describe(
            "Types of content they consume - what they watch, read, or listen to. Be specific about formats AND topics (e.g., 'business podcasts like My First Million', 'technical YouTube tutorials', 'industry newsletters')."
          ),
      })
      .describe(
        "Detailed profile of the Ideal Customer Persona - the specific person the user will serve. Remember: this is NOT the user, but the CUSTOMER. Their skills, interests, and life details should reflect the customer's world, not the user's expertise domain. For example, if the user is a fitness coach, the customer's interests might be 'productivity and career growth', not 'fitness and nutrition'."
      ),
    nicheSolutions: z
      .array(
        z.object({
          outcome: z
            .enum(SolutionOutcome)
            .describe(
              "The primary outcome this solution delivers for the customer."
            ),
          solution: z
            .string()
            .refine((val) => val.length <= 100)
            .describe(
              "Clear, compelling title of the solution (max 100 characters). Should communicate the transformation, not just describe the format."
            ),
          description: z
            .array(z.string())
            .describe(
              "Point-by-point description of what's included in this solution. 3-5 specific, concrete points, each under 100 characters. Focus on benefits and deliverables, not generic features."
            )
            .min(3)
            .max(5),
          deliveryFormat: z
            .enum(DeliveryFormat)
            .describe(
              "How the solution is delivered (e.g., 1-on-1, group, self-paced, workshop, etc.). Match format to customer preferences and solution complexity."
            ),
          timeframe: z
            .string()
            .describe(
              "Realistic time to deliver the solution and achieve results (e.g., '4 weeks', '3 months', '1-day intensive'). Set proper expectations."
            ),
          pricingGuidance: z
            .string()
            .describe(
              "Suggested pricing range in the user's local currency (or USD if demand is global). Base on value delivered, market rates, and customer purchasing power. Be specific (e.g., '$2,000-$5,000' not 'affordable')."
            ),
          uniqueApproach: z
            .string()
            .describe(
              "What makes the user's approach to this solution unique, different, and effective? Connect to their background, values, and driving belief. This is the competitive moat."
            ),
          proofPoints: z
            .array(z.string())
            .describe(
              "Specific evidence or validation that this solution works. Can include the user's own results, case studies from their experience helping others, industry data, or logical reasoning based on their expertise."
            ),
          idealForStage: z
            .string()
            .describe(
              "Which stage of customer awareness is this solution ideal for? (e.g., 'Problem-aware but not solution-aware', 'Ready to buy', 'Solution-aware and comparing options'). This guides marketing strategy."
            ),
          bundlesWith: z
            .array(z.string())
            .describe(
              "What other solutions from this list does this naturally bundle or upsell with? Think customer journey and logical progressions."
            ),
        })
      )
      .min(3)
      .max(6),
  })
  .describe(
    "The comprehensive set of solutions - products and services alike - for the niche that they are best suited to serve. These solutions must naturally make the ideal customer persona achieve their goals, satisfy their interests, solve their pain points, or reduce their struggles, or a combination of these. By looking at one or more of these solutions, the ideal customer persona should feel an immediate resonance, as if these solutions were tailor-made for them, and immediatly take action."
  );

export type BusinessExtraction = z.infer<typeof businessExtractionSchema>;
