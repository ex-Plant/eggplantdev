/* Agent: Claude — Neon Stack Diagram */
import { cn } from "@/helpers/cn";

const CATEGORIES = [
  { dot: "#10ffaa", label: "Frontend", skills: "React · Next.js · TypeScript · Tailwind CSS" },
  { dot: "#d946ef", label: "Backend", skills: "Node.js · Python · REST · GraphQL" },
  { dot: "#ffd700", label: "Tools", skills: "Git · Figma · Payload CMS · Shopify" },
  { dot: "#00e5ff", label: "Practices", skills: "Accessibility · TDD · CI/CD · Agile" },
] as const;

const DOT_BORDER_MAP_COLORFUL: Record<string, string> = {
  "#10ffaa": "border-[#10ffaa]/20",
  "#d946ef": "border-[#d946ef]/20",
  "#ffd700": "border-[#ffd700]/20",
  "#00e5ff": "border-[#00e5ff]/20",
};

const DOT_BORDER_MAP_DEFAULT: Record<string, string> = {
  "#10ffaa": "border-white/10",
  "#d946ef": "border-white/10",
  "#ffd700": "border-white/10",
  "#00e5ff": "border-white/10",
};

type PropsT = { className?: string; colorful?: boolean };

export function NeonStackDiagram({ className, colorful = false }: PropsT) {
  const borderMap = colorful ? DOT_BORDER_MAP_COLORFUL : DOT_BORDER_MAP_DEFAULT;

  return (
    <section className={cn(
      "relative overflow-hidden py-20 md:py-32",
      colorful ? "bg-[#080610]" : "bg-transparent",
      className,
    )}>
      {colorful && (
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          width="100%" height="100%"
          aria-hidden="true"
        >
          <defs>
            <pattern id="circuit-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="60" y2="0" stroke="#daa520" strokeWidth="1" opacity="0.04" />
              <line x1="0" y1="0" x2="0" y2="60" stroke="#daa520" strokeWidth="1" opacity="0.04" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-grid)" />
        </svg>
      )}

      <div className="fest-container relative">
        <h2 className="font-mono text-40 uppercase leading-none md:text-64">
          <span className={cn("block", colorful ? "text-[#f5e6c0]" : "text-white")}>Tech</span>
          <span className={cn("block", colorful ? "text-[#daa520]" : "text-white")}>Stack</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {CATEGORIES.map(({ dot, label, skills }) => (
            <div
              key={label}
              className={cn("border-l-2 py-4 pl-6", borderMap[dot])}
            >
              <p className={cn(
                "flex items-center gap-2 font-mono text-sm uppercase tracking-widest",
                colorful ? "text-[#f5e6c0]/70" : "text-white",
              )}>
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{
                    backgroundColor: colorful ? dot : "white",
                    boxShadow: colorful ? `0 0 6px ${dot}` : "none",
                  }}
                  aria-hidden="true"
                />
                {label}
              </p>
              <p className={cn(
                "mt-3 font-mono text-16",
                colorful ? "text-[#c8b080]/50" : "text-lightgray",
              )}>
                {skills}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
