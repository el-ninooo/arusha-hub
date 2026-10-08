import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const propertySchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2),
  type: z.string().min(2),
  location: z.string().min(2),
  address: z.string().min(2),
  description: z.string().min(10),
  rating: z.coerce.number().default(0),
  contact: z.string().min(5),
  published: z.coerce.boolean().default(false),
});

export async function GET() {
  try {
    const properties = await prisma.property.findMany({
      include: {
        images: true,
        rooms: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(properties);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Unable to fetch properties" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const raw = Object.fromEntries(formData.entries());
  const parsed = propertySchema.safeParse(raw);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid property data" },
      { status: 400 }
    );
  }

  try {
    const property = await prisma.property.create({
      data: parsed.data,
    });

    return NextResponse.json(property);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Unable to create property" },
      { status: 500 }
    );
  }
}
