import Link from "next/link";
import { VehicleCard } from "@/components/VehicleCard";
import { cars } from "@/lib/data";

export default function CarsPage() {
  return (
    <>
      <div className="container-shell py-8">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Car rental</p>
            <h1 className="text-3xl font-black text-slate-900">Cars in Arusha</h1>
          </div>
          <Link href="/" className="text-sm font-semibold text-brand-700">← Back home</Link>
        </div>

        <div className="mb-8 grid gap-4 rounded-3xl border border-slate-200 bg-sand p-4 lg:grid-cols-6">
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Pickup location</label>
            <select className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5">
              <option>Arusha</option>
              <option>Kilimanjaro International Airport</option>
              <option>Arusha Airport</option>
              <option>Other approved locations</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Pickup date</label>
            <input type="date" className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5" />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Pickup time</label>
            <input type="time" className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5" />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Return date</label>
            <input type="date" className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5" />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Rental type</label>
            <select className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5">
              <option>With Driver</option>
              <option>Self Drive</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full rounded-xl bg-brand-700 px-4 py-3 text-sm font-semibold text-white">Search Cars</button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[260px_1fr]">
          <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
            <h2 className="text-lg font-bold text-slate-900">Filters</h2>
            <div className="mt-5 space-y-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">Vehicle type</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {['Economy', 'Sedan', 'SUV', '4x4', 'Safari Vehicle', 'Van', 'Minibus'].map((item) => <li key={item}><label className="flex items-center gap-2"><input type="checkbox" /> {item}</label></li>)}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">Transmission</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {['Automatic', 'Manual'].map((item) => <li key={item}><label className="flex items-center gap-2"><input type="checkbox" /> {item}</label></li>)}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">Seats</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {['2–4', '5', '6–8', '9+'].map((item) => <li key={item}><label className="flex items-center gap-2"><input type="checkbox" /> {item}</label></li>)}
                </ul>
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="text-sm text-slate-600">Showing {cars.length} vehicles</p>
              <select className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm">
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Recommended</option>
              </select>
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
              {cars.map((vehicle) => (
                <VehicleCard key={vehicle.slug} vehicle={vehicle} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
