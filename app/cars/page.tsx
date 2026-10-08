import Link from "next/link";
import { PropertyCard } from "@/components/PropertyCard";
import { stays } from "@/lib/data";

export default function StaysPage() {
  return (
    <>
      <div className="container-shell py-8">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Book a stay</p>
            <h1 className="text-3xl font-black text-slate-900">Stays in Arusha</h1>
          </div>
          <Link href="/" className="text-sm font-semibold text-brand-700">← Back home</Link>
        </div>

        <div className="mb-8 grid gap-4 rounded-3xl border border-slate-200 bg-sand p-4 md:grid-cols-5">
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Location</label>
            <input defaultValue="Arusha, Tanzania" className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5" />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Check-in</label>
            <input type="date" className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5" />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Check-out</label>
            <input type="date" className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5" />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Guests</label>
            <input defaultValue="2 guests" className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5" />
          </div>
          <div className="flex items-end">
            <button className="w-full rounded-xl bg-brand-700 px-4 py-3 text-sm font-semibold text-white">Search Stays</button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[240px_1fr]">
          <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
            <h2 className="text-lg font-bold text-slate-900">Filters</h2>
            <div className="mt-5 space-y-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">Property type</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {['Hotel', 'Lodge', 'Apartment', 'Guest House', 'Hostel', 'Villa', 'Resort', 'Camp'].map((item) => (
                    <li key={item}><label className="flex items-center gap-2"><input type="checkbox" /> {item}</label></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">Price</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {['Budget', 'Mid-range', 'Luxury'].map((item) => <li key={item}><label className="flex items-center gap-2"><input type="checkbox" /> {item}</label></li>)}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">Facilities</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {['Wi-Fi', 'Parking', 'Breakfast', 'Swimming Pool', 'Restaurant', 'Airport Shuttle'].map((item) => <li key={item}><label className="flex items-center gap-2"><input type="checkbox" /> {item}</label></li>)}
                </ul>
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="text-sm text-slate-600">Showing {stays.length} properties</p>
              <select className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm">
                <option>Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
              {stays.map((property) => (
                <PropertyCard key={property.slug} property={property} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
