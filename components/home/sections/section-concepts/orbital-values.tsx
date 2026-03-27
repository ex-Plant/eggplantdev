/* Agent: Claude — Orbital Values */
import { cn } from "@/helpers/cn";

const VALUES = [
  {
    title: "Accessibility",
    text: "Building for everyone isn't optional. WCAG-compliant interfaces, semantic HTML, keyboard nav, screen reader support — every project.",
  },
  {
    title: "Ownership",
    text: "I don't wait for tickets. Full responsibility from architecture to the last pixel in production.",
  },
  {
    title: "Pragmatism",
    text: "Tools that solve the problem, not tools that impress. Next.js, TypeScript, Tailwind — whatever fits.",
  },
] as const;

type PropsT = { className?: string; colorful?: boolean };

export function OrbitalValues({ className, colorful = false }: PropsT) {
  return (
    <section className={cn(
      "relative py-20 md:py-32",
      colorful ? "bg-[#0a0806]" : "bg-transparent",
      className,
    )}>
      {/* Orbital SVG background */}
      {colorful && (
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          {[160, 220, 280].map((r) => (
            <circle
              key={r}
              cx="50%"
              cy="50%"
              r={r}
              fill="none"
              stroke="#daa520"
              strokeWidth="0.5"
              opacity="0.06"
            />
          ))}
          <polygon
            points="50%,20% 20%,75% 80%,75%"
            fill="none"
            stroke="#daa520"
            strokeWidth="0.3"
            opacity="0.04"
          />
        </svg>
      )}

      <div className="fest-container relative">
        <h2 className="mb-12 font-mono text-40 uppercase md:mb-16 md:text-64">
          <span className={cn(colorful ? "text-[#f5f0e8]" : "text-white")}>What I</span>
          <br />
          <span className={cn(colorful ? "text-[#ffd700]" : "text-white")}>Value</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className={cn(
                "relative rounded-2xl border p-6 md:p-8",
                colorful
                  ? "border-[#daa520]/15 bg-[#daa520]/[0.02]"
                  : "border-white/10 bg-white/[0.02]",
              )}
            >
              <div className={cn(
                "absolute top-3 left-3 size-2 rotate-45 border",
                colorful ? "border-[#ffd700]/30" : "border-white/10",
              )} />
              <h3 className={cn(
                "mb-3 font-mono text-20 uppercase",
                colorful ? "text-[#ffd700]" : "text-white",
              )}>
                {v.title}
              </h3>
              <p className={cn(
                "text-16",
                colorful ? "text-[#c8b080]/55" : "text-lightgray",
              )}>
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
