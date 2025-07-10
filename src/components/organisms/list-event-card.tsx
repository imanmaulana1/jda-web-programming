import Link from "next/link";

import { EVENT_DATA } from "@/lib/constants";

import { EventCard } from "../molecules/event-card";

export const ListEventCard = () => {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
      {EVENT_DATA.map((event) => (
        <Link key={event.slug} href={`/events/${event.slug}`}>
          <EventCard {...event} />
        </Link>
      ))}
    </div>
  );
};
