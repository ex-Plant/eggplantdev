/* Agent: Claude — Prism Transmission v2 */
import { HeroConcept } from "./shared";

const EGGPLANT_FILTER = "sepia(0.3) saturate(1.5) brightness(0.9)";

export function CodexPrismTransmissionV2() {
  return (
    <HeroConcept
      eyebrow="Concept / 19b"
      title={["Prism", "Transmission"]}
      text="A golden prism refracts warm light across the void. Converging amber rays replace the spectral neon, keeping the optics concept intact."
      className="bg-[radial-gradient(circle_at_20%_20%,rgba(218,165,32,0.22),transparent_18%),radial-gradient(circle_at_50%_14%,rgba(255,215,0,0.16),transparent_16%),radial-gradient(circle_at_80%_24%,rgba(240,192,64,0.18),transparent_18%),radial-gradient(circle_at_60%_76%,rgba(200,134,14,0.14),transparent_22%),#0a0806]"
    >
      <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[33rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,8,6,0.9),rgba(8,6,4,0.96))] xl:mt-0">
        <div className="relative grid min-h-[33rem] place-items-center overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: "radial-gradient(circle, rgba(255,215,0,0.15) 0%, rgba(218,165,32,0.08) 40%, transparent 70%)" }} />
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1100 560" preserveAspectRatio="none">
            {/* Prism triangle */}
            <polygon points="340,200 340,360 200,280" fill="none" stroke="rgba(218,165,32,0.18)" strokeWidth="1.8" />
            {/* Incoming beam */}
            <path d="M80 280 L200 280" stroke="rgba(255,215,0,0.3)" strokeWidth="3" />
            {/* Refracted gold/amber rays */}
            <path d="M340 240 L960 100" stroke="rgba(218,165,32,0.26)" strokeWidth="2.4" />
            <path d="M340 258 L960 190" stroke="rgba(255,215,0,0.22)" strokeWidth="2.2" />
            <path d="M340 276 L960 280" stroke="rgba(240,192,64,0.2)" strokeWidth="2" />
            <path d="M340 294 L960 370" stroke="rgba(200,134,14,0.18)" strokeWidth="2" />
            <path d="M340 312 L960 460" stroke="rgba(218,165,32,0.16)" strokeWidth="1.8" />
            {/* Sacred circles */}
            <circle cx="550" cy="280" r="150" fill="none" stroke="rgba(255,215,0,0.08)" strokeWidth="1.2" />
            <circle cx="550" cy="280" r="96" fill="none" stroke="rgba(218,165,32,0.1)" strokeWidth="1" strokeDasharray="8 12" />
          </svg>
          <img src="/logos/eggplant-logo-smooth.apng" alt="Prism eggplant" className="hero-float absolute left-[26%] top-1/2 z-10 h-48 w-48 -translate-y-1/2 rotate-[16deg] object-contain md:h-60 md:w-60" style={{ filter: EGGPLANT_FILTER }} />
          <div className="absolute right-[5%] top-[10%] max-w-[20rem] rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,8,6,0.92),rgba(8,6,4,0.96))] p-6">
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/65">Optics / golden refraction</p>
            <p className="pt-4 text-16 text-lightgray">The eggplant prism splits a warm beam into amber rays. Sacred geometry halos frame the event in gold.</p>
          </div>
        </div>
      </div>
    </HeroConcept>
  );
}
