/* Agent: Claude — Monolith Statement */
import { cn } from "@/helpers/cn";

type PropsT = { className?: string; colorful?: boolean };

export function MonolithStatement({ className, colorful = false }: PropsT) {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-24 md:py-40",
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
          {/* Vertical pillar lines flanking center */}
          <line x1="200" y1="0" x2="200" y2="600" stroke="#daa520" strokeWidth="0.8" opacity="0.06" />
          <line x1="210" y1="40" x2="210" y2="560" stroke="#c8860e" strokeWidth="0.5" opacity="0.04" />
          <line x1="1000" y1="0" x2="1000" y2="600" stroke="#daa520" strokeWidth="0.8" opacity="0.06" />
          <line x1="990" y1="40" x2="990" y2="560" stroke="#c8860e" strokeWidth="0.5" opacity="0.04" />
          {/* Horizontal cross-beams */}
          <line x1="200" y1="80" x2="1000" y2="80" stroke="#f0c040" strokeWidth="0.5" opacity="0.04" />
          <line x1="200" y1="520" x2="1000" y2="520" stroke="#f0c040" strokeWidth="0.5" opacity="0.04" />
          {/* Small diamond ornaments at intersections */}
          <polygon points="200,80 206,86 200,92 194,86" fill="none" stroke="#daa520" strokeWidth="0.6" opacity="0.1" />
          <polygon points="1000,80 1006,86 1000,92 994,86" fill="none" stroke="#daa520" strokeWidth="0.6" opacity="0.1" />
          <polygon points="200,520 206,526 200,532 194,526" fill="none" stroke="#daa520" strokeWidth="0.6" opacity="0.1" />
          <polygon points="1000,520 1006,526 1000,532 994,526" fill="none" stroke="#daa520" strokeWidth="0.6" opacity="0.1" />
        </svg>
      )}

      <div className="fest-container relative">
        <div className="mx-auto max-w-4xl text-center">
          <span
            className={cn(
              "font-mono text-sm uppercase tracking-[0.4em]",
              colorful ? "text-[#daa520]/40" : "text-lightgray",
            )}
          >
            Manifesto
          </span>

          <blockquote className="mt-8">
            <p
              className={cn(
                "font-mono text-24 uppercase leading-snug md:text-40 lg:text-48",
                colorful ? "text-[#f5e6c0]" : "text-white",
              )}
            >
              I build things that work for{" "}
              <span className={cn(colorful ? "text-[#daa520]" : "text-white/60")}>everyone</span>,
              ship in{" "}
              <span className={cn(colorful ? "text-[#daa520]" : "text-white/60")}>small increments</span>,
              and leave codebases{" "}
              <span className={cn(colorful ? "text-[#daa520]" : "text-white/60")}>
                better than I found them
              </span>
              .
            </p>
          </blockquote>

          <div
            className={cn(
              "mx-auto mt-10 h-px w-16",
              colorful ? "bg-[#daa520]/20" : "bg-white/10",
            )}
          />

          <p
            className={cn(
              "mt-6 text-16 md:text-20",
              colorful ? "text-[#c8b080]/40" : "text-lightgray",
            )}
          >
            Clarity over cleverness. Accessibility from day one. No stack religion.
          </p>
        </div>
      </div>
    </section>
  );
}
