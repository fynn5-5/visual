# 3 · Shopify-Setup (Schritt für Schritt)

Ziel: Ein **rechtssicherer, conversion-starker** Store in 1–2 Tagen. Reihenfolge von oben nach unten abarbeiten.

## 3.1 Account & Grundeinstellungen

1. **Shopify-Account** anlegen → Trial starten, danach **Basic Plan (~32 €/Mo)**.
2. **Store-Sprache**: Deutsch als Hauptsprache. (Mehrsprachig für AT/CH = Deutsch reicht; CH ggf. CHF.)
3. **Währung**: EUR (für CH später CHF via Shopify Markets).
4. **Standard/Adresse**: korrekte Unternehmensadresse (für Impressum, siehe `06`).
5. **Store-Name & Domain**: eigene Domain kaufen (z. B. über Shopify oder extern, ~10–15 €/Jahr). Siehe Markenname in `04`.

## 3.2 Theme & Design

- **Theme**: Starte mit kostenlosem, schnellem Theme **„Dawn"** (oder Premium wie „Impulse"/„Shrine" für mehr Conversion-Features). Performance > Schnickschnack.
- Design-System (Farben, Fonts, Logo) → siehe [`04-branding-store-design.md`](./04-branding-store-design.md).
- **Mobile-First**: 70–80 % des Traffics ist mobil. Alles am Handy prüfen.
- **Ladezeit**: Bilder komprimieren (WebP), wenige Apps, Core Web Vitals beachten.

## 3.3 Zahlungsmethoden (DACH — kritisch!)

In DACH erwarten Kund:innen bestimmte Methoden. **Fehlende Methoden = Kaufabbruch.**

| Methode | Priorität | Warum |
|---|---|---|
| **PayPal** | ⭐ Muss | Vertrauensanker Nr. 1 in DE |
| **Klarna** (Rechnung/Raten) | ⭐ Muss | „Kauf auf Rechnung" ist in DACH extrem wichtig |
| **Kreditkarte** (via Shopify Payments) | ⭐ Muss | Standard |
| Sofort / SEPA / Apple/Google Pay | ✅ Nice | Erhöht Conversion weiter |

→ **Shopify Payments** aktivieren (in DE verfügbar) + **PayPal** + **Klarna**. Test-Bestellung durchführen.

## 3.4 Versand

1. **Versandzonen**: DE/AT separat, EU, ggf. CH (Zoll beachten).
2. **Versandkosten transparent** anzeigen (rechtlich Pflicht, siehe `06`).
3. Strategie: **Gratisversand ab Schwelle** (z. B. ab 39 €) zur AOV-Steigerung; darunter Pauschale (z. B. 3,95 €).
4. **Lieferzeit ehrlich** kommunizieren (z. B. „3–8 Werktage", EU-Lager). Keine Fantasie-Versprechen.

## 3.5 Lieferanten-Anbindung (Dropshipping-App)

- **CJ Dropshipping App** (empfohlen, EU-Lager) **oder** **DSers** (AliExpress).
- Produkte importieren → Titel/Beschreibung/Bilder **selbst überarbeiten** (kein Copy-Paste-Chinglish!).
- **Auto-Fulfillment** einrichten (Bestellung → Lieferant automatisch).
- **Preisregeln** setzen (z. B. „Einkauf × 3,5, runden auf ,90").

## 3.6 Pflicht-Apps (schlank halten!)

| Zweck | App | Hinweis |
|---|---|---|
| Lieferant/Fulfillment | CJ Dropshipping **oder** DSers | Pflicht |
| Reviews / Social Proof | **Loox** oder Judge.me | Foto-Reviews = Conversion-Boost |
| Conversion-Suite | **Vitals** (All-in-One: Upsells, Bundles, Sticky Cart, Trust Badges) | spart viele Einzel-Apps |
| E-Mail-Marketing | **Klaviyo** (oder Shopify Email zum Start) | Flows = Profit (siehe `05`) |
| Rechtstexte (DE) | **Trusted Shops Rechtstexte** / IT-Recht Kanzlei (AGB-Schnittstelle) | DSGVO-konform (siehe `06`) |
| Cookie-Consent | **Consentmo** / CookieYes / Pandectes | DSGVO-Pflicht |
| Trust-Siegel (DACH) | **Trusted Shops** | Erhöht Vertrauen massiv in DE |

> Weniger ist mehr: Jede App kostet Ladezeit & Geld. Starte mit dem Minimum.

## 3.7 Produktseiten (Conversion)

Jede Produktseite braucht:
- **Klares Hauptbild** + Lifestyle-Bilder + (idealerweise) kurzes Video/GIF
- **Nutzen-orientierter Titel** („Selbstkühlende Matte – Sofort-Erfrischung für heiße Tage")
- **Benefit-Bullets** (nicht nur Features): Problem → Lösung → Ergebnis
- **Social Proof**: Reviews mit Fotos, „Über X.000 zufriedene Tierbesitzer"
- **Trust-Elemente**: sichere Zahlung, Geld-zurück, EU-Versand, Trusted Shops
- **Klarer CTA-Button**: rechtlich in DE **„Zahlungspflichtig bestellen"** im Checkout (siehe `06`)
- **FAQ** (Lieferzeit, Material, Größen, Rückgabe) → senkt Support & Abbrüche

## 3.8 Checkout & Test

1. Checkout aktivieren, **Express-Checkout** (PayPal/Apple Pay) anzeigen.
2. **Vollständige Test-Bestellung** mit echter Zahlung (klein) → Geld zurückbuchen.
3. Bestätigungs-E-Mails prüfen (Branding, Lieferzeit-Hinweis).
4. **Abandoned-Cart-Flow** aktivieren (siehe `05`).

## 3.9 Tracking & Analytics (vor Ads!)

- **Meta Pixel** + **Conversions API (CAPI)** einrichten (Shopify-Integration).
- **TikTok Pixel** (falls TikTok Ads).
- **GA4** + Shopify Analytics.
- **Wichtig DSGVO**: Tracking erst **nach Cookie-Consent** laden (Consent Mode). Siehe `06`.
- Test-Events prüfen (Meta Events Manager: „Test Events").

➡️ Weiter mit [`04-branding-store-design.md`](./04-branding-store-design.md)
