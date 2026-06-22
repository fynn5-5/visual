/**
 * Treuherz — handcrafted brand illustrations (pure SVG, no AI imagery).
 * A consistent two-tone silhouette style: the main shape uses `currentColor`
 * (set the text color via className), soft interior details sit on top.
 * Built from overlapping same-fill shapes that visually union into one
 * cohesive, intentional silhouette.
 */
import type { SVGProps } from "react"

type Props = SVGProps<SVGSVGElement> & { detail?: string }

/** A content dog, curled up and dozing. */
export function SleepingDog({ className, detail = "rgba(43,39,36,0.22)", ...p }: Props) {
  return (
    <svg viewBox="0 0 240 170" aria-hidden className={className} {...p}>
      <g fill="currentColor">
        {/* body */}
        <path d="M40 120c0-34 36-52 84-52s78 20 78 46c0 16-14 22-34 22H66c-16 0-26-6-26-16Z" />
        {/* curled tail tucked over the body */}
        <path d="M196 96c14-4 26 4 30 16 2 8-2 16-10 18-6 1-9-3-7-8 2-6-1-11-7-12-8-2-12-10-6-14Z" />
        {/* head resting forward-left */}
        <circle cx="74" cy="104" r="40" />
        {/* snout */}
        <path d="M40 108c-14 1-24 8-24 16 0 7 7 11 17 11 12 0 22-9 22-19 0-6-7-9-15-8Z" />
        {/* floppy ear */}
        <path d="M70 70c-10-8-26-7-33 3-5 7-3 17 4 27 5-12 16-22 29-24 3 0 3-4 0-6Z" />
      </g>
      {/* details */}
      <g fill="none" stroke={detail} strokeWidth="3.4" strokeLinecap="round">
        {/* closed, content eye */}
        <path d="M58 100c4 4 11 4 15 0" />
      </g>
      {/* nose */}
      <circle cx="20" cy="120" r="4.6" fill={detail} />
      {/* tiny sleep marks */}
      <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.7">
        <path d="M150 44c6 0 6 8 12 8M168 28c5 0 5 7 10 7" />
      </g>
    </svg>
  )
}

/** A cat in a calm loaf, tail wrapped to the front. */
export function RestingCat({ className, detail = "rgba(43,39,36,0.22)", ...p }: Props) {
  return (
    <svg viewBox="0 0 240 170" aria-hidden className={className} {...p}>
      <g fill="currentColor">
        {/* loaf body */}
        <path d="M48 132c0-40 32-66 72-66s72 26 72 66c0 6-4 8-10 8H58c-6 0-10-2-10-8Z" />
        {/* ears — broad triangles seated on the head */}
        <path d="M82 80 96 40c1-3 5-3 7 0l15 38c-13-3-26-3-36 2Z" />
        <path d="M158 80 144 40c-1-3-5-3-7 0l-15 38c13-3 26-3 36 2Z" />
        {/* tail wrapped along the front */}
        <path d="M60 140c-18 0-30-8-30-18 0-7 6-12 13-12 5 0 8 4 6 8-2 5 2 8 8 8h3c5 0 6 14 0 14Z" />
      </g>
      {/* face details */}
      <g fill="none" stroke={detail} strokeWidth="3.4" strokeLinecap="round">
        <path d="M96 104c4 4 11 4 15 0" />
        <path d="M130 104c4 4 11 4 15 0" />
        <path d="M120 116v6" />
      </g>
      {/* whiskers */}
      <g fill="none" stroke={detail} strokeWidth="2.4" strokeLinecap="round" opacity="0.8">
        <path d="M112 124c-12 0-22-2-30-6M128 124c12 0 22-2 30-6" />
      </g>
    </svg>
  )
}

/** Soft "frost" accent lines — pairs with the dog/cat on the cooling mat. */
export function FrostAccents({ className, ...p }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden className={className} {...p}>
      <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        <path d="M60 14v92M22 38l76 44M98 38l-76 44" />
        <path d="M50 20l10 8 10-8M50 100l10-8 10 8M18 50l10 2 2 10M92 50l-10 2-2 10M18 70l10-2 2-10M92 70l-10-2-2-10" />
      </g>
    </svg>
  )
}
