import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  name: z.string().min(2),
  companyName: z.string().optional().default(""),
  phone: z.string().min(6),
  email: z.string().email(),
  vehicle: z.string().min(2),
  model: z.string().min(2),
  year: z.coerce.number().int().min(1900),
  seats: z.coerce.number().int().min(1),
  transmission: z.string().min(2),
  fuel: z.string().min(2),
  pricePerDay: z.coerce.number().min(1),
  rentalType: z.string().min(2),
  pickupLocation: z.string().min(2),
  images: z.string().optional().default(""),
});

export async function POST(request: Request) {
  const formData = await request.formData();
  const raw = Object.fromEntries(formData.entries());
  const parsed = schema.safeParse(raw);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid vehicle submission" }, { status: 400 });
  }

  try {
    const { name, companyName, phone, email, vehicle, model, year, seats, transmission, fuel, pricePerDay, rentalType, pickupLocation, images } = parsed.data;

    await prisma.vehicleSubmission.create({
      data: {
        name,
        companyName,
        phone,
        email,
        vehicle,
        model,
        year,
        seats,
        transmission,
        fuel,
        pricePerDay,
        rentalType,
        pickupLocation,
        images: images ? images.split(",").map((item) => item.trim()).filter(Boolean) : [],
        status: "Pending Review",
      },
    });

    return NextResponse.json({ success: true, message: "Vehicle submission received." });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Unable to save vehicle submission" }, { status: 500 });
  }
}
