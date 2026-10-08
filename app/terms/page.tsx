import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const faqs = [
  {
    question: "How do bookings work?",
    answer: "Customers submit a booking request. The ARUSHA HUB team confirms availability before final confirmation.",
  },
  {
    question: "Do you show live availability?",
    answer: "Not in V1. We use a booking request model, which is safer and more accurate for local travel businesses.",
  },
  {
    question: "Can I list a property or vehicle?",
    answer: "Yes. Business owners can submit a property or car listing for review before it appears on the site.",
  },
];

export default function FaqPage() {
  return (
    <>
      <Header />
      <main className="container-shell py-10">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">FAQ</p>
          <h1 className="mt-2 text-4xl font-black text-slate-900">Frequently asked questions</h1>
          <div className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h2 className="text-lg font-bold text-slate-900">{faq.question}</h2>
                <p className="mt-2 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
