import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="container-shell py-10">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h1 className="text-4xl font-black text-slate-900">Terms of Service</h1>
          <div className="mt-6 space-y-4 text-slate-700">
            <p>ARUSHA HUB is a local discovery and booking request platform for accommodation and car rental in Arusha, Tanzania.</p>
            <p>Listings may be submitted by local businesses and must be approved by the ARUSHA HUB admin before public visibility.</p>
            <p>Customers are responsible for confirming booking terms directly with property or vehicle owners once the request is confirmed.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
