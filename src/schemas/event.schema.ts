import { z } from "zod/v4";

export const EventFormSchema = z.strictObject({
  title: z
    .string()
    .min(5, { error: "Title must be at least 5 characters long" }),
  organizer: z
    .string()
    .min(5, { error: "Organizer must be at least 5 characters long" }),
  date: z.string(),
  time: z.string(),
  description: z.string().min(10, {
    error: "Description must be at least 10 characters long",
  }),
});

export type EventFormData = z.infer<typeof EventFormSchema>;
