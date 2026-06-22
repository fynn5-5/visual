"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Newsletter() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight">
                Bleib in Bewegung.
              </h2>
              <p className="mt-4 text-background/60 leading-relaxed max-w-md">
                Erhalte exklusive Deals, neue Produkte und Trainingstipps
                direkt in dein Postfach. Kein Spam — nur Mehrwert.
              </p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                placeholder="Deine E-Mail-Adresse"
                className="flex-1 h-14 rounded-full border border-background/20 bg-background/10 px-6 text-base text-background placeholder:text-background/30 outline-none focus:border-background/40 transition-colors"
                required
              />
              <button
                type="submit"
                className="h-14 rounded-full bg-background px-8 text-base font-medium text-foreground transition-all hover:bg-background/90 inline-flex items-center justify-center gap-2"
              >
                Anmelden
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
