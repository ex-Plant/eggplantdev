/* Agent: Claude — Constellation Bio */
import { cn } from "@/helpers/cn";

const BLOCKS = [
  {
    label: "Background",
    text: "Studied Comparative Studies of Civilizations at Jagiellonian University. Before code, four years managing Forum Przestrzenie Kraków — a landmark venue with bars, concerts, festivals, and a team of ~100.",
  },
  {
    label: "Now",
    text: "Frontend and full-stack since 2022. Working at Navarra Lab across projects for cultural institutions, startups, and e-commerce in Berlin and Kraków. Freelancing since 2024, delivering full-stack apps from scope to production.",
  },
  {
    label: "Off the Clock",
    text: "DJing, kitesurfing, surfing. Based between Kraków and Warsaw.",
  },
] as const;

const STARS = [
  { cx: 80, cy: 40 }, { cx: 200, cy: 90 }, { cx: 350, cy: 30 },
  { cx: 500, cy: 110 }, { cx: 650, cy: 50 }, { cx: 780, cy: 130 },
  { cx: 900, cy: 60 }, { cx: 120, cy: 200 }, { cx: 300, cy: 250 },
  { cx: 460, cy: 190 }, { cx: 620, cy: 270 }, { cx: 750, cy: 220 },
  { cx: 880, cy: 300 }, { cx: 180, cy: 340 }, { cx: 540, cy: 330 },
] as const;

const LINES = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
  [7, 8], [8, 9], [9, 10], [10, 11], [11, 12],
  [1, 8], [3, 9], [5, 11], [13, 8], [14, 10],
] as const;

type PropsT = { className?: string; colorful?: boolean };

export function ConstellationBio({ className, colorful = false }: PropsT) {
  return (
    <section className={cn(
      "relative overflow-hidden py-20 md:py-32",
      colorful ? "bg-[#0a0806]" : "bg-transparent",
      className,
    )}>
      {colorful && (
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
          viewBox="0 0 960 380"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          {LINES.map(([a, b]) => (
            <line
              key={`${a}-${b}`}
              x1={STARS[a].cx} y1={STARS[a].cy}
              x2={STARS[b].cx} y2={STARS[b].cy}
              stroke="#daa520" strokeWidth="1"
            />
          ))}
          {STARS.map((s, i) => (
            <circle key={i} cx={s.cx} cy={s.cy} r="3" fill="#daa520" />
          ))}
        </svg>
      )}

      <div className="fest-grid relative">
        <h2 className="col-span-full font-mono text-40 uppercase leading-none md:col-span-4 md:text-64">
          <span className={cn("block", colorful ? "text-[#f5e6c0]" : "text-white")}>About</span>
          <span className={cn("block", colorful ? "text-[#daa520]" : "text-white")}>Me</span>
        </h2>

        <div className="col-span-full space-y-8 pt-10 md:col-span-8 md:pt-0">
          {BLOCKS.map(({ label, text }) => (
            <div key={label} className="flex gap-4">
              <span
                className={cn(
                  "mt-2 block h-2 w-2 shrink-0 rounded-full",
                  colorful ? "bg-[#daa520]" : "bg-white",
                )}
                aria-hidden="true"
              />
              <div>
                <p className={cn(
                  "font-mono text-sm uppercase tracking-widest",
                  colorful ? "text-[#daa520]/50" : "text-lightgray",
                )}>
                  {label}
                </p>
                <p className={cn(
                  "mt-2 text-16 md:text-20",
                  colorful ? "text-[#c8b080]/60" : "text-lightgray",
                )}>
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
