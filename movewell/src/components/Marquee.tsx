"use client";

import { motion } from "framer-motion";

const items = [
  "Kostenloser Versand ab 30 €",
  "Premium Qualität",
  "30 Tage Rückgaberecht",
  "Sichere Zahlung",
  "1.200+ zufriedene Kunden",
  "Handverlesene Produkte",
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden bg-foreground text-background py-2.5 sm:py-3 select-none">
      <motion.div
        className="flex whitespace-nowrap gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, ease: "linear", repeat: Infinity }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-6 sm:gap-8 text-xs sm:text-sm font-medium tracking-wide">
            {item}
            <span className="text-background/30">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
