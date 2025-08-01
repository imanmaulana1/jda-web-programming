import { Edit2, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn, formatDate } from "@/lib/utils";
import { Event } from "@/types/event.type";

export const EventCard = ({
  slug,
  title,
  organizer,
  date,
  start_time,
  end_time,
  description,
  action = false,
  onUpdate,
  onDelete,
}: Event & {
  action?: boolean;
  onUpdate?: (slug: string) => void;
  onDelete?: (slug: string) => void;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle
          className={cn(action && "flex items-baseline justify-between")}
        >
          <h2>{title}</h2>
          {action && (
            <div className="flex items-center gap-2">
              <Button
                size={"icon"}
                variant={"ghost"}
                onClick={() => onUpdate?.(slug)}
              >
                <Edit2 />
              </Button>
              <Button
                size={"icon"}
                variant={"ghost"}
                onClick={() => onDelete?.(slug)}
              >
                <Trash2 />
              </Button>
            </div>
          )}
        </CardTitle>
        <CardDescription>Organizer: {organizer}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <time>{`${start_time} - ${end_time}`}</time>
        <time>{formatDate(date ? date.toString() : undefined)}</time>
      </CardFooter>
    </Card>
  );
};
