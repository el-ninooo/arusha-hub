import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import type { Vehicle } from "@/lib/data";

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <article className="card-surface overflow-hidden">
      <div className="relative h-56 w-full">
        <Image src={vehicle.image} alt={vehicle.name} fill className="object-cover" />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-slate-500">{vehicle.type}</div>
            <h3 className="mt-1 text-xl font-bold text-slate-900">{vehicle.name}</h3>
          </div>
          <div className="rounded-full bg-emerald-100 px-2.5 py-1 text-sm font-semibold text-emerald-700">
            {vehicle.transmission}
          </div>
        </div>

        <p className="mt-3 text-sm text-slate-600">{vehicle.brand} • {vehicle.model} • {vehicle.year}</p>
        <p className="mt-2 text-sm text-slate-600">{vehicle.seats} seats • {vehicle.fuel}</p>

        <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4">
          <div>
            <div className="text-xl font-black text-slate-900">{formatPrice(vehicle.pricePerDay)}</div>
            <div className="text-xs text-slate-500">per day</div>
          </div>
          <Link href={`/car/${vehicle.slug}`} className="rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-800">
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
