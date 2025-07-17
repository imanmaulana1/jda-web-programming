import { NextRequest } from "next/server";

import { addEvent, getEvents } from "@/lib/data";
import { EventDto } from "@/types/event.type";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limitParam = searchParams.get("limit");

  const limit = limitParam ? parseInt(limitParam) : 0;

  const events = getEvents();

  const result = limit > 0 ? events.slice(0, limit) : events;

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as EventDto;

  addEvent(body);

  return new Response(JSON.stringify(body), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
