"use client";

import { useEffect } from "react";

import { ListEventCard } from "@/components/organisms/list-event-card";
import ListEventCardSkeleton from "@/components/organisms/list-event-card-skeleton";
import { getEvents } from "@/lib/api/event";
import { useEventStore } from "@/stores/event.store";

function AllEvent() {
  const events = useEventStore((state) => state.events);
  const setEvents = useEventStore((state) => state.setEvents);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEvents();
        setEvents(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [setEvents]);

  if (!events || events.length === 0) return <ListEventCardSkeleton />;

  console.log(events);

  return <ListEventCard data={events} />;
}

export default AllEvent;
