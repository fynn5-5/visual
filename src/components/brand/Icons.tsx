/**
 * Treuherz — handcrafted inline SVG icon set.
 * No external icon dependency: every icon uses `currentColor` so it inherits
 * text color and can be sized via className (e.g. "w-6 h-6").
 */
import type { SVGProps } from "react"

type IconProps = SVGProps<SVGSVGElement>

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
}

export function Paw({ className, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className} {...p}>
      <circle cx="7" cy="9" r="1.9" />
      <circle cx="12" cy="6.5" r="1.9" />
      <circle cx="17" cy="9" r="1.9" />
      <path d="M12 11.5c-2.9 0-5 2.2-5 4.6 0 1.7 1.4 2.4 2.7 2.4.9 0 1.5-.5 2.3-.5s1.4.5 2.3.5c1.3 0 2.7-.7 2.7-2.4 0-2.4-2.1-4.6-5-4.6Z" />
    </svg>
  )
}

export function Heart({ className, ...p }: IconProps) {
  return (
    <svg {...base} className={className} {...p}>
      <path d="M12 20.2 4.6 13c-1.8-1.8-1.8-4.7 0-6.5a4.4 4.4 0 0 1 6.4 0l1 1 1-1a4.4 4.4 0 0 1 6.4 0c1.8 1.8 1.8 4.7 0 6.5L12 20.2Z" />
    </svg>
  )
}

export function Truck({ className, ...p }: IconProps) {
  return (
    <svg {...base} className={className} {...p}>
      <path d="M2 6.5h11v8.5H2zM13 9h4l3 3v3h-7z" />
      <circle cx="6.5" cy="17.5" r="1.8" />
      <circle cx="16.5" cy="17.5" r="1.8" />
    </svg>
  )
}

export function Shield({ className, ...p }: IconProps) {
  return (
    <svg {...base} className={className} {...p}>
      <path d="M12 3 5 5.5v5.2c0 4.3 3 7.6 7 9.3 4-1.7 7-5 7-9.3V5.5L12 3Z" />
      <path d="m9 11.6 2 2 4-4.2" />
    </svg>
  )
}

export function Leaf({ className, ...p }: IconProps) {
  return (
    <svg {...base} className={className} {...p}>
      <path d="M4 20c0-9 6-14 16-14 0 10-5 16-14 16-1.3 0-2-.7-2-2Z" />
      <path d="M9 15c2.5-2.5 5-4 9-5" />
    </svg>
  )
}

export function Star({ className, filled = true, ...p }: IconProps & { filled?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinejoin="round"
      aria-hidden
      className={className}
      {...p}
    >
      <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.6 1-5.8-4.3-4.1 5.9-.9L12 3.5Z" />
    </svg>
  )
}

export function Snowflake({ className, ...p }: IconProps) {
  return (
    <svg {...base} className={className} {...p}>
      <path d="M12 2v20M4.5 7l15 10M19.5 7l-15 10" />
      <path d="M9 3.5 12 6l3-2.5M9 20.5 12 18l3 2.5M3 9.8l3.3.4.8 3.2M21 9.8l-3.3.4-.8 3.2M3 14.2l3.3-.4.8-3.2M21 14.2l-3.3-.4-.8-3.2" />
    </svg>
  )
}

export function Droplet({ className, ...p }: IconProps) {
  return (
    <svg {...base} className={className} {...p}>
      <path d="M12 3.5c3 3.6 5.5 6.7 5.5 9.7A5.5 5.5 0 0 1 6.5 13.2c0-3 2.5-6.1 5.5-9.7Z" />
      <path d="M9.5 13.5a2.5 2.5 0 0 0 2.5 2.5" />
    </svg>
  )
}

export function Bowl({ className, ...p }: IconProps) {
  return (
    <svg {...base} className={className} {...p}>
      <path d="M3 11h18a9 9 0 0 1-18 0Z" />
      <path d="M7.5 11c0-2 1.2-3 2.2-3.6M12 11c0-2.4 1.4-3.4 2.4-4.1M16.5 11c0-1.7 1-2.6 1.8-3.2" />
    </svg>
  )
}

export function Bed({ className, ...p }: IconProps) {
  return (
    <svg {...base} className={className} {...p}>
      <path d="M3 17v-4a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v4" />
      <path d="M3 17h18M5 10V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2M5 17v2M19 17v2" />
    </svg>
  )
}

export function Sparkle({ className, ...p }: IconProps) {
  return (
    <svg {...base} className={className} {...p}>
      <path d="M12 3c.4 4.4 1.6 5.6 6 6-4.4.4-5.6 1.6-6 6-.4-4.4-1.6-5.6-6-6 4.4-.4 5.6-1.6 6-6Z" />
      <path d="M19 14c.2 1.8.7 2.3 2.5 2.5-1.8.2-2.3.7-2.5 2.5-.2-1.8-.7-2.3-2.5-2.5 1.8-.2 2.3-.7 2.5-2.5Z" />
    </svg>
  )
}

export function Bolt({ className, ...p }: IconProps) {
  return (
    <svg {...base} className={className} {...p}>
      <path d="M13 2 4 13h6l-1 9 9-11h-6l1-9Z" />
    </svg>
  )
}

export function ArrowRight({ className, ...p }: IconProps) {
  return (
    <svg {...base} className={className} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function Check({ className, ...p }: IconProps) {
  return (
    <svg {...base} className={className} {...p}>
      <path d="m5 12.5 4.5 4.5L19 6.5" />
    </svg>
  )
}

export function Menu({ className, ...p }: IconProps) {
  return (
    <svg {...base} className={className} {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function Close({ className, ...p }: IconProps) {
  return (
    <svg {...base} className={className} {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

export function Quote({ className, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className} {...p}>
      <path d="M9.5 6C6.5 6 4 8.5 4 11.5S6.3 17 9 17c.3 0 .6 0 .8-.1-.8 1.4-2.2 2.4-3.8 2.9l.7 1.7c3.6-1 6.3-4.3 6.3-8.3V11C13 8 11.6 6 9.5 6Zm9 0C15.5 6 13 8.5 13 11.5S15.3 17 18 17c.3 0 .6 0 .8-.1-.8 1.4-2.2 2.4-3.8 2.9l.7 1.7c3.6-1 6.3-4.3 6.3-8.3V11C22 8 20.6 6 18.5 6Z" />
    </svg>
  )
}
