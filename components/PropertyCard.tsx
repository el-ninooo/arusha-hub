import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="container-shell grid gap-8 py-12 md:grid-cols-4">
        <div>
          <div className="text-lg font-black text-white">ARUSHA HUB</div>
          <p className="mt-3 text-sm text-slate-400">
            Your Gateway to Arusha. Find trusted accommodation and rental cars for your visit.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/stays">Stays</Link></li>
            <li><Link href="/cars">Cars</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white">Company</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/list-your-property">List Your Property</Link></li>
            <li><Link href="/list-your-car">List Your Car</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/terms">Terms</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>WhatsApp: +255 712 345 678</li>
            <li>Phone: +255 717 000 000</li>
            <li>Email: hello@arusha-hub.com</li>
            <li>Arusha, Tanzania</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="container-shell flex flex-col justify-between gap-3 py-5 text-xs text-slate-400 md:flex-row">
          <span>© 2026 ARUSHA HUB. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
