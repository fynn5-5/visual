import { ArrowRight, Star, Truck, Shield } from "@/components/brand/Icons"
import { heroProduct } from "@/data/products"

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-cream bg-grain pt-28 md:pt-36 pb-20">
      {/* soft organic background blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle,#f6ddd2 0%,transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -left-32 h-96 w-96 rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle,#e2ebe2 0%,transparent 70%)" }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        {/* copy */}
        <div className="animate-rise-in">
          <span className="inline-flex items-center gap-2 rounded-full bg-sage-tint px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-sage-deep">
            <span className="h-1.5 w-1.5 rounded-full bg-sage-deep" />
            Versand aus dem EU-Lager
          </span>

          <h1 className="mt-6 font-serif text-5xl leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-7xl">
            Damit dein Liebling{" "}
            <span className="italic text-terra">sich wohlfühlt.</span>
          </h1>

          <p className="mt-6 max-w-md font-sans text-lg leading-relaxed text-ink-soft">
            Durchdachtes Zubehör für Hund & Katze – mit Liebe kuratiert,
            schnell geliefert. Komfort und Geborgenheit für die kleinen
            Familienmitglieder.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#shop"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-terra px-8 py-3.5 font-sans text-sm font-bold text-cream transition-colors hover:bg-terra-deep"
            >
              Kollektion entdecken
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#bestseller"
              className="inline-flex items-center justify-center rounded-full border border-sand-deep px-8 py-3.5 font-sans text-sm font-bold text-ink transition-colors hover:bg-sand"
            >
              Bestseller ansehen
            </a>
          </div>

          {/* proof row */}
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-ink-soft">
            <span className="inline-flex items-center gap-1.5">
              <span className="flex text-honey">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" />
                ))}
              </span>
              4,8 / 5 · über 3.400 Tierfreunde
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Truck className="h-4 w-4 text-sage-deep" /> 3–8 Tage Lieferzeit
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-sage-deep" /> 14 Tage Rückgabe
            </span>
          </div>
        </div>

        {/* hero product visual */}
        <div className="relative animate-rise-in" style={{ animationDelay: "120ms" }}>
          <div
            className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[2.5rem] shadow-[0_30px_60px_-25px_rgba(199,93,60,0.45)]"
            style={{ background: heroProduct.gradient }}
          >
            <div className="absolute inset-0 bg-grain opacity-60" />
            <heroProduct.icon className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 text-cream/90 animate-float-soft" />

            <div className="absolute left-5 top-5 rounded-full bg-cream/90 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-terra-deep">
              {heroProduct.badge}
            </div>
          </div>

          {/* floating price card */}
          <div className="absolute -bottom-5 left-1/2 w-[82%] max-w-sm -translate-x-1/2 rounded-2xl border border-sand-deep bg-card p-4 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-serif text-lg text-ink">{heroProduct.name}</p>
                <p className="text-sm text-ink-soft">{heroProduct.tagline}</p>
              </div>
              <div className="text-right">
                <p className="font-sans text-xl font-bold text-terra">
                  {heroProduct.price.toFixed(2).replace(".", ",")} €
                </p>
                {heroProduct.compareAt && (
                  <p className="text-sm text-ink-soft line-through">
                    {heroProduct.compareAt.toFixed(2).replace(".", ",")} €
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
