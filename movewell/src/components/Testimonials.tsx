"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Laura M.",
    location: "München",
    text: "Die Faszienrolle ist mega — nach 2 Wochen täglicher Nutzung sind meine Rückenschmerzen fast weg. Qualität fühlt sich deutlich besser an als die billigen vom Discounter.",
    product: "Deep Tissue Faszienrolle",
    rating: 5,
  },
  {
    name: "Tim K.",
    location: "Berlin",
    text: "Wrist Wraps sitzen perfekt und rutschen nicht. Nutze sie für Bench Press und OHP — endlich keine Handgelenkschmerzen mehr bei schweren Sets.",
    product: "Pro Wrist Wraps",
    rating: 5,
  },
  {
    name: "Sarah J.",
    location: "Hamburg",
    text: "Das Yoga Mat Set war ein Gamechanger für meine Home-Practice. Die Alignment-Linien helfen echt bei der Ausrichtung. Und der Tragegurt ist super praktisch.",
    product: "Premium Yoga Mat Set",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">
            Kundenstimmen
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight">
            Was unsere Kunden sagen
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative rounded-2xl border border-border bg-background p-6 sm:p-8"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-foreground text-foreground" />
                ))}
              </div>

              <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
                <span className="text-xs text-muted-foreground border border-border rounded-full px-3 py-1">
                  {t.product}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
