import { NextRequest } from "next/server";

import {
  deleteEventBySlug,
  getEventBySlug,
  updateEventBySlug,
} from "@/lib/data";
import { slugify } from "@/lib/utils";
import { EventDto } from "@/types/event.type";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const slug = (await params).slug;

  const result = getEventBySlug(slug);

  if (!result) {
    return new Response(JSON.stringify({ message: "Event not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const body = (await request.json()) as EventDto;
  const slug = (await params).slug;

  const result = getEventBySlug(slug);

  if (!result) {
    return new Response(JSON.stringify({ message: "Event not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  const updateSlug = slugify(body.title);

  const payload = {
    ...body,
    slug: updateSlug,
  };

  const updated = updateEventBySlug(payload, slug);

  return new Response(JSON.stringify(updated), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const slug = (await params).slug;

  deleteEventBySlug(slug);

  return new Response(null, { status: 204 });
}
