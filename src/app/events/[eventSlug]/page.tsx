import DetailEvent from "@/components/organisms/detail-event";
import { MainHeader } from "@/components/organisms/main-header";

type Params = Promise<{ eventSlug: string }>;

interface Props {
  params: Params;
}

export default async function DetailPage({ params }: Props) {
  const { eventSlug } = await params;

  return (
    <>
      <MainHeader />
      <div className="container mx-auto py-12 sm:py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <DetailEvent slug={eventSlug} />
        </div>
      </div>
    </>
  );
}
