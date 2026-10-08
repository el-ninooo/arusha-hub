import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { stays } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default function PropertyDetailPage({ params }: { params: { slug: string } }) {
  const property = stays.find((item) => item.slug === params.slug);

  if (!property) {
    notFound();
  }

  return (
    <div className="container-shell py-8">
      <div className="mb-6 flex items-center justify-between gap-3">
        <Link href="/stays" className="text-sm font-semibold text-brand-700">← Back to stays</Link>
        <button className="rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white">Book Now</button>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-3">
        {[property.image, property.image, property.image].map((img, index) => (
          <div key={index} className="relative h-60 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
            <Image src={img} alt={`${property.name} view ${index + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="rounded-full bg-brand-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
              {property.type}
            </span>
            <span className="rounded-full bg-amber-100 px-2.5 py-1 text-sm font-semibold text-amber-700">
              ★ {property.rating}
            </span>
          </div>
          <h1 className="text-4xl font-black text-slate-900">{property.name}</h1>
          <p className="mt-3 text-lg text-slate-600">{property.location}</p>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
            <h2 className="text-xl font-bold text-slate-900">Description</h2>
            <p className="mt-3 text-slate-600">{property.description}</p>
          </div>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
            <h2 className="text-xl font-bold text-slate-900">Facilities</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {property.facilities.map((facility) => (
                <span key={facility} className="rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-700">{facility}</span>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
            <h2 className="text-xl font-bold text-slate-900">Map</h2>
            <div className="mt-4 h-64 overflow-hidden rounded-2xl bg-slate-200">
              <iframe
                title="Property map"
                className="h-full w-full border-0"
                src="https://www.google.com/maps?q=Arusha%20Tanzania&z=12&output=embed"
              />
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
            <h2 className="text-xl font-bold text-slate-900">Rooms</h2>
            <div className="mt-5 space-y-4">
              {property.rooms.map((room) => (
                <div key={room.name} className="rounded-2xl border border-slate-200 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{room.name}</h3>
                      <p className="text-sm text-slate-600">{room.guests} guests • {room.bedType}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-black text-slate-900">{formatPrice(room.price)}</div>
                      <div className="text-xs text-slate-500">per night</div>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600">
                    {room.facilities.map((item) => (
                      <span key={item} className="rounded-full bg-slate-100 px-2 py-1">{item}</span>
                    ))}
                  </div>
                  <Link href={`/property/${property.slug}/book?room=${encodeURIComponent(room.name)}`} className="mt-4 inline-flex rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white">
                    Book Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Property details</div>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <div className="flex justify-between gap-4"><span>Check-in</span><strong>{property.checkIn}</strong></div>
              <div className="flex justify-between gap-4"><span>Check-out</span><strong>{property.checkOut}</strong></div>
              <div className="flex justify-between gap-4"><span>Contact</span><strong>{property.contact}</strong></div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Quick summary</div>
            <div className="mt-4 text-slate-600">
              <p>Starting from <span className="font-bold text-slate-900">{formatPrice(property.pricePerNight)}</span> per night</p>
              <p className="mt-2">Verified local property listing for development testing.</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
