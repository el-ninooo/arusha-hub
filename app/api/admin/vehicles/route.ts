import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const vehicleSchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2),
  type: z.string().min(2),
  brand: z.string().min(2),
  model: z.string().min(2),
  year: z.coerce.number().int(),
  seats: z.coerce.number().int().min(1),
  transmission: z.string().min(2),
  fuel: z.string().min(2),
  pricePerDay: z.coerce.number().min(0),
  pickupLocation: z.string().min(2),
  withDriver: z.coerce.boolean().default(false),
  selfDrive: z.coerce.boolean().default(true),
  description: z.string().min(10),
  published: z.coerce.boolean().default(false),
});

export async function GET() {
  try {
    const vehicles = await prisma.vehicle.findMany({
      include: {
        images: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(vehicles);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Unable to fetch vehicles" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const raw = Object.fromEntries(formData.entries());
  const parsed = vehicleSchema.safeParse(raw);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid vehicle data" },
      { status: 400 }
    );
  }

  try {
    const vehicle = await prisma.vehicle.create({
      data: parsed.data,
    });

    return NextResponse.json(vehicle);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Unable to create vehicle" },
      { status: 500 }
    );
  }
}
