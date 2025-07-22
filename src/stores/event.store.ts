import { create } from "zustand";

interface Event {
  id: string;
  slug: string;
  title: string;
  organizer: string;
  date: string;
  start_time: string;
  end_time: string;
  description: string;
}

interface EventState {
  events: Event[] | [];
  setEvents: (events: Event[]) => void;
  updateEvent: (event: Event, previousSlug: string) => void;
}

export const useEventStore = create<EventState>()((set) => ({
  events: [],
  setEvents: (events: Event[]) => set({ events }),
  updateEvent: (event: Event, previousSlug: string) =>
    set((state) => ({
      events: state.events.map((e) => (e.slug === previousSlug ? event : e)),
    })),
}));
