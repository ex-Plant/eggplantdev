import { cn } from "@/helpers/cn";
import { HeroConcept } from "./shared";

export function CodexSacredBubbleSigil() {
  return (
    <HeroConcept
      eyebrow="Concept / 27"
      title={["Sacred", "Bubble Sigil"]}
      text="The candy-sacred branch. More symbolic geometry, more ritual symmetry, but everything stays sweet, glowing, and almost embarrassingly pretty."
      className="bg-[radial-gradient(circle_at_18%_20%,rgba(251,113,133,0.2),transparent_18%),radial-gradient(circle_at_48%_14%,rgba(250,204,21,0.16),transparent_16%),radial-gradient(circle_at_82%_18%,rgba(192,132,252,0.22),transparent_18%),radial-gradient(circle_at_64%_78%,rgba(244,114,182,0.22),transparent_22%),#0a050c]"
    >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[34rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(24,10,22,0.9),rgba(10,8,12,0.96))] xl:mt-0">
          <div className="relative grid min-h-[34rem] place-items-center overflow-hidden">
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 760" preserveAspectRatio="none">
              <circle cx="500" cy="380" r="228" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.2" />
              <circle cx="500" cy="380" r="166" fill="none" stroke="rgba(251,113,133,0.14)" strokeWidth="1.2" />
              <circle cx="500" cy="380" r="108" fill="none" stroke="rgba(250,204,21,0.14)" strokeWidth="1.2" strokeDasharray="8 12" />
              <polygon points="500,118 742,548 258,548" fill="none" stroke="rgba(192,132,252,0.14)" strokeWidth="1.3" />
              <polygon points="500,642 742,212 258,212" fill="none" stroke="rgba(244,114,182,0.14)" strokeWidth="1.3" />
              <path d="M270 380 H730" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.1" />
              <path d="M500 152 V608" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.1" />
            </svg>
            <div className="absolute h-[25rem] w-[25rem] rounded-full bg-[radial-gradient(circle,rgba(251,113,133,0.18),rgba(244,114,182,0.16)_26%,rgba(250,204,21,0.12)_44%,rgba(192,132,252,0.14)_60%,transparent_74%)]" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Sacred bubble sigil centerpiece" className="hero-pulse relative z-10 h-52 w-52 rotate-[12deg] object-contain md:h-64 md:w-64" />
            {[
              "top-[12%] left-1/2 -translate-x-1/2",
              "left-[18%] bottom-[18%]",
              "right-[18%] bottom-[18%]",
            ].map((pos, index) => (
              <img
                key={pos}
                src="/logos/eggplant-logo-smooth.apng"
                alt={`Sacred bubble sigil satellite ${index + 1}`}
                className={cn("hero-float absolute h-16 w-16 object-contain opacity-76 md:h-20 md:w-20", pos)}
              />
            ))}
            <div className="absolute bottom-8 right-8 max-w-[20rem] rounded-[1.55rem] border border-white/10 bg-[linear-gradient(180deg,rgba(31,12,27,0.88),rgba(10,8,12,0.95))] p-5">
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/62">Ritual / sugared geometry</p>
              <p className="pt-4 text-16 text-lightgray">This is the candy version of the sacred-geometry obsession: still symmetrical and ceremonial, but glowing like confectionery stained glass.</p>
            </div>
          </div>
        </div>
      </HeroConcept>
  );
}
