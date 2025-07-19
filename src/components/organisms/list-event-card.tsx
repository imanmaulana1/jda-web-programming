import Link from "next/link";

import { EventCard } from "@/components/molecules/event-card";
import { Event } from "@/types/event.type";

interface ListEventCardProps {
  data: Event[];
}

export const ListEventCard = ({ data }: ListEventCardProps) => {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
      {data.map((event) => (
        <Link key={event.id} href={`/events/${event.slug}`}>
          <EventCard {...event} />
        </Link>
      ))}
    </div>
  );
};
