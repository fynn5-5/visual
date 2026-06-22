"use client";

import { motion } from "framer-motion";
import { Package, Truck, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: Package,
    title: "Produkt wählen",
    description: "Stöbere durch unser handverlesenes Sortiment und finde das passende Equipment für dein Training.",
  },
  {
    icon: Truck,
    title: "Kostenlos geliefert",
    description: "Ab 30 € versandkostenfrei. Deine Bestellung wird schnell und sicher zu dir nach Hause geliefert.",
  },
  {
    icon: ThumbsUp,
    title: "Besser trainieren",
    description: "Nutze dein neues Equipment — und wenn du nicht zufrieden bist, schick es innerhalb von 30 Tagen einfach zurück.",
  },
];

export function Process() {
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
            So einfach geht&apos;s
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight">
            In 3 Schritten zum besseren Training
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="relative text-center p-8 sm:p-10 rounded-2xl bg-accent/40"
            >
              <div className="absolute top-6 left-6 text-7xl font-bold text-foreground/[0.04] leading-none select-none">
                {i + 1}
              </div>

              <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background">
                <step.icon className="h-6 w-6" />
              </div>

              <h3 className="relative mt-6 text-lg font-semibold">{step.title}</h3>
              <p className="relative mt-3 text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
