import { ArrowRight } from "@/components/brand/Icons"
import { products, type Product } from "@/data/products"

function ProductCard({ product }: { product: Product }) {
  const Icon = product.icon
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-sand-deep bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_44px_-26px_rgba(43,39,36,0.4)]">
      <div className="relative aspect-[5/4] overflow-hidden" style={{ background: product.gradient }}>
        <div className="absolute inset-0 bg-grain opacity-60" />
        <Icon className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 text-cream/90 transition-transform duration-300 group-hover:scale-110" />
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-terra-deep">
            {product.badge}
          </span>
        )}
        <span className="absolute right-4 top-4 rounded-full bg-ink/80 px-2.5 py-1 text-[11px] font-medium text-cream">
          {product.pet}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-xl text-ink">{product.name}</h3>
        <p className="mt-1 text-sm text-ink-soft">{product.tagline}</p>

        <div className="mt-4 flex items-center justify-between border-t border-sand-deep/70 pt-4">
          <div className="flex items-baseline gap-2">
            <span className="font-sans text-lg font-bold text-terra">
              {product.price.toFixed(2).replace(".", ",")} €
            </span>
            {product.compareAt && (
              <span className="text-sm text-ink-soft line-through">
                {product.compareAt.toFixed(2).replace(".", ",")} €
              </span>
            )}
          </div>
          <a
            href="#shop"
            aria-label={`${product.name} in den Warenkorb`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-terra text-cream transition-colors hover:bg-terra-deep"
          >
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  )
}

export function Products() {
  return (
    <section id="shop" className="bg-sand px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-terra">
            Die Kollektion
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl">
            Kleine Dinge, die den{" "}
            <span className="italic text-terra">großen Unterschied</span> machen
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Sechs Lieblinge für mehr Wohlbefinden auf vier Pfoten – kuratiert,
            getestet und bereit für ein glückliches Zuhause.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
