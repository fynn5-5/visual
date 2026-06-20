import { Section } from "@/components/layout/Section"
import { ProjectCard } from "@/components/shared/ProjectCard"

const projects = [
  {
    title: "Lumina Cosmetics",
    category: "Brand Identity",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  },
  {
    title: "Vertex Architecture",
    category: "Web Design",
    gradient: "linear-gradient(135deg, #2d1b69 0%, #11998e 100%)",
  },
  {
    title: "Nørd Coffee",
    category: "Logo Design",
    gradient: "linear-gradient(135deg, #3c1053 0%, #ad5389 100%)",
  },
  {
    title: "Skyline Ventures",
    category: "Brand Identity",
    gradient: "linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #C8B8FF 100%)",
  },
  {
    title: "Aether Labs",
    category: "Web Design",
    gradient: "linear-gradient(135deg, #141e30 0%, #243b55 100%)",
  },
  {
    title: "Flux Studio",
    category: "Logo Design",
    gradient: "linear-gradient(135deg, #1f1c2c 0%, #928dab 100%)",
  },
]

export function Work() {
  return (
    <Section id="work" eyebrow="Selected Work">
      <h2 className="font-serif text-3xl md:text-4xl text-void-text tracking-tight mb-16">
        Projects that
        <br />
        <span className="text-void-accent">speak volumes</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  )
}
