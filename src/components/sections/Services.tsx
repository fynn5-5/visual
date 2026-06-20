import { Palette, Monitor, Fingerprint } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { ServiceCard } from "@/components/shared/ServiceCard"

const services = [
  {
    icon: Palette,
    title: "Logo Design",
    description:
      "Distinctive marks that capture the essence of your brand. From wordmarks to symbols, every logo we craft tells a story.",
  },
  {
    icon: Monitor,
    title: "Web Design",
    description:
      "Websites that feel as good as they look. We design digital experiences that engage visitors and drive results.",
  },
  {
    icon: Fingerprint,
    title: "Brand Identity",
    description:
      "Complete visual systems that give your brand a consistent, recognizable presence across every touchpoint.",
  },
]

export function Services() {
  return (
    <Section id="services" eyebrow="What we do">
      <h2 className="font-serif text-3xl md:text-4xl text-void-text tracking-tight mb-16">
        Crafting brands that
        <br />
        <span className="text-void-accent">stand apart</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </Section>
  )
}
