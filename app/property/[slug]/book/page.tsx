import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cars } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default function CarDetailPage({ params }: { params: { slug: string } }) {
  const vehicle = cars.find((item) => item.slug === params.slug);

  if (!vehicle) {
    notFound();
  }

  return (
    <div className="container-shell py-8">
      <div className="mb-6 flex items-center justify-between gap-3">
        <Link href="/cars" className="text-sm font-semibold text-brand-700">← Back to cars</Link>
        <button className="rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white">Request to Rent</button>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-3">
        {[vehicle.image, vehicle.image, vehicle.image].map((img, index) => (
          <div key={index} className="relative h-60 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
            <Image src={img} alt={`${vehicle.name} view ${index + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="rounded-full bg-brand-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
              {vehicle.type}
            </span>
            <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-sm font-semibold text-emerald-700">
              {vehicle.driverOption}
            </span>
          </div>
          <h1 className="text-4xl font-black text-slate-900">{vehicle.name}</h1>
          <p className="mt-3 text-lg text-slate-600">{vehicle.brand} {vehicle.model} • {vehicle.year}</p>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
            <h2 className="text-xl font-bold text-slate-900">Description</h2>
            <p className="mt-3 text-slate-600">{vehicle.description}</p>
          </div>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
            <h2 className="text-xl font-bold text-slate-900">Specifications</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-slate-700">
              <div className="flex justify-between gap-4 border-b border-slate-200 pb-2"><span>Seats</span><strong>{vehicle.seats}</strong></div>
              <div className="flex justify-between gap-4 border-b border-slate-200 pb-2"><span>Transmission</span><strong>{vehicle.transmission}</strong></div>
              <div className="flex justify-between gap-4 border-b border-slate-200 pb-2"><span>Fuel</span><strong>{vehicle.fuel}</strong></div>
              <div className="flex justify-between gap-4 border-b border-slate-200 pb-2"><span>Pickup Location</span><strong>{vehicle.pickupLocation}</strong></div>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
            <h2 className="text-xl font-bold text-slate-900">Pickup location</h2>
            <div className="mt-4 h-64 overflow-hidden rounded-2xl bg-slate-200">
              <iframe
                title="Vehicle pickup map"
                className="h-full w-full border-0"
                src="https://www.google.com/maps?q=Arusha%20Tanzania&z=12&output=embed"
              />
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Pricing</div>
            <div className="mt-4 text-3xl font-black text-slate-900">{formatPrice(vehicle.pricePerDay)}</div>
            <div className="mt-1 text-sm text-slate-500">per day</div>
            <Link href={`/car/${vehicle.slug}/rent`} className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-brand-700 px-4 py-3 text-sm font-semibold text-white">
              Request to Rent
            </Link>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Rental conditions</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• Valid driver’s license required</li>
              <li>• Security deposit and insurance terms apply</li>
              <li>• Pickup and return times must be confirmed before approval</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
