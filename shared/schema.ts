import { z } from "zod";

export const insertContactMessageSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  serviceInterest: z.string().min(1, "Service interest is required"),
  message: z.string().min(1, "Message is required"),
});

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
