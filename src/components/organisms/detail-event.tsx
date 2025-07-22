"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { EventCard } from "@/components/molecules/event-card";
import { EventCardSkeleton } from "@/components/molecules/event-card-skeleton";
import { deleteEvent, getEvent } from "@/lib/api/event";
import { Event } from "@/types/event.type";

import { EditEvent } from "./edit-event";

interface DetailEventProps {
  slug: string;
}

function DetailEvent({ slug }: DetailEventProps) {
  const [data, setData] = useState<Event | null>(null);
  const [isEdit, setIsEdit] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEvent(slug);
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [slug]);

  const handleUpdate = () => {
    setIsEdit((prev) => !prev);
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

  if (!data) return <EventCardSkeleton />;

  return (
    <div className="space-y-10">
      <EventCard
        action={true}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        {...data}
      />
      {isEdit && <EditEvent defaultValues={data} onEdit={setIsEdit} />}
    </div>
  );
}

export default DetailEvent;
