import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="container-shell py-20">
        <div className="mx-auto max-w-md text-center">
          <div className="text-6xl font-black text-slate-200">404</div>
          <h1 className="mt-4 text-3xl font-black text-slate-900">Page not found</h1>
          <p className="mt-3 text-slate-600">
            We couldn't find the page you were looking for. It may have been removed or moved.
          </p>
          <Link href="/" className="mt-6 inline-flex rounded-full bg-brand-700 px-6 py-3 font-semibold text-white">
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
