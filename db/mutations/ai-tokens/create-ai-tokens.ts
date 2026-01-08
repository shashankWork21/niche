"use server";

import { db } from "@/db";

interface CreateAITokensData {
  model: string;
  userId?: number;
  careerDirectionId?: number;
  nicheId?: number;
  inputTokens: number;
  outputTokens: number;
}

export async function createAITokens(data: CreateAITokensData) {
  return await db.aiTokens.create({ data });
}
