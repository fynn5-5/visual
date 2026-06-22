"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ChevronRight, Truck, RotateCcw } from "lucide-react";
import { type Product, type Category, formatPrice } from "@/lib/products";
import { useCart } from "@/components/CartProvider";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ProductDetail({
  product,
  category,
  related,
}: {
  product: Product;
  category?: Category;
  related: Product[];
}) {
  const { addItem } = useCart();

  return (
    <section className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-8 overflow-x-auto whitespace-nowrap scrollbar-none">
          <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/products" className="transition-colors hover:text-foreground">Shop</Link>
          {category && (
            <>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link href={`/products?category=${category.slug}`} className="transition-colors hover:text-foreground">
                {category.name}
              </Link>
            </>
          )}
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground font-medium truncate">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="sticky top-24 self-start"
          >
            <div className="relative aspect-square rounded-2xl bg-secondary overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                unoptimized
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {product.badge && (
              <Badge variant="forest" className="mb-4">
                {product.badge}
              </Badge>
            )}

            <h1 className="text-3xl sm:text-4xl font-medium tracking-tight">
              {product.name}
            </h1>

            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-3xl font-semibold tracking-tight">
                {formatPrice(product.price)}
              </span>
              {product.comparePrice && (
                <>
                  <span className="text-lg text-muted-foreground line-through">
                    {formatPrice(product.comparePrice)}
                  </span>
                  <Badge variant="destructive">
                    -{Math.round((1 - product.price / product.comparePrice) * 100)}%
                  </Badge>
                </>
              )}
            </div>

            <div className="mt-2 flex items-center gap-1.5 text-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
              <span className="text-green-600">Auf Lager</span>
            </div>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              {product.longDescription}
            </p>

            <ul className="mt-6 flex flex-col gap-2.5">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5 text-sm">
                  <Check className="h-4 w-4 shrink-0 text-green-600" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              className="mt-8 w-full h-14 rounded-full text-base font-medium"
              onClick={() => addItem(product)}
            >
              In den Warenkorb
            </Button>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 rounded-lg border border-border p-3">
                <Truck className="h-5 w-5 text-muted-foreground shrink-0" />
                <div>
                  <p className="text-xs font-medium">Kostenloser Versand</p>
                  <p className="text-xs text-muted-foreground">Ab 30 € Bestellwert</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-border p-3">
                <RotateCcw className="h-5 w-5 text-muted-foreground shrink-0" />
                <div>
                  <p className="text-xs font-medium">30 Tage Rückgabe</p>
                  <p className="text-xs text-muted-foreground">Kostenlos & einfach</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {related.length > 0 && (
          <div className="mt-20 sm:mt-28">
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight">
              Das könnte dir auch gefallen
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
