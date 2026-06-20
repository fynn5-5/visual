import { SocialLinks } from "@/components/shared/SocialLinks"

export function Footer() {
  return (
    <footer className="border-t border-void-muted px-6 py-12">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-void-text/50">
          Void Studio
        </p>
        <SocialLinks />
        <p className="font-mono text-xs text-void-text/30">
          &copy; {new Date().getFullYear()} Void Studio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
