export interface Event {
  slug: string;
  title: string;
  organizer: string;
  date: string;
  time: string;
  description: string;
}

export const EVENT_DATA = [
  {
    slug: "react-fundamentals-workshop",
    title: "React Fundamentals Workshop",
    organizer: "CodeCamp",
    date: "2025-08-15",
    time: "10:00 AM - 1:00 PM",
    description: "A hands-on workshop covering the basics of React and JSX.",
  },
  {
    slug: "product-design-sprint",
    title: "Product Design Sprint",
    organizer: "DesignFlow",
    date: "2025-09-05",
    time: "09:00 AM - 4:00 PM",
    description:
      "Collaborate in teams to build and test product ideas in one day.",
  },
  {
    slug: "building-scalable-apis",
    title: "Building Scalable APIs",
    organizer: "DevTalks",
    date: "2025-10-02",
    time: "2:00 PM - 5:00 PM",
    description:
      "Learn best practices for designing scalable REST and GraphQL APIs.",
  },
];
