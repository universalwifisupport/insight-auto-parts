import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { ProductCard } from "@/components/product-card";
import { categories, products, type Category } from "@/lib/catalog";

const searchSchema = z.object({
  category: z.enum(["Engines", "Transmissions", "Other Parts"]).optional(),
});

export const Route = createFileRoute("/products/")({
  validateSearch: searchSchema,
  component: ProductsPage,
});

function ProductsPage() {
  const { category } = Route.useSearch();
  const filtered = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <>
      <SiteHeader />
      <main className="site-width py-14 sm:py-20">
        <p className="eyebrow text-accent">Full catalog</p>
        <h1 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
          {category ?? "All products"}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-ink/65">
          Browse in-stock and made-to-order engines, transmissions and parts. Call ahead to confirm
          fitment before ordering.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          <Link
            to="/products"
            className={`border-2 px-4 py-2 font-cond text-xs font-bold uppercase tracking-[0.1em] transition-colors ${!category ? "border-ink bg-ink text-paper" : "border-line text-ink hover:border-ink"}`}
          >
            All
          </Link>
          {categories.map((option) => (
            <Link
              key={option.name}
              to="/products"
              search={{ category: option.name as Category }}
              className={`border-2 px-4 py-2 font-cond text-xs font-bold uppercase tracking-[0.1em] transition-colors ${category === option.name ? "border-ink bg-ink text-paper" : "border-line text-ink hover:border-ink"}`}
            >
              {option.name}
            </Link>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
