import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function AdminLoginPage() {
  return (
    <>
      <Header />
      <main className="container-shell py-10">
        <div className="mx-auto max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Admin</p>
          <h1 className="mt-2 text-3xl font-black text-slate-900">Login</h1>
          <form className="mt-6 space-y-4">
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
              <input type="email" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" defaultValue="admin@arusha-hub.com" />
            </label>
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Password</span>
              <input type="password" className="w-full rounded-xl border border-slate-200 px-3 py-2.5" defaultValue="change-me" />
            </label>
            <button className="w-full rounded-xl bg-brand-700 px-4 py-3 text-base font-semibold text-white">Sign in</button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
