import { EventCardSkeleton } from "@/components/molecules/event-card-skeleton";

function ListEventCardSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
      {Array.from({ length: 3 }).map((_, index) => (
        <EventCardSkeleton key={index} />
      ))}
    </div>
  );
}

export default ListEventCardSkeleton;
