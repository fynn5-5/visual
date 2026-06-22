import { ArrowRight, Check, Star } from "@/components/brand/Icons"
import { SleepingDog, FrostAccents } from "@/components/brand/Illustrations"
import { heroProduct } from "@/data/products"

export function Bestseller() {
  const p = heroProduct
  return (
    <section id="bestseller" className="bg-cream px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* visual */}
        <div
          className="relative order-1 aspect-[4/5] overflow-hidden rounded-[2.5rem] lg:order-none"
          style={{ background: p.gradient }}
        >
          <div className="absolute inset-0 bg-grain opacity-60" />
          <FrostAccents className="absolute right-6 top-6 h-16 w-16 text-cream/70" />
          <SleepingDog className="absolute bottom-0 left-1/2 w-[82%] -translate-x-1/2 translate-y-[4%] text-cream/95" />
          <div className="absolute bottom-6 left-6 rounded-2xl bg-cream/90 px-4 py-3 backdrop-blur">
            <p className="font-mono text-[11px] uppercase tracking-wider text-terra-deep">
              Sommer-Liebling 2026
            </p>
            <p className="font-serif text-lg text-ink">Kühlt ohne Strom</p>
          </div>
        </div>

        {/* details */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-terra">
            Unser Bestseller
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl">
            {p.name}
          </h2>

          <div className="mt-3 flex items-center gap-3">
            <span className="flex text-honey">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4" />
              ))}
            </span>
            <span className="text-sm text-ink-soft">812 Bewertungen</span>
          </div>

          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
            {p.description}
          </p>

          <ul className="mt-6 space-y-3">
            {p.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-ink">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-tint text-sage-deep">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <div className="flex items-baseline gap-2">
              <span className="font-sans text-3xl font-bold text-terra">
                {p.price.toFixed(2).replace(".", ",")} €
              </span>
              {p.compareAt && (
                <span className="text-lg text-ink-soft line-through">
                  {p.compareAt.toFixed(2).replace(".", ",")} €
                </span>
              )}
              <span className="rounded-full bg-terra-tint px-2.5 py-1 text-xs font-bold text-terra-deep">
                –30 %
              </span>
            </div>
            <a
              href="/frosty.html"
              className="group inline-flex items-center gap-2 rounded-full bg-terra px-8 py-3.5 font-sans text-sm font-bold text-cream transition-colors hover:bg-terra-deep"
            >
              Zum Angebot
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <p className="mt-4 text-sm text-ink-soft">
            Kostenloser Versand ab 39 € · Lieferung in 3–8 Werktagen aus dem EU-Lager
          </p>
        </div>
      </div>
    </section>
  )
}
