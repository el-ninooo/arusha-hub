import { PrismaClient } from "@prisma/client";
import { hashPassword } from "@/lib/auth";

const prisma = new PrismaClient();

async function main() {
  // Create sample properties
  const sampleProperties = [
    {
      name: "Amani Courtyard Hotel",
      slug: "amani-courtyard-hotel",
      type: "Hotel",
      location: "Arusha, Tanzania",
      address: "Njiro Road, Arusha",
      rating: 8.9,
      contact: "+255 712 001 001",
      description:
        "A modern city stay with a calm atmosphere, close to Arusha's business hubs and safari operators.",
      published: true,
      rooms: {
        create: [
          {
            name: "Deluxe Room",
            description: "Spacious room with modern amenities",
            capacity: 2,
            price: 220000,
            available: true,
          },
          {
            name: "Family Suite",
            description: "Large suite perfect for families",
            capacity: 4,
            price: 310000,
            available: true,
          },
        ],
      },
      images: {
        create: [
          {
            imageUrl:
              "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
          },
          {
            imageUrl:
              "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
          },
        ],
      },
    },
    {
      name: "Moshi Garden Lodge",
      slug: "moshi-garden-lodge",
      type: "Lodge",
      location: "Arusha, Tanzania",
      address: "Moshono, Arusha",
      rating: 8.7,
      contact: "+255 712 001 002",
      description:
        "This green lodge offers comfort and convenience for travelers wanting a peaceful, local atmosphere.",
      published: true,
      rooms: {
        create: [
          {
            name: "Garden Room",
            description: "Cozy room overlooking the garden",
            capacity: 2,
            price: 180000,
            available: true,
          },
          {
            name: "Executive Room",
            description: "Premium room with extra amenities",
            capacity: 2,
            price: 240000,
            available: true,
          },
        ],
      },
      images: {
        create: [
          {
            imageUrl:
              "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
          },
        ],
      },
    },
  ];

  for (const property of sampleProperties) {
    await prisma.property.upsert({
      where: { slug: property.slug },
      update: {},
      create: property,
    });
  }

  // Create sample vehicles
  const sampleVehicles = [
    {
      name: "Toyota RAV4",
      slug: "toyota-rav4",
      type: "SUV",
      brand: "Toyota",
      model: "RAV4",
      year: 2022,
      seats: 5,
      transmission: "Automatic",
      fuel: "Petrol",
      pricePerDay: 85000,
      pickupLocation: "Arusha City Center",
      withDriver: true,
      selfDrive: true,
      description: "A comfortable SUV ideal for city stay and safari routes around Arusha.",
      published: true,
      images: {
        create: [
          {
            imageUrl:
              "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
          },
        ],
      },
    },
    {
      name: "Safari Land Cruiser",
      slug: "safari-land-cruiser",
      type: "Safari Vehicle",
      brand: "Toyota",
      model: "Land Cruiser",
      year: 2021,
      seats: 6,
      transmission: "Automatic",
      fuel: "Diesel",
      pricePerDay: 140000,
      pickupLocation: "Kilimanjaro International Airport",
      withDriver: true,
      selfDrive: false,
      description: "Built for safari and long-distance comfort with a professional driver option.",
      published: true,
      images: {
        create: [
          {
            imageUrl:
              "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
          },
        ],
      },
    },
  ];

  for (const vehicle of sampleVehicles) {
    await prisma.vehicle.upsert({
      where: { slug: vehicle.slug },
      update: {},
      create: vehicle,
    });
  }

  // Create admin user
  const adminEmail = process.env.ADMIN_EMAIL || "admin@arusha-hub.com";
  const adminPassword = process.env.ADMIN_PASSWORD || "change-me";

  await prisma.adminUser.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      passwordHash: hashPassword(adminPassword),
      role: "admin",
    },
  });

  // Create site settings
  await prisma.siteSettings.upsert({
    where: { id: "default" },
    update: {},
    create: {
      id: "default",
      whatsapp: process.env.WHATSAPP_NUMBER || "+255712345678",
      phone: "+255 717 000 000",
      email: "hello@arusha-hub.com",
      address: "Arusha, Tanzania",
    },
  });

  console.log("✓ Database seeded successfully");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
