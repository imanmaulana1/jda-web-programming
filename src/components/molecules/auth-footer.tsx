import Link from "next/link";

interface AuthFooterProps {
  prompt: string;
  linkText: string;
  linkHref: string;
}

export const AuthFooter = ({ prompt, linkText, linkHref }: AuthFooterProps) => {
  return (
    <footer className="mt-2">
      <p className="text-muted-foreground text-end text-sm">
        {prompt}
        <Link
          href={linkHref}
          className="text-primary font-medium underline-offset-4 hover:underline"
        >
          {linkText}
        </Link>
      </p>
    </footer>
  );
};
