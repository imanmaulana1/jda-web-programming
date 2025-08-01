"use client";

import { useEffect, useState } from "react";

import { ListEventCard } from "@/components/organisms/list-event-card";
import ListEventCardSkeleton from "@/components/organisms/list-event-card-skeleton";
import { getEvents } from "@/lib/api/event";
import { Event } from "@/types/event.type";

import { NoEvents } from "../molecules/no-event";

export function RecentEvent() {
  const [recentEvent, setRecentEvent] = useState<Event[] | null>([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsloading(true);
      try {
        const data = await getEvents(3);
        setRecentEvent(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsloading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <ListEventCardSkeleton />;

  if (!recentEvent) return <NoEvents />;

  return <ListEventCard data={recentEvent} />;
}
