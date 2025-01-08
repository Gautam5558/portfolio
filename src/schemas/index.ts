import * as z from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name length must be more than 2 characters" }),
  email: z.string().email({ message: "Email is required" }),
  subject: z
    .string()
    .min(5, { message: "Subject length must be more than 5 characters" })
    .max(100, { message: "Subject length must be less than 100 characters" }),
  content: z
    .string()
    .min(2, { message: "Message length must be more than 2 characters" }),
});

export const contactFormResponse = z.object({
  message: z.string(),
  ok: z.boolean(),
});
