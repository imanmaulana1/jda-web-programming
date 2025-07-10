"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Toggle } from "@/components/ui/toggle";

export const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <Toggle
        pressed={false}
        disabled
        className="size-9"
        aria-label="Loading theme toggle"
      >
        <div className="animate-spin">
          <SunIcon size={16} className="opacity-50" />
        </div>
      </Toggle>
    );

  const isDarkmode = resolvedTheme === "dark";

  return (
    <Toggle
      variant="outline"
      pressed={theme === "dark"}
      onPressedChange={() => setTheme(isDarkmode ? "light" : "dark")}
      className="group dark:hover:bg-muted size-9 dark:bg-transparent"
      aria-label={`Switch to ${isDarkmode ? "dark" : "light"} mode`}
    >
      <MoonIcon
        size={16}
        className="shrink-0 scale-0 opacity-0 transition-all dark:scale-100 dark:opacity-100"
        aria-hidden="true"
      />
      <SunIcon
        size={16}
        className="absolute shrink-0 scale-100 opacity-100 transition-all dark:scale-0 dark:opacity-0"
        aria-hidden="true"
      />
    </Toggle>
  );
};
