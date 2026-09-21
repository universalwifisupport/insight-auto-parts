import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/catalog";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
});

const faqs = [
  {
    q: "Can I complete my order online?",
    a: "No. We don't process online payments. Add items to your cart, then call our team to confirm stock and fitment and complete the order by phone.",
  },
  {
    q: "How do I know a part fits my vehicle?",
    a: "Have your vehicle year, make, model and engine or transmission code ready when you call. A specialist will confirm fitment before you order.",
  },
  {
    q: "Do you offer warranties on engines and transmissions?",
    a: "Warranty terms vary by product and are confirmed over the phone at the time of order.",
  },
  {
    q: "How fast is dispatch?",
    a: "In-stock items marked 'ready to dispatch' typically ship same day. Made-to-order and quote-required items are confirmed with a lead time by phone.",
  },
  {
    q: "Do you accept core exchanges?",
    a: "Some remanufactured units require a core exchange. This will be confirmed by our team when you call about a specific product.",
  },
];

function FaqPage() {
  return (
    <>
      <SiteHeader />
      <main className="site-width py-14 sm:py-20">
        <p className="eyebrow text-accent">Support</p>
        <h1 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
          Frequently asked questions
        </h1>

        <div className="mt-10 divide-y divide-line border-y border-line">
          {faqs.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-cond text-base font-semibold text-ink">
                {item.q}
                <span className="text-accent transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-ink/65">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border border-line bg-secondary/40 p-6">
          <p className="text-sm leading-6 text-ink/70">Still have questions? Call us directly.</p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 bg-accent px-5 py-3 font-cond text-sm font-bold uppercase tracking-[0.1em] text-ink transition-transform hover:-translate-y-0.5"
          >
            Call {PHONE_NUMBER}
          </a>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
