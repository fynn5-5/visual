import type { SVGProps } from "react"
import { cn } from "@/lib/utils"

/** The Treuherz mark: a paw whose main pad is shaped like a heart. */
export function PawHeartMark({ className, ...p }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className} {...p}>
      {/* toe beans */}
      <circle cx="7.8" cy="9.5" r="1.7" />
      <circle cx="10.7" cy="7.8" r="1.7" />
      <circle cx="13.3" cy="7.8" r="1.7" />
      <circle cx="16.2" cy="9.5" r="1.7" />
      {/* heart-shaped main pad */}
      <path d="M12 19.7c-3-2.6-4.5-4.3-4.5-6 0-1.3.95-2.2 2.15-2.2.85 0 1.65.5 2.35 1.45.7-.95 1.5-1.45 2.35-1.45 1.2 0 2.15.9 2.15 2.2 0 1.7-1.5 3.4-4.5 6Z" />
    </svg>
  )
}

interface LogoProps {
  className?: string
  /** color of the wordmark; the mark always uses terra */
  tone?: "ink" | "cream"
}

/** Treuherz wordmark — soft paw mark + serif name. */
export function Logo({ className, tone = "ink" }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-[10px] bg-terra text-cream">
        <PawHeartMark className="h-5 w-5" />
      </span>
      <span
        className={cn(
          "font-serif text-2xl leading-none tracking-tight",
          tone === "cream" ? "text-cream" : "text-ink"
        )}
      >
        Treuherz
      </span>
    </span>
  )
}
