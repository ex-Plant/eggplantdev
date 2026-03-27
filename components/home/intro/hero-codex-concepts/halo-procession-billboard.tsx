import { HeroConcept } from "./shared";

const HALO_BADGES = ["Poster shrine", "Eggplant relic", "Orbit choir", "Sacred copy"];

export function CodexHaloProcessionBillboard() {
  return (
    <HeroConcept
      eyebrow="Concept / 37 / Agent: Codex"
      title={["Halo Procession", "Billboard"]}
      text="The loudest poster variant in the batch: side captions, stacked badges, a giant halo, and a broad theatrical composition that still collapses cleanly into a centered mobile card."
      className="bg-[radial-gradient(circle_at_18%_16%,rgba(218,165,32,0.2),transparent_18%),radial-gradient(circle_at_84%_22%,rgba(245,230,192,0.12),transparent_20%),radial-gradient(circle_at_56%_82%,rgba(200,134,14,0.18),transparent_24%),#0b0706]"
    >
      <div className="col-span-full mt-12 min-h-[35rem] overflow-hidden rounded-[2rem] border border-[#daa520]/14 bg-[linear-gradient(180deg,rgba(22,14,10,0.95),rgba(9,7,5,0.98))] xl:col-span-10 xl:col-start-7 xl:mt-0">
        <div className="relative min-h-[35rem] overflow-hidden px-4 py-8 sm:px-8 sm:py-10">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1000 760"
            preserveAspectRatio="none"
          >
            <circle cx="500" cy="360" r="208" fill="none" stroke="rgba(240,192,64,0.16)" strokeWidth="1.3" />
            <circle cx="500" cy="360" r="146" fill="none" stroke="rgba(245,230,192,0.14)" strokeWidth="1.1" />
            <path d="M262 360 H738" fill="none" stroke="rgba(245,230,192,0.08)" strokeWidth="1" />
            <path d="M500 122 V598" fill="none" stroke="rgba(245,230,192,0.08)" strokeWidth="1" />
            <polygon
              points="500,118 646,214 646,506 500,602 354,506 354,214"
              fill="none"
              stroke="rgba(218,165,32,0.15)"
              strokeWidth="1.2"
            />
            <path
              d="M118 170 H268 M118 590 H268 M732 170 H882 M732 590 H882"
              fill="none"
              stroke="rgba(245,230,192,0.08)"
              strokeWidth="1"
            />
          </svg>

          <div className="relative z-10 grid min-h-[35rem] gap-6 lg:grid-cols-[0.9fr_1.15fr_0.9fr] lg:items-center">
            <div className="order-2 flex flex-wrap gap-3 lg:order-1 lg:flex-col">
              {HALO_BADGES.map((badge) => (
                <div
                  key={badge}
                  className="rounded-full border border-[#f5e6c0]/12 bg-[#130d0b]/72 px-4 py-2 font-mono text-[10px] tracking-[0.24em] text-[#c8b080] uppercase"
                >
                  {badge}
                </div>
              ))}
            </div>

            <div className="order-1 flex flex-col items-center text-center lg:order-2">
              <p className="mb-4 rounded-full border border-[#daa520]/18 px-4 py-2 font-mono text-[10px] tracking-[0.32em] text-[#c8b080] uppercase">
                Agent: Codex
              </p>
              <div className="relative">
                <div className="absolute top-1/2 left-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(240,192,64,0.2),rgba(245,230,192,0.1)_36%,transparent_72%)]" />
                <img
                  src="/logos/eggplant-logo-smooth.apng"
                  alt="Halo Procession Billboard centerpiece"
                  className="hero-pulse relative h-40 w-40 rotate-[10deg] object-contain sm:h-48 sm:w-48 md:h-56 md:w-56"
                  style={{ filter: "sepia(0.26) saturate(1.22) brightness(1.02)" }}
                />
              </div>
              <p className="mt-5 max-w-sm text-sm text-[#c8b080] md:text-[15px]">
                A retro billboard composition that keeps the central joke intact while turning the surrounding labels
                into a ceremonial ad campaign.
              </p>
            </div>

            <div className="order-3 flex flex-col gap-4">
              <div className="rounded-[1.45rem] border border-[#f5e6c0]/10 bg-[linear-gradient(180deg,rgba(20,12,10,0.78),rgba(12,8,7,0.94))] p-5">
                <p className="font-mono text-[11px] tracking-[0.24em] text-[#daa520]/65 uppercase">Responsive note</p>
                <p className="pt-3 text-sm text-[#c8b080] md:text-[15px]">
                  Desktop reads like a three-column poster. Tablet turns into a central stage with side notes. Mobile
                  stacks into a clean halo card first, labels second.
                </p>
              </div>
              <div className="rounded-[1.45rem] border border-[#f5e6c0]/10 bg-[#130d0b]/76 p-5">
                <p className="font-mono text-[11px] tracking-[0.24em] text-[#daa520]/65 uppercase">Mood</p>
                <p className="pt-3 text-sm text-[#c8b080]">
                  Not solemn, not goofy. It should feel like a fake holy poster with enough conviction to sell the
                  absurdity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroConcept>
  );
}
