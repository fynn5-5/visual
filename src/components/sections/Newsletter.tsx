import { useState } from "react"
import { ArrowRight, Check, Paw } from "@/components/brand/Icons"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    // Demo-Frontend: hier später Klaviyo/Shopify-Anbindung (Double-Opt-in).
    setDone(true)
  }

  return (
    <section className="bg-sand px-6 py-24 md:py-28">
      <div className="mx-auto max-w-3xl overflow-hidden rounded-[2.5rem] border border-sand-deep bg-card p-9 text-center shadow-sm md:p-14">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-terra-tint text-terra-deep">
          <Paw className="h-7 w-7" />
        </span>
        <h2 className="mt-6 font-serif text-3xl leading-tight text-ink md:text-4xl">
          10 % Willkommensrabatt
        </h2>
        <p className="mx-auto mt-3 max-w-md text-ink-soft">
          Melde dich für unseren Newsletter an und sichere dir 10 % auf deine
          erste Bestellung – plus Pflegetipps und neue Lieblinge zuerst.
        </p>

        {done ? (
          <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 rounded-full bg-sage-tint px-6 py-4 text-sage-deep">
            <Check className="h-5 w-5" />
            <span className="font-bold">
              Fast geschafft! Bitte bestätige die E-Mail in deinem Postfach.
            </span>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="deine@email.de"
              aria-label="E-Mail-Adresse"
              className="flex-1 rounded-full border border-sand-deep bg-cream px-5 py-3.5 text-ink placeholder:text-ink-soft/70 focus:border-terra focus:outline-none"
            />
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-terra px-7 py-3.5 font-sans text-sm font-bold text-cream transition-colors hover:bg-terra-deep"
            >
              Einlösen
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        )}

        <p className="mx-auto mt-4 max-w-md text-xs text-ink-soft">
          Mit der Anmeldung stimmst du dem Erhalt von E-Mails zu. Abmeldung
          jederzeit möglich. Es gilt unsere Datenschutzerklärung.
        </p>
      </div>
    </section>
  )
}
