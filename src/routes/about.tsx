import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Phone, PhoneCall, ShieldCheck } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { PHONE_HREF, PHONE_NUMBER, BRAND_NAME } from "@/lib/catalog";
import twoMechanicsGarage from "@/assets/two-mechanics-garage.jpg";
import engineCloseup from "@/assets/engine-closeup.jpg";
import handWrench from "@/assets/hand-wrench.jpg";
import warehouseRacking from "@/assets/warehouse-racking.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const pillars = [
  {
    icon: ShieldCheck,
    title: "Workshop-grade inspection",
    copy: "Every engine, transmission and part is checked against measured tolerances before it's listed as available.",
  },
  {
    icon: PhoneCall,
    title: "Fitment confirmed by phone",
    copy: "A specialist reviews your vehicle details before you order, so what arrives is what fits.",
  },
  {
    icon: Award,
    title: "Built for repeat customers",
    copy: "Independent workshops and private builders rely on us for consistent stock and honest availability.",
  },
];

const stats = [
  { value: "18+", label: "Years supplying workshops" },
  { value: "4,200+", label: "Parts dispatched yearly" },
  { value: "3", label: "Warehouse zones" },
  { value: "98%", label: "Fitment accuracy rate" },
];

const gallery = [
  {
    image: handWrench,
    caption: "Hand-torqued to spec, not rushed off the line.",
  },
  {
    image: warehouseRacking,
    caption: "Catalogued warehouse stock, not a drop-ship listing.",
  },
  {
    image: engineCloseup,
    caption: "Measured against OEM tolerances before it's cleared.",
  },
];

function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* HERO — image band */}
        <section className="relative overflow-hidden bg-ink text-paper">
          <img
            src={twoMechanicsGarage}
            alt="Two mechanics working on a car engine in a workshop"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/50" />
          <div className="site-width relative py-16 sm:py-24">
            <p className="eyebrow text-accent">About {BRAND_NAME}</p>
            <h1 className="mt-3 max-w-2xl font-display text-3xl leading-tight sm:text-5xl">
              Automotive parts supply built around fitment, not guesswork.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-6 text-paper/70 sm:text-base">
              {BRAND_NAME} is a temporary working identity for this business — the final brand and
              domain are still being decided. Every part on this site is real stock, catalogued and
              ready to be reviewed with a specialist by phone.
            </p>
          </div>
        </section>

        {/* PILLARS */}
        <section className="site-width py-16 sm:py-20">
          <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex flex-col bg-paper p-6">
                <pillar.icon className="text-accent" size={26} strokeWidth={1.6} />
                <h3 className="mt-5 font-cond text-lg font-semibold uppercase tracking-[0.06em] text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">{pillar.copy}</p>
              </div>
            ))}
          </div>
        </section>

        {/* STORY — image/text split */}
        <section className="border-y border-line bg-secondary/40">
          <div className="grid lg:grid-cols-2">
            <div className="flex items-center">
              <div className="site-width py-14 lg:py-16 lg:pr-16">
                <p className="eyebrow text-accent">How we operate</p>
                <h2 className="mt-3 max-w-md font-display text-3xl leading-tight text-ink sm:text-4xl">
                  Every part passes through hands before it passes to you.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-6 text-ink/70">
                  There's no warehouse robot deciding what ships. A specialist checks your vehicle
                  details against the part on the shelf, a technician inspects it against measured
                  tolerances, and only then does it get packed. It's slower than a one-click
                  checkout — and it's why builds come back running.
                </p>
                <a
                  href={PHONE_HREF}
                  className="mt-7 inline-flex items-center gap-2 bg-ink px-6 py-3.5 font-cond text-sm font-bold uppercase tracking-[0.12em] text-paper transition-colors hover:bg-accent hover:text-ink"
                >
                  <Phone size={16} strokeWidth={2.5} /> Talk to a specialist
                </a>
              </div>
            </div>
            <div className="relative min-h-[18rem] lg:min-h-0">
              <img
                src={engineCloseup}
                alt="Close-up of a precision-machined engine assembly"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="site-width py-16 sm:py-20">
          <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="border-t-2 border-ink pt-4">
                <dt className="font-display text-3xl text-ink sm:text-4xl">{stat.value}</dt>
                <dd className="mt-1 font-cond text-[11px] uppercase leading-tight tracking-[0.1em] text-steel">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* GALLERY */}
        <section className="border-t border-line bg-secondary/40 py-16 sm:py-20">
          <div className="site-width">
            <p className="eyebrow text-accent">In the workshop</p>
            <h2 className="mt-2 max-w-xl font-display text-3xl text-ink sm:text-4xl">
              What "workshop-grade" actually looks like.
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {gallery.map((item) => (
                <div key={item.caption} className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="aspect-[4/5] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                  <p className="absolute inset-x-0 bottom-0 p-5 font-cond text-xs font-semibold uppercase leading-snug tracking-[0.08em] text-paper/90">
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-line py-14">
          <div className="site-width flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl leading-tight text-ink sm:text-3xl">
                Have a build in progress?
              </h2>
              <p className="mt-1 max-w-md text-sm leading-6 text-ink/70">
                Call our team with your vehicle details and part list — we'll confirm fitment before
                you spend a cent.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 bg-accent px-6 py-3.5 font-cond text-sm font-bold uppercase tracking-[0.12em] text-ink transition-transform hover:-translate-y-0.5"
              >
                Call now · {PHONE_NUMBER}
              </a>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 border-2 border-ink px-6 py-3.5 font-cond text-sm font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                Browse products <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
