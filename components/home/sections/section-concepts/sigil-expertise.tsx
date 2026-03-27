/* Agent: Claude — Sigil Expertise */
import { cn } from "@/helpers/cn";

type PropsT = { className?: string; colorful?: boolean };

const GROUPS = [
  { label: "Frontend", tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML / CSS"] },
  { label: "Backend", tags: ["Node.js", "Python", "REST APIs", "GraphQL", "MySQL"] },
  { label: "CMS & Commerce", tags: ["Payload CMS", "Shopify", "Sanity", "WordPress"] },
  { label: "Practices", tags: ["Accessibility", "TDD", "CI/CD", "Agile", "Git"] },
] as const;

export function SigilExpertise({ className, colorful = false }: PropsT) {
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
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          {/* Pentagram web — connecting skill nodes */}
          {[0, 1, 2, 3, 4].map((i) => {
            const angle = ((i * 72 - 90) * Math.PI) / 180;
            const nextAngle = (((i * 72 + 144) - 90) * Math.PI) / 180;
            const x1 = 600 + 280 * Math.cos(angle);
            const y1 = 400 + 280 * Math.sin(angle);
            const x2 = 600 + 280 * Math.cos(nextAngle);
            const y2 = 400 + 280 * Math.sin(nextAngle);
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#daa520" strokeWidth="0.8" opacity="0.08" />
            );
          })}
          {/* Outer pentagon */}
          <polygon
            points={[0, 1, 2, 3, 4]
              .map((i) => {
                const a = ((i * 72 - 90) * Math.PI) / 180;
                return `${600 + 280 * Math.cos(a)},${400 + 280 * Math.sin(a)}`;
              })
              .join(" ")}
            fill="none"
            stroke="#c8860e"
            strokeWidth="0.8"
            opacity="0.06"
          />
          <circle cx="600" cy="400" r="280" fill="none" stroke="#daa520" strokeWidth="0.5" opacity="0.04" />
          <circle cx="600" cy="400" r="140" fill="none" stroke="#f0c040" strokeWidth="0.5" opacity="0.05" />
        </svg>
      )}

      <div className="fest-container relative">
        <h2 className="font-mono text-40 uppercase leading-none md:text-64">
          <span className={cn("block", colorful ? "text-[#f5e6c0]" : "text-white")}>
            Skill
          </span>
          <span className={cn("block", colorful ? "text-[#daa520]" : "text-white")}>Set</span>
        </h2>

        <div className="mt-12 space-y-10">
          {GROUPS.map(({ label, tags }) => (
            <div key={label}>
              <p
                className={cn(
                  "mb-4 font-mono text-sm uppercase tracking-[0.3em]",
                  colorful ? "text-[#daa520]/40" : "text-lightgray",
                )}
              >
                {label}
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className={cn(
                      "rounded-full border px-4 py-2 font-mono text-14",
                      colorful
                        ? "border-[#daa520]/15 text-[#f5e6c0]/60"
                        : "border-white/10 text-white/70",
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
