/* Agent: Claude — Ritual Timeline */
import { cn } from "@/helpers/cn";

type PropsT = { className?: string; colorful?: boolean };

const MILESTONES = [
  {
    year: "2018",
    title: "Forum Przestrzenie",
    text: "Venue manager at Kraków's landmark cultural space. Team of ~100, bars, concerts, festivals.",
  },
  {
    year: "2022",
    title: "Frontend Developer",
    text: "Transitioned to code. Joined Navarra Lab building for cultural institutions and startups.",
  },
  {
    year: "2024",
    title: "Freelance",
    text: "Started taking on solo projects. Full-stack delivery from scope to production.",
  },
  {
    year: "2025",
    title: "AI & Beyond",
    text: "Exploring AI technologies, building applications with integrated LLM agents.",
  },
] as const;

export function RitualTimeline({ className, colorful = false }: PropsT) {
  return (
    <section
      className={cn(
        "py-20 md:py-32",
        colorful ? "bg-[#0a0806]" : "bg-transparent",
        className,
      )}
    >
      <div className="fest-container">
        <h2 className="mb-12 font-mono text-40 uppercase md:mb-16 md:text-64">
          <span className={cn(colorful ? "text-[#f5e6c0]" : "text-white")}>
            The
          </span>
          <br />
          <span className={cn(colorful ? "text-[#ffd700]" : "text-white")}>
            Journey
          </span>
        </h2>

        <div
          className={cn(
            "relative space-y-12 border-l pl-8",
            colorful ? "border-[#daa520]/20" : "border-white/10",
          )}
        >
          {MILESTONES.map((m) => (
            <div key={m.year} className="relative">
              <span
                className={cn(
                  "absolute -left-[calc(2rem+0.3125rem)] top-1 size-2.5 rounded-full",
                  colorful ? "bg-[#daa520]" : "bg-white",
                )}
                aria-hidden="true"
              />

              <p
                className={cn(
                  "font-mono text-sm uppercase tracking-widest",
                  colorful ? "text-[#daa520]/50" : "text-lightgray",
                )}
              >
                {m.year}
              </p>

              <h3
                className={cn(
                  "mt-2 font-mono text-20 uppercase md:text-24",
                  colorful ? "text-[#f5e6c0]" : "text-white",
                )}
              >
                {m.title}
              </h3>

              <p
                className={cn(
                  "mt-2 text-16",
                  colorful ? "text-[#c8b080]/50" : "text-lightgray",
                )}
              >
                {m.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
