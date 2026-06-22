# 10 · Erste Schritte in Shopify (Klick-für-Klick)

Du hast den Shop erstellt — super! Arbeite diese Liste **von oben nach unten** ab.
Plane ca. 1 Tag (mit Pausen). Alles ist später änderbar; erst am Ende gehst du live.

> 💡 Die Texte für Produkte liegen in [`08-produkttexte.md`](./08-produkttexte.md),
> die Farben/Logo im Haupt-[`README.md`](../README.md) (Design-System).
> Dein Logo als Bild: `public/logo.png` (Lockup) und `public/logo-mark.png` (Icon).

---

## 0) Store-Name vereinheitlichen (2 Min)
Du hast den Shop „treueherz" genannt — unsere Marke heißt **Treuherz** (ein „e").
- **Einstellungen → Allgemein → Shopname**: auf `Treuherz` setzen (Schreibweise konsistent halten — das taucht später überall auf).
- Falls du bewusst „Treueherz" willst: sag Bescheid, dann passe ich Logo/Texte an.

## 1) Grundeinstellungen (10 Min)
**Einstellungen → Allgemein:**
- [ ] Shopname: `Treuherz`
- [ ] Shop-Währung: **EUR** (Achtung: später schwer änderbar)
- [ ] Adresse/Zeitzone korrekt (für Impressum & Rechnungen)

**Einstellungen → Sprache / Märkte:** Hauptsprache **Deutsch**.

## 2) Theme installieren & Branding (45 Min)
**Vertriebskanäle → Onlineshop → Themes:**
- [ ] Standard-Theme **„Dawn"** behalten (schnell & kostenlos) → **Anpassen**
- [ ] **Logo hochladen** (`public/logo.png`) → im Theme-Editor unter *Header*
- [ ] **Favicon** hochladen (`public/logo-mark.png`) → Theme-Einstellungen → *Favicon*
- [ ] **Farben** setzen (Theme-Einstellungen → Farben):
  - Akzent/Buttons: `#E07856` (Terrakotta)
  - Text: `#2B2724` · Hintergrund: `#FAF6F0`
  - Zweitfarbe: `#7C9A82` (Salbei)
- [ ] **Schriften**: Headlines Serif (z. B. „Instrument Serif"/Alternative), Text Sans
- [ ] **Startseite-Abschnitte** (im Editor hinzufügen, in dieser Reihenfolge):
  1. Bild mit Text (Hero): glückliches Tier + „Damit dein Liebling sich wohlfühlt." + Button
  2. Vorteils-Leiste: EU-Versand · Sichere Zahlung · 14 Tage Rückgabe
  3. Ausgewählte Produkte (Bestseller)
  4. Text: kurze Marken-Story
  5. Bewertungen (sobald App installiert)
  6. Newsletter-Anmeldung

## 3) Erstes Produkt anlegen (20 Min)
**Produkte → Produkt hinzufügen** — beginne mit dem Hero „Frosty":
- [ ] Titel: `Kühlmatte »Frosty«`
- [ ] Beschreibung: aus [`08-produkttexte.md`](./08-produkttexte.md) kopieren
- [ ] Bilder: echte Lieferanten-/eigene Fotos (siehe Schritt 7)
- [ ] **Preis**: 34,90 € · **Vergleichspreis**: 49,90 € (zeigt Rabatt)
- [ ] Varianten (Größe: S/M/L) anlegen
- [ ] **SEO** (unten): Meta-Titel/-Beschreibung aus dem Produkttext
- [ ] Danach die weiteren 5 Produkte (oder erst nach Test des Heros)

## 4) Sammlungen (10 Min)
**Produkte → Sammlungen → Sammlung erstellen:**
- [ ] „Für Hunde", „Für Katzen", „Sommer-Aktion" — Produkte zuordnen
- [ ] Diese Sammlungen später ins Hauptmenü (Schritt 8)

## 5) Zahlungen aktivieren (20 Min) — wichtig für DACH!
**Einstellungen → Zahlungen:**
- [ ] **Shopify Payments** aktivieren (Kreditkarte; Identität/Bankdaten hinterlegen)
- [ ] **PayPal** verbinden (Pflicht-Vertrauen in DE)
- [ ] **Klarna** aktivieren (Kauf auf Rechnung/Raten — in DACH enorm wichtig)
- [ ] Optional: Apple Pay / Google Pay (kommt mit Shopify Payments)

## 6) Versand einrichten (15 Min)
**Einstellungen → Versand und Zustellung:**
- [ ] Versandzone **Deutschland** (+ Österreich) anlegen
- [ ] Pauschale z. B. **3,95 €**, und **Gratisversand ab 39 €** (Bedingung: Bestellwert ≥ 39 €)
- [ ] Lieferzeit ehrlich kommunizieren (3–8 Werktage)

## 7) Lieferant verbinden (Dropshipping-App) (30 Min)
**Apps → Shopify App Store:**
- [ ] **DSers** (AliExpress) **oder** **CJ Dropshipping** installieren
- [ ] Tipp DACH: Produkte mit **EU-Lager** wählen (kürzere Lieferzeit)
- [ ] Hero-Produkt im Lieferanten-Tool suchen → in deinen Shop importieren/verknüpfen
- [ ] **Bilder & Titel** übernehmen, Beschreibung mit unserem Text ersetzen
- [ ] **Auto-Fulfillment** aktivieren (Bestellung → Lieferant automatisch)
- [ ] **Muster bestellen** (Qualität prüfen + eigene Fotos/Videos für Ads!)

## 8) Menü & Seiten (15 Min)
**Vertriebskanäle → Onlineshop → Menüs:**
- [ ] Hauptmenü: Hund · Katze · Sommer-Aktion · Über uns
- [ ] Footer-Menü: Impressum · Datenschutz · AGB · Widerruf · Kontakt

## 9) Rechtstexte einbinden (20 Min) — vor dem Live-Gang!
**Einstellungen → Richtlinien (Policies):** Datenschutz, AGB, Widerruf, Versand eintragen.
- [ ] Inhalte aus unserer Vorlage `src/legal/Legal.tsx` bzw. `/rechtliches.html` übernehmen
- [ ] **Impressum** als eigene **Seite** anlegen (Vertriebskanäle → Onlineshop → Seiten)
- [ ] **Platzhalter durch echte Daten ersetzen** und **prüfen lassen** (Trusted Shops / IT-Recht Kanzlei)
- [ ] **Cookie-Banner**: Shopify *Datenschutz & Cookies* aktivieren oder App (z. B. „Pandectes")
- [ ] Korrekter Bestell-Button **„zahlungspflichtig bestellen"** (Standard im Shopify-Checkout)

## 10) Apps (schlank halten) (15 Min)
- [ ] **Reviews**: Loox oder Judge.me (Foto-Bewertungen)
- [ ] **Trust/Conversion**: Vitals (All-in-One) — optional
- [ ] **E-Mail**: Klaviyo (Welcome- & Warenkorb-Flows)
- [ ] **Trusted Shops** (DACH-Vertrauenssiegel)

## 11) Domain verbinden (15 Min)
**Einstellungen → Domains:**
- [ ] `treuherz.de` kaufen (über Shopify oder extern) und verbinden
- [ ] Primäre Domain festlegen

## 12) Testbestellung & Live gehen (20 Min)
- [ ] **Testbestellung** mit echter Karte (kleiner Betrag) → danach stornieren/erstatten
- [ ] Bestätigungs-E-Mails prüfen (Branding, Lieferzeit)
- [ ] Mobil testen (70–80 % der Käufer!)
- [ ] **Passwortschutz entfernen**: Vertriebskanäle → Onlineshop → Einstellungen → „Passwort aktiviert" deaktivieren → **Shop ist live** 🎉

---

## Danach: Verkaufen
- Tracking (Meta-Pixel/CAPI) einrichten → siehe [`03-shopify-setup.md`](./03-shopify-setup.md) Abschnitt 3.9
- Ads schalten mit den fertigen Scripts → [`09-ad-scripts.md`](./09-ad-scripts.md)
- KPIs tracken → [`kpi-tracking.csv`](./kpi-tracking.csv)

> Stuck an einem Schritt? Sag mir einfach welcher — ich gehe ihn mit dir im Detail durch.
