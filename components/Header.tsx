import Link from "next/link";
import { cookies } from "next/headers";

const links = [
  { href: "/", label: "Home" },
  { href: "/stays", label: "Stays" },
  { href: "/cars", label: "Cars" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export async function Header() {
  const cookieStore = await cookies();
  const adminSession = cookieStore.get("admin-session");

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-shell flex items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-900 text-lg font-black text-white">
            A
          </div>
          <div>
            <div className="text-lg font-black tracking-tight text-slate-900">ARUSHA HUB</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Your Gateway to Arusha</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-600 transition hover:text-brand-700">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {adminSession && (
            <Link href="/admin" className="hidden rounded-full bg-brand-100 px-4 py-2 text-sm font-semibold text-brand-700 md:inline-flex">
              Admin
            </Link>
          )}
          <Link href="/list-your-property" className="hidden rounded-full border border-brand-200 px-4 py-2 text-sm font-semibold text-brand-700 md:inline-flex">
            List Your Property
          </Link>
          <Link href="/list-your-car" className="inline-flex rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-800">
            List Your Car
          </Link>
        </div>
      </div>
    </header>
  );
}
