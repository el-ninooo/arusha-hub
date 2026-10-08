import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function AdminDashboardPage() {
  const summary = [
    { label: "Total properties", value: 18 },
    { label: "Total cars", value: 12 },
    { label: "Pending bookings", value: 7 },
    { label: "Confirmed bookings", value: 14 },
    { label: "Pending property submissions", value: 4 },
    { label: "Pending car submissions", value: 2 },
  ];

  return (
    <>
      <Header />
      <main className="container-shell py-10">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Dashboard</p>
            <h1 className="text-3xl font-black text-slate-900">Admin overview</h1>
          </div>
          <button className="rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white">Add property</button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {summary.map((item) => (
            <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
              <div className="text-sm text-slate-500">{item.label}</div>
              <div className="mt-3 text-3xl font-black text-slate-900">{item.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
          <h2 className="text-xl font-bold text-slate-900">Recent bookings</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full text-left text-sm text-slate-700">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3">Reference</th>
                  <th className="py-3">Customer</th>
                  <th className="py-3">Service</th>
                  <th className="py-3">Status</th>
                  <th className="py-3">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="py-3">ARH-STAY-1001</td>
                  <td className="py-3">Asha Juma</td>
                  <td className="py-3">Accommodation</td>
                  <td className="py-3"><span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700">Pending</span></td>
                  <td className="py-3">TZS 440,000</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-3">ARH-CAR-48291</td>
                  <td className="py-3">David Smith</td>
                  <td className="py-3">Car Rental</td>
                  <td className="py-3"><span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">Confirmed</span></td>
                  <td className="py-3">TZS 240,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
