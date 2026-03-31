const GOLD = "var(--color-gold)";

export function SacredSeparator({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1200 4" preserveAspectRatio="none" role="separator">
      <line x1="0" y1="2" x2="1200" y2="2" stroke={GOLD} strokeWidth="1" opacity="0.08" />
    </svg>
  );
}
