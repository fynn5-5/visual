import { Logo } from "@/components/brand/Logo"

const columns = [
  {
    title: "Shop",
    links: ["Bestseller", "Für Hunde", "Für Katzen", "Sommer-Aktion", "Gutscheine"],
  },
  {
    title: "Service",
    links: ["Versand & Lieferzeit", "Rückgabe & Umtausch", "Zahlungsarten", "FAQ", "Kontakt"],
  },
  {
    title: "Rechtliches",
    links: ["Impressum", "Datenschutz", "AGB", "Widerrufsrecht", "Cookie-Einstellungen"],
  },
]

export function Footer() {
  return (
    <footer className="bg-ink px-6 pt-16 pb-8 text-cream">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Logo tone="cream" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
              Durchdachtes Zubehör für Hund & Katze. Mit Liebe kuratiert,
              schnell geliefert aus dem EU-Lager.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-[11px] text-cream/70">
              {["PayPal", "Klarna", "Visa", "Mastercard", "Apple Pay"].map((m) => (
                <span
                  key={m}
                  className="rounded-md border border-cream/20 px-2.5 py-1"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-cream/50">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-cream/75 transition-colors hover:text-terra"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/15 pt-6 text-xs text-cream/50 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Treuherz. Alle Rechte vorbehalten.</p>
          <p>Mit ♥ für Vierbeiner gemacht.</p>
        </div>
      </div>
    </footer>
  )
}
