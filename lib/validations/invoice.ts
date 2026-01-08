import z from "zod";

export const invoiceDetailsSchema = z.object({
  organisationName: z
    .string()
    .min(1, { error: "Organization name is required" })
    .optional()
    .or(z.literal("")),
  GSTIN: z
    .string()
    .regex(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, {
      message: "Invalid GST number format",
    })
    .optional()
    .or(z.literal("")),
  address: z
    .string()
    .min(10, { error: "Address must be at least 10 characters" })
    .max(500, { error: "Address must be at most 500 characters" }),
  state: z
    .string()
    .min(2, { error: "State is required" })
    .max(100, { error: "State name is too long" }),
});

export const validateInvoiceDetails = (data: unknown) => {
  return invoiceDetailsSchema.safeParse(data);
};
