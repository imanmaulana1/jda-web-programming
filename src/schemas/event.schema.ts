import { z } from "zod/v4";

export const EventFormSchema = z
  .strictObject({
    title: z
      .string()
      .min(5, { error: "Title must be at least 5 characters long" }),
    organizer: z
      .string()
      .min(5, { error: "Organizer must be at least 5 characters long" }),
    date: z.date({ error: "Date is required" }),
    start_time: z.string().regex(/^([0-1]\d|2[0-3]):[0-5]\d$/, {
      error: "Invalid start time format (HH:mm expected)",
    }),
    end_time: z.string().regex(/^([0-1]\d|2[0-3]):[0-5]\d$/, {
      error: "Invalid end time format (HH:mm expected)",
    }),
    description: z.string().min(10, {
      error: "Description must be at least 10 characters long",
    }),
  })
  .refine(
    (data) => {
      const start = Date.parse(`1970-01-01T${data.start_time}:00Z`);
      const end = Date.parse(`1970-01-01T${data.end_time}:00Z`);
      return end > start;
    },
    {
      message: "End time must be after start time",
      path: ["end_time"],
    },
  );

export type EventFormData = z.infer<typeof EventFormSchema>;
