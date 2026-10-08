import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const propertySubmissions = await prisma.propertySubmission.findMany({
      where: { status: "Pending Review" },
      orderBy: { createdAt: "desc" },
    });

    const vehicleSubmissions = await prisma.vehicleSubmission.findMany({
      where: { status: "Pending Review" },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      properties: propertySubmissions,
      vehicles: vehicleSubmissions,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Unable to fetch submissions" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const { id, type, action } = await request.json();

    if (!id || !type || !action) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const status = action === "approve" ? "Approved" : "Rejected";

    if (type === "property") {
      await prisma.propertySubmission.update({
        where: { id },
        data: { status },
      });
    } else if (type === "vehicle") {
      await prisma.vehicleSubmission.update({
        where: { id },
        data: { status },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Unable to update submission" },
      { status: 500 }
    );
  }
}
