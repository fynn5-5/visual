"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useCart } from "./CartProvider";
import { type Product, formatPrice } from "@/lib/products";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { addItem } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group"
    >
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-square rounded-2xl bg-secondary overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            unoptimized
          />
          {product.badge && (
            <Badge variant="forest" className="absolute top-3 left-3 z-10">
              {product.badge}
            </Badge>
          )}
          <div className="absolute bottom-3 left-3 opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200 z-10">
            <Button
              variant="secondary"
              size="icon"
              className="bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                addItem(product);
              }}
              aria-label={`${product.name} in den Warenkorb`}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Link>

      <div className="mt-3 flex items-start justify-between gap-2">
        <div>
          <Link href={`/products/${product.slug}`}>
            <h3 className="text-base font-medium leading-snug group-hover:underline">
              {product.name}
            </h3>
          </Link>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
            {product.description}
          </p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-base font-semibold">{formatPrice(product.price)}</p>
          {product.comparePrice && (
            <p className="text-sm text-muted-foreground line-through">
              {formatPrice(product.comparePrice)}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
