import type { ReactNode } from "react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="site-width max-w-3xl py-14 sm:py-20">
        <p className="eyebrow text-accent">Legal</p>
        <h1 className="mt-2 font-display text-3xl text-ink sm:text-4xl">{title}</h1>
        <p className="mt-2 font-cond text-xs uppercase tracking-[0.1em] text-steel">
          Last updated {updated}
        </p>
        <div className="prose-legal mt-8 space-y-5 text-sm leading-7 text-ink/70 [&_h2]:mt-8 [&_h2]:font-cond [&_h2]:text-lg [&_h2]:font-bold [&_h2]:uppercase [&_h2]:tracking-[0.06em] [&_h2]:text-ink">
          {children}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
