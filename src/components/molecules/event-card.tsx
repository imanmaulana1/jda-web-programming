import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Event } from "@/lib/constants";

export const EventCard = ({
  title,
  organizer,
  date,
  time,
  description,
}: Event) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Organizer: {organizer}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <time>{time}</time>
        <time>{date}</time>
      </CardFooter>
    </Card>
  );
};
