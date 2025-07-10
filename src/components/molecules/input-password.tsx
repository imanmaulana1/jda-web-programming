"use client";

import { Eye, EyeOff } from "lucide-react";
import { ComponentProps, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type InputPasswordProps = Omit<ComponentProps<"input">, "type">;

export const InputPassword = ({ className, ...props }: InputPasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleType = showPassword ? "text" : "password";
  const Icon = showPassword ? EyeOff : Eye;

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="relative">
      <Input type={toggleType} className={cn("pe-10", className)} {...props} />
      <Button
        variant="ghost"
        className="text-muted-foreground hover:text-primary absolute top-1/2 right-0 z-10 -translate-y-1/2 hover:bg-transparent!"
        onClick={togglePasswordVisibility}
        type="button"
      >
        {<Icon />}
        <span className="sr-only">
          {showPassword ? "Hide password" : "Show password"}
        </span>
      </Button>
    </div>
  );
};
