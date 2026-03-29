import { HeroConcept } from "./shared";

const PROCESSION_MARKERS = Array.from({ length: 6 }, (_, i) => ({
  top: 120 + i * 92,
  opacity: 0.08 + i * 0.012,
}));

export function CodexProcessionalGate() {
  return (
    <HeroConcept
      eyebrow="Concept / 35 / Agent: Codex"
      title={["Processional", "Gate"]}
      text="A more architectural branch: vertical pylons, a ceremonial runway, and sacred circles stacked like a portal at the end of the procession."
      className="bg-[radial-gradient(circle_at_18%_22%,rgba(240,192,64,0.18),transparent_16%),radial-gradient(circle_at_84%_18%,rgba(245,230,192,0.12),transparent_16%),radial-gradient(circle_at_72%_78%,rgba(200,134,14,0.18),transparent_22%),#090706]"
    >
      <div className="col-span-full mt-12 min-h-[35rem] overflow-hidden rounded-[2rem] border border-[#daa520]/14 bg-[linear-gradient(180deg,rgba(18,12,8,0.96),rgba(8,6,5,0.98))] xl:col-span-10 xl:col-start-7 xl:mt-0">
        <div className="relative min-h-[35rem] overflow-hidden px-4 py-10 sm:px-8">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1000 760"
            preserveAspectRatio="none"
          >
            <path d="M214 84 V676" fill="none" stroke="rgba(218,165,32,0.14)" strokeWidth="1.3" />
            <path d="M786 84 V676" fill="none" stroke="rgba(218,165,32,0.14)" strokeWidth="1.3" />
            <path d="M276 120 V642" fill="none" stroke="rgba(245,230,192,0.1)" strokeWidth="1" />
            <path d="M724 120 V642" fill="none" stroke="rgba(245,230,192,0.1)" strokeWidth="1" />
            <path d="M392 80 V684" fill="none" stroke="rgba(245,230,192,0.08)" strokeWidth="1" strokeDasharray="8 14" />
            <path d="M608 80 V684" fill="none" stroke="rgba(245,230,192,0.08)" strokeWidth="1" strokeDasharray="8 14" />
            <path
              d="M500 226 C590 226 664 300 664 390 C664 480 590 554 500 554 C410 554 336 480 336 390 C336 300 410 226 500 226Z"
              fill="none"
              stroke="rgba(240,192,64,0.16)"
              strokeWidth="1.3"
            />
            <circle cx="500" cy="390" r="112" fill="none" stroke="rgba(245,230,192,0.14)" strokeWidth="1.1" />
            <path d="M388 610 L500 474 L612 610" fill="none" stroke="rgba(200,134,14,0.16)" strokeWidth="1.2" />
            <path d="M324 676 L500 530 L676 676" fill="none" stroke="rgba(245,230,192,0.1)" strokeWidth="1" />
          </svg>

          {PROCESSION_MARKERS.map((marker, i) => (
            <div
              key={i}
              className="absolute left-1/2 h-px w-[58%] -translate-x-1/2 bg-linear-to-r from-transparent via-[#daa520]/30 to-transparent"
              style={{ top: marker.top, opacity: marker.opacity }}
            />
          ))}

          <div className="relative z-10 grid min-h-[35rem] items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="mx-auto flex w-full max-w-[22rem] flex-col items-center text-center lg:order-2">
              <div className="mb-5 rounded-full border border-[#f5e6c0]/12 px-4 py-2 font-mono text-[10px] tracking-[0.3em] text-[#c8b080] uppercase">
                Agent: Codex
              </div>
              <div className="relative">
                <div className="absolute top-1/2 left-1/2 h-[16rem] w-[16rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(240,192,64,0.18),rgba(240,192,64,0.08)_40%,transparent_72%)]" />
                <img
                  src="/logos/eggplant-logo-smooth.apng"
                  alt="Processional Gate centerpiece"
                  className="hero-pulse relative h-40 w-40 rotate-[9deg] object-contain sm:h-48 sm:w-48 md:h-56 md:w-56"
                  style={{ filter: "sepia(0.28) saturate(1.22) brightness(0.98)" }}
                />
              </div>
              <p className="mt-5 max-w-xs font-mono text-[11px] tracking-[0.22em] text-[#daa520]/70 uppercase">
                Portal geometry / runway logic / altar at the end
              </p>
            </div>

            <div className="mx-auto flex w-full max-w-[30rem] flex-col gap-4 lg:order-1">
              <div className="rounded-[1.5rem] border border-[#f5e6c0]/10 bg-[linear-gradient(180deg,rgba(18,12,9,0.78),rgba(11,8,7,0.92))] p-5">
                <p className="font-mono text-[11px] tracking-[0.24em] text-[#daa520]/65 uppercase">Gatehouse notes</p>
                <p className="pt-3 text-sm text-[#c8b080] md:text-[15px]">
                  The spectacle comes from procession rather than explosion. Sacred geometry works like architecture
                  here, not fireworks.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-[#f5e6c0]/10 bg-[#130d0b]/76 p-5">
                  <p className="font-mono text-[10px] tracking-[0.24em] text-[#daa520]/65 uppercase">Desktop</p>
                  <p className="pt-3 text-sm text-[#c8b080]">Split layout with the gate filling the full height.</p>
                </div>
                <div className="rounded-[1.4rem] border border-[#f5e6c0]/10 bg-[#130d0b]/76 p-5">
                  <p className="font-mono text-[10px] tracking-[0.24em] text-[#daa520]/65 uppercase">Mobile</p>
                  <p className="pt-3 text-sm text-[#c8b080]">
                    Text blocks stack underneath so the portal stays clean and centered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroConcept>
  );
}
