import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const bookingSchema = z.object({
  propertySlug: z.string().min(1),
  roomName: z.string().min(1),
  checkIn: z.string().min(1),
  checkOut: z.string().min(1),
  guests: z.coerce.number().int().min(1),
  customerName: z.string().min(2),
  customerPhone: z.string().min(7),
  customerEmail: z.string().email(),
  specialRequest: z.string().optional().default(""),
});

export async function POST(request: Request) {
  const formData = await request.formData();
  const raw = Object.fromEntries(formData.entries());

  const parsed = bookingSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid booking details" }, { status: 400 });
  }

  const { propertySlug, roomName, checkIn, checkOut, guests, customerName, customerPhone, customerEmail, specialRequest } = parsed.data;

  try {
    const property = await prisma.property.findUnique({
      where: { slug: propertySlug },
      include: { rooms: true },
    });

    if (!property) {
      return NextResponse.json({ error: "Property not found" }, { status: 404 });
    }

    const room = property.rooms.find((item) => item.name === roomName) ?? property.rooms[0];
    if (!room) {
      return NextResponse.json({ error: "Room not found" }, { status: 404 });
    }

    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const nights = Math.max(1, Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)));
    const total = room.price * nights;
    const reference = `ARH-STAY-${String(Date.now()).slice(-5)}`;

    await prisma.booking.create({
      data: {
        reference,
        serviceType: "Accommodation",
        customerName,
        customerPhone,
        customerEmail,
        propertyId: property.id,
        roomId: room.id,
        checkIn: start,
        checkOut: end,
        guests,
        total,
        status: "Pending",
        notes: specialRequest || "",
      },
    });

    return NextResponse.redirect(new URL(`/booking-confirmation?reference=${reference}&service=stay`, process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"));
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Unable to process booking request" }, { status: 500 });
  }
}
