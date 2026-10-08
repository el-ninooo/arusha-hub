import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import type { Property } from "@/lib/data";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="card-surface overflow-hidden">
      <div className="relative h-56 w-full">
        <Image src={property.image} alt={property.name} fill className="object-cover" />
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-slate-500">{property.type}</div>
            <h3 className="mt-1 text-xl font-bold text-slate-900">{property.name}</h3>
          </div>
          <div className="rounded-full bg-amber-100 px-2.5 py-1 text-sm font-semibold text-amber-700">
            ★ {property.rating}
          </div>
        </div>

        <p className="text-sm text-slate-600">{property.location}</p>

        <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
          {property.facilities.slice(0, 3).map((facility) => (
            <span key={facility} className="rounded-full bg-slate-100 px-2 py-1">
              {facility}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
          <div>
            <div className="text-xl font-black text-slate-900">{formatPrice(property.pricePerNight)}</div>
            <div className="text-xs text-slate-500">per night</div>
          </div>
          <Link href={`/property/${property.slug}`} className="rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-800">
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
