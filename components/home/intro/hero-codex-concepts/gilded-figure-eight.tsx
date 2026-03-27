import { HeroConcept } from "./shared";

const FIGURE_EIGHT_STARS = Array.from({ length: 24 }, (_, i) => ({
  left: `${8 + ((i * 17) % 84)}%`,
  top: `${10 + ((i * 23) % 76)}%`,
  size: i % 5 === 0 ? "h-2 w-2" : "h-1 w-1",
  color: i % 3 === 0 ? "bg-[#f5e6c0]/70" : "bg-[#daa520]/60",
}));

export function CodexGildedFigureEight() {
  return (
    <HeroConcept
      eyebrow="Concept / 33 / Agent: Codex"
      title={["Gilded", "Figure Eight"]}
      text="A devotional figure-eight built from twin orbital chambers, processional rays, and a warm relic palette. It leans hardest into the Echoes of Djembeya symmetry without copying its poster."
      className="bg-[radial-gradient(circle_at_18%_18%,rgba(218,165,32,0.22),transparent_18%),radial-gradient(circle_at_78%_18%,rgba(245,230,192,0.12),transparent_18%),radial-gradient(circle_at_50%_82%,rgba(200,134,14,0.18),transparent_26%),#0d0907]"
    >
      <div className="col-span-full mt-12 min-h-[35rem] overflow-hidden rounded-[2rem] border border-[#daa520]/15 bg-[linear-gradient(180deg,rgba(18,12,8,0.96),rgba(9,6,5,0.98))] xl:col-span-10 xl:col-start-7 xl:mt-0">
        <div className="relative grid min-h-[35rem] place-items-center overflow-hidden px-4 py-10 sm:px-8">
          {FIGURE_EIGHT_STARS.map((star, i) => (
            <span
              key={i}
              className={`absolute rounded-full ${star.size} ${star.color}`}
              style={{ left: star.left, top: star.top }}
            />
          ))}

          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1000 760"
            preserveAspectRatio="none"
          >
            <path
              d="M500 78 V682"
              fill="none"
              stroke="rgba(245,230,192,0.12)"
              strokeWidth="1.1"
              strokeDasharray="10 16"
            />
            <path d="M194 380 H806" fill="none" stroke="rgba(245,230,192,0.08)" strokeWidth="1" />
            <circle cx="500" cy="248" r="156" fill="none" stroke="rgba(218,165,32,0.2)" strokeWidth="1.4" />
            <circle cx="500" cy="512" r="156" fill="none" stroke="rgba(218,165,32,0.2)" strokeWidth="1.4" />
            <circle cx="500" cy="248" r="104" fill="none" stroke="rgba(240,192,64,0.14)" strokeWidth="1.2" />
            <circle cx="500" cy="512" r="104" fill="none" stroke="rgba(240,192,64,0.14)" strokeWidth="1.2" />
            <path
              d="M500 154 C614 194 614 302 500 342 C386 302 386 194 500 154Z"
              fill="none"
              stroke="rgba(245,230,192,0.14)"
              strokeWidth="1.1"
            />
            <path
              d="M500 418 C614 458 614 566 500 606 C386 566 386 458 500 418Z"
              fill="none"
              stroke="rgba(245,230,192,0.14)"
              strokeWidth="1.1"
            />
            <path d="M350 248 H650" fill="none" stroke="rgba(200,176,128,0.11)" strokeWidth="1" />
            <path d="M350 512 H650" fill="none" stroke="rgba(200,176,128,0.11)" strokeWidth="1" />
            <polygon
              points="500,124 610,248 500,372 390,248"
              fill="none"
              stroke="rgba(200,134,14,0.12)"
              strokeWidth="1.2"
            />
            <polygon
              points="500,388 610,512 500,636 390,512"
              fill="none"
              stroke="rgba(200,134,14,0.12)"
              strokeWidth="1.2"
            />
          </svg>

          <div className="absolute top-1/2 left-1/2 h-[28rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-[999px] bg-[radial-gradient(circle,rgba(240,192,64,0.14),rgba(218,165,32,0.08)_42%,transparent_72%)]" />

          <div className="relative z-10 flex w-full max-w-[18rem] flex-col items-center gap-5 md:max-w-[22rem]">
            <div className="w-full rounded-full border border-[#daa520]/18 px-4 py-2 text-center font-mono text-[10px] tracking-[0.28em] text-[#c8b080] uppercase">
              Agent: Codex
            </div>
            <div className="grid w-full gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
              <div className="hidden h-px bg-linear-to-r from-transparent via-[#daa520]/40 to-transparent md:block" />
              <img
                src="/logos/eggplant-logo-smooth.apng"
                alt="Gilded Figure Eight centerpiece"
                className="hero-pulse mx-auto h-40 w-40 rotate-[8deg] object-contain sm:h-44 sm:w-44 md:h-52 md:w-52"
                style={{ filter: "sepia(0.3) saturate(1.2) brightness(0.98)" }}
              />
              <div className="hidden h-px bg-linear-to-r from-transparent via-[#daa520]/40 to-transparent md:block" />
            </div>
            <div className="w-full rounded-[1.5rem] border border-[#f5e6c0]/10 bg-[linear-gradient(180deg,rgba(29,20,13,0.76),rgba(13,8,6,0.92))] px-5 py-4 text-center">
              <p className="font-mono text-[11px] tracking-[0.26em] text-[#daa520]/70 uppercase">
                Figure-eight shrine / responsive orbit
              </p>
              <p className="pt-3 text-sm text-[#c8b080] md:text-[15px]">
                Twin sanctums stack into a single cosmic relic on mobile, then breathe back into a tall ceremonial
                diagram on larger screens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </HeroConcept>
  );
}
