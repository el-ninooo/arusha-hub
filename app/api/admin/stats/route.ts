import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const [propertyCount, vehicleCount, propertySubmissionCount, vehicleSubmissionCount, pendingBookings, confirmedBookings] =
      await Promise.all([
        prisma.property.count({ where: { published: true } }),
        prisma.vehicle.count({ where: { published: true } }),
        prisma.propertySubmission.count({ where: { status: "Pending Review" } }),
        prisma.vehicleSubmission.count({ where: { status: "Pending Review" } }),
        prisma.booking.count({ where: { status: "Pending" } }),
        prisma.booking.count({ where: { status: "Confirmed" } }),
      ]);

    return NextResponse.json({
      propertyCount,
      vehicleCount,
      propertySubmissionCount,
      vehicleSubmissionCount,
      pendingBookings,
      confirmedBookings,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Unable to fetch stats" },
      { status: 500 }
    );
  }
}
