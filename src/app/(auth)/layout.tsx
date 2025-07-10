import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ThemeToggle } from "@/components/molecules/theme-toggle";
import { Button } from "@/components/ui/button";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid min-h-screen grid-cols-1 overflow-hidden lg:grid-cols-[55%_1fr]">
      <section className="relative hidden h-full w-full overflow-hidden lg:block">
        <Image
          src="/bg-auth.gif"
          alt="Auth background"
          fill
          priority
          className="absolute inset-0 object-cover object-center"
        />
      </section>
      <section className="bg-background relative flex items-center justify-center">
        <div className="absolute top-0 flex w-full justify-between p-4 lg:p-8">
          <Button variant="link" className="group" asChild>
            <Link href="/">
              <ChevronLeft
                className="mr-1 opacity-60 transition-transform group-hover:-translate-x-0.5"
                size={16}
                aria-hidden="true"
              />
              Back to home
            </Link>
          </Button>
          <ThemeToggle />
        </div>
        <div className="my-16 w-full max-w-md p-4">{children}</div>
      </section>
    </main>
  );
}
