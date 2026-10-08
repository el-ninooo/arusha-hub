import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const rentalSchema = z.object({
  vehicleSlug: z.string().min(1),
  customerName: z.string().min(2),
  customerPhone: z.string().min(7),
  customerEmail: z.string().email(),
  pickupLocation: z.string().min(2),
  pickupDate: z.string().min(1),
  pickupTime: z.string().min(1),
  returnDate: z.string().min(1),
  returnTime: z.string().min(1),
  passengers: z.coerce.number().int().min(1),
  rentalType: z.enum(["With Driver", "Self Drive"]),
  specialRequest: z.string().optional().default(""),
});

export async function POST(request: Request) {
  const formData = await request.formData();
  const raw = Object.fromEntries(formData.entries());
  const parsed = rentalSchema.safeParse(raw);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid rental request" }, { status: 400 });
  }

  const { vehicleSlug, customerName, customerPhone, customerEmail, pickupLocation, pickupDate, pickupTime, returnDate, returnTime, passengers, rentalType, specialRequest } = parsed.data;

  try {
    const vehicle = await prisma.vehicle.findUnique({ where: { slug: vehicleSlug } });
    if (!vehicle) {
      return NextResponse.json({ error: "Vehicle not found" }, { status: 404 });
    }

    const start = new Date(`${pickupDate}T${pickupTime}`);
    const end = new Date(`${returnDate}T${returnTime}`);
    const days = Math.max(1, Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)));
    const total = vehicle.pricePerDay * days;
    const reference = `ARH-CAR-${String(Date.now()).slice(-5)}`;

    await prisma.booking.create({
      data: {
        reference,
        serviceType: "Car Rental",
        customerName,
        customerPhone,
        customerEmail,
        vehicleId: vehicle.id,
        pickupDate: start,
        returnDate: end,
        guests: passengers,
        total,
        status: "Pending",
        notes: `${rentalType} - ${pickupLocation} - ${specialRequest || ""}`,
      },
    });

    return NextResponse.redirect(new URL(`/booking-confirmation?reference=${reference}&service=car`, process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"));
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Unable to process rental request" }, { status: 500 });
  }
}
