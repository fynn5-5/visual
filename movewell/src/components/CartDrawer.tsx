"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "./CartProvider";
import { formatPrice } from "@/lib/products";
import { Button } from "./ui/button";

export function CartDrawer() {
  const { items, removeItem, updateQuantity, totalPrice, isOpen, setIsOpen } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/50"
            onClick={() => setIsOpen(false)}
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 z-50 flex h-full w-full max-w-[calc(100vw-3rem)] sm:max-w-lg flex-col bg-background shadow-lg"
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <h2 className="text-lg font-semibold">
                Warenkorb {items.length > 0 && `(${items.length})`}
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                aria-label="Warenkorb schließen"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                    <ShoppingBag className="h-7 w-7 text-muted-foreground" />
                  </div>
                  <p className="mt-4 font-medium">Dein Warenkorb ist leer</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Füge Produkte hinzu, um loszulegen.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setIsOpen(false)}
                  >
                    Weiter shoppen
                  </Button>
                </div>
              ) : (
                <ul className="divide-y divide-border">
                  {items.map((item) => (
                    <li key={item.product.id} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg bg-secondary">
                        <span className="text-xs font-medium text-muted-foreground/50">
                          {item.product.name.slice(0, 2).toUpperCase()}
                        </span>
                      </div>

                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <h3 className="text-sm font-medium leading-snug">
                            {item.product.name}
                          </h3>
                          <p className="mt-0.5 text-sm font-semibold">
                            {formatPrice(item.product.price)}
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center rounded-full border border-border">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="flex h-8 w-8 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                              aria-label="Menge verringern"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="flex h-8 w-8 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                              aria-label="Menge erhöhen"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="text-sm text-muted-foreground transition-colors hover:text-destructive"
                          >
                            Entfernen
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-border px-6 py-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Zwischensumme</span>
                  <span className="text-lg font-semibold">{formatPrice(totalPrice)}</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Versandkosten werden an der Kasse berechnet.
                </p>

                <Button size="lg" className="mt-4 w-full text-base font-medium">
                  Zur Kasse
                </Button>

                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-3 w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Weiter shoppen
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
