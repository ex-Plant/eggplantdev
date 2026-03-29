import { HeroConcept } from "./shared";

export function CodexBubblegumOracle() {
  return (
    <HeroConcept
      eyebrow="Concept / 24"
      title={["Bubblegum", "Oracle"]}
      text="A softer but still absurd version: giant glowing oracle disc, sweet gradients, and the eggplant floating like a pop deity inside a candy shrine."
      className="bg-[radial-gradient(circle_at_18%_20%,rgba(251,113,133,0.22),transparent_18%),radial-gradient(circle_at_48%_16%,rgba(244,114,182,0.2),transparent_18%),radial-gradient(circle_at_82%_20%,rgba(250,204,21,0.18),transparent_16%),radial-gradient(circle_at_62%_78%,rgba(192,132,252,0.22),transparent_22%),#0b050c]"
    >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[33rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(24,10,20,0.9),rgba(10,8,12,0.96))] xl:mt-0">
          <div className="relative grid min-h-[33rem] gap-6 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-8">
            <div className="flex flex-col justify-between rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(33,13,26,0.84),rgba(12,9,13,0.94))] p-6">
              <div>
                <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/62">Oracle / sugar void</p>
                <p className="pt-5 text-16 text-lightgray">
                  This is still in the Candy Supernova family, but less explosion and more idol. The whole thing becomes syrupy, glossy, and weirdly reverent.
                </p>
              </div>
              <div className="grid gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-lightgray/56">
                <span>Surface / lacquered</span>
                <span>Glow / bubblegum solar</span>
                <span>Status / adored</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[1.95rem] border border-white/10 bg-[linear-gradient(180deg,rgba(23,10,20,0.92),rgba(9,8,12,0.96))]">
              <div className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(251,113,133,0.2),rgba(244,114,182,0.18)_28%,rgba(250,204,21,0.16)_48%,rgba(192,132,252,0.16)_64%,transparent_76%)]" />
              <div className="absolute left-1/2 top-1/2 h-[17rem] w-[17rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f9a8d4]/18" />
              <div className="absolute left-1/2 top-1/2 h-[11rem] w-[11rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#facc15]/18" />
              <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 700 520" preserveAspectRatio="none">
                <path d="M120 420 L350 90 L580 420 Z" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.2" />
                <path d="M170 130 H530" fill="none" stroke="rgba(244,114,182,0.12)" strokeWidth="1.1" strokeDasharray="10 14" />
                <path d="M170 390 H530" fill="none" stroke="rgba(250,204,21,0.12)" strokeWidth="1.1" strokeDasharray="10 14" />
              </svg>
              <img src="/logos/eggplant-logo-smooth.apng" alt="Bubblegum oracle centerpiece" className="hero-float absolute left-1/2 top-1/2 z-10 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rotate-[14deg] object-contain md:h-64 md:w-64" />
            </div>
          </div>
        </div>
      </HeroConcept>
  );
}
