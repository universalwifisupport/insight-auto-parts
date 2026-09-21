import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { useCart } from "@/lib/cart-context";
import { formatPrice, PHONE_HREF, PHONE_NUMBER } from "@/lib/catalog";

export const Route = createFileRoute("/cart")({
  component: CartPage,
});

function CartPage() {
  const { lines, total, setQuantity, removeItem } = useCart();

  return (
    <>
      <SiteHeader />
      <main className="site-width py-14 sm:py-20">
        <p className="eyebrow text-accent">Your selection</p>
        <h1 className="mt-2 font-display text-3xl text-ink sm:text-4xl">Cart</h1>

        {lines.length === 0 ? (
          <div className="mt-10 border border-line bg-secondary/30 p-10 text-center">
            <p className="text-sm leading-6 text-ink/65">Your cart is empty.</p>
            <Link
              to="/products"
              className="mt-4 inline-flex items-center justify-center border-2 border-ink px-5 py-3 font-cond text-xs font-bold uppercase tracking-[0.1em] text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Browse products
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-10 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
              {lines.map(({ product, quantity }) => (
                <div key={product.slug} className="flex gap-4 border border-line p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="size-24 shrink-0 border border-line object-cover"
                  />
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-4">
                      <Link
                        to="/products/$productId"
                        params={{ productId: product.slug }}
                        className="font-cond text-base font-semibold text-ink hover:text-accent"
                      >
                        {product.name}
                      </Link>
                      <span className="font-display text-lg text-ink">
                        {formatPrice(product.price * quantity)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => setQuantity(product.slug, quantity - 1)}
                          className="size-7 border border-line text-sm font-bold text-ink hover:border-ink"
                        >
                          −
                        </button>
                        <span className="w-6 text-center font-cond text-sm font-semibold">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => setQuantity(product.slug, quantity + 1)}
                          className="size-7 border border-line text-sm font-bold text-ink hover:border-ink"
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(product.slug)}
                        className="font-cond text-xs font-semibold uppercase tracking-[0.1em] text-steel hover:text-accent"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-fit border-2 border-ink p-6">
              <div className="flex items-center justify-between font-cond text-sm font-semibold uppercase tracking-[0.1em] text-steel">
                <span>Estimated total</span>
                <span className="font-display text-2xl normal-case tracking-normal text-ink">
                  {formatPrice(total)}
                </span>
              </div>
              <p className="mt-3 text-xs leading-5 text-ink/60">
                Online checkout is not available. Call our team to confirm stock, fitment and
                delivery, then complete your order over the phone.
              </p>
              <a
                href={PHONE_HREF}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-accent px-5 py-3.5 font-cond text-sm font-bold uppercase tracking-[0.1em] text-ink transition-transform hover:-translate-y-0.5"
              >
                Call now to order · {PHONE_NUMBER}
              </a>
            </div>
          </div>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
