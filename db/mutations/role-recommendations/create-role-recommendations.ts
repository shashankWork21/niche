"use server";

import {
  CompetitionLevel,
  RemoteViability,
  StressLevel,
  WorkLifeBalance,
} from "@/app/generated/prisma/enums";
import { db } from "@/db";

interface RoleRecommendationData {
  careerDirectionId: number;
  title: string;
  whyFit: string;
  industry: string;
  salaryRange: string;
  skillGaps: string[];
  companies: string[];
  experienceRequired: string;
  requiredSkills: string[];
  niceToHaveSkills: string[];
  certifications: string[];
  portfolioProjects: string[];
  learningResources: string[];
  estimatedPrepTime: string;
  jobBoards: string[];
  keywordsTags: string[];
  interviewFocus: string[];
  competitionLevel: CompetitionLevel;
  remoteViability: RemoteViability;
  workLifeBalance: WorkLifeBalance;
  stressLevel: StressLevel;
  typicalDayDescription: string[];
  keyResponsibilities: string[];
  collaborationStyle: string;
}

export async function createRoleRecommendations(
  data: RoleRecommendationData[]
) {
  // Placeholder function - implement DB logic here
  return await db.roleRecommendation.createMany({ data });
}
