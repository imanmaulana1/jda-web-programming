import { CreateEvent } from "@/components/organisms/create-evemt";
import { MainHeader } from "@/components/organisms/main-header";

export default function Page() {
  return (
    <>
      <MainHeader />
      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-foreground text-2xl font-bold tracking-tight mb-8">
            Create Event
          </h2>
          <div className="max-w-lg">
            <CreateEvent />
          </div>
        </div>
      </section>
    </>
  );
}
