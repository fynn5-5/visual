"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/products";
import { RollerIcon, GloveIcon, YogaIcon } from "./CategoryIcons";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  roller: RollerIcon,
  glove: GloveIcon,
  yoga: YogaIcon,
};

export function Categories() {
  return (
    <section id="categories" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight">
            Kategorien
          </h2>
          <p className="mt-2 text-muted-foreground">
            Finde das passende Equipment für dein Training.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => {
            const Icon = iconMap[cat.icon];
            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  href={`/products?category=${cat.slug}`}
                  className="group block"
                >
                  <div className="aspect-[4/3] rounded-2xl bg-secondary flex items-center justify-center transition-colors group-hover:bg-secondary/70">
                    {Icon && <Icon className="h-16 w-16 text-muted-foreground/30 transition-transform duration-500 group-hover:scale-110" />}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <h3 className="text-lg font-medium">{cat.name}</h3>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {cat.description}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
