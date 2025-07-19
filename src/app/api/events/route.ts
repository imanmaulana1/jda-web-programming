import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import { Event } from "@/types/event.type";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limitParam = searchParams.get("limit");

  const limit = limitParam ? parseInt(limitParam) : undefined;

  try {
    const events = await prisma.event.findMany({
      ...(limit && { take: limit }),
    });

    return NextResponse.json(events, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch events: ${error}` },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as Omit<Event, "id">;

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

  const newEvent = await prisma.event.create({
    data: formattedEvent,
  });

  return NextResponse.json(newEvent, { status: 201 });
}
