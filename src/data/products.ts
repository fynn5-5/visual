import type { ComponentType, SVGProps } from "react"
import { Snowflake, Droplet, Bowl, Bed, Sparkle, Bolt } from "@/components/brand/Icons"

export interface Product {
  id: string
  name: string
  tagline: string
  /** benefit-led description (DSGVO-safe, no health/healing claims) */
  description: string
  bullets: string[]
  price: number
  compareAt?: number
  pet: "Hund" | "Katze" | "Hund & Katze"
  badge?: string
  /** visual gradient for the product card */
  gradient: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  /** which hand-drawn brand illustration to show */
  art: "dog" | "cat"
}

export const products: Product[] = [
  {
    id: "kuehlmatte",
    name: "Kühlmatte »Frosty«",
    tagline: "Sofort-Erfrischung an heißen Tagen",
    description:
      "Selbstkühlendes Gel-Pad, das sich ganz ohne Strom oder Kühlschrank an die Körperwärme deines Lieblings anpasst. Einfach hinlegen – fertig.",
    bullets: [
      "Aktiviert sich durch Druck – kein Strom nötig",
      "Robustes, abwischbares Material",
      "In mehreren Größen für jede Rasse",
    ],
    price: 34.9,
    compareAt: 49.9,
    pet: "Hund & Katze",
    badge: "Bestseller",
    gradient: "linear-gradient(145deg,#cfe3ef 0%,#9fc4d8 100%)",
    icon: Snowflake,
    art: "dog",
  },
  {
    id: "trinkbrunnen",
    name: "Trinkbrunnen »Quell«",
    tagline: "Frisches, fließendes Wasser – den ganzen Tag",
    description:
      "Leises, fließendes Wasser lädt deinen Liebling zum Trinken ein. Mit Aktivkohle-Filter für sauberes, klares Wasser.",
    bullets: [
      "Flüsterleise Pumpe (unter 40 dB)",
      "Filter-Nachschub im Abo – nie wieder nachdenken",
      "2,5 l Tank für mehrere Tage",
    ],
    price: 39.9,
    compareAt: 54.9,
    pet: "Hund & Katze",
    gradient: "linear-gradient(145deg,#dceee0 0%,#a9cdb2 100%)",
    icon: Droplet,
    art: "cat",
  },
  {
    id: "anti-schling-napf",
    name: "Schlemmer-Napf »Langsam«",
    tagline: "Schluss mit dem Runterschlingen",
    description:
      "Das verspielte Labyrinth-Muster verwandelt jede Mahlzeit in eine kleine Suchaufgabe – dein Liebling frisst langsamer und beschäftigt sich nebenbei.",
    bullets: [
      "Rutschfester Boden – bleibt an Ort und Stelle",
      "Spülmaschinenfest, BPA-frei",
      "Für Trocken- und Nassfutter geeignet",
    ],
    price: 24.9,
    compareAt: 34.9,
    pet: "Hund",
    gradient: "linear-gradient(145deg,#f3e6d4 0%,#e0c39a 100%)",
    icon: Bowl,
    art: "dog",
  },
  {
    id: "kuschelbett",
    name: "Kuschelbett »Wolke«",
    tagline: "Der gemütlichste Platz im ganzen Haus",
    description:
      "Flauschiger Donut mit erhöhtem Rand zum Anschmiegen. Der weiche Stoff lädt zum Einkuscheln, Verkriechen und Wohlfühlen ein.",
    bullets: [
      "Erhöhter Rand zum Anlehnen",
      "Boden mit waschbarem Bezug",
      "Extra-weiche, formstabile Füllung",
    ],
    price: 49.9,
    compareAt: 69.9,
    pet: "Hund & Katze",
    badge: "Liebling der Redaktion",
    gradient: "linear-gradient(145deg,#f6ddd2 0%,#e3a98f 100%)",
    icon: Bed,
    art: "cat",
  },
  {
    id: "schnueffelspiel",
    name: "Schnüffelspiel »Fummel«",
    tagline: "Gegen Langeweile an grauen Tagen",
    description:
      "Interaktives Spielzeug, das den natürlichen Spür- und Jagdtrieb weckt. Leckerli verstecken, suchen lassen – beschäftigt und macht müde.",
    bullets: [
      "Fördert konzentriertes Beschäftigen",
      "Faltbar & leicht zu reinigen",
      "Schwierigkeit individuell einstellbar",
    ],
    price: 29.9,
    compareAt: 39.9,
    pet: "Hund & Katze",
    gradient: "linear-gradient(145deg,#e7e3f1 0%,#bdb1dd 100%)",
    icon: Sparkle,
    art: "dog",
  },
  {
    id: "leuchthalsband",
    name: "Leuchthalsband »Glow«",
    tagline: "Sichtbar unterwegs in der dunklen Jahreszeit",
    description:
      "Per USB aufladbares LED-Halsband mit drei Leuchtmodi. So bleibt dein Liebling beim Gassi-Gehen in der Dämmerung gut sichtbar.",
    bullets: [
      "USB-aufladbar – keine Batterien nötig",
      "3 Leuchtmodi, bis zu 8 h Laufzeit",
      "Wasserabweisend & längenverstellbar",
    ],
    price: 22.9,
    compareAt: 32.9,
    pet: "Hund",
    badge: "Herbst-Favorit",
    gradient: "linear-gradient(145deg,#e9e3d6 0%,#d8c08c 100%)",
    icon: Bolt,
    art: "cat",
  },
]

export const heroProduct = products[0]
