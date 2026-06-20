import { Section } from "@/components/layout/Section"

export function About() {
  return (
    <Section id="about" eyebrow="About Us">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl text-void-text tracking-tight mb-8">
            Design is
            <br />
            <span className="text-void-accent">how it works</span>
          </h2>
          <div className="space-y-6 max-w-lg">
            <p className="font-sans text-lg text-void-text/60 leading-relaxed">
              Void Studio was founded on a simple belief: great design isn&apos;t
              decoration — it&apos;s communication. Every pixel, every curve,
              every color choice carries meaning.
            </p>
            <p className="font-sans text-lg text-void-text/60 leading-relaxed">
              We work closely with founders, creative directors, and marketing
              teams to build visual identities that resonate. No templates.
              No shortcuts. Just intentional design that serves your goals.
            </p>
            <p className="font-sans text-lg text-void-text/60 leading-relaxed">
              Based in Berlin, working globally.
            </p>
          </div>
        </div>

        <div className="relative aspect-square max-w-md mx-auto lg:mx-0 w-full">
          <div className="absolute inset-0 rounded-sm overflow-hidden">
            <div
              className="w-full h-full"
              style={{
                background: `
                  radial-gradient(ellipse at 30% 50%, rgba(200, 184, 255, 0.15) 0%, transparent 60%),
                  radial-gradient(ellipse at 70% 30%, rgba(167, 139, 250, 0.1) 0%, transparent 50%),
                  linear-gradient(135deg, #141416 0%, #0A0A0B 100%)
                `,
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-3/4 h-3/4 text-void-accent/10">
                <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="20" fill="currentColor" opacity="0.3" />
                <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="0.5" />
                <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
