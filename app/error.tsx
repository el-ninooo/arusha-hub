"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container-shell flex min-h-screen flex-col items-center justify-center py-10">
      <div className="max-w-md text-center">
        <div className="text-6xl font-black text-red-200">⚠</div>
        <h1 className="mt-4 text-3xl font-black text-slate-900">Something went wrong</h1>
        <p className="mt-3 text-slate-600">We encountered an error while processing your request.</p>
        <div className="mt-6 flex gap-3">
          <button
            onClick={() => reset()}
            className="flex-1 rounded-full bg-brand-700 px-4 py-3 font-semibold text-white"
          >
            Try again
          </button>
          <Link href="/" className="flex-1 rounded-full border border-brand-200 px-4 py-3 text-center font-semibold text-brand-700">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
