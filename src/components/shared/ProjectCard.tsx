import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  category: string
  gradient: string
  className?: string
}

export function ProjectCard({ title, category, gradient, className }: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-sm cursor-pointer",
        className
      )}
    >
      <div
        className="aspect-[4/3] transition-transform duration-500 group-hover:scale-[1.03]"
        style={{ background: gradient }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-void-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <p className="font-mono text-xs uppercase tracking-wider text-void-accent mb-1">
          {category}
        </p>
        <h3 className="font-sans text-lg font-bold text-void-text">
          {title}
        </h3>
      </div>
    </div>
  )
}
