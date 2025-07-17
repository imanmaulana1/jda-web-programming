"use client";

import { useEffect, useState } from "react";

import { ListEventCard } from "@/components/organisms/list-event-card";
import ListEventCardSkeleton from "@/components/organisms/list-event-card-skeleton";
import { getEvents } from "@/lib/api/event";
import { Event } from "@/lib/constants";

export function RecentEvent() {
  const [recentEvent, setRecentEvent] = useState<Event[] | null>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEvents(3);
        setRecentEvent(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!recentEvent || recentEvent.length === 0)
    return <ListEventCardSkeleton />;

  return <ListEventCard data={recentEvent} />;
}
