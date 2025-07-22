import Link from "next/link";

import { ThemeToggle } from "@/components/molecules/theme-toggle";
import { buttonVariants } from "@/components/ui/button";

import { CartSheet } from "./cart-sheet";

export const MainHeader = () => {
  return (
    <header className="bg-background fixed top-0 z-30 w-full border-b py-4 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold uppercase">
            Aion
          </Link>
          <div className="flex items-center gap-4">
            <CartSheet />
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
