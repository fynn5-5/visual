# 🐾 Treuherz

Marken-Landingpage für **Treuherz** – durchdachtes Zubehör für Hund & Katze
(AI-Dropshipping, Pet-Nische, DACH). Eigenständiges Projekt, gebaut mit
React 19 + Vite + Tailwind v4.

> Das vollständige Geschäfts-Playbook (Strategie, Produktrecherche, Shopify-Setup,
> Marketing, Recht, Ad-Scripts, KPI-Sheet) liegt im Ordner [`business/`](./business/README.md).

## Tech-Stack

- **React 19** + **TypeScript**
- **Vite 8** (Dev-Server & Build)
- **Tailwind CSS v4** (Design-Tokens in `src/index.css`, `@theme`)
- Eigene Inline-SVG-Icons (keine Icon-Library-Abhängigkeit)

## Entwicklung

```bash
npm install
npm run dev      # Dev-Server (http://localhost:5173)
npm run build    # Production-Build (tsc + vite)
npm run lint     # ESLint
npm run preview  # Build lokal ansehen
```

## Projektstruktur

```
src/
├─ App.tsx                     # Seiten-Komposition
├─ index.css                   # Design-System (Farben, Fonts, Utilities)
├─ data/products.ts            # Produktkatalog (6 Produkte + Texte)
├─ components/
│  ├─ brand/   Icons.tsx, Logo.tsx
│  ├─ layout/  Navbar.tsx, Footer.tsx
│  └─ sections/ Hero, TrustBar, Bestseller, Products, Story, Reviews, Newsletter
business/                      # Geschäfts-Playbook (siehe README dort)
```

## Design-System „Treuherz" (warm & trust)

| Token | Farbe | Einsatz |
|---|---|---|
| `terra` | `#E07856` | Primär / CTA |
| `sage` / `sage-deep` | `#7C9A82` / `#3F6B4C` | Sekundär / Trust |
| `cream` / `sand` | `#FAF6F0` / `#F1E8DC` | Hintergründe |
| `ink` / `ink-soft` | `#2B2724` / `#6B6259` | Text |

Fonts: Instrument Serif (Headlines), Instrument Sans (Text), Geist Mono (Labels).

## Hinweis

Diese Landingpage ist das Marken-Frontend. Shop, Warenkorb, Checkout & Zahlung
laufen über **Shopify** (siehe `business/03-shopify-setup.md`). Die „In den
Warenkorb"-Buttons sind aktuell Platzhalter (`#shop`) und werden mit dem
Shopify-Buy-Button bzw. der Storefront verlinkt.
