import Link from "next/link";

import GithubIcon from "@/assets/github.svg";
import GoogleIcon from "@/assets/google.svg";
import { Button } from "@/components/ui/button";

export const SocialLoginButtons = () => {
  return (
    <div className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-center">
      <Button variant="outline" asChild>
        <Link href={`#`} className="flex-1">
          <GoogleIcon className="mr-1" />
          Continue with Google
        </Link>
      </Button>
      <Button variant="outline" asChild>
        <Link href={`#`} className="flex-1">
          <GithubIcon className="text-primary mr-1" />
          Continue with Github
        </Link>
      </Button>
    </div>
  );
};
