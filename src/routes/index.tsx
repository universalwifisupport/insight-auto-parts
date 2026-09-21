import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ClipboardList,
  PackageCheck,
  Phone,
  PhoneCall,
  Quote,
  ShieldCheck,
  Star,
  Truck,
  Wrench,
} from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { ProductCard } from "@/components/product-card";
import { LeadForm } from "@/components/lead-form";
import { categories, products, PHONE_HREF, PHONE_NUMBER } from "@/lib/catalog";
import engineCloseup from "@/assets/engine-closeup.jpg";
import handWrench from "@/assets/hand-wrench.jpg";
import twoMechanicsGarage from "@/assets/two-mechanics-garage.jpg";
import warehouseRacking from "@/assets/warehouse-racking.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const featuredProducts = products.slice(0, 6);
const [featuredCategory, ...otherCategories] = categories;

const heroStats = [
  { value: "18+", label: "Years supplying workshops" },
  { value: "4,200+", label: "Parts dispatched yearly" },
  { value: "98%", label: "Fitment accuracy rate" },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "OEM-matched tolerances",
    copy: "Every part is measured and inspected against original specifications before it ships.",
  },
  {
    icon: PhoneCall,
    title: "Phone-verified fitment",
    copy: "Speak with a specialist who confirms compatibility before you order — no guesswork.",
  },
  {
    icon: Truck,
    title: "Same-day dispatch",
    copy: "In-stock engines, transmissions and parts leave the workshop the day you call.",
  },
  {
    icon: Award,
    title: "Workshop-grade inspection",
    copy: "Every unit passes a documented multi-point check before it's cleared for sale.",
  },
];

const processSteps = [
  {
    icon: Phone,
    step: "01",
    title: "Call or send your build",
    copy: "Tell us the vehicle, the part and the job. A specialist listens before recommending anything.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "We confirm fitment",
    copy: "Specs, tolerances and compatibility are checked against your vehicle before a quote is final.",
  },
  {
    icon: PackageCheck,
    step: "03",
    title: "Stock is inspected & packed",
    copy: "In-stock parts pass a documented workshop check, then get packed for transit-safe delivery.",
  },
  {
    icon: Truck,
    step: "04",
    title: "Same-day dispatch",
    copy: "Orders confirmed before close ship the same day, with tracking sent straight to your phone.",
  },
];

const testimonials = [
  {
    quote:
      "I purchased a used transmission for my Chevrolet Silverado, and the entire experience exceeded my expectations. The transmission was well packaged, arrived safely, and fit exactly as promised. What really stood out was how carefully the team confirmed fitment before shipping. If you're looking for reliable OEM, used, or aftermarket parts, these guys know what they're doing.",
    name: "David Collins",
    role: "Charlotte, North Carolina",
  },
  {
    quote:
      "Finding the correct engine wiring harness for my vehicle wasn't easy, but Edward at Insight Auto Parts tracked down the exact OEM replacement I needed. The part arrived quickly, was in excellent condition, and plugged in without any modifications. Outstanding customer service and genuine knowledge of auto parts.",
    name: "Robert Jenkins",
    role: "Dallas, Texas",
  },
  {
    quote:
      "I ordered an aftermarket A/C compressor for my Honda Accord and was impressed with the quality. The team confirmed compatibility before shipping, and the installation was completely hassle-free. The price was much better than local auto parts stores, and the fit was perfect. I'll definitely be ordering from Insight Auto Parts again.",
    name: "Sarah Mitchell",
    role: "Tampa, Florida",
  },
  {
    quote:
      "I was looking for a used OEM front differential for my Ford F-150 and couldn't find the right one locally. Insight Auto Parts verified my VIN before shipping and made sure I received the correct part. It arrived on time, was exactly as described, and fit perfectly. Great communication and excellent service from start to finish.",
    name: "Michael Turner",
    role: "Phoenix, Arizona",
  },
];

function Index() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* HERO — full-bleed image, angled edge, overlapping stat bar */}
        <section className="relative overflow-hidden bg-ink text-paper">
          <div className="relative" style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 0 100%)" }}>
            <img
              src={twoMechanicsGarage}
              alt="Two mechanics inspecting an engine bay together"
              className="absolute inset-0 h-full w-full -scale-x-100 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
            <div className="site-width relative py-24 sm:py-32 lg:py-40">
              <p className="eyebrow inline-flex items-center gap-2 text-accent">
                <span className="size-1.5 rounded-full bg-accent" />
                Engines · Transmissions · Performance parts
              </p>
              <h1 className="mt-5 max-w-2xl font-display text-4xl leading-[1.03] sm:text-6xl lg:text-[3.6rem]">
                Precision parts for builds that can't afford to fail.
              </h1>
              <p className="mt-5 max-w-lg text-base leading-7 text-paper/75">
                Rebuild-ready engines, driveline hardware and performance components supplied to
                professional workshops and private garages, with fitment confirmed by phone before
                you order.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 bg-accent px-6 py-3.5 font-cond text-sm font-bold uppercase tracking-[0.12em] text-ink transition-transform hover:-translate-y-0.5"
                >
                  <Phone size={16} strokeWidth={2.5} /> Call now · {PHONE_NUMBER}
                </a>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 border-2 border-paper/70 px-6 py-3.5 font-cond text-sm font-bold uppercase tracking-[0.12em] text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink"
                >
                  Browse products <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div className="site-width relative -mt-10 sm:-mt-14">
            <dl className="grid grid-cols-3 divide-x divide-paper/15 border-2 border-ink bg-paper text-ink shadow-[8px_8px_0_var(--accent)]">
              {heroStats.map((stat) => (
                <div key={stat.label} className="px-4 py-5 text-center sm:px-6 sm:py-7">
                  <dt className="font-display text-2xl text-ink sm:text-3xl">{stat.value}</dt>
                  <dd className="mt-1 font-cond text-[10px] uppercase leading-tight tracking-[0.1em] text-steel sm:text-[11px]">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="h-14 sm:h-20" aria-hidden="true" />
        </section>

        {/* BENEFITS — icon cards */}
        <section className="site-width py-16 sm:py-20">
          <p className="eyebrow text-accent">Why workshops call us first</p>
          <h2 className="mt-2 max-w-xl font-display text-3xl text-ink sm:text-4xl">
            Built for people who can't afford a wrong part.
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex flex-col bg-paper p-6">
                <benefit.icon className="text-accent" size={26} strokeWidth={1.6} />
                <h3 className="mt-5 font-cond text-lg font-semibold uppercase tracking-[0.06em] text-ink">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">{benefit.copy}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PRECISION FEATURE — image/text split */}
        <section className="border-y border-line bg-ink text-paper">
          <div className="grid lg:grid-cols-2">
            <div className="relative">
              <img
                src={engineCloseup}
                alt="Close-up of a precision-machined engine assembly"
                className="h-72 w-full object-cover sm:h-96 lg:h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent lg:bg-gradient-to-l" />
            </div>
            <div className="flex items-center">
              <div className="site-width py-14 lg:pl-16 lg:pr-0 lg:py-0">
                <p className="eyebrow text-accent">Precision, not guesswork</p>
                <h2 className="mt-3 max-w-md font-display text-3xl leading-tight sm:text-4xl">
                  Measured against original tolerances, every time.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-6 text-paper/70">
                  Every block, gearbox and driveline component is checked against OEM tolerances
                  before it's cleared for sale — bore diameters, bearing clearances and torque
                  ratings included. Nothing ships on a guess.
                </p>
                <Link
                  to="/products"
                  className="mt-7 inline-flex items-center gap-2 border-2 border-paper/70 px-6 py-3.5 font-cond text-sm font-bold uppercase tracking-[0.12em] text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink"
                >
                  See the full catalogue <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORIES — featured + list asymmetric layout */}
        <section className="border-y border-line bg-secondary/40 py-16 sm:py-20">
          <div className="site-width">
            <p className="eyebrow text-accent">Shop by category</p>
            <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
              Three categories. Full coverage.
            </h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {featuredCategory && (
                <Link
                  to="/products"
                  search={{ category: featuredCategory.name }}
                  className="group relative block overflow-hidden border border-line bg-paper"
                >
                  <img
                    src={featuredCategory.image}
                    alt={featuredCategory.name}
                    className="aspect-[16/11] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="font-cond text-xs font-bold text-accent">
                      {featuredCategory.number}
                    </span>
                    <h3 className="mt-1 font-display text-2xl text-paper">
                      {featuredCategory.name}
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-paper/75">
                      {featuredCategory.description}
                    </p>
                  </div>
                </Link>
              )}

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                {otherCategories.map((category) => (
                  <Link
                    key={category.name}
                    to="/products"
                    search={{ category: category.name }}
                    className="group flex items-center gap-5 border border-line bg-paper p-4"
                  >
                    <img
                      src={category.image}
                      alt={category.name}
                      className="aspect-square w-24 shrink-0 object-cover transition-transform duration-500 group-hover:scale-[1.05] sm:w-28"
                    />
                    <div>
                      <span className="font-cond text-xs font-bold text-steel">
                        {category.number}
                      </span>
                      <h3 className="mt-1 font-display text-xl text-ink">{category.name}</h3>
                      <p className="mt-1 text-sm leading-6 text-ink/65">{category.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="site-width py-16 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-accent">Featured stock</p>
              <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">Ready to dispatch</h2>
            </div>
            <Link
              to="/products"
              className="font-cond text-sm font-bold uppercase tracking-[0.12em] text-ink hover:text-accent"
            >
              View all products →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>

        {/* WORKSHOP GALLERY */}
        <section className="site-width py-16 sm:py-20">
          <p className="eyebrow text-accent">Inside the workshop</p>
          <h2 className="mt-2 max-w-xl font-display text-3xl text-ink sm:text-4xl">
            Real hands, real tools, real inspection.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-5">
            <div className="relative overflow-hidden sm:col-span-3">
              <img
                src={twoMechanicsGarage}
                alt="Two mechanics inspecting an engine bay together"
                className="aspect-[4/3] w-full object-cover sm:aspect-[16/11]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-transparent" />
              <p className="absolute inset-x-0 bottom-0 p-5 font-cond text-xs font-semibold uppercase tracking-[0.1em] text-paper/85">
                Two-point fitment checks before anything is listed
              </p>
            </div>
            <div className="relative overflow-hidden sm:col-span-2">
              <img
                src={handWrench}
                alt="Close-up of a hand holding a workshop tool"
                className="aspect-[4/3] w-full object-cover sm:aspect-[16/11] sm:h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-transparent" />
              <p className="absolute inset-x-0 bottom-0 p-5 font-cond text-xs font-semibold uppercase tracking-[0.1em] text-paper/85">
                Hand-torqued, not rushed
              </p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS — connected timeline */}
        <section className="border-y border-line bg-ink py-16 text-paper sm:py-20">
          <div className="site-width">
            <p className="eyebrow text-accent">How ordering works</p>
            <h2 className="mt-2 max-w-xl font-display text-3xl sm:text-4xl">
              Four steps from call to dispatch.
            </h2>
            <div className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div
                className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-paper/15 lg:block"
                aria-hidden="true"
              />
              {processSteps.map((item) => (
                <div key={item.step} className="relative">
                  <div className="flex items-center gap-4">
                    <span className="relative z-10 inline-flex size-12 shrink-0 items-center justify-center border-2 border-accent bg-ink font-display text-lg text-accent">
                      {item.step}
                    </span>
                    <item.icon className="text-paper/50" size={22} strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-5 font-cond text-lg font-semibold uppercase tracking-[0.06em] text-paper">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-paper/60">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WAREHOUSE / DISPATCH BANNER */}
        <section className="relative overflow-hidden bg-ink text-paper">
          <img
            src={warehouseRacking}
            alt="Warehouse racking stocked with packaged parts ready for dispatch"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/60" />
          <div className="site-width relative grid gap-8 py-16 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow text-accent">Stocked, inspected, dispatched</p>
              <h2 className="mt-2 max-w-lg font-display text-3xl sm:text-4xl">
                Real inventory on real shelves — not a drop-ship listing.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-6 text-paper/70">
                What you see in stock is physically on our shelves, catalogued and ready. No
                third-party sourcing delays, no surprise backorders after you've already paid.
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-6 border-t border-paper/15 pt-6 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
              <div>
                <dt className="font-display text-3xl text-accent">3</dt>
                <dd className="mt-1 font-cond text-xs uppercase tracking-[0.1em] text-paper/60">
                  Warehouse zones
                </dd>
              </div>
              <div>
                <dt className="font-display text-3xl text-accent">24hr</dt>
                <dd className="mt-1 font-cond text-xs uppercase tracking-[0.1em] text-paper/60">
                  Average dispatch window
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="site-width py-16 sm:py-20">
          <p className="eyebrow text-accent">From the workshop floor</p>
          <h2 className="mt-2 max-w-xl font-display text-3xl text-ink sm:text-4xl">
            Trusted by people who bolt these in themselves.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="flex flex-col border border-line bg-paper p-6"
              >
                <Quote className="text-accent" size={24} strokeWidth={1.6} />
                <div className="mt-3 flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mt-3 flex-1 text-sm leading-6 text-ink/75">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t border-line pt-4 font-cond text-xs uppercase tracking-[0.1em] text-steel">
                  {testimonial.name} · {testimonial.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="bg-accent text-ink">
          <div className="site-width flex flex-col items-start justify-between gap-6 py-12 sm:flex-row sm:items-center sm:py-14">
            <div className="flex items-center gap-4">
              <Wrench className="hidden shrink-0 sm:block" size={40} strokeWidth={1.4} />
              <div>
                <h2 className="font-display text-2xl leading-tight sm:text-3xl">
                  Not sure which part fits your build?
                </h2>
                <p className="mt-1 text-sm text-ink/75">
                  Call the workshop line — a specialist will confirm fitment before you spend a
                  cent.
                </p>
              </div>
            </div>
            <a
              href={PHONE_HREF}
              className="inline-flex shrink-0 items-center gap-2 bg-ink px-6 py-3.5 font-cond text-sm font-bold uppercase tracking-[0.12em] text-paper transition-transform hover:-translate-y-0.5"
            >
              <Phone size={16} strokeWidth={2.5} /> {PHONE_NUMBER}
            </a>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="site-width py-14 sm:py-16">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
            {[
              "OEM-matched tolerances",
              "Phone-verified fitment",
              "Workshop inspected",
              "Same-day dispatch",
            ].map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 font-cond text-xs font-semibold uppercase tracking-[0.12em] text-ink/60"
              >
                <CheckCircle2 className="text-accent" size={16} strokeWidth={2} />
                {label}
              </span>
            ))}
          </div>
        </section>

        <section className="site-width pb-16 sm:pb-20">
          <LeadForm />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
