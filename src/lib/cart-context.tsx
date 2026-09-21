import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { Product } from "./catalog";

type CartLine = { product: Product; quantity: number };

type CartContextValue = {
  lines: CartLine[];
  itemCount: number;
  total: number;
  addItem: (product: Product) => void;
  removeItem: (slug: string) => void;
  setQuantity: (slug: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = lines.reduce((sum, line) => sum + line.quantity, 0);
    const total = lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0);

    return {
      lines,
      itemCount,
      total,
      addItem: (product) => {
        setLines((current) => {
          const existing = current.find((line) => line.product.slug === product.slug);
          if (existing) {
            return current.map((line) =>
              line.product.slug === product.slug ? { ...line, quantity: line.quantity + 1 } : line,
            );
          }
          return [...current, { product, quantity: 1 }];
        });
      },
      removeItem: (slug) =>
        setLines((current) => current.filter((line) => line.product.slug !== slug)),
      setQuantity: (slug, quantity) => {
        if (quantity <= 0) {
          setLines((current) => current.filter((line) => line.product.slug !== slug));
          return;
        }
        setLines((current) =>
          current.map((line) =>
            line.product.slug === slug ? { ...line, quantity: Math.min(quantity, 99) } : line,
          ),
        );
      },
      clearCart: () => setLines([]),
    };
  }, [lines]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
