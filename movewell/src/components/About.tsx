"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "1.200+", label: "Zufriedene Kunden" },
  { value: "9", label: "Handverlesene Produkte" },
  { value: "4.9", label: "Durchschnittliche Bewertung" },
  { value: "0 €", label: "Versandkosten ab 30 €" },
];

export function About() {
  return (
    <section className="py-20 sm:py-28 bg-accent/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">
              Über uns
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight">
              Nicht noch ein Fitness-Shop.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Wir testen jedes Produkt selbst, bevor es in unser Sortiment kommt.
              Keine endlosen Kataloge, keine No-Name-Ware — nur Equipment,
              das wir selbst benutzen würden.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              MOVEWELL entstand aus Frustration: Zu viele Fitness-Shops verkaufen
              die gleichen billigen Produkte mit hübschen Fotos. Wir machen es
              anders — weniger Produkte, dafür jedes einzelne handverlesen
              und qualitätsgeprüft.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="grid grid-cols-2 gap-3 sm:gap-6"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="rounded-xl sm:rounded-2xl bg-background border border-border p-4 sm:p-6 md:p-8"
              >
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
