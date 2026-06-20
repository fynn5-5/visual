import { ChevronDown } from "lucide-react"

export function ScrollIndicator() {
  return (
    <a
      href="#work"
      aria-label="Scroll to content"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-void-text/30 hover:text-void-accent transition-colors animate-bounce"
    >
      <ChevronDown size={28} />
    </a>
  )
}
