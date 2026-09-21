import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { LeadForm } from "@/components/lead-form";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/catalog";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="site-width py-14 sm:py-20">
        <p className="eyebrow text-accent">Get in touch</p>
        <h1 className="mt-2 font-display text-3xl text-ink sm:text-4xl">Contact us</h1>
        <p className="mt-3 max-w-xl text-sm leading-6 text-ink/65">
          Call our team directly for fastest response, or send an enquiry and a specialist will call
          you back with fitment and availability.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="border border-line p-6">
              <h2 className="font-cond text-sm font-bold uppercase tracking-[0.1em] text-steel">
                Phone
              </h2>
              <a
                href={PHONE_HREF}
                className="mt-2 block font-display text-2xl text-ink hover:text-accent"
              >
                {PHONE_NUMBER}
              </a>
              <p className="mt-2 text-sm leading-6 text-ink/60">
                Mon–Sat, same-day dispatch on in-stock orders.
              </p>
            </div>
            <div className="border border-line p-6">
              <h2 className="font-cond text-sm font-bold uppercase tracking-[0.1em] text-steel">
                Ordering
              </h2>
              <p className="mt-2 text-sm leading-6 text-ink/60">
                We don't process payments online. Add parts to your cart, then call to confirm stock
                and complete your order over the phone.
              </p>
            </div>
          </div>
          <LeadForm />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
