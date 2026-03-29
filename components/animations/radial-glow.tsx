/* Radial glow + center pulse — shared ambient glow effect for hero sections.
   Large soft gold radial behind a smaller pulsing core. */

import centerPulseStyles from "@/components/animations/center-pulse.module.css";

export function RadialGlow() {
  return (
    <>
      {/* Large ambient radial glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          backgroundImage:
            "radial-gradient(circle, color-mix(in srgb, var(--color-gold) 12%, transparent) 0%, color-mix(in srgb, var(--color-gold-dark) 5%, transparent) 40%, transparent 70%)",
        }}
      />
      {/* Central pulsing glow */}
      <div
        className={`pointer-events-none absolute top-1/2 left-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-full ${centerPulseStyles.centerPulse}`}
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--color-gold) 25%, transparent) 0%, color-mix(in srgb, var(--color-gold-dark) 8%, transparent) 35%, transparent 70%)",
        }}
      />
    </>
  );
}
