import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export function ServiceCard({ icon: Icon, title, description, className }: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group p-8 bg-void-surface border border-void-muted rounded-sm transition-all duration-200 hover:border-void-accent/50",
        className
      )}
    >
      <div className="w-12 h-12 flex items-center justify-center mb-6 text-void-accent">
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <h3 className="font-sans text-lg font-bold text-void-text mb-3">
        {title}
      </h3>
      <p className="font-sans text-sm text-void-text/60 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
