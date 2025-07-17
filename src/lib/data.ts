import { EventDto } from "@/types/event.type";

let events = [
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
  {
    slug: "nextjs-advanced-techniques",
    title: "Next.js Advanced Techniques",
    organizer: "FrontendMasters",
    date: "2025-10-20",
    time: "1:00 PM - 4:00 PM",
    description:
      "Deep dive into routing, SSR, ISR, and edge functions using Next.js.",
  },
  {
    slug: "ai-in-product-development",
    title: "AI in Product Development",
    organizer: "TechFuture",
    date: "2025-11-10",
    time: "10:00 AM - 12:00 PM",
    description:
      "Explore how AI is changing the way products are designed and built.",
  },
  {
    slug: "devops-for-developers",
    title: "DevOps for Developers",
    organizer: "CloudOps",
    date: "2025-11-25",
    time: "3:00 PM - 6:00 PM",
    description:
      "Learn CI/CD pipelines, monitoring, and infrastructure as code.",
  },
  {
    slug: "web-accessibility-essentials",
    title: "Web Accessibility Essentials",
    organizer: "InclusiveWeb",
    date: "2025-12-05",
    time: "9:30 AM - 12:30 PM",
    description: "Ensure your web applications are accessible to all users.",
  },
];

export const getEvents = () => events;

export const addEvent = (event: EventDto) => {
  events.push(event);
};

export const deleteEventBySlug = (slug: string) => {
  events = events.filter((e) => e.slug !== slug);
};

export const getEventBySlug = (slug: string) => {
  return events.find((e) => e.slug === slug);
};

export const updateEventBySlug = (
  updatedData: Partial<EventDto>,
  slug: string,
) => {
  const index = events.findIndex((e) => e.slug === slug);
  if (index === -1) return false;

  events[index] = {
    ...events[index],
    ...updatedData,
  };

  return events[index];
};
