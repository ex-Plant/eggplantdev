import { HeroConcept } from "./shared";

export function CodexObservatoryOfLostProduce() {
  return (
    <HeroConcept
      eyebrow="Concept / 12"
      title={["Observatory", "Of Lost Produce"]}
      text="Less shrine, more cosmic instrument panel. The eggplant is treated like a classified celestial event inside a wall of diagrams, markers, and impossible coordinates."
      className="bg-[radial-gradient(circle_at_18%_22%,rgba(16,255,170,0.16),transparent_18%),radial-gradient(circle_at_78%_26%,rgba(217,70,239,0.18),transparent_20%),radial-gradient(circle_at_68%_74%,rgba(247,199,68,0.08),transparent_16%),#040507]"
    >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[32rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(4,8,9,0.82),rgba(7,7,10,0.94))] xl:mt-0">
          <div className="relative grid min-h-[32rem] gap-6 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-8">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-[#10ffaa]/16 bg-[radial-gradient(circle_at_28%_24%,rgba(16,255,170,0.12),transparent_18%),linear-gradient(180deg,rgba(4,10,11,0.94),rgba(4,6,8,0.94))] p-5 md:p-6">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] opacity-35" />
              <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 600 480" preserveAspectRatio="none">
                <circle cx="300" cy="240" r="148" fill="none" stroke="rgba(16,255,170,0.2)" strokeWidth="1" />
                <circle cx="300" cy="240" r="108" fill="none" stroke="rgba(217,70,239,0.16)" strokeWidth="1" strokeDasharray="8 12" />
                <circle cx="300" cy="240" r="72" fill="none" stroke="rgba(247,199,68,0.16)" strokeWidth="1" />
                <path d="M90 380 L300 90 L510 380 Z" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                <path d="M120 120 Q300 300 480 120" fill="none" stroke="rgba(16,255,170,0.14)" strokeWidth="1" />
                <path d="M120 360 Q300 180 480 360" fill="none" stroke="rgba(217,70,239,0.14)" strokeWidth="1" />
              </svg>
              <img
                src="/logos/eggplant-logo-smooth.apng"
                alt="Observatory of lost produce central specimen"
                className="hero-float absolute left-1/2 top-1/2 z-10 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rotate-[12deg] object-contain md:h-56 md:w-56"
              />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="flex items-start justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-[#10ffaa]/62">
                  <span>Sector / 77A</span>
                  <span>Signal locked</span>
                </div>
                <div className="grid gap-3 self-end text-right font-mono text-[11px] uppercase tracking-[0.2em] text-lightgray/58">
                  <span>Axis / sacred drift</span>
                  <span>Mass / unreasonable</span>
                  <span>Fate / glossy</span>
                </div>
              </div>
            </div>
            <div className="grid gap-4 md:grid-rows-[0.95fr_1.05fr]">
              <div className="rounded-[1.75rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(217,70,239,0.12),transparent_30%),linear-gradient(180deg,rgba(16,18,24,0.94),rgba(8,8,10,0.96))] p-5">
                <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/68">Mode / deep scan</p>
                <p className="pt-4 text-16 text-lightgray">
                  This one borrows the field-notes test energy most directly: chart lines, coded labels, and the feeling that the whole hero is half interface, half cult astronomy.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Origin map", "Triangulated against a fake star chart so the object feels discovered, not placed."],
                  ["Containment notes", "A catalog card for the holiest vegetable in the known universe."],
                ].map(([label, copy]) => (
                  <div key={label} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                    <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/60">{label}</p>
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
