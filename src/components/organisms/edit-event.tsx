"use client";

import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { TextField } from "@/components/molecules/text-field";
import { TextareaField } from "@/components/molecules/textarea-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { updateEvent } from "@/lib/api/event";
import { slugify } from "@/lib/utils";
import { EventFormData } from "@/schemas/event.schema";
import { Event } from "@/types/event.type";

import DateField from "../molecules/date-field";

interface EditEventProps {
  defaultValues: Omit<Event, "id">;
  onEdit: (value: boolean) => void;
}

export function EditEvent({ defaultValues, onEdit }: EditEventProps) {
  const form = useForm<EventFormData>({
    defaultValues: {
      title: defaultValues.title,
      organizer: defaultValues.organizer,
      start_time: defaultValues.start_time,
      end_time: defaultValues.end_time,
      date: new Date(defaultValues.date),
      description: defaultValues.description,
    },
  });

  const router = useRouter();

  const onSubmit = async (data: EventFormData) => {
    const slug = defaultValues.slug;
    const payload = {
      ...data,
      slug: slugify(data.title),
      date: format(data.date, "yyyy-MM-dd"),
    };

    try {
      const res = await updateEvent(payload, slug);
      router.replace("/events/" + res.slug);
      onEdit(false);
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
