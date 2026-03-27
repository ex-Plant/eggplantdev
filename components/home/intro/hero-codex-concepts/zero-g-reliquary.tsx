import { HeroConcept } from "./shared";

export function CodexZeroGReliquary() {
  return (
    <HeroConcept
      eyebrow="Concept / 14"
      title={["Zero-G", "Reliquary"]}
      text="Treat the eggplant like a saintly museum specimen floating inside a glass chamber. Sacred geometry becomes framing hardware instead of a background aura."
      className="bg-[radial-gradient(circle_at_20%_22%,rgba(140,153,241,0.14),transparent_18%),radial-gradient(circle_at_72%_22%,rgba(16,255,170,0.12),transparent_16%),radial-gradient(circle_at_58%_72%,rgba(217,70,239,0.18),transparent_22%),#05060a]"
    >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[32rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(11,14,20,0.9),rgba(6,7,11,0.96))] xl:mt-0">
          <div className="relative grid min-h-[32rem] gap-6 p-6 md:grid-cols-[0.88fr_1.12fr] md:p-8">
            <div className="flex flex-col justify-between rounded-[1.75rem] border border-white/10 bg-black/20 p-5 md:p-6">
              <div>
                <p className="font-mono text-sm uppercase tracking-[0.18em] text-[#10ffaa]/60">Archive / reliquary vault</p>
                <h3 className="pt-5 font-mono text-28 uppercase leading-none text-white md:text-36">Specimen<br />A-UBR-GN</h3>
                <p className="pt-6 text-16 text-lightgray">
                  A calmer but weirder direction. Instead of “logo in space,” it feels like the object has been recovered, suspended, and studied by a civilization with excellent taste in diagramming.
                </p>
              </div>
              <div className="grid gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-lightgray/58">
                <span>Containment / stable</span>
                <span>Rotation / devotional</span>
                <span>Atmosphere / plum ionized</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-[radial-gradient(circle_at_50%_35%,rgba(140,153,241,0.08),transparent_22%),linear-gradient(180deg,rgba(8,12,18,0.92),rgba(5,6,10,0.96))]">
              <div className="absolute inset-[8%] rounded-[1.6rem] border border-white/10" />
              <div className="absolute inset-[14%] rounded-[1.3rem] border border-[#10ffaa]/14" />
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-linear-to-b from-transparent via-white/12 to-transparent" />
              <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-linear-to-r from-transparent via-white/12 to-transparent" />
              <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 720 520" preserveAspectRatio="none">
                <path d="M130 430 L360 88 L590 430 Z" fill="none" stroke="rgba(16,255,170,0.14)" strokeWidth="1.2" />
                <path d="M170 124 L550 124" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="10 12" />
                <path d="M170 396 L550 396" fill="none" stroke="rgba(217,70,239,0.12)" strokeWidth="1" strokeDasharray="10 12" />
                <circle cx="360" cy="260" r="132" fill="none" stroke="rgba(247,199,68,0.12)" strokeWidth="1.2" />
                <circle cx="360" cy="260" r="84" fill="none" stroke="rgba(140,153,241,0.14)" strokeWidth="1.2" />
              </svg>
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(217,70,239,0.14),rgba(140,153,241,0.08)_40%,transparent_66%)]" />
              <img
                src="/logos/eggplant-logo-smooth.apng"
                alt="Zero gravity reliquary eggplant"
                className="hero-float absolute left-1/2 top-1/2 z-10 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rotate-[16deg] object-contain md:h-60 md:w-60"
              />
              <div className="absolute left-6 top-6 rounded-full border border-white/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-lightgray/58">Recovered intact</div>
              <div className="absolute bottom-6 right-6 rounded-full border border-white/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-lightgray/58">Do not worship</div>
            </div>
          </div>
        </div>
      </HeroConcept>
  );
}
