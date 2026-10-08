import Link from "next/link";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

function ConfirmationContent({ reference, service }: { reference: string; service: string }) {
  const serviceLabel = service === "stay" ? "Accommodation" : "Car Rental";

  return (
    <div className="container-shell py-10">
      <div className="mx-auto max-w-2xl rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-soft">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-xl text-white">✓</div>
          <div>
            <h1 className="text-2xl font-black text-emerald-900">Request received</h1>
            <p className="mt-1 text-sm text-emerald-800">Your {serviceLabel} request has been submitted successfully.</p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-emerald-200 bg-white p-5">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Reference number</div>
          <div className="mt-2 text-3xl font-black text-slate-900 font-mono">{reference}</div>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-lg font-bold text-slate-900">What happens next?</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            <li className="flex gap-3">
              <span className="font-bold text-emerald-600">1.</span>
              <span>The ARUSHA HUB team will review your request and check availability.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-emerald-600">2.</span>
              <span>We will contact you at the phone and email you provided within 24 hours.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-emerald-600">3.</span>
              <span>Once confirmed, you will receive booking or rental details directly from the property or vehicle owner.</span>
            </li>
          </ul>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-lg font-bold text-slate-900">Need help?</h2>
          <p className="mt-2 text-sm text-slate-600">Contact us on WhatsApp or call +255 712 345 678 for any questions.</p>
        </div>

        <div className="mt-6 flex gap-3">
          <Link href="/" className="flex-1 rounded-xl bg-brand-700 px-4 py-3 text-center text-sm font-semibold text-white">
            Back to home
          </Link>
          <Link href="/stays" className="flex-1 rounded-xl border border-brand-200 bg-transparent px-4 py-3 text-center text-sm font-semibold text-brand-700">
            Explore more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function BookingConfirmationPage({
  searchParams,
}: {
  searchParams: { reference?: string; service?: string };
}) {
  const reference = searchParams.reference || "ARH-REQUEST-000000";
  const service = searchParams.service || "stay";

  return (
    <>
      <Header />
      <Suspense fallback={<div className="container-shell py-10">Loading...</div>}>
        <ConfirmationContent reference={reference} service={service} />
      </Suspense>
      <Footer />
    </>
  );
}
