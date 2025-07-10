import { NotFoundButtons } from "@/components/molecules/notfound-buttons";
import { ThemeToggle } from "@/components/molecules/theme-toggle";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center">
      <div className="absolute top-4 right-4 lg:top-8 lg:right-8">
        <ThemeToggle />
      </div>
      <div className="space-y-6 text-center">
        <h1 className="text-6xl leading-tight font-bold sm:text-7xl md:text-8xl lg:text-9xl">
          4😵4
        </h1>
        <h2 className="text-xl leading-tight font-bold sm:text-2xl md:text-3xl lg:text-4xl">
          {"Oops! Looks like you're lost"}
        </h2>
        <div className="mx-auto w-full max-w-xl px-4">
          <p className="text-sm sm:text-base md:text-lg">
            Sorry! We could not find the page you are looking for. Please check
            URL in address bar and try again.
          </p>
        </div>
        <NotFoundButtons />
      </div>
    </main>
  );
}
