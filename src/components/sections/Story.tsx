import { Paw, Heart, Leaf } from "@/components/brand/Icons"

const values = [
  {
    icon: Heart,
    title: "Tierwohl zuerst",
    text: "Wir wählen nur Produkte aus, die wir auch unseren eigenen Vierbeinern geben würden.",
  },
  {
    icon: Leaf,
    title: "Ehrlich & transparent",
    text: "Echte Lieferzeiten, faire Preise und keine leeren Versprechen – versprochen.",
  },
  {
    icon: Paw,
    title: "Schnell aus der EU",
    text: "Versand aus dem EU-Lager statt wochenlangem Warten. Damit die Freude schneller ankommt.",
  },
]

export function Story() {
  return (
    <section id="story" className="bg-cream px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-terra">
            Unsere Geschichte
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl">
            Aus Liebe zu den kleinen{" "}
            <span className="italic text-terra">Familienmitgliedern</span>
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
            <p>
              Treuherz ist aus einer einfachen Überzeugung entstanden: Unsere
              Tiere geben uns bedingungslose Liebe – sie verdienen das Beste
              zurück. Doch zu oft bedeutet „Tierzubehör" billige Massenware mit
              wochenlangen Lieferzeiten.
            </p>
            <p>
              Deshalb kuratieren wir mit Sorgfalt: durchdachte Produkte, die ein
              echtes Bedürfnis lösen – Kühlung an heißen Tagen, ein gemütlicher
              Rückzugsort, Beschäftigung gegen Langeweile. Schnell geliefert aus
              dem EU-Lager, fair im Preis.
            </p>
          </div>
        </div>

        <div className="grid gap-5">
          {values.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex gap-4 rounded-3xl border border-sand-deep bg-card p-6"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-terra-tint text-terra-deep">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-serif text-xl text-ink">{title}</h3>
                <p className="mt-1 text-ink-soft">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
