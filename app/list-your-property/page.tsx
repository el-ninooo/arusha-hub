import Link from "next/link";
import { cars } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default function CarRentalRequestPage({ params }: { params: { slug: string } }) {
  const vehicle = cars.find((item) => item.slug === params.slug);

  if (!vehicle) {
    return <div className="container-shell py-10 text-center text-slate-600">Vehicle not found.</div>;
  }

  return (
    <div className="container-shell py-8">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Rental request</p>
          <h1 className="text-3xl font-black text-slate-900">Rent {vehicle.name}</h1>
        </div>
        <Link href={`/car/${vehicle.slug}`} className="text-sm font-semibold text-brand-700">← Back to details</Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
          <h2 className="text-xl font-bold text-slate-900">Estimated cost</h2>
          <div className="mt-4 space-y-3 text-sm text-slate-700">
            <div className="flex justify-between gap-4"><span>3 days</span><strong>{formatPrice(vehicle.pricePerDay)} / day</strong></div>
            <div className="flex justify-between gap-4 border-t border-slate-200 pt-3 text-base font-bold text-slate-900"><span>Estimated total</span><strong>{formatPrice(vehicle.pricePerDay * 3)}</strong></div>
          </div>
        </aside>

        <form action="/api/book-car" method="post" className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
          <input type="hidden" name="vehicleSlug" value={vehicle.slug} />
          <div className="grid gap-4 md:grid-cols-2">
            <label className="md:col-span-2">
              <span className="mb-2 block text-sm font-medium text-slate-700">Full name</span>
              <input name="customerName" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required />
            </label>
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Phone</span>
              <input name="customerPhone" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required />
            </label>
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
              <input type="email" name="customerEmail" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required />
            </label>
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Pickup location</span>
              <input name="pickupLocation" defaultValue={vehicle.pickupLocation} className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required />
            </label>
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Rental type</span>
              <select name="rentalType" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required>
                <option>With Driver</option>
                <option>Self Drive</option>
              </select>
            </label>
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Pickup date</span>
              <input name="pickupDate" type="date" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required />
            </label>
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Pickup time</span>
              <input name="pickupTime" type="time" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required />
            </label>
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Return date</span>
              <input name="returnDate" type="date" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required />
            </label>
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Return time</span>
              <input name="returnTime" type="time" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required />
            </label>
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Number of passengers</span>
              <input name="passengers" defaultValue="2" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required />
            </label>
            <label className="md:col-span-2">
              <span className="mb-2 block text-sm font-medium text-slate-700">Special request</span>
              <textarea name="specialRequest" rows={4} className="w-full rounded-xl border border-slate-200 px-3 py-2.5" />
            </label>
          </div>

          <button type="submit" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-brand-700 px-4 py-3 text-base font-semibold text-white">
            Submit Rental Request
          </button>
        </form>
      </div>
    </div>
  );
}
