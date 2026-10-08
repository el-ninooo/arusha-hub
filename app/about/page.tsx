import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function ListYourCarPage() {
  return (
    <>
      <Header />
      <main className="container-shell py-10">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">List your car</p>
          <h1 className="mt-2 text-3xl font-black text-slate-900">Submit a vehicle listing</h1>
          <p className="mt-3 text-slate-600">Vehicle owners and rental companies can submit a listing for approval.</p>

          <form action="/api/list-car" method="post" className="mt-6 grid gap-4 md:grid-cols-2">
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Name</span>
              <input name="name" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required />
            </label>
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Company name</span>
              <input name="companyName" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" />
            </label>
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Phone</span>
              <input name="phone" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required />
            </label>
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
              <input type="email" name="email" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required />
            </label>
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Vehicle</span>
              <input name="vehicle" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required />
            </label>
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Model</span>
              <input name="model" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required />
            </label>
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Year</span>
              <input type="number" name="year" defaultValue="2023" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required />
            </label>
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Seats</span>
              <input type="number" name="seats" defaultValue="5" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required />
            </label>
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Transmission</span>
              <select name="transmission" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required>
                <option>Automatic</option>
                <option>Manual</option>
              </select>
            </label>
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Fuel</span>
              <input name="fuel" defaultValue="Petrol" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required />
            </label>
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Price per day</span>
              <input type="number" name="pricePerDay" defaultValue="85000" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required />
            </label>
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Rental type</span>
              <select name="rentalType" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required>
                <option>With Driver</option>
                <option>Self Drive</option>
              </select>
            </label>
            <label className="md:col-span-2">
              <span className="mb-2 block text-sm font-medium text-slate-700">Pickup location</span>
              <input name="pickupLocation" defaultValue="Arusha City Center" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" required />
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
