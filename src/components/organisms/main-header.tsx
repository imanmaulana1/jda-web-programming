import Link from "next/link";

import { ThemeToggle } from "@/components/molecules/theme-toggle";
import { buttonVariants } from "@/components/ui/button";

export const MainHeader = () => {
  return (
    <header className="bg-background w-full border-b py-4 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold uppercase">
            Aion
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href={"/sign-in"}
              className={buttonVariants({ variant: "default" })}
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
