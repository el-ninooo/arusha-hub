import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function ListYourPropertyPage() {
  return (
    <>
      <Header />
      <main className="container-shell py-10">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">List your property</p>
          <h1 className="mt-2 text-3xl font-black text-slate-900">Submit your accommodation listing</h1>
          <p className="mt-3 text-slate-600">Your listing will be reviewed before it is published publicly.</p>

          <form action="/api/list-property" method="post" className="mt-6 grid gap-4 md:grid-cols-2">
            <label className="md:col-span-2">
              <span className="mb-2 block text-sm font-medium text-slate-700">Property name</span>
              <input name="name" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required />
            </label>
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Property type</span>
              <select name="propertyType" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required>
                <option>Hotel</option>
                <option>Lodge</option>
                <option>Apartment</option>
                <option>Guest House</option>
                <option>Hostel</option>
                <option>Villa</option>
                <option>Resort</option>
                <option>Camp</option>
              </select>
            </label>
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Location</span>
              <input name="location" defaultValue="Arusha, Tanzania" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required />
            </label>
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Phone</span>
              <input name="phone" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required />
            </label>
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
              <input type="email" name="email" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required />
            </label>
            <label className="md:col-span-2">
              <span className="mb-2 block text-sm font-medium text-slate-700">Description</span>
              <textarea name="description" rows={4} className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required />
            </label>
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Number of rooms</span>
              <input type="number" name="roomsCount" defaultValue="10" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required />
            </label>
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Price range</span>
              <input name="priceRange" defaultValue="TZS 150,000 - TZS 400,000" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required />
            </label>
            <label className="md:col-span-2">
              <span className="mb-2 block text-sm font-medium text-slate-700">Images</span>
              <input name="images" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" placeholder="Paste image URLs separated by commas" />
            </label>
          </form>

          <button type="submit" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-brand-700 px-4 py-3 text-base font-semibold text-white">
            Submit for Review
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
