import { useState, useEffect } from "react"
import { Menu, Close } from "@/components/brand/Icons"
import { Logo } from "@/components/brand/Logo"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Bestseller", href: "#bestseller" },
  { label: "Shop", href: "#shop" },
  { label: "Über uns", href: "#story" },
  { label: "Bewertungen", href: "#reviews" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-cream/85 backdrop-blur-xl border-b border-sand-deep/70"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 h-16 md:h-20">
        <a href="#hero" aria-label="Treuherz Startseite">
          <Logo />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm text-ink/75 hover:text-terra transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#shop"
            className="font-sans text-sm font-bold px-5 py-2.5 bg-terra text-cream hover:bg-terra-deep transition-colors duration-200 rounded-full"
          >
            Jetzt shoppen
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-11 h-11 flex items-center justify-center text-ink -mr-2"
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {menuOpen ? <Close className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <div
        className={cn(
          "fixed inset-0 top-16 bg-cream/97 backdrop-blur-xl flex flex-col items-center justify-center gap-7 transition-opacity duration-200 md:hidden",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-serif text-3xl text-ink hover:text-terra transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#shop"
          onClick={() => setMenuOpen(false)}
          className="mt-2 font-sans font-bold text-lg px-8 py-3 bg-terra text-cream rounded-full"
        >
          Jetzt shoppen
        </a>
      </div>
    </header>
  )
}
