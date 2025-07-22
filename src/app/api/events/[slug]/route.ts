import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import { Event } from "@/types/event.type";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const slug = (await params).slug;

  try {
    const event = await prisma.event.findUnique({
      where: {
        slug,
      },
    });

    if (!event)
      return NextResponse.json({ error: `Event not found` }, { status: 404 });

    return NextResponse.json(event, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch events: ${error}` },
      { status: 500 },
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const body = (await request.json()) as Omit<Event, "id">;
  const slug = (await params).slug;

  const result = await prisma.event.findUnique({
    where: {
      slug,
    },
  });

  if (!result) {
    return NextResponse.json({ error: `Event not found` }, { status: 404 });
  }

  const formattedEvent = {
    ...body,
    date: new Date(body.date),
  };

  const existingEvent = await prisma.event.findUnique({
    where: {
      slug: body.slug,
    },
  });

  if (existingEvent) {
    return NextResponse.json(
      { error: `Event with slug ${body.slug} already exists` },
      { status: 400 },
    );
  }

  const updated = await prisma.event.update({
    where: {
      slug,
    },
    data: formattedEvent,
  });
  return NextResponse.json(updated, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const slug = (await params).slug;

  const isExist = await prisma.event.findUnique({
    where: {
      slug,
    },
  });

  if (!isExist) {
    return new Response("Event not found", { status: 404 });
  }

  await prisma.event.delete({
    where: {
      slug,
    },
  });

  return new NextResponse(null, { status: 204 });
}
