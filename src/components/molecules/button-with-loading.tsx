import { Loader2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonWithLoadingProps
  extends React.ComponentPropsWithoutRef<typeof Button> {
  loading: boolean;
  children: React.ReactNode;
}

export const ButtonWithLoading = ({
  loading,
  children,
  className,
  ...props
}: ButtonWithLoadingProps) => {
  return (
    <Button disabled={loading} className={cn(className)} {...props}>
      <Loader2Icon
        className={cn("mr-2 animate-spin", loading ? "flex" : "hidden")}
      />
      {children}
    </Button>
  );
};
