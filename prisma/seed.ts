import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const sampleProperties = [
    {
      name: "Sample Garden Lodge",
      slug: "sample-garden-lodge",
      type: "Lodge",
      location: "Arusha, Tanzania",
      address: "Sample Street, Arusha",
      rating: 8.8,
      contact: "+255 712 000 001",
      description:
        "Sample accommodation listing for development only. Replace with a verified property before launch.",
      published: true,
      rooms: {
        create: [
          { name: "Standard Room", description: "Sample room", capacity: 2, price: 115000, available: true },
          { name: "Family Suite", description: "Sample suite", capacity: 4, price: 180000, available: true }
        ]
      },
      images: {
        create: [
          { imageUrl: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80" },
          { imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80" }
        ]
      }
    },
    {
      name: "Sample River View Apartments",
      slug: "sample-river-view-apartments",
      type: "Apartment",
      location: "Arusha, Tanzania",
      address: "Sample Avenue, Arusha",
      rating: 8.4,
      contact: "+255 712 000 002",
      description:
        "Sample apartment listing. This is not a real live property and should be replaced before final launch.",
      published: true,
      rooms: {
        create: [
          { name: "One Bedroom Apartment", description: "Sample apartment room", capacity: 2, price: 140000, available: true },
          { name: "Two Bedroom Apartment", description: "Sample larger apartment", capacity: 4, price: 210000, available: true }
        ]
      },
      images: {
        create: [
          { imageUrl: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80" },
          { imageUrl: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80" }
        ]
      }
    }
  ];

  for (const property of sampleProperties) {
    await prisma.property.upsert({
      where: { slug: property.slug },
      update: {},
      create: property
    });
  }

  const sampleVehicles = [
    {
      name: "Sample Toyota RAV4",
      slug: "sample-toyota-rav4",
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
      description: "Sample vehicle listing for development only. Replace with verified rental inventory before launch.",
      published: true,
      images: {
        create: [
          { imageUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80" },
          { imageUrl: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80" }
        ]
      }
    },
    {
      name: "Sample Safari Land Cruiser",
      slug: "sample-safari-land-cruiser",
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
      description: "Sample safari vehicle for testing the rental request flow.",
      published: true,
      images: {
        create: [
          { imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80" },
          { imageUrl: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80" }
        ]
      }
    }
  ];

  for (const vehicle of sampleVehicles) {
    await prisma.vehicle.upsert({
      where: { slug: vehicle.slug },
      update: {},
      create: vehicle
    });
  }

  await prisma.siteSettings.upsert({
    where: { id: "default-settings" },
    update: {},
    create: {
      id: "default-settings",
      whatsapp: "+255712345678",
      phone: "+255 717 000 000",
      email: "hello@arusha-hub.com",
      address: "Arusha, Tanzania"
    }
  });
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
