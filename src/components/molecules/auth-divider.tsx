import { Separator } from "@/components/ui/separator";

export const AuthDivider = () => {
  return (
    <div className="flex items-center justify-center overflow-hidden">
      <Separator />
      <p className="bg-background text-muted-foreground shrink-0 px-2 text-end text-sm">
        Or continue with
      </p>
      <Separator />
    </div>
  );
};
