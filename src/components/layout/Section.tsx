import { cn } from "@/lib/utils"

interface SectionProps {
  id: string
  eyebrow?: string
  children: React.ReactNode
  className?: string
}

export function Section({ id, eyebrow, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("py-24 md:py-32 px-6", className)}>
      <div className="mx-auto max-w-7xl">
        {eyebrow && (
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-void-accent mb-12">
            {eyebrow}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
