import Link from "next/link";
import { stays } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default function PropertyBookingPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { room?: string };
}) {
  const property = stays.find((item) => item.slug === params.slug);
  const selectedRoom = property?.rooms.find((room) => room.name === searchParams.room) ?? property?.rooms[0];

  if (!property || !selectedRoom) {
    return <div className="container-shell py-10 text-center text-slate-600">Property or room not found.</div>;
  }

  return (
    <div className="container-shell py-8">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Stay booking</p>
          <h1 className="text-3xl font-black text-slate-900">Book {property.name}</h1>
        </div>
        <Link href={`/property/${property.slug}`} className="text-sm font-semibold text-brand-700">← Back to details</Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
          <h2 className="text-xl font-bold text-slate-900">Booking summary</h2>
          <div className="mt-5 space-y-3 text-sm text-slate-700">
            <div className="flex justify-between gap-4"><span>Property</span><strong>{property.name}</strong></div>
            <div className="flex justify-between gap-4"><span>Room</span><strong>{selectedRoom.name}</strong></div>
            <div className="flex justify-between gap-4"><span>Dates</span><strong>2 nights</strong></div>
            <div className="flex justify-between gap-4"><span>Guests</span><strong>2</strong></div>
            <div className="flex justify-between gap-4"><span>Price / night</span><strong>{formatPrice(selectedRoom.price)}</strong></div>
            <div className="flex justify-between gap-4 border-t border-slate-200 pt-3 text-base font-bold text-slate-900"><span>Total</span><strong>{formatPrice(selectedRoom.price * 2)}</strong></div>
          </div>
        </aside>

        <form action="/api/book-property" method="post" className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
          <input type="hidden" name="propertySlug" value={property.slug} />
          <input type="hidden" name="roomName" value={selectedRoom.name} />
          <div className="grid gap-4 md:grid-cols-2">
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Room</span>
              <input defaultValue={selectedRoom.name} className="w-full rounded-xl border border-slate-200 px-3 py-2.5" readOnly />
            </label>
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Guests</span>
              <input name="guests" defaultValue="2" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" />
            </label>
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Check-in</span>
              <input name="checkIn" type="date" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required />
            </label>
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Check-out</span>
              <input name="checkOut" type="date" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required />
            </label>
            <label className="md:col-span-2">
              <span className="mb-2 block text-sm font-medium text-slate-700">Full name</span>
              <input name="customerName" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required />
            </label>
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Phone number</span>
              <input name="customerPhone" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required />
            </label>
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
              <input type="email" name="customerEmail" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required />
            </label>
            <label className="md:col-span-2">
              <span className="mb-2 block text-sm font-medium text-slate-700">Special request</span>
              <textarea name="specialRequest" rows={4} className="w-full rounded-xl border border-slate-200 px-3 py-2.5" />
            </label>
          </div>

          <button type="submit" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-brand-700 px-4 py-3 text-base font-semibold text-white">
            Request Booking
          </button>
        </form>
      </div>
    </div>
  );
}
