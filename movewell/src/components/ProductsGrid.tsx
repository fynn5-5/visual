"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { products, categories, getProductsByCategory } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { cn } from "@/lib/utils";

export function ProductsGrid() {
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get("category");

  const activeCategory = categories.find((c) => c.slug === categorySlug);
  const displayProducts = categorySlug
    ? getProductsByCategory(categorySlug)
    : products;

  return (
    <section className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl font-medium tracking-tight">
            {activeCategory ? activeCategory.name : "Alle Produkte"}
          </h1>
          {activeCategory && (
            <p className="mt-2 text-muted-foreground">
              {activeCategory.description}
            </p>
          )}
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-2">
          <FilterPill href="/products" active={!categorySlug}>
            Alle
          </FilterPill>
          {categories.map((cat) => (
            <FilterPill
              key={cat.slug}
              href={`/products?category=${cat.slug}`}
              active={categorySlug === cat.slug}
            >
              {cat.name}
            </FilterPill>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {displayProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {displayProducts.length === 0 && (
          <p className="mt-20 text-center text-muted-foreground">
            Keine Produkte in dieser Kategorie gefunden.
          </p>
        )}
      </div>
    </section>
  );
}

function FilterPill({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-9 items-center rounded-full px-4 text-sm font-medium transition-colors",
        active
          ? "bg-foreground text-background"
          : "bg-secondary text-muted-foreground hover:text-foreground"
      )}
    >
      {children}
    </Link>
  );
}
