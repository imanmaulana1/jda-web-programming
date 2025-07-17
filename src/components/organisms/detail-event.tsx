"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { EventCard } from "@/components/molecules/event-card";
import { EventCardSkeleton } from "@/components/molecules/event-card-skeleton";
import { deleteEvent, getEvent } from "@/lib/api/event";
import { Event } from "@/lib/constants";

import EditEvent from "./edit-event";

interface DetailEventProps {
  slug: string;
}

function DetailEvent({ slug }: DetailEventProps) {
  const [event, setEvent] = useState<Event | null>(null);
  const [isEdit, setIsEdit] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEvent(slug);
        setEvent(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [slug]);

  const handleUpdate = async (slug: string) => {
    setIsEdit(true);
    console.log(slug);
  };

  const handleDelete = async (slug: string) => {
    try {
      await deleteEvent(slug);
      setTimeout(() => {
        router.push("/events");
      }, 500);
    } catch (error) {
      console.error(error);
    }
  };

  if (!event) return <EventCardSkeleton />;

  return (
    <div className="space-y-10">
      <EventCard
        action={true}
        {...event}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
      {isEdit && <EditEvent defaultValues={event} onEdit={setIsEdit} />}
    </div>
  );
}

export default DetailEvent;
