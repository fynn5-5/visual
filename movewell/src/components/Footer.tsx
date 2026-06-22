import Link from "next/link";

const footerLinks = {
  shop: [
    { href: "/products?category=foam-rollers", label: "Faszienrollen" },
    { href: "/products?category=gloves-wraps", label: "Handschuhe & Wraps" },
    { href: "/products?category=yoga-pilates", label: "Yoga & Pilates" },
    { href: "/products", label: "Alle Produkte" },
  ],
  support: [
    { href: "#", label: "Über uns" },
    { href: "#", label: "Kontakt" },
    { href: "#", label: "FAQ" },
    { href: "#", label: "Versand & Lieferung" },
  ],
  legal: [
    { href: "#", label: "Datenschutz" },
    { href: "#", label: "AGB" },
    { href: "#", label: "Impressum" },
    { href: "#", label: "Widerrufsbelehrung" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-16 flex flex-col sm:flex-row gap-8 sm:gap-16">
          <div className="max-w-xs">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              MOVEWELL
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Premium Fitness-Equipment für alle, die sich besser bewegen wollen.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 flex-1">
            <div>
              <h3 className="text-sm font-semibold">Shop</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {footerLinks.shop.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Support</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Rechtliches</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MOVEWELL. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
