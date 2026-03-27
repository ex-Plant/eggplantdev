/* Agent: Claude — Gilded Testimony */
import { cn } from "@/helpers/cn";

const QUOTES = [
  {
    text: "Konrad delivered exactly what we needed — clean architecture, solid accessibility, and zero drama.",
    attribution: "Creative Director, Berlin Studio",
  },
  {
    text: "He treats frontend like craft, not just ticket work. The codebase he left us was the cleanest we've inherited.",
    attribution: "CTO, SaaS Startup",
  },
  {
    text: "Rare to find someone who understands both the product side and the technical depth.",
    attribution: "Founder, Cultural Platform",
  },
] as const;

type PropsT = { className?: string; colorful?: boolean };

export function GildedTestimony({ className, colorful = false }: PropsT) {
  return (
    <section className={cn(
      "py-20 md:py-32",
      colorful ? "bg-[#0a0806]" : "bg-transparent",
      className,
    )}>
      <div className="fest-container">
        <h2 className="mb-12 font-mono text-40 uppercase md:mb-16 md:text-64">
          <span className={cn(colorful ? "text-[#f5e6c0]" : "text-white")}>Kind</span>
          <br />
          <span className={cn(colorful ? "text-[#ffd700]" : "text-white")}>Words</span>
        </h2>

        <div className="space-y-6">
          {QUOTES.map((q) => (
            <div
              key={q.attribution}
              className={cn(
                "relative rounded-xl border p-8 md:p-10",
                colorful
                  ? "border-[#daa520]/12 bg-[#daa520]/[0.015]"
                  : "border-white/10 bg-white/[0.02]",
              )}
            >
              <span
                className={cn(
                  "pointer-events-none absolute top-4 left-6 font-mono text-64 select-none",
                  colorful ? "text-[#daa520]/15" : "text-white/10",
                )}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <p className={cn(
                "relative text-16 italic md:text-20",
                colorful ? "text-[#f5e6c0]/70" : "text-white",
              )}>
                {q.text}
              </p>

              <p className={cn(
                "mt-6 font-mono text-sm uppercase tracking-widest",
                colorful ? "text-[#daa520]/40" : "text-lightgray",
              )}>
                — {q.attribution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
