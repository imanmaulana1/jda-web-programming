import { ListEventCard } from "@/components/organisms/list-event-card";

export default function Home() {
  return (
    <section className="bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-foreground mb-6 text-2xl font-bold tracking-tight">
          Recent
        </h2>
        <ListEventCard />
      </div>
    </section>
  );
}
