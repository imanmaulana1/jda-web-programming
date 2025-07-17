"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { TextField } from "@/components/molecules/text-field";
import { TextareaField } from "@/components/molecules/textarea-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { updateEvent } from "@/lib/api/event";
import { EventFormData } from "@/schemas/event.schema";
import { useEventStore } from "@/stores/event.store";
import { EventDto } from "@/types/event.type";

interface EditEventProps {
  defaultValues: EventDto;
  onEdit: (value: boolean) => void;
}

function EditEvent({ defaultValues, onEdit }: EditEventProps) {
  const form = useForm<EventFormData>({
    defaultValues,
  });

  const updateEventStore = useEventStore((state) => state.updateEvent);

  const router = useRouter();

  const onSubmit = async (data: EventFormData) => {
    const slug = defaultValues.slug;
    const payload = {
      ...data,
      slug,
    };

    try {
      const res = await updateEvent(payload, slug);
      updateEventStore(res, defaultValues.slug);
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

export default EditEvent;
