export type Property = {
  id: string;
  name: string;
  slug: string;
  type: "Hotel" | "Lodge" | "Apartment" | "Guest House" | "Hostel" | "Villa" | "Resort" | "Camp";
  location: string;
  address: string;
  rating: number;
  pricePerNight: number;
  image: string;
  facilities: string[];
  description: string;
  contact: string;
  checkIn: string;
  checkOut: string;
  rooms: {
    name: string;
    guests: number;
    bedType: string;
    facilities: string[];
    price: number;
  }[];
};

export type Vehicle = {
  id: string;
  name: string;
  slug: string;
  type: "Economy" | "Sedan" | "SUV" | "4x4" | "Safari Vehicle" | "Van" | "Minibus";
  brand: string;
  model: string;
  year: number;
  seats: number;
  transmission: "Automatic" | "Manual";
  fuel: string;
  pricePerDay: number;
  pickupLocation: string;
  driverOption: "With Driver" | "Self Drive";
  description: string;
  image: string;
};

export const stays: Property[] = [
  {
    id: "prop-1",
    name: "Amani Courtyard Hotel",
    slug: "amani-courtyard-hotel",
    type: "Hotel",
    location: "Arusha, Tanzania",
    address: "Njiro Road, Arusha",
    rating: 8.9,
    pricePerNight: 220000,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    facilities: ["Wi-Fi", "Parking", "Breakfast", "Airport Shuttle"],
    description:
      "A modern city stay with a calm atmosphere, close to Arusha's business hubs and safari operators.",
    contact: "+255 712 001 001",
    checkIn: "14:00",
    checkOut: "11:00",
    rooms: [
      { name: "Deluxe Room", guests: 2, bedType: "King Bed", facilities: ["Wi-Fi", "Private Bathroom"], price: 220000 },
      { name: "Family Suite", guests: 4, bedType: "2 Queen Beds", facilities: ["Wi-Fi", "Breakfast"], price: 310000 },
    ],
  },
  {
    id: "prop-2",
    name: "Moshi Garden Lodge",
    slug: "moshi-garden-lodge",
    type: "Lodge",
    location: "Arusha, Tanzania",
    address: "Moshono, Arusha",
    rating: 8.7,
    pricePerNight: 180000,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    facilities: ["Wi-Fi", "Parking", "Garden", "Breakfast"],
    description:
      "This green lodge offers comfort and convenience for travelers wanting a peaceful, local atmosphere.",
    contact: "+255 712 001 002",
    checkIn: "13:00",
    checkOut: "10:00",
    rooms: [
      { name: "Garden Room", guests: 2, bedType: "Queen Bed", facilities: ["Wi-Fi", "Balcony"], price: 180000 },
      { name: "Executive Room", guests: 2, bedType: "King Bed", facilities: ["Wi-Fi", "Breakfast"], price: 240000 },
    ],
  },
  {
    id: "prop-3",
    name: "Safa Apartments",
    slug: "safa-apartments",
    type: "Apartment",
    location: "Arusha, Tanzania",
    address: "Njiro Estate, Arusha",
    rating: 8.5,
    pricePerNight: 260000,
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    facilities: ["Wi-Fi", "Kitchen", "Parking", "Air Conditioning"],
    description:
      "Elegant self-catering apartments designed for longer stays and flexible travel plans.",
    contact: "+255 712 001 003",
    checkIn: "14:00",
    checkOut: "11:00",
    rooms: [
      { name: "One Bedroom Apartment", guests: 2, bedType: "Queen Bed", facilities: ["Kitchen", "Wi-Fi"], price: 260000 },
      { name: "Two Bedroom Apartment", guests: 4, bedType: "2 Queen Beds", facilities: ["Kitchen", "Parking"], price: 390000 },
    ],
  },
  {
    id: "prop-4",
    name: "Kilimanjaro Guest House",
    slug: "kilimanjaro-guest-house",
    type: "Guest House",
    location: "Arusha, Tanzania",
    address: "Sokoine Road, Arusha",
    rating: 8.3,
    pricePerNight: 160000,
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    facilities: ["Wi-Fi", "Breakfast", "Parking", "Restaurant"],
    description:
      "A warm local stay close to attractions, city center, and reliable transport links.",
    contact: "+255 712 001 004",
    checkIn: "13:00",
    checkOut: "10:00",
    rooms: [
      { name: "Standard Guest Room", guests: 2, bedType: "Queen Bed", facilities: ["Wi-Fi"], price: 160000 },
      { name: "Family Room", guests: 3, bedType: "Queen + Single", facilities: ["Breakfast"], price: 235000 },
    ],
  },
];

export const cars: Vehicle[] = [
  {
    id: "veh-1",
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
    driverOption: "With Driver",
    description: "A comfortable SUV ideal for city stay and safari routes around Arusha.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "veh-2",
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
    driverOption: "With Driver",
    description: "Built for safari and long-distance comfort with a professional driver option.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "veh-3",
    name: "Honda Civic",
    slug: "honda-civic",
    type: "Sedan",
    brand: "Honda",
    model: "Civic",
    year: 2023,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 76000,
    pickupLocation: "Arusha Airport",
    driverOption: "Self Drive",
    description: "A dependable sedan for business travelers and smooth city movement.",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
  },
];
