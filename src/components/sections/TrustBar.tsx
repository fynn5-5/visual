import { Truck, Shield, Heart, Leaf } from "@/components/brand/Icons"

const items = [
  { icon: Truck, title: "EU-Versand", text: "3–8 Tage Lieferzeit" },
  { icon: Shield, title: "Sicher zahlen", text: "PayPal · Klarna · Karte" },
  { icon: Heart, title: "14 Tage Rückgabe", text: "Kein Risiko für dich" },
  { icon: Leaf, title: "Mit Liebe kuratiert", text: "Echte Tierfreunde" },
]

export function TrustBar() {
  return (
    <section className="border-y border-sand-deep/70 bg-sand">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px md:grid-cols-4">
        {items.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="flex items-center gap-3 px-6 py-6 md:justify-center"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terra-tint text-terra-deep">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <p className="font-sans text-sm font-bold text-ink">{title}</p>
              <p className="text-xs text-ink-soft">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
