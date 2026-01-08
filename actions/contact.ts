"use server";

import z from "zod";
import { db } from "@/db";

export type ContactActionState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

const contactPayloadSchema = z.object({
  firstName: z.string().trim().min(1).max(100),
  lastName: z.string().trim().min(1).max(100),
  email: z.email(),
  phone: z.string().trim().min(6).max(32),
  message: z.string().trim().min(5).max(5000),
});

export async function submitContactMessage(
  _prevState: ContactActionState,
  formData: FormData
): Promise<ContactActionState> {
  const payload = {
    firstName: String(formData.get("firstName") ?? ""),
    lastName: String(formData.get("lastName") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const parsed = contactPayloadSchema.safeParse(payload);
  if (!parsed.success) {
    return { status: "error", message: "Please check the form and try again." };
  }

  const { firstName, lastName, email, phone, message } = parsed.data;
  const name = `${firstName} ${lastName}`.trim();

  try {
    await db.contactMessage.create({
      data: { name, email, phone, message },
    });
    return { status: "success" };
  } catch {
    return { status: "error", message: "Failed to submit. Please try again." };
  }
}
