import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-void-surface/80 backdrop-blur-xl border-b border-void-muted"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 h-16 md:h-20">
        <a href="#hero" className="font-mono text-sm tracking-[0.2em] uppercase text-void-text hover:text-void-accent transition-colors">
          Void Studio
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm text-void-text/70 hover:text-void-text transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-sans text-sm px-5 py-2.5 border border-void-accent text-void-accent hover:bg-void-accent hover:text-void-black transition-all duration-200 rounded-sm"
          >
            Start a Project
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-11 h-11 flex items-center justify-center text-void-text"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        className={cn(
          "fixed inset-0 top-16 bg-void-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-opacity duration-200 md:hidden",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-serif text-3xl text-void-text hover:text-void-accent transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="mt-4 font-sans text-lg px-8 py-3 border border-void-accent text-void-accent hover:bg-void-accent hover:text-void-black transition-all duration-200 rounded-sm"
        >
          Start a Project
        </a>
      </div>
    </header>
  )
}
