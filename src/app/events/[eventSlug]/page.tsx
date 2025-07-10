import { notFound } from "next/navigation";

import { EventCard } from "@/components/molecules/event-card";
import { MainHeader } from "@/components/organisms/main-header";
import { EVENT_DATA } from "@/lib/constants";

type Params = Promise<{ eventSlug: string }>;

interface Props {
  params: Params;
}

export default async function DetailPage({ params }: Props) {
  const { eventSlug } = await params;

  const data = EVENT_DATA.find((event) => event.slug === eventSlug);

  if (!data) {
    notFound();
  }

  return (
    <>
      <MainHeader />
      <div className="container mx-auto py-12 sm:py-16">
        <EventCard {...data} />
      </div>
    </>
  );
}
