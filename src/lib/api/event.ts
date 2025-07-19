import { Event } from "@/types/event.type";

export const getEvents = async (limit = 0): Promise<Event[]> => {
  try {
    const res = await fetch(`http://localhost:3000/api/events?limit=${limit}`);

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getEvent = async (slug: string): Promise<Event> => {
  try {
    const res = await fetch(`http://localhost:3000/api/events/${slug}`);

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createEvent = async (event: Omit<Event, "id">) => {
  try {
    const res = await fetch(`http://localhost:3000/api/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    });

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error(error);
  }
};

export const updateEvent = async (event: Event, slug: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/events/${slug}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    });

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error(error);
  }
};

export const deleteEvent = async (slug: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/events/${slug}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    return true;
  } catch (error) {
    console.error(error);
  }
};
