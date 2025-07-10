"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button, buttonVariants } from "@/components/ui/button";

export const NotFoundButtons = () => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 sm:flex-row sm:gap-4">
      <Link href="/" className={buttonVariants({ variant: "secondary" })}>
        Return home
      </Link>
      <Button variant="outline" onClick={handleClick}>
        Go back
      </Button>
    </div>
  );
};
