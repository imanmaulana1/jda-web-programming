"use client";

import { useEffect, useState } from "react";

import { ListEventCard } from "@/components/organisms/list-event-card";
import ListEventCardSkeleton from "@/components/organisms/list-event-card-skeleton";
import { getEvents } from "@/lib/api/event";
import { Event } from "@/types/event.type";

import { NoEvents } from "../molecules/no-event";

function AllEvent() {
  const [events, setEvents] = useState<Event[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getEvents();
        setEvents(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setEvents]);

  if (isLoading) return <ListEventCardSkeleton />;

  if (!events) return <NoEvents />;

  return <ListEventCard data={events} />;
}

export default AllEvent;
