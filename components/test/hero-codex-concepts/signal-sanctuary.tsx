import { HeroConcept } from "./shared";

export function CodexSignalSanctuary() {
  return (
    <HeroConcept
      eyebrow="Concept / 19"
      title={["Signal", "Sanctuary"]}
      text="This one leans directly into the field-notes-test palette: dark void, laser-green geometry, magenta interference, and a cyan scan glow around the object."
      className="bg-[radial-gradient(circle_at_18%_20%,rgba(16,255,170,0.18),transparent_18%),radial-gradient(circle_at_78%_18%,rgba(217,70,239,0.2),transparent_20%),radial-gradient(circle_at_62%_74%,rgba(59,130,246,0.14),transparent_18%),#020307]"
    >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[32rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(3,7,9,0.92),rgba(5,5,8,0.96))] xl:mt-0">
          <div className="relative grid min-h-[32rem] place-items-center overflow-hidden">
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 720" preserveAspectRatio="none">
              <circle cx="500" cy="360" r="210" fill="none" stroke="rgba(16,255,170,0.16)" strokeWidth="1.5" />
              <circle cx="500" cy="360" r="278" fill="none" stroke="rgba(217,70,239,0.14)" strokeWidth="1.2" strokeDasharray="8 12" />
              <circle cx="500" cy="360" r="128" fill="none" stroke="rgba(59,130,246,0.16)" strokeWidth="1.2" />
              <path d="M200 540 L500 120 L800 540 Z" fill="none" stroke="rgba(16,255,170,0.14)" strokeWidth="1.3" />
              <path d="M200 210 L500 600 L800 210 Z" fill="none" stroke="rgba(217,70,239,0.12)" strokeWidth="1.2" />
              <path d="M500 88 L500 632" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.1" strokeDasharray="10 12" />
            </svg>
            <div className="absolute h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.16),rgba(16,255,170,0.1)_34%,rgba(217,70,239,0.08)_58%,transparent_72%)]" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Signal sanctuary eggplant" className="hero-pulse relative z-10 h-48 w-48 rotate-[10deg] object-contain md:h-60 md:w-60" />
            <div className="absolute left-8 top-8 rounded-full border border-[#10ffaa]/20 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#10ffaa]/70">Frequency / devotional</div>
            <div className="absolute bottom-8 right-8 max-w-[20rem] rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,16,22,0.9),rgba(7,8,10,0.94))] p-5">
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/62">Mode / sacred broadcast</p>
              <p className="pt-4 text-16 text-lightgray">A cleaner neon hero with stronger object worship. Very close to the field-notes-test mood, but still framed as a surreal cosmic altar.</p>
            </div>
          </div>
        </div>
      </HeroConcept>
  );
}
