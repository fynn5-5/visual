import { useState } from "react"
import { Logo } from "@/components/brand/Logo"
import { SleepingDog, FrostAccents } from "@/components/brand/Illustrations"
import {
  Star,
  Check,
  Truck,
  Shield,
  Snowflake,
  Heart,
  Bolt,
  Droplet,
  ArrowRight,
  Quote,
} from "@/components/brand/Icons"

const fmt = (n: number) => n.toFixed(2).replace(".", ",") + " €"

interface Bundle {
  id: string
  qty: number
  label: string
  price: number
  compareAt: number
  badge?: string
  perUnit: number
}

const bundles: Bundle[] = [
  { id: "1", qty: 1, label: "1× Frosty", price: 34.9, compareAt: 49.9, perUnit: 34.9 },
  { id: "2", qty: 2, label: "2× Frosty", price: 59.9, compareAt: 99.8, perUnit: 29.95, badge: "Beliebteste Wahl" },
  { id: "3", qty: 3, label: "3× Frosty", price: 79.9, compareAt: 149.7, perUnit: 26.63, badge: "Bester Preis" },
]

const stars = (n = 5) => (
  <span className="flex text-honey">
    {Array.from({ length: n }).map((_, i) => (
      <Star key={i} className="h-4 w-4" />
    ))}
  </span>
)

/* ── product visual block ─────────────────────────────────────────── */
function ProductVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={
        "relative overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-25px_rgba(199,93,60,0.4)] " +
        className
      }
      style={{ background: "linear-gradient(145deg,#cfe3ef 0%,#9fc4d8 100%)" }}
    >
      <div className="absolute inset-0 bg-grain opacity-60" />
      <FrostAccents className="absolute right-5 top-5 h-14 w-14 text-cream/70" />
      <SleepingDog className="absolute bottom-0 left-1/2 w-[84%] -translate-x-1/2 translate-y-[5%] text-cream/95 animate-float-soft" />
      <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-terra-deep">
        Sommer-Sale −30 %
      </span>
    </div>
  )
}

export function FrostyLanding() {
  const [selected, setSelected] = useState<Bundle>(bundles[1])

  return (
    <div className="bg-cream text-ink">
      {/* announcement bar */}
      <div className="bg-terra py-2 text-center font-sans text-sm font-medium text-cream">
        🐾 Sommer-Sale: 30 % Rabatt + Gratis-Versand ab 39 € · nur für kurze Zeit
      </div>

      {/* header */}
      <header className="border-b border-sand-deep/70 bg-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
          <Logo />
          <span className="hidden items-center gap-1.5 text-sm text-ink-soft sm:flex">
            {stars()} 4,8 / 5 · 812 Bewertungen
          </span>
        </div>
      </header>

      {/* hero */}
      <section className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-12 lg:grid-cols-2 lg:py-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-sage-tint px-3 py-1 font-mono text-xs uppercase tracking-[0.15em] text-sage-deep">
            Nr. 1 gegen Sommerhitze
          </span>
          <h1 className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Dein Liebling hechelt bei Hitze?{" "}
            <span className="italic text-terra">Frosty kühlt – ganz ohne Strom.</span>
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
            Die selbstkühlende Matte aktiviert sich durch das Körpergewicht und
            schenkt deinem Hund oder deiner Katze sofort ein angenehm kühles
            Plätzchen. Kein Strom, kein Wasser, kein Kühlschrank.
          </p>

          <ul className="mt-6 space-y-2.5">
            {[
              "Kühlt sofort – aktiviert sich von selbst",
              "Einfach abwischen, immer wieder einsatzbereit",
              "In jeder Größe – von Katze bis Bernhardiner",
            ].map((b) => (
              <li key={b} className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sage-tint text-sage-deep">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {b}
              </li>
            ))}
          </ul>

          <a
            href="#angebot"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-terra px-8 py-4 font-sans text-base font-bold text-cream transition-colors hover:bg-terra-deep"
          >
            Jetzt 30 % sichern
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-ink-soft">
            <span className="inline-flex items-center gap-1.5">
              <Truck className="h-4 w-4 text-sage-deep" /> EU-Versand 3–8 Tage
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-sage-deep" /> 14 Tage Rückgabe
            </span>
          </p>
        </div>

        <ProductVisual className="aspect-square w-full" />
      </section>

      {/* trust strip */}
      <section className="border-y border-sand-deep/70 bg-sand">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px px-5 py-6 text-center md:grid-cols-4">
          {[
            { icon: Snowflake, t: "Kühlt ohne Strom" },
            { icon: Heart, t: "Über 3.400 Tierfreunde" },
            { icon: Truck, t: "Versand aus EU-Lager" },
            { icon: Shield, t: "Sichere Zahlung" },
          ].map(({ icon: Icon, t }) => (
            <div key={t} className="flex flex-col items-center gap-2 px-2 py-2">
              <Icon className="h-6 w-6 text-terra-deep" />
              <span className="text-sm font-medium">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* problem */}
      <section className="mx-auto max-w-3xl px-5 py-16 text-center">
        <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
          Heiße Tage sind für unsere Lieblinge eine echte Belastung
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          Anhaltendes Hecheln, Unruhe, die ständige Suche nach einem kühlen
          Fleck auf den Fliesen – im Hochsommer leiden viele Vierbeiner sichtbar.
          Ein Ventilator hilft kaum, und nicht jeder hat einen kühlen Steinboden.
          Genau hier kommt Frosty ins Spiel.
        </p>
      </section>

      {/* how it works */}
      <section className="bg-sand px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-serif text-3xl leading-tight sm:text-4xl">
            So einfach funktioniert’s
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { n: "1", icon: Snowflake, t: "Hinlegen", d: "Matte auf Boden, Körbchen oder ins Auto legen – ganz ohne Vorbereitung." },
              { n: "2", icon: Bolt, t: "Aktiviert sich selbst", d: "Das Körpergewicht aktiviert das Kühlgel automatisch. Kein Strom, kein Wasser." },
              { n: "3", icon: Droplet, t: "Stundenlang kühl", d: "Dein Liebling genießt eine angenehme Erfrischung – Stunde um Stunde." },
            ].map((s) => (
              <div key={s.n} className="rounded-3xl border border-sand-deep bg-card p-7 text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-terra-tint text-terra-deep">
                  <s.icon className="h-6 w-6" />
                </span>
                <p className="mt-4 font-mono text-xs uppercase tracking-widest text-terra">
                  Schritt {s.n}
                </p>
                <h3 className="mt-1 font-serif text-xl">{s.t}</h3>
                <p className="mt-2 text-ink-soft">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* benefits */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="text-center font-serif text-3xl leading-tight sm:text-4xl">
          Warum Tierfreunde Frosty lieben
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {[
            { icon: Snowflake, t: "Sofortige Erfrischung", d: "Spürbar kühl, sobald sich dein Liebling hinlegt – ohne Vorkühlen." },
            { icon: Bolt, t: "Komplett stromlos", d: "Keine Kabel, keine Kosten, keine Sicherheitsrisiken. Einfach genial einfach." },
            { icon: Heart, t: "Pflegeleicht & robust", d: "Reißfestes Material, einfach abwischbar – auch für Krallen gemacht." },
            { icon: Truck, t: "Überall einsetzbar", d: "Zuhause, im Auto, auf Reisen oder im Garten. Leicht & faltbar." },
          ].map((b) => (
            <div key={b.t} className="flex gap-4 rounded-3xl border border-sand-deep bg-card p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sage-tint text-sage-deep">
                <b.icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-serif text-xl">{b.t}</h3>
                <p className="mt-1 text-ink-soft">{b.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* reviews */}
      <section className="bg-sage-deep px-5 py-16 text-cream">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3">
              {stars()}
              <span className="font-bold">4,8 / 5 aus 812 Bewertungen</span>
            </div>
            <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
              Das sagen andere Tierbesitzer
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { n: "Sandra", p: "Labrador Bruno", t: "Im Hochsommer die Rettung! Bruno liegt nur noch drauf und hechelt viel weniger." },
              { n: "Michael", p: "Katze Lotte", t: "Lotte hat die Matte sofort angenommen. Qualität top, Lieferung kam in 4 Tagen." },
              { n: "Jasmin", p: "Aussie Filou", t: "Endlich entspannt Filou auch bei 30 Grad. Klare Empfehlung, kaufe direkt die zweite." },
            ].map((r) => (
              <figure key={r.n} className="flex flex-col rounded-3xl bg-cream/8 p-6 ring-1 ring-cream/15">
                <Quote className="h-6 w-6 text-honey" />
                <blockquote className="mt-3 flex-1 text-cream/90">„{r.t}"</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-terra font-serif text-cream">
                    {r.n[0]}
                  </span>
                  <span className="text-sm">
                    <span className="block font-bold">{r.n}</span>
                    <span className="block text-cream/70">{r.p}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* offer / bundle */}
      <section id="angebot" className="mx-auto max-w-3xl px-5 py-16">
        <div className="overflow-hidden rounded-[2rem] border border-sand-deep bg-card shadow-sm">
          <div className="grid gap-0 sm:grid-cols-2">
            <ProductVisual className="aspect-square sm:aspect-auto" />
            <div className="p-6 sm:p-8">
              <h2 className="font-serif text-2xl">Kühlmatte »Frosty«</h2>
              <div className="mt-1 flex items-center gap-2 text-sm text-ink-soft">
                {stars()} 812 Bewertungen
              </div>

              <p className="mt-4 text-sm font-medium text-ink-soft">Wähle dein Set:</p>
              <div className="mt-3 space-y-3">
                {bundles.map((b) => {
                  const active = selected.id === b.id
                  return (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setSelected(b)}
                      aria-pressed={active}
                      className={
                        "flex w-full items-center justify-between rounded-2xl border-2 px-4 py-3 text-left transition-colors " +
                        (active
                          ? "border-terra bg-terra-tint/50"
                          : "border-sand-deep bg-cream hover:border-terra/50")
                      }
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={
                            "flex h-5 w-5 items-center justify-center rounded-full border-2 " +
                            (active ? "border-terra bg-terra text-cream" : "border-sand-deep")
                          }
                        >
                          {active && <Check className="h-3 w-3" />}
                        </span>
                        <span>
                          <span className="block font-bold">{b.label}</span>
                          {b.badge && (
                            <span className="text-xs font-medium text-terra-deep">{b.badge}</span>
                          )}
                        </span>
                      </span>
                      <span className="text-right">
                        <span className="block font-bold text-terra">{fmt(b.price)}</span>
                        <span className="block text-xs text-ink-soft">
                          {fmt(b.perUnit)} / Stück
                        </span>
                      </span>
                    </button>
                  )
                })}
              </div>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-sans text-3xl font-bold text-terra">{fmt(selected.price)}</span>
                <span className="text-lg text-ink-soft line-through">{fmt(selected.compareAt)}</span>
              </div>

              <a
                href="#"
                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-terra px-8 py-4 font-sans text-base font-bold text-cream transition-colors hover:bg-terra-deep"
              >
                In den Warenkorb
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>

              <div className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-sage-tint px-4 py-3 text-center text-sm text-sage-deep">
                <Shield className="h-5 w-5 shrink-0" />
                <span><strong>30 Tage Zufriedenheitsgarantie.</strong> Gefällt’s nicht, Geld zurück.</span>
              </div>
              <div className="mt-3 flex flex-wrap justify-center gap-2 text-[11px] text-ink-soft">
                {["PayPal", "Klarna", "Visa", "Mastercard", "Apple Pay"].map((m) => (
                  <span key={m} className="rounded-md border border-sand-deep px-2 py-1">{m}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sand px-5 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center font-serif text-3xl leading-tight sm:text-4xl">
            Häufige Fragen
          </h2>
          <div className="mt-8 space-y-3">
            {[
              { q: "Muss ich die Matte vorher kühlen?", a: "Nein. Das integrierte Gel aktiviert sich durch Druck und Körperwärme von selbst – einfach hinlegen, fertig." },
              { q: "Ist die Matte für mein Tier geeignet?", a: "Frosty gibt es in mehreren Größen für Katzen, kleine und große Hunde. Die passende Größe wählst du im Warenkorb." },
              { q: "Wie lange dauert die Lieferung?", a: "Wir versenden aus unserem EU-Lager. In der Regel ist deine Bestellung in 3–8 Werktagen bei dir. Ab 39 € ist der Versand kostenlos." },
              { q: "Was, wenn es meinem Liebling nicht gefällt?", a: "Du hast 14 Tage Rückgaberecht plus unsere 30-Tage-Zufriedenheitsgarantie. Melde dich einfach – wir finden eine Lösung." },
              { q: "Wie reinige ich die Matte?", a: "Einfach mit einem feuchten Tuch abwischen. Das Material ist robust und schnell wieder einsatzbereit." },
            ].map((f) => (
              <details key={f.q} className="group rounded-2xl border border-sand-deep bg-card px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between font-sans font-bold">
                  {f.q}
                  <span className="ml-4 text-terra transition-transform group-open:rotate-45">＋</span>
                </summary>
                <p className="mt-3 text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* final CTA */}
      <section className="mx-auto max-w-3xl px-5 py-16 text-center">
        <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
          Schenk deinem Liebling einen kühlen Sommer
        </h2>
        <p className="mt-4 text-lg text-ink-soft">
          Sichere dir jetzt 30 % Rabatt – solange der Sommer-Sale läuft.
        </p>
        <a
          href="#angebot"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-terra px-8 py-4 font-sans text-base font-bold text-cream transition-colors hover:bg-terra-deep"
        >
          Frosty mit 30 % bestellen
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
      </section>

      {/* footer */}
      <footer className="bg-ink px-5 py-8 text-center text-sm text-cream/60">
        <Logo tone="cream" className="justify-center" />
        <p className="mt-3">
          &copy; {new Date().getFullYear()} Treuherz ·{" "}
          <a href="/" className="underline hover:text-terra">Startseite</a> ·{" "}
          <a href="/rechtliches.html#impressum" className="underline hover:text-terra">Impressum</a> ·{" "}
          <a href="/rechtliches.html#datenschutz" className="underline hover:text-terra">Datenschutz</a> ·{" "}
          <a href="/rechtliches.html#agb" className="underline hover:text-terra">AGB</a> ·{" "}
          <a href="/rechtliches.html#widerruf" className="underline hover:text-terra">Widerruf</a>
        </p>
        <p className="mt-2 text-cream/40">Mit ♥ für Vierbeiner gemacht.</p>
      </footer>

      {/* sticky mobile CTA */}
      <div className="sticky bottom-0 z-40 border-t border-sand-deep bg-cream/95 px-4 py-3 backdrop-blur sm:hidden">
        <a
          href="#angebot"
          className="flex items-center justify-between rounded-full bg-terra px-5 py-3 font-sans font-bold text-cream"
        >
          <span>{selected.label} · {fmt(selected.price)}</span>
          <span className="inline-flex items-center gap-1">
            Sichern <ArrowRight className="h-4 w-4" />
          </span>
        </a>
      </div>
    </div>
  )
}
