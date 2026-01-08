import z from "zod";

const userSchema = z
  .object({
    email: z.email({ error: "Invalid email address" }),
    firstName: z
      .string()
      .min(2, { error: "First name must be at least 2 characters" })
      .max(100, { error: "First name must be at most 100 characters" }),
    lastName: z
      .string()
      .min(2, { error: "Last name must be at least 2 characters" })
      .max(100, { error: "Last name must be at most 100 characters" }),
    password: z
      .string()
      .min(8, { error: "Password must be at least 8 characters" })
      .max(100, { error: "Password must be at most 100 characters" })
      .regex(/[A-Z]/, "Must contain at least one uppercase letter")
      .regex(/[a-z]/, "Must contain at least one lowercase letter")
      .regex(/[0-9]/, "Must contain at least one number")
      .regex(/[^A-Za-z0-9]/, "Must contain at least one special character"),
    phone: z
      .string()
      .regex(/^\+[1-9]\d{1,14}$/, {
        message: "Invalid phone number format. Must be in international format (e.g., +1234567890)",
      })
      .optional()
      .or(z.literal("")),
    confirmPassword: z
      .string()
      .min(8, { error: "Confirm password must be at least 8 characters" })
      .max(100, { error: "Confirm password must be at most 100 characters" }),
  })
  .check((ctx) => {
    if (ctx.value.password !== ctx.value.confirmPassword) {
      ctx.issues.push({
        code: "custom",
        message: "Passwords do not match",
        path: ["confirmPassword"],
        input: ctx.value.confirmPassword,
      });
    }
  });

export const validateUser = (data: unknown) => {
  return userSchema.safeParse(data);
};
