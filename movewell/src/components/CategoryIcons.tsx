export function RollerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="12" y="20" width="40" height="24" rx="12" />
      <line x1="12" y1="28" x2="52" y2="28" />
      <line x1="12" y1="36" x2="52" y2="36" />
      <circle cx="32" cy="32" r="4" fill="currentColor" opacity="0.15" />
      <line x1="20" y1="20" x2="20" y2="44" strokeDasharray="2 3" />
      <line x1="44" y1="20" x2="44" y2="44" strokeDasharray="2 3" />
    </svg>
  );
}

export function GloveIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 38V18a4 4 0 018 0v14" />
      <path d="M28 26V14a4 4 0 018 0v18" />
      <path d="M36 28V18a4 4 0 018 0v16" />
      <path d="M44 34V24a4 4 0 014 0v12a16 16 0 01-16 16h-4a16 16 0 01-16-16v-6a4 4 0 018 0" />
      <path d="M24 44h12" strokeDasharray="2 3" />
    </svg>
  );
}

export function YogaIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="14" r="5" />
      <path d="M32 19v12" />
      <path d="M32 31l-12 14" />
      <path d="M32 31l12 14" />
      <path d="M18 26l14 5 14-5" />
      <path d="M12 54h40" strokeDasharray="4 4" />
    </svg>
  );
}
