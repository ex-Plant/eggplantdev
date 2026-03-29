import { HeroConcept } from "./shared";

export function CodexVelvetDetonation() {
  return (
    <HeroConcept
      eyebrow="Concept / 29"
      title={["Velvet", "Detonation"]}
      text="A darker, richer supernova version where the candy palette gets sunk into velvet reds and orchid purples before flaring back out in gold."
      className="bg-[radial-gradient(circle_at_18%_18%,rgba(190,24,93,0.28),transparent_18%),radial-gradient(circle_at_48%_14%,rgba(250,204,21,0.18),transparent_16%),radial-gradient(circle_at_82%_22%,rgba(217,70,239,0.22),transparent_18%),radial-gradient(circle_at_62%_76%,rgba(249,115,22,0.16),transparent_20%),#080309]"
    >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[33rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(28,8,18,0.92),rgba(9,7,12,0.96))] xl:mt-0">
          <div className="relative grid min-h-[33rem] place-items-center overflow-hidden">
            <div className="absolute h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(250,204,21,0.16),rgba(217,70,239,0.16)_26%,rgba(190,24,93,0.18)_46%,transparent_72%)]" />
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 760" preserveAspectRatio="none">
              {Array.from({ length: 12 }, (_, i) => {
                const angle = (Math.PI * 2 * i) / 12;
                const x2 = 500 + 280 * Math.cos(angle);
                const y2 = 380 + 280 * Math.sin(angle);
                return <line key={i} x1="500" y1="380" x2={x2} y2={y2} stroke="rgba(255,255,255,0.07)" strokeWidth="1.1" />;
              })}
              <circle cx="500" cy="380" r="182" fill="none" stroke="rgba(250,204,21,0.14)" strokeWidth="1.2" />
            </svg>
            <img src="/logos/eggplant-logo-smooth.apng" alt="Velvet detonation centerpiece" className="hero-pulse relative z-10 h-52 w-52 rotate-[12deg] object-contain md:h-64 md:w-64" />
            <div className="absolute bottom-8 right-8 max-w-[20rem] rounded-[1.55rem] border border-white/10 bg-[linear-gradient(180deg,rgba(32,10,21,0.88),rgba(9,7,12,0.95))] p-5">
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/62">Finish / plush combustion</p>
              <p className="pt-4 text-16 text-lightgray">More expensive, less toy-like. It still belongs to the Candy Supernova family, but it feels denser and more cinematic.</p>
            </div>
          </div>
        </div>
      </HeroConcept>
  );
}
