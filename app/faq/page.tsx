import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="container-shell py-10">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Contact</p>
            <h1 className="mt-2 text-3xl font-black text-slate-900">Talk to ARUSHA HUB</h1>
            <div className="mt-6 space-y-4 text-slate-700">
              <p><strong>WhatsApp:</strong> +255 712 345 678</p>
              <p><strong>Phone:</strong> +255 717 000 000</p>
              <p><strong>Email:</strong> hello@arusha-hub.com</p>
              <p><strong>Address:</strong> Arusha, Tanzania</p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-bold text-slate-900">Need help?</h2>
            <form className="mt-6 space-y-4">
              <input placeholder="Your name" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" />
              <input placeholder="Your email" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" />
              <textarea rows={4} placeholder="Your message" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" />
              <button className="w-full rounded-xl bg-brand-700 px-4 py-3 text-base font-semibold text-white">Send message</button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
