import Link from "next/link";

import AllEvent from "@/components/organisms/all-event";
import { MainHeader } from "@/components/organisms/main-header";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <>
      <MainHeader />
      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-foreground text-2xl font-bold tracking-tight">
              All Events
            </h2>
            <Button asChild>
              <Link href="/events/create">Create Event</Link>
            </Button>
          </div>
          <AllEvent />
        </div>
      </section>
    </>
  );
}
