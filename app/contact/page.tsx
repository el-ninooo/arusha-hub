import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="container-shell py-10">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">About ARUSHA HUB</p>
          <h1 className="mt-2 text-4xl font-black text-slate-900">Helping travelers discover Arusha with confidence.</h1>
          <div className="mt-6 space-y-5 text-slate-700">
            <p>
              ARUSHA HUB is a local travel platform built to help visitors find trusted places to stay and a practical way to rent a car in Arusha, Tanzania.
            </p>
            <p>
              Our mission is simple: make it easier for people to plan an Arusha trip and connect with businesses that can genuinely support their stay.
            </p>
            <p>
              We keep the first version focused on two services: accommodation and car rental. We do not pretend that inventory is live in real time unless it truly is; instead, requests are submitted and confirmed by the ARUSHA HUB team.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
