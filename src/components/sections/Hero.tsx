import { ShaderAnimation } from "@/components/ui/shader-animation"
import { ScrollIndicator } from "@/components/shared/ScrollIndicator"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-dvh overflow-hidden">
      <ShaderAnimation />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 z-10 pointer-events-none">
        <div className="text-center pointer-events-auto">
          <h1
            className="font-serif font-normal tracking-[-0.04em] leading-[0.9] text-white"
            style={{ fontSize: "clamp(4rem, 15vw, 12rem)" }}
          >
            {"VOID".split("").map((letter, i) => (
              <span
                key={i}
                className="inline-block transition-all duration-700 hover:tracking-[0.1em] hover:text-void-accent"
              >
                {letter}
              </span>
            ))}
          </h1>

          <p className="mt-6 font-sans text-lg md:text-xl text-white/60 max-w-lg mx-auto leading-relaxed">
            We design the identity your brand hasn&apos;t found yet.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="font-sans text-sm px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-200 rounded-sm font-bold"
            >
              Start a Project
            </a>
            <a
              href="#work"
              className="font-sans text-sm px-8 py-3 border border-white/10 text-white/70 hover:border-white/30 hover:text-white transition-all duration-200 rounded-sm"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  )
}
