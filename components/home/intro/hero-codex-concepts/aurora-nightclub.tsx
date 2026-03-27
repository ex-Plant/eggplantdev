import { cn } from "@/helpers/cn";
import { HeroConcept } from "./shared";

export function CodexAuroraNightclub() {
  return (
    <HeroConcept
      eyebrow="Concept / 17"
      title={["Aurora", "Nightclub"]}
      text="The most synthetic colorway so far: toxic lime, electric cyan, hot coral, and violet fog. It should feel like a sacred greenhouse collided with a club flyer."
      className="bg-[radial-gradient(circle_at_20%_18%,rgba(34,197,94,0.22),transparent_18%),radial-gradient(circle_at_52%_12%,rgba(56,189,248,0.18),transparent_16%),radial-gradient(circle_at_82%_20%,rgba(251,113,133,0.18),transparent_18%),radial-gradient(circle_at_68%_70%,rgba(217,70,239,0.22),transparent_22%),#040508]"
    >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[32rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(6,10,11,0.9),rgba(8,6,12,0.94))] xl:mt-0">
          <div className="relative min-h-[32rem] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(34,197,94,0.16),transparent_18%),radial-gradient(circle_at_52%_14%,rgba(56,189,248,0.12),transparent_16%),radial-gradient(circle_at_82%_24%,rgba(251,113,133,0.14),transparent_18%),radial-gradient(circle_at_58%_78%,rgba(217,70,239,0.16),transparent_24%)] blur-2xl" />
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1100 560" preserveAspectRatio="none">
              <path d="M60 420 Q240 80 420 420 T780 420 T1140 420" fill="none" stroke="rgba(34,197,94,0.18)" strokeWidth="1.6" />
              <path d="M40 356 Q260 126 480 356 T920 356 T1360 356" fill="none" stroke="rgba(56,189,248,0.14)" strokeWidth="1.4" />
              <path d="M120 462 Q360 176 600 462 T1080 462" fill="none" stroke="rgba(251,113,133,0.12)" strokeWidth="1.2" />
              <circle cx="550" cy="280" r="176" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.1" />
              <circle cx="550" cy="280" r="112" fill="none" stroke="rgba(217,70,239,0.14)" strokeWidth="1.2" strokeDasharray="8 12" />
            </svg>
            <img src="/logos/eggplant-logo-smooth.apng" alt="Aurora nightclub centerpiece" className="hero-pulse absolute left-1/2 top-1/2 z-10 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rotate-[12deg] object-contain md:h-60 md:w-60" />
            {[
              "left-[12%] top-[18%] h-18 w-18 -rotate-[18deg]",
              "right-[14%] top-[16%] h-16 w-16 rotate-[22deg]",
              "left-[20%] bottom-[12%] h-20 w-20 rotate-[10deg]",
              "right-[18%] bottom-[14%] h-18 w-18 -rotate-[12deg]",
            ].map((pos, index) => (
              <img
                key={pos}
                src="/logos/eggplant-logo-smooth.apng"
                alt={`Aurora nightclub satellite ${index + 1}`}
                className={cn("hero-float absolute object-contain opacity-74", pos)}
              />
            ))}
            <div className="absolute left-8 top-8 rounded-full border border-[#34d399]/24 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#34d399]/70">Open until heat death</div>
            <div className="absolute bottom-8 right-8 max-w-[20rem] rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,14,24,0.9),rgba(8,8,11,0.94))] p-5">
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/62">Venue / orbital afterhours</p>
              <p className="pt-4 text-16 text-lightgray">This is the loud synthetic cousin. Same space-eggplant mythology, but pushed into poster energy, aurora bands, and nightclub saturation.</p>
            </div>
          </div>
        </div>
      </HeroConcept>
  );
}
