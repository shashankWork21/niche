"use server";

import { Gender } from "@/app/generated/prisma/enums";
import { db } from "@/db";

interface CreateCustomerPersonaData {
  minAge: number;
  maxAge: number;
  genders: Gender[];
  location: string;
  annualIncome: number;
  skills: string[];
  interests: string[];
  fears: string[];
  struggles: string[];
  goals: string[];
  userPersonaId: number;
  nicheId: number;
}

export async function createCustomerPersona(data: CreateCustomerPersonaData) {
  // Implementation for creating a customer persona in the database
  return await db.customerPersona.create({
    data,
  });
}
