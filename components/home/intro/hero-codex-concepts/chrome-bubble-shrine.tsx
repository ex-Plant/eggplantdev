import { HeroConcept } from "./shared";

export function CodexChromeBubbleShrine() {
  return (
    <HeroConcept
      eyebrow="Concept / 26"
      title={["Chrome", "Bubble Shrine"]}
      text="The glossy Y2K branch. More metallic pinks, plastic reflections, inflated circles, and a fake-futuristic softness around the object."
      className="bg-[radial-gradient(circle_at_16%_18%,rgba(244,114,182,0.22),transparent_18%),radial-gradient(circle_at_48%_14%,rgba(253,224,71,0.18),transparent_16%),radial-gradient(circle_at_82%_20%,rgba(192,132,252,0.22),transparent_18%),radial-gradient(circle_at_66%_78%,rgba(255,255,255,0.12),transparent_20%),#09050c]"
    >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[33rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(26,12,28,0.86),rgba(10,8,12,0.96))] xl:mt-0">
          <div className="relative grid min-h-[33rem] place-items-center overflow-hidden">
            <div className="absolute h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.24),rgba(244,114,182,0.18)_22%,rgba(192,132,252,0.18)_42%,transparent_68%)] blur-[2px]" />
            <div className="absolute left-1/2 top-1/2 h-[19rem] w-[19rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/18 bg-white/4 backdrop-blur-[4px]" />
            <div className="absolute left-1/2 top-1/2 h-[13rem] w-[13rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#fde68a]/18 bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_66%)]" />
            <div className="absolute left-[28%] top-[22%] h-12 w-28 rotate-[-16deg] rounded-full bg-white/14 blur-md" />
            <div className="absolute right-[26%] bottom-[20%] h-10 w-24 rotate-[18deg] rounded-full bg-[#f5d0fe]/12 blur-md" />
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 760" preserveAspectRatio="none">
              <circle cx="500" cy="380" r="216" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.2" />
              <circle cx="500" cy="380" r="286" fill="none" stroke="rgba(244,114,182,0.1)" strokeWidth="1.2" strokeDasharray="10 14" />
            </svg>
            <img src="/logos/eggplant-logo-smooth.apng" alt="Chrome bubble shrine centerpiece" className="hero-float relative z-10 h-52 w-52 rotate-[12deg] object-contain md:h-64 md:w-64 drop-shadow-[0_0_60px_rgba(255,255,255,0.08)]" />
            <div className="absolute bottom-8 left-1/2 w-[min(92%,33rem)] -translate-x-1/2 rounded-[1.65rem] border border-white/10 bg-[linear-gradient(180deg,rgba(28,14,31,0.84),rgba(10,8,12,0.95))] p-6 text-center backdrop-blur-[4px]">
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/62">Finish / inflated chrome candy</p>
              <p className="pt-4 text-16 text-lightgray">The same surreal eggplant worship, but rendered like a lost Y2K future interface: glossy bubbles, soft chrome, and synthetic sweetness.</p>
            </div>
          </div>
        </div>
      </HeroConcept>
  );
}
