/* Agent: Claude — Glyph Metrics */
import { cn } from "@/helpers/cn";

type PropsT = { className?: string; colorful?: boolean };

const STATS = [
  { value: "5", unit: "Years", caption: "building frontend & full-stack applications" },
  { value: "20+", unit: "Projects", caption: "from e-commerce and SaaS to cultural platforms" },
  { value: "8", unit: "Technologies", caption: "React · Next.js · TypeScript · Tailwind · Node · Python · Shopify · Payload" },
] as const;

export function GlyphMetrics({ className, colorful = false }: PropsT) {
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
          viewBox="0 0 1200 500"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          {/* Sunburst rays behind each stat — 3 clusters */}
          {[200, 600, 1000].map((cx) =>
            Array.from({ length: 16 }, (_, i) => {
              const angle = (i * 22.5 * Math.PI) / 180;
              const x1 = cx + 60 * Math.cos(angle);
              const y1 = 250 + 60 * Math.sin(angle);
              const x2 = cx + 140 * Math.cos(angle);
              const y2 = 250 + 140 * Math.sin(angle);
              return (
                <line
                  key={`${cx}-${i}`}
                  x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="#daa520" strokeWidth="0.6" opacity="0.06"
                />
              );
            })
          )}
          {/* Concentric rings per cluster */}
          {[200, 600, 1000].map((cx) => (
            <g key={cx}>
              <circle cx={cx} cy={250} r="80" fill="none" stroke="#c8860e" strokeWidth="0.5" opacity="0.05" />
              <circle cx={cx} cy={250} r="120" fill="none" stroke="#daa520" strokeWidth="0.5" opacity="0.04" />
            </g>
          ))}
        </svg>
      )}

      <div className="fest-container relative">
        <h2 className="font-mono text-40 uppercase leading-none md:text-64">
          <span className={cn("block", colorful ? "text-[#f5e6c0]" : "text-white")}>By the</span>
          <span className={cn("block", colorful ? "text-[#daa520]" : "text-white")}>Numbers</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-0">
          {STATS.map(({ value, unit, caption }, i) => (
            <div
              key={unit}
              className={cn(
                "text-center",
                i > 0 && "md:border-l",
                i > 0 && (colorful ? "md:border-[#daa520]/10" : "md:border-white/10"),
              )}
            >
              <p
                className={cn(
                  "font-mono text-64 leading-none md:text-72",
                  colorful ? "text-[#daa520]" : "text-white",
                )}
              >
                {value}
              </p>
              <p
                className={cn(
                  "mt-2 font-mono text-sm uppercase tracking-[0.3em]",
                  colorful ? "text-[#f5e6c0]/60" : "text-white/60",
                )}
              >
                {unit}
              </p>
              <p
                className={cn(
                  "mx-auto mt-4 max-w-xs text-14",
                  colorful ? "text-[#c8b080]/40" : "text-lightgray",
                )}
              >
                {caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
