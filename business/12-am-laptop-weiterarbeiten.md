# 12 · Am Laptop weiterarbeiten (VS Code)

So holst du das Projekt auf deinen Laptop und startest die Vorschau — auch wenn
du noch nie mit Code gearbeitet hast. Dauer: ~15 Min einmalig.

## Was wo liegt
- **GitHub-Repo:** `fynn5-5/visual`
- **Dein Branch:** `claude/ai-dropshipping-ecommerce-ygan5s`  ← hier ist alles drin

## 1) Einmalig installieren
- **Node.js** (LTS-Version): https://nodejs.org → herunterladen & installieren
- **VS Code**: https://code.visualstudio.com → installieren
- **Git**: https://git-scm.com/downloads → installieren

## 2) Projekt holen (klonen)
**Einfachster Weg über VS Code:**
1. VS Code öffnen → Taste **F1** (oder Strg/Cmd+Shift+P) → tippe **„Git: Clone"** → Enter
2. URL einfügen: `https://github.com/fynn5-5/visual.git`
3. Ordner zum Speichern wählen → „Öffnen"
4. Unten rechts/links auf den **Branch-Namen** klicken (steht evtl. „main") → wähle
   **`claude/ai-dropshipping-ecommerce-ygan5s`**

> Alternativ im Terminal:
> ```bash
> git clone https://github.com/fynn5-5/visual.git
> cd visual
> git checkout claude/ai-dropshipping-ecommerce-ygan5s
> ```

## 3) Starten
In VS Code oben **Terminal → Neues Terminal**, dann:
```bash
npm install      # einmalig: lädt alle Bausteine
npm run dev      # startet die Vorschau
```
Es erscheint eine Adresse wie **http://localhost:5173** → im Browser öffnen.
- Startseite: `http://localhost:5173/`
- Ad-Landingpage: `http://localhost:5173/frosty.html`
- Rechtsseiten: `http://localhost:5173/rechtliches.html`

Änderungen im Code werden **sofort live** im Browser angezeigt (Hot Reload).

## 4) Wichtige Dateien (zum Anpassen)
| Was | Datei |
|---|---|
| Produkte, Preise, Texte | `src/data/products.ts` |
| Farben & Schriften | `src/index.css` (Block `@theme`) |
| Startseiten-Abschnitte | `src/components/sections/…` |
| Logo | `src/components/brand/Logo.tsx` · `public/logo.svg` |
| Rechtstexte (Platzhalter ausfüllen!) | `src/legal/Legal.tsx` |
| Geschäfts-Playbook & Anleitungen | Ordner `business/` |

## 5) Änderungen sichern (committen & pushen)
Wenn du etwas geändert hast und es behalten willst:
```bash
git add -A
git commit -m "Meine Änderung beschreiben"
git push
```

## ⚠️ Denk dran
Diese Website ist die **Design-Vorlage / optionale Ad-Landingpage** — dein echter
**Verkauf läuft über Shopify** (siehe `10-shopify-erste-schritte.md`). Den Code
brauchst du nur, wenn du das Design anpassen oder die Landingpage nutzen willst.

> Fragen beim Einrichten? Schreib mir einfach, wo du hängst.
