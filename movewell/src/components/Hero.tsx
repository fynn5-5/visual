"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight"
          >
            Move better.
            <br />
            Feel better.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed"
          >
            Hochwertige Faszienrollen, Trainingshandschuhe und Yoga-Zubehör
            für dein bestes Training — zu fairen Preisen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="/products"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-8 text-base font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Jetzt shoppen
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#categories"
              className="inline-flex h-12 items-center rounded-full border border-border px-8 text-base font-medium transition-colors hover:bg-accent"
            >
              Kategorien entdecken
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/50 to-transparent pointer-events-none hidden lg:block" />
    </section>
  );
}
