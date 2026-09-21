import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { BRAND_NAME, PHONE_HREF, PHONE_NUMBER } from "@/lib/catalog";
import { useCart } from "@/lib/cart-context";

function LogoMark({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={`inline-flex size-9 shrink-0 items-center justify-center ${dark ? "bg-accent" : "bg-ink"}`}
    >
      <Search size={18} strokeWidth={2.5} className={dark ? "text-ink" : "text-accent"} />
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { itemCount } = useCart();
  const links = [
    ["Home", "/"],
    ["Products", "/products"],
    ["About", "/about"],
    ["FAQ", "/faq"],
    ["Contact", "/contact"],
  ] as const;

  return (
    <>
      <div className="bg-ink text-paper">
        <div className="site-width flex min-h-9 items-center justify-between gap-4 py-2 font-cond text-[11px] uppercase tracking-[0.16em] sm:text-xs">
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-accent" /> Same-day dispatch · Mon–Sat
          </span>
          <span className="hidden text-steel sm:inline">OEM-matched tolerances</span>
          <a href={PHONE_HREF} className="font-semibold transition-colors hover:text-accent">
            <span className="text-accent">Call</span> {PHONE_NUMBER}
          </a>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper">
        <div className="site-width flex min-h-[76px] items-center justify-between gap-5">
          <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
            <span className="font-display text-xl leading-none tracking-tight text-ink sm:text-2xl">
              INSIGHT <span className="text-accent">AUTO PART</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-7 font-cond text-sm font-semibold uppercase tracking-[0.14em] lg:flex">
            {links.map(([label, to]) => (
              <Link
                key={to}
                to={to}
                activeProps={{ className: "text-ink" }}
                inactiveProps={{ className: "text-ink/60" }}
                activeOptions={{ exact: to === "/" }}
                className="transition-colors hover:text-accent"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              to="/cart"
              aria-label={`Cart with ${itemCount} items`}
              className="relative inline-flex items-center gap-2 font-cond text-sm font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:text-accent"
            >
              <ShoppingBag size={18} strokeWidth={1.7} />{" "}
              <span className="hidden sm:inline">Cart</span>
              <span className="inline-flex min-w-5 items-center justify-center bg-accent px-1 py-0.5 text-[11px] text-paper">
                {itemCount}
              </span>
            </Link>
            <a
              href={PHONE_HREF}
              className="hidden items-center gap-2 bg-ink px-4 py-3 font-cond text-xs font-bold uppercase tracking-[0.12em] text-paper transition-colors hover:bg-accent hover:text-ink sm:inline-flex"
            >
              Call to order
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((current) => !current)}
              className="inline-flex p-2 text-ink lg:hidden"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-line bg-paper px-5 py-4 lg:hidden">
            <div className="site-width flex flex-col gap-4 font-cond text-sm font-semibold uppercase tracking-[0.14em]">
              {links.map(([label, to]) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className="text-ink transition-colors hover:text-accent"
                >
                  {label}
                </Link>
              ))}
              <a href={PHONE_HREF} className="border-t border-line pt-4 text-accent">
                Call {PHONE_NUMBER}
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-accent bg-ink text-paper">
      <div className="site-width grid gap-10 py-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <span className="flex items-center gap-3">
            <LogoMark dark />
            <span className="leading-none">
              <span className="block font-display text-xl leading-none tracking-tight text-paper">
                INSIGHT
              </span>
              <span className="mt-0.5 block font-cond text-[10px] font-semibold uppercase tracking-[0.2em] text-paper/50">
                Auto Part
              </span>
            </span>
          </span>
          <p className="mt-4 max-w-[38ch] text-sm leading-6 text-paper/60">
            Precision automotive parts for professional workshops and private garages. Temporary
            identity, ready to be replaced.
          </p>
          <a
            href={PHONE_HREF}
            className="mt-5 inline-flex font-cond text-sm font-semibold uppercase tracking-[0.1em] text-accent transition-colors hover:text-paper"
          >
            {PHONE_NUMBER} →
          </a>
        </div>
        <FooterLinks
          title="Products"
          links={[
            ["Engines", "/products?category=Engines"],
            ["Transmissions", "/products?category=Transmissions"],
            ["Other Parts", "/products?category=Other%20Parts"],
            ["All stock", "/products"],
          ]}
        />
        <FooterLinks
          title="Company"
          links={[
            ["About", "/about"],
            ["FAQ", "/faq"],
            ["Contact", "/contact"],
          ]}
        />
        <FooterLinks
          title="Legal"
          links={[
            ["Privacy", "/privacy-policy"],
            ["Terms", "/terms-conditions"],
            ["Refunds", "/refund-policy"],
            ["Disclaimer", "/disclaimer"],
          ]}
        />
      </div>
      <div className="border-t border-paper/10">
        <div className="site-width flex flex-col justify-between gap-2 py-5 font-cond text-[11px] uppercase tracking-[0.14em] text-steel sm:flex-row">
          <span>© 2026 {BRAND_NAME}. All rights reserved.</span>
          <span>Phone ordering only · No online checkout</span>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: readonly (readonly [string, string])[];
}) {
  return (
    <div>
      <h3 className="font-cond text-[11px] uppercase tracking-[0.16em] text-steel">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-sm text-paper/70">
        {links.map(([label, to]) => (
          <li key={to}>
            <Link to={to} className="transition-colors hover:text-accent">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b-2 border-ink bg-paper">
      <div className="site-width py-14 sm:py-20">
        <p className="eyebrow text-accent">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[0.93] text-ink sm:text-7xl">
          {title}
        </h1>
        <div className="mt-6 max-w-2xl text-base leading-7 text-ink/70 sm:text-lg">{children}</div>
      </div>
    </section>
  );
}
