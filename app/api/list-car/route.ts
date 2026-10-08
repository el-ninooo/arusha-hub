import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  name: z.string().min(2),
  propertyType: z.string().min(2),
  location: z.string().min(2),
  phone: z.string().min(6),
  email: z.string().email(),
  description: z.string().min(10),
  roomsCount: z.coerce.number().int().min(1),
  priceRange: z.string().min(2),
  images: z.string().optional().default(""),
});

export async function POST(request: Request) {
  const formData = await request.formData();
  const raw = Object.fromEntries(formData.entries());
  const parsed = schema.safeParse(raw);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid property submission" }, { status: 400 });
  }

  try {
    const { name, propertyType, location, phone, email, description, roomsCount, priceRange, images } = parsed.data;

    await prisma.propertySubmission.create({
      data: {
        name,
        propertyType,
        location,
        phone,
        email,
        description,
        roomsCount,
        priceRange,
        images: images ? images.split(",").map((item) => item.trim()).filter(Boolean) : [],
        status: "Pending Review",
      },
    });

    return NextResponse.json({ success: true, message: "Property submission received." });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Unable to save property submission" }, { status: 500 });
  }
}
