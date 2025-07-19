"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import DateField from "@/components/molecules/date-field";
import { TextField } from "@/components/molecules/text-field";
import { TextareaField } from "@/components/molecules/textarea-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { createEvent } from "@/lib/api/event";
import { slugify } from "@/lib/utils";
import { EventFormData, EventFormSchema } from "@/schemas/event.schema";

export function CreateEvent() {
  const form = useForm<EventFormData>({
    resolver: zodResolver(EventFormSchema),
    defaultValues: {
      title: "",
      organizer: "",
      start_time: "",
      end_time: "",
      date: undefined,
      description: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (data: EventFormData) => {
    const payload = {
      ...data,
      slug: slugify(data.title),
      date: format(data.date, "yyyy-MM-dd"),
    };

    try {
      await createEvent(payload);
      setTimeout(() => {
        router.push("/events");
      }, 500);
      form.reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <TextField
          control={form.control}
          name="title"
          label="Event Name"
          placeholder="Enter event name"
        />
        <TextField
          control={form.control}
          name="organizer"
          label="Organizer"
          placeholder="Enter organizer name"
        />
        <div className="flex items-center gap-4">
          <TextField
            control={form.control}
            name="start_time"
            type="time"
            label="Start Time"
            placeholder="Enter start time of event"
          />
          <TextField
            control={form.control}
            name="end_time"
            type="time"
            label="End Time"
            placeholder="Enter end time of event"
          />
        </div>
        <DateField form={form} />
        <TextareaField
          control={form.control}
          name="description"
          label="Description"
          placeholder="Enter description of event"
        />
        <div className="flex justify-end">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}
