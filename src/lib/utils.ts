import { type ClassValue, clsx } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(str: string) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function formatTime(timeString?: string) {
  if (!timeString) return null;
  return format(new Date(timeString), "HH:mm");
}

export function formatDate(dateString?: string) {
  if (!dateString) return null;
  const date = new Date(dateString);
  return format(date, "dd MMMM yyyy");
}
