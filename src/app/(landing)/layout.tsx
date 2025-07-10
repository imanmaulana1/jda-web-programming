import { MainHeader } from "@/components/organisms/main-header";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
}
