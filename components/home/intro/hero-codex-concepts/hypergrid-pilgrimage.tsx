import { HeroConcept } from "./shared";

export function CodexHypergridPilgrimage() {
  return (
    <HeroConcept
      eyebrow="Concept / 21"
      title={["Hypergrid", "Pilgrimage"]}
      text="The most graphic neon option so far. It feels halfway between a holy waypoint, a terminal screen, and a psychedelic transit map for eggplants crossing the void."
      className="bg-[radial-gradient(circle_at_16%_18%,rgba(59,130,246,0.16),transparent_18%),radial-gradient(circle_at_52%_14%,rgba(16,255,170,0.16),transparent_16%),radial-gradient(circle_at_82%_18%,rgba(217,70,239,0.22),transparent_18%),radial-gradient(circle_at_66%_78%,rgba(57,255,20,0.12),transparent_20%),#010306]"
    >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[32rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(3,7,11,0.92),rgba(5,5,8,0.96))] xl:mt-0">
          <div className="relative grid min-h-[32rem] gap-6 p-6 md:grid-cols-[1fr_0.96fr] md:p-8">
            <div className="relative overflow-hidden rounded-[1.8rem] border border-[#10ffaa]/14 bg-[linear-gradient(180deg,rgba(6,14,16,0.92),rgba(7,7,10,0.96))] p-6">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(16,255,170,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,255,170,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />
              <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 560 460" preserveAspectRatio="none">
                <path d="M70 230 H490" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.2" />
                <path d="M280 60 V400" fill="none" stroke="rgba(16,255,170,0.14)" strokeWidth="1.2" />
                <path d="M110 100 L450 360" fill="none" stroke="rgba(217,70,239,0.14)" strokeWidth="1.1" />
                <path d="M110 360 L450 100" fill="none" stroke="rgba(59,130,246,0.12)" strokeWidth="1.1" />
                <circle cx="280" cy="230" r="132" fill="none" stroke="rgba(57,255,20,0.14)" strokeWidth="1.2" />
                <circle cx="280" cy="230" r="88" fill="none" stroke="rgba(217,70,239,0.12)" strokeWidth="1.1" strokeDasharray="8 12" />
              </svg>
              <img src="/logos/eggplant-logo-smooth.apng" alt="Hypergrid pilgrimage center" className="hero-pulse absolute left-1/2 top-1/2 z-10 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rotate-[12deg] object-contain md:h-56 md:w-56" />
              <div className="relative z-10 flex h-full items-start justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-lightgray/58">
                <span>Node / aub-09</span>
                <span>Route / luminous</span>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="rounded-[1.7rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(217,70,239,0.12),transparent_28%),linear-gradient(180deg,rgba(13,17,24,0.92),rgba(8,8,10,0.96))] p-5">
                <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/64">Navigation / holy terminal</p>
                <p className="pt-4 text-16 text-lightgray">This is the sharpest fit with the field-notes experiments: grid logic, signal colors, and a slightly deranged sense of cosmic information design.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Wayfinding", "Reads like a destination screen for an impossible neon pilgrimage."],
                  ["Tone", "Keeps the eggplant absurd, but makes the frame feel authored and systemized."],
                ].map(([label, copy]) => (
                  <div key={label} className="rounded-[1.45rem] border border-white/10 bg-black/20 p-5">
                    <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/58">{label}</p>
                    <p className="pt-4 text-16 text-lightgray/88">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </HeroConcept>
  );
}
