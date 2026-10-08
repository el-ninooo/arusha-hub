import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="container-shell py-10">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h1 className="text-4xl font-black text-slate-900">Privacy Policy</h1>
          <div className="mt-6 space-y-4 text-slate-700">
            <p>ARUSHA HUB takes customer privacy seriously. Personal information provided through booking or rental requests is used only to process the request and communicate with the customer.</p>
            <p>We do not expose sensitive information publicly and take reasonable measures to protect data through secure application design, server-side validation, and restricted admin access.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
