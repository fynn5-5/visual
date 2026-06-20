import { Instagram, Twitter, Linkedin } from "lucide-react"

const links = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "X / Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
]

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          aria-label={link.label}
          className="w-11 h-11 flex items-center justify-center text-void-text/50 hover:text-void-accent transition-colors duration-200"
        >
          <link.icon size={20} />
        </a>
      ))}
    </div>
  )
}
