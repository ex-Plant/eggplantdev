import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export const quickContactSchema = z.object({
  email: z.email("Invalid email address"),
});
