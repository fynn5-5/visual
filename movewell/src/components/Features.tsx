"use client";

import { motion } from "framer-motion";
import { Truck, Shield, RotateCcw, Lock } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Kostenloser Versand",
    description: "Ab 30 € Bestellwert versandkostenfrei in ganz Deutschland.",
  },
  {
    icon: Shield,
    title: "Premium Qualität",
    description: "Geprüfte Materialien für langlebige Performance.",
  },
  {
    icon: RotateCcw,
    title: "30 Tage Rückgabe",
    description: "Nicht zufrieden? Einfach und kostenlos zurücksenden.",
  },
  {
    icon: Lock,
    title: "Sichere Zahlung",
    description: "SSL-verschlüsselt. PayPal, Kreditkarte, Klarna.",
  },
];

export function Features() {
  return (
    <section className="py-16 sm:py-20 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                <feature.icon className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-sm font-semibold">{feature.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
