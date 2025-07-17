"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { TextField } from "@/components/molecules/text-field";
import { TextareaField } from "@/components/molecules/textarea-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { createEvent } from "@/lib/api/event";
import { slugify } from "@/lib/utils";
import { EventFormData } from "@/schemas/event.schema";

export function CreateEvent() {
  const form = useForm<EventFormData>({
    defaultValues: {
      title: "",
      organizer: "",
      time: "",
      date: "",
      description: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (data: EventFormData) => {
    const slug = slugify(data.title);

    const payload = {
      ...data,
      slug,
    };

    try {
      await createEvent(payload);
      form.reset();
      setTimeout(() => {
        router.push("/events");
      }, 500);
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

        <TextField
          control={form.control}
          name="time"
          label="Time"
          placeholder="Enter time of event"
        />
        <TextField
          control={form.control}
          name="date"
          label="Date"
          placeholder="Enter date of event"
        />
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
