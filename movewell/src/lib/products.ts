export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  comparePrice?: number;
  category: "foam-rollers" | "gloves-wraps" | "yoga-pilates";
  features: string[];
  badge?: string;
  image: string;
};

export type Category = {
  slug: string;
  name: string;
  description: string;
  icon: string;
};

export const categories: Category[] = [
  {
    slug: "foam-rollers",
    name: "Faszienrollen",
    description: "Löse Verspannungen und verbessere deine Regeneration mit professionellen Faszienrollen.",
    icon: "roller",
  },
  {
    slug: "gloves-wraps",
    name: "Handschuhe & Wraps",
    description: "Maximaler Grip und Handgelenkschutz für intensives Training.",
    icon: "glove",
  },
  {
    slug: "yoga-pilates",
    name: "Yoga & Pilates",
    description: "Hochwertiges Zubehör für deine Yoga- und Pilates-Praxis.",
    icon: "yoga",
  },
];

export const products: Product[] = [
  {
    id: "fr-001",
    slug: "deep-tissue-foam-roller",
    name: "Deep Tissue Faszienrolle",
    description: "Strukturierte Oberfläche für tiefenwirksame Massage und schnellere Regeneration.",
    longDescription: "Unsere Deep Tissue Faszienrolle wurde für Sportler entwickelt, die eine intensive Tiefengewebsmassage benötigen. Die speziell strukturierte Oberfläche erreicht auch tieferliegende Faszien und löst selbst hartnäckige Verklebungen. Hergestellt aus hochdichtem EVA-Schaum, der auch bei täglicher Nutzung seine Form behält.",
    price: 34.99,
    comparePrice: 44.99,
    category: "foam-rollers",
    features: ["Hochdichter EVA-Schaum", "Strukturierte Oberfläche", "33 cm Länge", "Inkl. Übungsguide"],
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1620188526357-ff08e03da266?w=600&h=600&fit=crop&q=80",
  },
  {
    id: "fr-002",
    slug: "smooth-recovery-roller",
    name: "Smooth Recovery Roller",
    description: "Glatte Oberfläche für sanfte Regeneration und tägliches Faszientraining.",
    longDescription: "Der Smooth Recovery Roller eignet sich perfekt für Einsteiger und für die tägliche Routine nach dem Training. Die glatte Oberfläche bietet gleichmäßigen Druck und ist besonders schonend zu empfindlichen Bereichen. Ideal für Aufwärm- und Cool-Down-Routinen.",
    price: 24.99,
    category: "foam-rollers",
    features: ["Glatte EPP-Oberfläche", "Leichtgewicht (280g)", "45 cm Länge", "Für Einsteiger geeignet"],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop&q=80",
  },
  {
    id: "fr-003",
    slug: "compact-travel-roller",
    name: "Compact Travel Roller",
    description: "Kompakte Faszienrolle für unterwegs — passt in jede Sporttasche.",
    longDescription: "Dein Regenerations-Tool für unterwegs. Der Compact Travel Roller ist nur 15 cm lang und passt in jede Tasche. Trotz seiner kompakten Größe bietet er dank des hochdichten Kerns die gleiche Wirksamkeit wie unsere Full-Size Rollen.",
    price: 19.99,
    category: "foam-rollers",
    features: ["Ultra-kompakt (15 cm)", "Hochdichter Kern", "Nur 150g", "Inkl. Mesh-Beutel"],
    badge: "Neu",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=600&fit=crop&q=80",
  },
  {
    id: "gw-001",
    slug: "pro-wrist-wraps",
    name: "Pro Wrist Wraps",
    description: "Elastische Handgelenkbandagen mit maximaler Stabilität für schwere Lifts.",
    longDescription: "Die Pro Wrist Wraps bieten professionelle Handgelenkunterstützung für Powerlifting, CrossFit und intensives Krafttraining. Das elastische Material mit verstärkten Nähten sorgt für optimale Stabilität ohne die Bewegungsfreiheit einzuschränken. Mit Daumenschlaufe für schnelles An- und Ablegen.",
    price: 19.99,
    comparePrice: 27.99,
    category: "gloves-wraps",
    features: ["60 cm Länge", "Elastisches Gewebe", "Daumenschlaufe", "Klettverschluss"],
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=600&fit=crop&q=80",
  },
  {
    id: "gw-002",
    slug: "ventilated-training-gloves",
    name: "Ventilated Training Gloves",
    description: "Atmungsaktive Trainingshandschuhe mit verstärkter Handfläche.",
    longDescription: "Entwickelt für Komfort bei langen Trainingseinheiten. Die großflächigen Mesh-Einsätze sorgen für optimale Belüftung, während die verstärkte Handfläche aus Kunstleder maximalen Grip an Hanteln und Geräten bietet. Das ergonomische Design verhindert Schwielen und Druckstellen.",
    price: 29.99,
    category: "gloves-wraps",
    features: ["Mesh-Belüftung", "Kunstleder-Handfläche", "Ergonomischer Schnitt", "Waschbar"],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=600&fit=crop&q=80",
  },
  {
    id: "gw-003",
    slug: "heavy-lift-wrist-support",
    name: "Heavy Lift Wrist Support",
    description: "Verstärkte Bandagen für maximale Unterstützung bei Maximalkraft.",
    longDescription: "Für Lifter, die das Maximum aus ihrem Training herausholen wollen. Der Heavy Lift Wrist Support bietet die stärkste Handgelenkstabilität in unserem Sortiment. Das dreischichtige Material kombiniert Steifigkeit mit Komfort und eignet sich für Bench Press, Overhead Press und schwere Curls.",
    price: 24.99,
    category: "gloves-wraps",
    features: ["Dreischichtiges Material", "Extra-breit (8 cm)", "Verstärkte Nähte", "Competition-Grade"],
    image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=600&h=600&fit=crop&q=80",
  },
  {
    id: "yp-001",
    slug: "premium-yoga-mat-set",
    name: "Premium Yoga Mat Set",
    description: "Rutschfeste TPE-Yogamatte mit Tragegurt und Alignment-Markierungen.",
    longDescription: "Das Premium Yoga Mat Set enthält alles, was du für deine Praxis brauchst. Die 6 mm dicke TPE-Matte bietet optimale Dämpfung und Griffigkeit auf beiden Seiten. Eingelassene Alignment-Markierungen helfen dir, deine Positionen korrekt auszurichten. Inklusive verstellbarem Tragegurt für bequemen Transport.",
    price: 39.99,
    comparePrice: 54.99,
    category: "yoga-pilates",
    features: ["6 mm TPE-Material", "Beidseitig rutschfest", "Alignment-Markierungen", "Inkl. Tragegurt"],
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop&q=80",
  },
  {
    id: "yp-002",
    slug: "pilates-resistance-ring",
    name: "Pilates Resistance Ring",
    description: "Flexibler Widerstandsring für gezieltes Pilates-Training.",
    longDescription: "Der Pilates Resistance Ring ist ein vielseitiges Trainingsgerät für gezieltes Muskeltraining. Der flexible Fiberglas-Kern bietet gleichmäßigen Widerstand, während die gepolsterten Griffe maximalen Komfort gewährleisten. Perfekt für Inner/Outer Thigh, Arm- und Brustübungen.",
    price: 22.99,
    category: "yoga-pilates",
    features: ["Fiberglas-Kern", "Gepolsterte Griffe", "38 cm Durchmesser", "Mittlerer Widerstand"],
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=600&fit=crop&q=80",
  },
  {
    id: "yp-003",
    slug: "yoga-block-set",
    name: "Yoga Block Set (2er)",
    description: "Zwei hochdichte Kork-Yogablöcke für bessere Stabilität und tiefere Dehnungen.",
    longDescription: "Unser Yoga Block Set aus natürlichem Kork bietet die perfekte Kombination aus Stabilität und Nachhaltigkeit. Die Blöcke sind schwerer als Schaumstoff-Alternativen, rutschen nicht und bieten eine angenehme, natürliche Griffigkeit. Ideal für Anfänger und Fortgeschrittene, die ihre Praxis vertiefen möchten.",
    price: 18.99,
    category: "yoga-pilates",
    features: ["100% Naturkork", "2 Blöcke im Set", "23 × 15 × 7,5 cm", "Rutschfeste Oberfläche"],
    badge: "Neu",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&h=600&fit=crop&q=80",
  },
];

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(price);
}
