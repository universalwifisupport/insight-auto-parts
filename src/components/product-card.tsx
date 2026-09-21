import { Link } from "@tanstack/react-router";
import { useCart } from "@/lib/cart-context";
import { formatPrice, type Product } from "@/lib/catalog";

export function ProductCard({
  product,
  featured = false,
}: {
  product: Product;
  featured?: boolean;
}) {
  const { addItem } = useCart();

  return (
    <article className="group flex flex-col border border-line bg-paper transition-transform duration-300 hover:-translate-y-1">
      <Link
        to="/products/$productId"
        params={{ productId: product.slug }}
        className="relative block overflow-hidden bg-secondary"
      >
        <img
          src={product.image}
          alt={product.name}
          width={1024}
          height={768}
          loading="lazy"
          className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${featured ? "aspect-[4/3]" : "aspect-[4/3]"}`}
        />
        <span className="absolute left-3 top-3 bg-ink px-2.5 py-1 font-cond text-[10px] font-bold uppercase tracking-[0.16em] text-paper">
          {product.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-cond text-xl font-semibold leading-tight text-ink">
          <Link
            to="/products/$productId"
            params={{ productId: product.slug }}
            className="transition-colors hover:text-accent"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-ink/65">
          {product.shortDescription}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
          <span className="font-display text-2xl text-ink">{formatPrice(product.price)}</span>
          <span className="font-cond text-[11px] uppercase tracking-[0.12em] text-steel">
            {product.availability.split("·")[0]?.trim()}
          </span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <Link
            to="/products/$productId"
            params={{ productId: product.slug }}
            className="inline-flex items-center justify-center border-2 border-ink px-3 py-2.5 font-cond text-xs font-bold uppercase tracking-[0.1em] text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            View details
          </Link>
          <button
            type="button"
            onClick={() => addItem(product)}
            className="bg-ink px-3 py-2.5 font-cond text-xs font-bold uppercase tracking-[0.1em] text-paper transition-colors hover:bg-accent hover:text-ink"
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
