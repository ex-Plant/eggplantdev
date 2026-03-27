/* Agent: Claude — Tome Colophon */
import { cn } from "@/helpers/cn";

type PropsT = { className?: string; colorful?: boolean };

const ENTRIES = [
  { label: "Built with", value: "Next.js · TypeScript · Tailwind CSS" },
  { label: "Deployed on", value: "Vercel" },
  { label: "Typography", value: "Geist Sans · Geist Mono" },
  { label: "Design", value: "Sacred geometry + gold palette" },
  { label: "Source", value: "github.com/konradantonik" },
] as const;

export function TomeColophon({ className, colorful = false }: PropsT) {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-16 md:py-24",
        colorful ? "bg-[#0a0806]" : "bg-transparent",
        className,
      )}
    >
      {colorful && (
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1200 400"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          {/* Book corner ornaments — four corners */}
          {/* Top-left */}
          <path d="M80,60 L80,110 M80,60 L130,60" fill="none" stroke="#daa520" strokeWidth="1" opacity="0.1" />
          <path d="M80,60 L95,75" fill="none" stroke="#c8860e" strokeWidth="0.6" opacity="0.08" />
          {/* Top-right */}
          <path d="M1120,60 L1120,110 M1120,60 L1070,60" fill="none" stroke="#daa520" strokeWidth="1" opacity="0.1" />
          <path d="M1120,60 L1105,75" fill="none" stroke="#c8860e" strokeWidth="0.6" opacity="0.08" />
          {/* Bottom-left */}
          <path d="M80,340 L80,290 M80,340 L130,340" fill="none" stroke="#daa520" strokeWidth="1" opacity="0.1" />
          <path d="M80,340 L95,325" fill="none" stroke="#c8860e" strokeWidth="0.6" opacity="0.08" />
          {/* Bottom-right */}
          <path d="M1120,340 L1120,290 M1120,340 L1070,340" fill="none" stroke="#daa520" strokeWidth="1" opacity="0.1" />
          <path d="M1120,340 L1105,325" fill="none" stroke="#c8860e" strokeWidth="0.6" opacity="0.08" />
          {/* Horizontal rule ornament */}
          <line x1="300" y1="200" x2="900" y2="200" stroke="#daa520" strokeWidth="0.5" opacity="0.05" />
          <polygon points="600,194 606,200 600,206 594,200" fill="none" stroke="#f0c040" strokeWidth="0.6" opacity="0.08" />
        </svg>
      )}

      <div className="fest-container relative">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Label */}
          <div className="shrink-0">
            <h2 className="font-mono text-24 uppercase leading-none md:text-40">
              <span className={cn("block", colorful ? "text-[#f5e6c0]" : "text-white")}>
                Colophon
              </span>
            </h2>
            <p
              className={cn(
                "mt-2 font-mono text-sm uppercase tracking-[0.3em]",
                colorful ? "text-[#daa520]/30" : "text-lightgray",
              )}
            >
              How this site was made
            </p>
          </div>

          {/* Entries — right-aligned table */}
          <div className="space-y-3 md:text-right">
            {ENTRIES.map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-0.5 md:items-end">
                <span
                  className={cn(
                    "font-mono text-xs uppercase tracking-widest",
                    colorful ? "text-[#daa520]/30" : "text-white/30",
                  )}
                >
                  {label}
                </span>
                <span
                  className={cn(
                    "font-mono text-14",
                    colorful ? "text-[#c8b080]/60" : "text-lightgray",
                  )}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
