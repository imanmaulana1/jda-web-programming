"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { EventCard } from "@/components/molecules/event-card";
import { EventCardSkeleton } from "@/components/molecules/event-card-skeleton";
import { deleteEvent, getEvent } from "@/lib/api/event";
import { Event } from "@/types/event.type";

interface DetailEventProps {
  slug: string;
}

function DetailEvent({ slug }: DetailEventProps) {
  const [data, setData] = useState<Event | null>(null);
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
      <EventCard action={true} onDelete={handleDelete} {...data} />
    </div>
  );
}

export default DetailEvent;
