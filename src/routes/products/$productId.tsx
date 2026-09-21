import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { useCart } from "@/lib/cart-context";
import { formatPrice, getProduct, PHONE_HREF, PHONE_NUMBER } from "@/lib/catalog";

export const Route = createFileRoute("/products/$productId")({
  loader: ({ params }) => {
    const product = getProduct(params.productId);
    if (!product) throw notFound();
    return product;
  },
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const product = Route.useLoaderData();
  const { addItem } = useCart();

  return (
    <>
      <SiteHeader />
      <main className="site-width py-14 sm:py-20">
        <nav className="font-cond text-xs uppercase tracking-[0.12em] text-steel">
          <Link to="/products" className="hover:text-ink">
            Products
          </Link>
          <span className="mx-2">/</span>
          <Link to="/products" search={{ category: product.category }} className="hover:text-ink">
            {product.category}
          </Link>
        </nav>

        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          <img
            src={product.image}
            alt={product.name}
            width={1024}
            height={768}
            className="aspect-[4/3] w-full border border-line object-cover"
          />

          <div>
            <span className="inline-block bg-ink px-2.5 py-1 font-cond text-[10px] font-bold uppercase tracking-[0.16em] text-paper">
              {product.category}
            </span>
            <h1 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-3 font-display text-2xl text-ink">{formatPrice(product.price)}</p>
            <p className="mt-4 font-cond text-sm font-semibold uppercase tracking-[0.1em] text-steel">
              {product.availability}
            </p>
            <p className="mt-5 text-base leading-7 text-ink/70">{product.description}</p>

            <ul className="mt-6 space-y-2 border-t border-line pt-6">
              {product.specs.map((spec) => (
                <li key={spec} className="flex items-start gap-2 text-sm leading-6 text-ink/75">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {spec}
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => addItem(product)}
                className="inline-flex items-center justify-center border-2 border-ink px-5 py-3.5 font-cond text-sm font-bold uppercase tracking-[0.1em] text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                Add to cart
              </button>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 bg-accent px-5 py-3.5 font-cond text-sm font-bold uppercase tracking-[0.1em] text-ink transition-transform hover:-translate-y-0.5"
              >
                Call now to order · {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
