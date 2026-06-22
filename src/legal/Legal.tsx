import type { ReactNode } from "react"
import { Logo } from "@/components/brand/Logo"
import { ArrowRight, Shield } from "@/components/brand/Icons"

/** Highlights a value the shop owner still needs to fill in. */
function P({ children }: { children: ReactNode }) {
  return (
    <mark className="rounded bg-terra-tint px-1 py-0.5 font-medium text-terra-deep">
      {children}
    </mark>
  )
}

function H({ id, eyebrow, title }: { id: string; eyebrow: string; title: string }) {
  return (
    <header className="mb-6 border-b border-sand-deep pb-4" id={id}>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-terra">{eyebrow}</p>
      <h2 className="mt-2 font-serif text-3xl text-ink sm:text-4xl">{title}</h2>
    </header>
  )
}

function Sub({ children }: { children: ReactNode }) {
  return <h3 className="mt-7 mb-2 font-serif text-xl text-ink">{children}</h3>
}

function Text({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={`mb-3 leading-relaxed text-ink-soft ${className ?? ""}`}>{children}</p>
}

const tabs = [
  { id: "impressum", label: "Impressum" },
  { id: "datenschutz", label: "Datenschutz" },
  { id: "agb", label: "AGB" },
  { id: "widerruf", label: "Widerruf" },
]

export function Legal() {
  return (
    <div className="bg-cream text-ink">
      {/* header */}
      <header className="sticky top-0 z-30 border-b border-sand-deep/70 bg-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-3">
          <a href="/" aria-label="Zur Startseite">
            <Logo />
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-terra"
          >
            Zur Startseite <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <nav className="mx-auto flex max-w-3xl gap-1 overflow-x-auto px-3 pb-2">
          {tabs.map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              className="whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium text-ink-soft hover:bg-sand hover:text-terra-deep"
            >
              {t.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-10">
        <h1 className="font-serif text-4xl text-ink sm:text-5xl">Rechtliches</h1>

        {/* disclaimer */}
        <div className="mt-6 flex gap-3 rounded-2xl border border-terra/40 bg-terra-tint/40 p-5">
          <Shield className="h-6 w-6 shrink-0 text-terra-deep" />
          <div className="text-sm leading-relaxed text-ink">
            <strong>Wichtig — bitte vor dem Go-live anpassen:</strong> Dies sind{" "}
            <strong>Vorlagen</strong>, keine Rechtsberatung. Alle{" "}
            <span className="rounded bg-terra-tint px-1 text-terra-deep">farbig markierten</span>{" "}
            Stellen musst du durch deine echten Daten ersetzen. Lass die Texte
            vor Veröffentlichung von einer spezialisierten Kanzlei bzw. über{" "}
            <strong>Trusted Shops Rechtstexte</strong> oder die{" "}
            <strong>IT-Recht Kanzlei</strong> prüfen/erstellen — das deutsche
            E-Commerce-Recht ist abmahnstark.
          </div>
        </div>

        {/* IMPRESSUM */}
        <section className="mt-14 scroll-mt-32">
          <H id="impressum" eyebrow="§ 5 DDG" title="Impressum" />
          <Sub>Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)</Sub>
          <Text>
            <P>[Firmenname / Vor- und Nachname]</P>
            <br />
            <P>[Straße und Hausnummer]</P>
            <br />
            <P>[PLZ und Ort]</P>
            <br />
            <P>[Land]</P>
          </Text>
          <Sub>Vertreten durch</Sub>
          <Text><P>[Name der vertretungsberechtigten Person, bei UG/GmbH: Geschäftsführer:in]</P></Text>
          <Sub>Kontakt</Sub>
          <Text>
            Telefon: <P>[Telefonnummer]</P>
            <br />
            E-Mail: <P>[E-Mail-Adresse]</P>
          </Text>
          <Sub>Registereintrag (falls vorhanden)</Sub>
          <Text>
            Registergericht: <P>[z. B. Amtsgericht …]</P> · Registernummer:{" "}
            <P>[HRB …]</P>
          </Text>
          <Sub>Umsatzsteuer-ID</Sub>
          <Text>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:{" "}
            <P>[DE………]</P>
          </Text>
          <Sub>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</Sub>
          <Text>
            <P>[Name]</P>, <P>[Anschrift wie oben]</P>
          </Text>
          <Sub>Verbraucherstreitbeilegung / Universalschlichtungsstelle</Sub>
          <Text>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
            vor einer Verbraucherschlichtungsstelle teilzunehmen. (Diese Angabe
            ggf. anpassen, falls eine Teilnahme gewünscht/erforderlich ist.)
          </Text>
        </section>

        {/* DATENSCHUTZ */}
        <section className="mt-16 scroll-mt-32">
          <H id="datenschutz" eyebrow="DSGVO" title="Datenschutzerklärung" />
          <Text>
            Der Schutz deiner persönlichen Daten ist uns wichtig. Wir verarbeiten
            personenbezogene Daten gemäß DSGVO und BDSG. Nachfolgend informieren
            wir dich über Art, Umfang und Zweck der Verarbeitung.
          </Text>

          <Sub>1. Verantwortlicher</Sub>
          <Text>
            <P>[Name]</P>, <P>[Anschrift]</P>, E-Mail: <P>[E-Mail]</P>
          </Text>

          <Sub>2. Hosting / Shop-System (Shopify)</Sub>
          <Text>
            Unser Shop wird bei <strong>Shopify International Ltd.</strong>{" "}
            gehostet. Beim Besuch werden technisch notwendige Daten (z. B.
            IP-Adresse, Browser, Zeitpunkt) verarbeitet. Rechtsgrundlage:
            Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherem
            Betrieb). Mit Shopify besteht ein Auftragsverarbeitungsvertrag (AVV).
          </Text>

          <Sub>3. Cookies & Einwilligung</Sub>
          <Text>
            Nicht notwendige Cookies (z. B. Marketing/Statistik) setzen wir nur
            mit deiner Einwilligung über unser Consent-Banner (Art. 6 Abs. 1
            lit. a DSGVO). Du kannst deine Einwilligung jederzeit mit Wirkung für
            die Zukunft widerrufen.
          </Text>

          <Sub>4. Bestellung & Zahlungsabwicklung</Sub>
          <Text>
            Zur Vertragserfüllung verarbeiten wir die von dir angegebenen Daten
            (Name, Adresse, E-Mail, Bestelldaten). Rechtsgrundlage:
            Art. 6 Abs. 1 lit. b DSGVO. Zahlungsdaten werden von den jeweiligen
            Zahlungsdienstleistern (z. B. <P>[PayPal, Klarna, Shopify Payments]</P>)
            verarbeitet. Zur Lieferung geben wir Daten an Versanddienstleister und{" "}
            <P>[Lieferant/Fulfillment, z. B. CJ Dropshipping]</P> weiter.
          </Text>

          <Sub>5. Newsletter (Double-Opt-in)</Sub>
          <Text>
            Wenn du dich anmeldest, verarbeiten wir deine E-Mail-Adresse zum
            Versand per <P>[Klaviyo / Shopify Email]</P>. Die Anmeldung erfolgt im
            Double-Opt-in-Verfahren. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.
            Abmeldung jederzeit über den Link in jeder E-Mail.
          </Text>

          <Sub>6. Reichweitenmessung & Marketing</Sub>
          <Text>
            Nach deiner Einwilligung nutzen wir ggf.{" "}
            <P>[Meta-Pixel, Google Analytics 4, TikTok-Pixel]</P> zur Analyse und
            Ausspielung von Werbung. Dabei können Daten in Drittländer (z. B. USA)
            übermittelt werden; Grundlage sind Standardvertragsklauseln.
            Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.
          </Text>

          <Sub>7. Deine Rechte</Sub>
          <Text>
            Du hast das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16),
            Löschung (Art. 17), Einschränkung (Art. 18), Datenübertragbarkeit
            (Art. 20) sowie Widerspruch (Art. 21). Zudem kannst du dich bei einer
            Aufsichtsbehörde beschweren. Kontakt: <P>[E-Mail]</P>.
          </Text>
          <Text className="text-sm">
            Hinweis: Diese Erklärung deckt Standardfälle ab. Ergänze sie um alle
            tatsächlich eingesetzten Tools/Dienste. Empfehlung: generierter,
            gepflegter Datenschutztext (Trusted Shops / IT-Recht Kanzlei).
          </Text>
        </section>

        {/* AGB */}
        <section className="mt-16 scroll-mt-32">
          <H id="agb" eyebrow="Vertragsbedingungen" title="Allgemeine Geschäftsbedingungen" />

          <Sub>§ 1 Geltungsbereich & Anbieter</Sub>
          <Text>
            Diese AGB gelten für alle Bestellungen über unseren Onlineshop
            zwischen <P>[Anbieter/Firmenname]</P> („wir") und dir als Kund:in.
            Maßgeblich ist die zum Zeitpunkt der Bestellung gültige Fassung.
          </Text>

          <Sub>§ 2 Vertragsschluss</Sub>
          <Text>
            Die Produktdarstellung im Shop ist kein bindendes Angebot, sondern
            eine Aufforderung zur Bestellung. Mit Klick auf{" "}
            <strong>„zahlungspflichtig bestellen"</strong> gibst du ein
            verbindliches Angebot ab. Der Vertrag kommt mit unserer
            Auftragsbestätigung bzw. Versand der Ware zustande.
          </Text>

          <Sub>§ 3 Preise & Versandkosten</Sub>
          <Text>
            Alle Preise verstehen sich inkl. gesetzlicher MwSt. Versandkosten
            werden vor Abschluss der Bestellung gesondert ausgewiesen. Ab einem
            Bestellwert von <P>[39 €]</P> liefern wir versandkostenfrei innerhalb{" "}
            <P>[Deutschlands]</P>.
          </Text>

          <Sub>§ 4 Zahlung</Sub>
          <Text>
            Es stehen folgende Zahlungsarten zur Verfügung:{" "}
            <P>[PayPal, Klarna, Kreditkarte, …]</P>. Bei Zahlungsverzug gelten die
            gesetzlichen Regelungen.
          </Text>

          <Sub>§ 5 Lieferung & Lieferzeit</Sub>
          <Text>
            Die Lieferung erfolgt aus unserem EU-Lager. Die voraussichtliche
            Lieferzeit beträgt <P>[3–8 Werktage]</P> und wird auf der
            Produktseite angegeben. Teillieferungen sind möglich.
          </Text>

          <Sub>§ 6 Eigentumsvorbehalt</Sub>
          <Text>Die Ware bleibt bis zur vollständigen Bezahlung unser Eigentum.</Text>

          <Sub>§ 7 Widerrufsrecht</Sub>
          <Text>
            Als Verbraucher:in steht dir ein gesetzliches Widerrufsrecht zu. Die
            Einzelheiten findest du in der{" "}
            <a href="#widerruf" className="font-medium text-terra hover:underline">
              Widerrufsbelehrung
            </a>
            .
          </Text>

          <Sub>§ 8 Gewährleistung</Sub>
          <Text>
            Es gilt das gesetzliche Mängelhaftungsrecht. Bei berechtigten Mängeln
            hast du die gesetzlichen Ansprüche.
          </Text>

          <Sub>§ 9 Streitbeilegung</Sub>
          <Text>
            Die EU-Kommission stellt eine Plattform zur Online-Streitbeilegung
            (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              className="font-medium text-terra hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              ec.europa.eu/consumers/odr
            </a>
            . Unsere E-Mail-Adresse findest du im Impressum.
          </Text>
        </section>

        {/* WIDERRUF */}
        <section className="mt-16 scroll-mt-32">
          <H id="widerruf" eyebrow="Verbraucher:innen" title="Widerrufsbelehrung" />

          <Sub>Widerrufsrecht</Sub>
          <Text>
            Du hast das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
            diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage
            ab dem Tag, an dem du oder ein:e von dir benannte:r Dritte:r, die/der
            nicht der Beförderer ist, die Waren in Besitz genommen hast/hat.
          </Text>
          <Text>
            Um dein Widerrufsrecht auszuüben, musst du uns (<P>[Name]</P>,{" "}
            <P>[Anschrift]</P>, <P>[E-Mail]</P>, <P>[Telefon]</P>) mittels einer
            eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder
            eine E-Mail) über deinen Entschluss, diesen Vertrag zu widerrufen,
            informieren. Zur Wahrung der Widerrufsfrist reicht es, dass du die
            Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der
            Widerrufsfrist absendest.
          </Text>

          <Sub>Folgen des Widerrufs</Sub>
          <Text>
            Wenn du diesen Vertrag widerrufst, haben wir dir alle Zahlungen, die
            wir von dir erhalten haben, einschließlich der Lieferkosten (mit
            Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass du
            eine andere Art der Lieferung als die von uns angebotene, günstigste
            Standardlieferung gewählt hast), unverzüglich und spätestens binnen
            vierzehn Tagen zurückzuzahlen. Für diese Rückzahlung verwenden wir
            dasselbe Zahlungsmittel, das du bei der ursprünglichen Transaktion
            eingesetzt hast, es sei denn, mit dir wurde ausdrücklich etwas anderes
            vereinbart.
          </Text>
          <Text>
            Wir können die Rückzahlung verweigern, bis wir die Waren wieder
            zurückerhalten haben oder bis du den Nachweis erbracht hast, dass du
            die Waren zurückgesandt hast, je nachdem, welches der frühere
            Zeitpunkt ist. Du trägst die unmittelbaren Kosten der Rücksendung der
            Waren. (Diese Angabe ggf. anpassen, falls du die Rücksendekosten
            übernimmst.)
          </Text>

          <Sub>Muster-Widerrufsformular</Sub>
          <div className="rounded-2xl border border-sand-deep bg-sand p-5 text-sm leading-relaxed text-ink-soft">
            <p className="mb-3 text-ink">
              (Wenn du den Vertrag widerrufen willst, fülle dieses Formular aus
              und sende es zurück.)
            </p>
            <p>— An <P>[Name, Anschrift, E-Mail]</P>:</p>
            <p className="mt-2">
              — Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*)
              abgeschlossenen Vertrag über den Kauf der folgenden Waren (*):
            </p>
            <p className="mt-2">— Bestellt am (*)/erhalten am (*):</p>
            <p>— Name des/der Verbraucher(s):</p>
            <p>— Anschrift des/der Verbraucher(s):</p>
            <p>— Unterschrift (nur bei Mitteilung auf Papier):</p>
            <p>— Datum:</p>
            <p className="mt-2 text-xs">(*) Unzutreffendes streichen.</p>
          </div>
        </section>

        {/* footer */}
        <footer className="mt-16 border-t border-sand-deep pt-6 text-sm text-ink-soft">
          <a href="/" className="font-medium text-terra hover:underline">
            ← Zurück zur Startseite
          </a>
          <p className="mt-2">&copy; {new Date().getFullYear()} Treuherz</p>
        </footer>
      </main>
    </div>
  )
}
