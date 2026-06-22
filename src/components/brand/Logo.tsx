import { cn } from "@/lib/utils"

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
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-5 w-5">
          <circle cx="7" cy="9" r="1.7" />
          <circle cx="12" cy="6.7" r="1.7" />
          <circle cx="17" cy="9" r="1.7" />
          <path d="M12 11.4c-2.8 0-4.8 2.1-4.8 4.4 0 1.6 1.3 2.3 2.6 2.3.9 0 1.4-.5 2.2-.5s1.3.5 2.2.5c1.3 0 2.6-.7 2.6-2.3 0-2.3-2-4.4-4.8-4.4Z" />
        </svg>
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
