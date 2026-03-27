/* Agent: Claude — Ecliptic Availability */
import { cn } from "@/helpers/cn";

type PropsT = { className?: string; colorful?: boolean };

export function EclipticAvailability({ className, colorful = false }: PropsT) {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-20 md:py-32",
        colorful ? "bg-[#0a0806]" : "bg-transparent",
        className,
      )}
    >
      {colorful && (
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          {/* Concentric eclipse rings — offset center */}
          <circle cx="600" cy="300" r="240" fill="none" stroke="#daa520" strokeWidth="1" opacity="0.06" />
          <circle cx="600" cy="300" r="180" fill="none" stroke="#c8860e" strokeWidth="1" opacity="0.08" />
          <circle cx="600" cy="300" r="120" fill="none" stroke="#f0c040" strokeWidth="0.8" opacity="0.06" />
          {/* Eclipse shadow arcs */}
          <path d="M600,60 A240,240 0 0,1 600,540" fill="none" stroke="#daa520" strokeWidth="1.5" opacity="0.1" />
          <path d="M580,80 A220,220 0 0,0 580,520" fill="none" stroke="#c8860e" strokeWidth="0.8" opacity="0.06" />
          {/* Radial tick marks */}
          {Array.from({ length: 12 }, (_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = 600 + 250 * Math.cos(angle);
            const y1 = 300 + 250 * Math.sin(angle);
            const x2 = 600 + 265 * Math.cos(angle);
            const y2 = 300 + 265 * Math.sin(angle);
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#daa520" strokeWidth="0.8" opacity="0.1" />
            );
          })}
        </svg>
      )}

      <div className="fest-container relative">
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:gap-16">
          {/* Status beacon */}
          <div className="flex shrink-0 items-center gap-4">
            <span
              className={cn(
                "relative block h-4 w-4 rounded-full",
                colorful ? "bg-[#10ffaa]" : "bg-green-400",
              )}
            >
              <span
                className={cn(
                  "absolute inset-0 rounded-full",
                  colorful ? "bg-[#10ffaa]/30" : "bg-green-400/30",
                )}
                style={{
                  animation: "pulse 2s ease-in-out infinite",
                  transform: "scale(2)",
                }}
              />
            </span>
            <span
              className={cn(
                "font-mono text-sm uppercase tracking-[0.3em]",
                colorful ? "text-[#10ffaa]/70" : "text-green-400/70",
              )}
            >
              Available
            </span>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-mono text-40 uppercase leading-none md:text-64">
              <span className={cn("block", colorful ? "text-[#f5e6c0]" : "text-white")}>
                Open for
              </span>
              <span className={cn("block", colorful ? "text-[#daa520]" : "text-white")}>
                Work
              </span>
            </h2>
            <p
              className={cn(
                "mt-6 max-w-xl text-16 md:text-20",
                colorful ? "text-[#c8b080]/50" : "text-lightgray",
              )}
            >
              Currently accepting freelance projects and agency collaborations.
              If you need a frontend or full-stack partner who can own delivery
              end-to-end — from architecture to production — let&apos;s talk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
