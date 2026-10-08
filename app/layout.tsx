import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { VehicleCard } from "@/components/VehicleCard";
import { stays, cars } from "@/lib/data";

export const metadata: Metadata = {
  title: "ARUSHA HUB | Your Gateway to Arusha",
  description:
    "Find trusted stays and rental cars in Arusha, Tanzania. Book your accommodation or request a car rental with confidence.",
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="relative overflow-hidden bg-brand-900 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(143,199,164,0.2),transparent_40%)]" />
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-24">
            <div className="relative z-10">
              <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm font-medium text-brand-100">
                Discover Arusha, Tanzania
              </div>
              <h1 className="max-w-xl text-4xl font-black leading-tight tracking-tight md:text-5xl">
                Discover Arusha. Your Journey Starts Here.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-slate-200">
                Find your perfect stay and reliable car rental services in Arusha.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="text-sm text-brand-100">Accommodation</div>
                  <div className="mt-2 text-2xl font-bold">Stays</div>
                  <div className="mt-2 text-sm text-slate-300">
                    Hotels, lodges, apartments, guest houses, hostels, villas, resorts and camps.
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="text-sm text-brand-100">Travel essentials</div>
                  <div className="mt-2 text-2xl font-bold">Car Rental</div>
                  <div className="mt-2 text-sm text-slate-300">
                    Economy cars, sedans, SUVs, safari vehicles, vans and minibuses.
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-soft backdrop-blur-sm">
                <div className="grid gap-3 sm:grid-cols-2">
                  <button className="rounded-2xl bg-brand-500 px-4 py-3 text-sm font-semibold text-white shadow-sm">
                    Stays
                  </button>
                  <button className="rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-sm font-semibold text-white">
                    Car Rental
                  </button>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="grid gap-3 md:grid-cols-2">
                    <label className="block text-sm text-slate-200">
                      <span className="mb-2 block">Location</span>
                      <input
                        defaultValue="Arusha, Tanzania"
                        className="w-full rounded-xl border border-white/10 bg-slate-950/20 px-3 py-2.5 text-white placeholder:text-slate-400"
                      />
                    </label>
                    <label className="block text-sm text-slate-200">
                      <span className="mb-2 block">Guests</span>
                      <input
                        defaultValue="2 guests"
                        className="w-full rounded-xl border border-white/10 bg-slate-950/20 px-3 py-2.5 text-white placeholder:text-slate-400"
                      />
                    </label>
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    <label className="block text-sm text-slate-200">
                      <span className="mb-2 block">Check-in</span>
                      <input type="date" className="w-full rounded-xl border border-white/10 bg-slate-950/20 px-3 py-2.5 text-white" />
                    </label>
                    <label className="block text-sm text-slate-200">
                      <span className="mb-2 block">Check-out</span>
                      <input type="date" className="w-full rounded-xl border border-white/10 bg-slate-950/20 px-3 py-2.5 text-white" />
                    </label>
                  </div>

                  <Link
                    href="/stays"
                    className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-accent px-4 py-3 text-base font-semibold text-slate-900 transition hover:bg-yellow-400"
                  >
                    Search Stays
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Popular stays</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">Explore trusted places to stay</h2>
            </div>
            <Link href="/stays" className="text-sm font-semibold text-brand-700 hover:text-brand-800">
              View all stays →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {stays.slice(0, 3).map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
        </section>

        <section className="bg-sand">
          <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Choose your ride</p>
                <h2 className="mt-2 text-3xl font-bold text-slate-900">Reliable cars for Arusha travel</h2>
              </div>
              <Link href="/cars" className="text-sm font-semibold text-brand-700 hover:text-brand-800">
                View all cars →
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {cars.slice(0, 3).map((vehicle) => (
                <VehicleCard key={vehicle.slug} vehicle={vehicle} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="mb-3 inline-flex rounded-full bg-brand-100 p-3 text-brand-700">
                <span className="text-lg font-bold">01</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Trustworthy choices</h3>
              <p className="mt-3 text-slate-600">
                We focus on verified accommodation and vehicle listings. No fake live inventory; every request is confirmed by the ARUSHA HUB team.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="mb-3 inline-flex rounded-full bg-brand-100 p-3 text-brand-700">
                <span className="text-lg font-bold">02</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Simple and fast</h3>
              <p className="mt-3 text-slate-600">
                Search by location, pickup date, and stay preferences. The flow is designed for mobile users and local travelers arriving in Arusha.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="mb-3 inline-flex rounded-full bg-brand-100 p-3 text-brand-700">
                <span className="text-lg font-bold">03</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Built for growth</h3>
              <p className="mt-3 text-slate-600">
                The foundation supports later expansion into safaris, airport transfers, attractions, and more — while staying focused on stays and car rental today.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

