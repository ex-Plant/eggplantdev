// Codex: parallel hero concept dump. These do not replace the main intro.
import { cn } from "@/helpers/cn";

type IntroPropositionsPropsT = {
  txt: string;
};

type HeroConceptPropsT = {
  eyebrow: string;
  title: string[];
  text: string;
  className?: string;
  children: React.ReactNode;
};

type SacredGeometryPropsT = {
  className?: string;
};

const teaserText = (txt: string) => {
  const [first, second, ...rest] = txt.split(". ");
  return [first, second, rest.length ? `${rest[0]}.` : ""].filter(Boolean).join(". ");
};

function HeroConcept({ eyebrow, title, text, className, children }: HeroConceptPropsT) {
  return (
    <section className={cn("fest-grid relative isolate overflow-hidden rounded-[2rem] border border-white/10 p-6 md:p-8 xl:p-10", className)}>
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="hero-retro-scan absolute inset-0" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/14 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-px bg-linear-to-b from-transparent via-white/10 to-transparent" />
        <div className="absolute right-[6%] top-[10%] h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(250,204,21,0.12),transparent_70%)] blur-xl" />
        <div className="absolute bottom-[10%] left-[8%] h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(251,113,133,0.12),transparent_72%)] blur-xl" />
      </div>
      <div className="640:col-span-7 1280:col-span-5 col-span-full relative z-10">
        <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/65">{eyebrow}</p>
        <h2 className="pt-6 font-mono text-40 leading-none uppercase text-white [text-shadow:0_0_22px_rgba(251,113,133,0.08)] sm:text-48 md:text-64 xl:text-80">
          {title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="text-16 text-lightgray md:text-20 scalable max-w-[34rem] pt-8 text-balance">{text}</p>
      </div>
      <div className="relative z-10 contents">{children}</div>
    </section>
  );
}

function SacredGeometryFrame({ className }: SacredGeometryPropsT) {
  return (
    <div className={cn("pointer-events-none absolute inset-0", className)}>
      <div className="absolute left-1/2 top-1/2 h-[74%] w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#fb7185]/12" />
      <div className="absolute left-1/2 top-1/2 h-[56%] w-[56%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c084fc]/16" />
      <div className="absolute left-1/2 top-1/2 h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#facc15]/18" />
      <div className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#f97316]/10" />
      <div className="absolute left-1/2 top-1/2 h-[44%] w-[44%] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#f9a8d4]/12" />
      <div className="absolute inset-x-[16%] top-1/2 h-px -translate-y-1/2 bg-linear-to-r from-transparent via-[#fde68a]/22 to-transparent" />
      <div className="absolute inset-y-[16%] left-1/2 w-px -translate-x-1/2 bg-linear-to-b from-transparent via-[#f5d0fe]/18 to-transparent" />
    </div>
  );
}

export function IntroPropositions({ txt }: IntroPropositionsPropsT) {
  const blurb = teaserText(txt);

  return (
    <div className="fest-container flex flex-col gap-8 py-20 md:py-32">
      <style jsx>{`
        @keyframes heroFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(0, -10px, 0) rotate(4deg);
          }
        }

        @keyframes heroOrbit {
          0% {
            transform: rotate(0deg) translateX(10px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(10px) rotate(-360deg);
          }
        }

        @keyframes heroPulse {
          0%,
          100% {
            opacity: 0.45;
            transform: scale(0.96);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.04);
          }
        }

        @keyframes heroDriftX {
          0%,
          100% {
            transform: translateX(0) rotate(-8deg);
          }
          50% {
            transform: translateX(14px) rotate(8deg);
          }
        }

        .hero-float {
          animation: heroFloat 7s ease-in-out infinite;
        }

        .hero-orbit {
          animation: heroOrbit 18s linear infinite;
        }

        .hero-pulse {
          animation: heroPulse 8s ease-in-out infinite;
        }

        .hero-drift-x {
          animation: heroDriftX 9s ease-in-out infinite;
        }

        .hero-retro-scan {
          background-image:
            linear-gradient(to bottom, rgba(255, 255, 255, 0.045) 1px, transparent 1px),
            linear-gradient(135deg, rgba(251, 113, 133, 0.07), transparent 28%, transparent 72%, rgba(192, 132, 252, 0.06));
          background-size:
            100% 4px,
            100% 100%;
          mix-blend-mode: screen;
        }
      `}</style>
      <div className="max-w-[50rem]">
        <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/60">Codex / intro dump</p>
        <h2 className="pt-5 font-mono text-34 uppercase md:text-48">Thirty-four extra hero directions</h2>
        <p className="text-16 text-lightgray md:text-20 pt-5 max-w-[42rem]">
          These are side-by-side concept sections, not replacements. The wall is now biased toward the candy-supernova family: retro poster glow, sugared sacred geometry, and louder pop color across the whole set.
        </p>
        <div className="flex flex-wrap gap-3 pt-6">
          {[
            "supernova pink / gold",
            "retro gloss",
            "candy sacred geometry",
            "poster heat",
          ].map((chip) => (
            <span key={chip} className="rounded-full border border-white/10 px-4 py-2 font-mono text-sm uppercase tracking-[0.14em] text-lightgray/75">
              {chip}
            </span>
          ))}
        </div>
      </div>

      <HeroConcept
        eyebrow="Candidate / 00"
        title={["Monument", "Orbit"]}
        text="A more complete replacement candidate. Bigger object, clearer gravity, restrained color, and enough secondary bodies to make the scene feel authored rather than decorative."
        className="bg-[radial-gradient(circle_at_70%_30%,rgba(251,113,133,0.2),transparent_18%),radial-gradient(circle_at_82%_56%,rgba(192,132,252,0.14),transparent_18%),radial-gradient(circle_at_86%_20%,rgba(250,204,21,0.12),transparent_10%),radial-gradient(circle_at_58%_74%,rgba(249,115,22,0.1),transparent_18%),#070409]"
      >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[32rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.35))] xl:mt-0">
          <div className="relative h-full min-h-[32rem]">
            <SacredGeometryFrame className="opacity-80" />
            <div className="hero-pulse absolute right-[16%] top-[16%] h-64 w-64 rounded-full border border-[#fb7185]/18 bg-[radial-gradient(circle,rgba(251,113,133,0.18),rgba(192,132,252,0.12)_36%,rgba(250,204,21,0.08)_52%,transparent_60%)] md:h-88 md:w-88" />
            <div className="absolute right-[22%] top-[10%] h-[24rem] w-[24rem] rounded-full border border-white/8 md:h-[32rem] md:w-[32rem]" />
            <div className="absolute right-[30%] top-[18%] h-[16rem] w-[16rem] rounded-full border border-[#f7c744]/14 md:h-[22rem] md:w-[22rem]" />
            <img
              src="/logos/eggplant-logo-smooth.apng"
              alt="Eggplant monument orbit candidate"
              className="hero-float absolute right-[16%] top-1/2 z-10 h-[15rem] w-[15rem] -translate-y-1/2 rotate-[16deg] object-contain md:h-[22rem] md:w-[22rem]"
            />
            <img
              src="/logos/eggplant-logo-smooth.apng"
              alt="Eggplant orbit companion left"
              className="hero-orbit absolute left-[18%] top-[20%] h-16 w-16 object-contain opacity-70 md:h-20 md:w-20"
            />
            <img
              src="/logos/eggplant-logo-smooth.apng"
              alt="Eggplant orbit companion bottom"
              className="hero-drift-x absolute left-[28%] bottom-[10%] h-18 w-18 object-contain opacity-65 md:h-24 md:w-24"
            />
            <div className="absolute left-[8%] bottom-[12%] max-w-[20rem] rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(28,16,34,0.9),rgba(8,7,9,0.9))] p-6">
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/70">Candidate / live replacement</p>
              <p className="pt-4 text-16 text-lightgray">
                This one is the most usable if you want to actually replace the current intro later. It keeps atmosphere but has a stronger object hierarchy immediately.
              </p>
            </div>
          </div>
        </div>
      </HeroConcept>

      <HeroConcept
        eyebrow="Candidate / 01"
        title={["Sunrise", "Constellation"]}
        text="The merged serious option: warmth and horizon-light from Aubergine Sunrise, symbolic mapping and repeated bodies from Sacred Constellation."
        className="bg-[radial-gradient(circle_at_72%_26%,rgba(250,204,21,0.18),transparent_12%),radial-gradient(circle_at_64%_42%,rgba(251,113,133,0.18),transparent_18%),radial-gradient(circle_at_26%_72%,rgba(192,132,252,0.12),transparent_14%),radial-gradient(circle_at_84%_72%,rgba(249,115,22,0.1),transparent_16%),#070409]"
      >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[32rem] overflow-hidden rounded-[2rem] border border-white/10 xl:mt-0">
          <div className="relative h-full min-h-[32rem]">
            <SacredGeometryFrame className="opacity-85" />
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 700" preserveAspectRatio="none">
              <path d="M180 520 L500 180 L820 520 Z" fill="none" stroke="rgba(247,199,68,0.18)" strokeWidth="1.5" />
              <path d="M500 120 L500 580" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" strokeDasharray="8 10" />
              <path d="M240 520 Q500 360 760 520" fill="none" stroke="rgba(251,113,133,0.16)" strokeWidth="1.5" />
            </svg>
            <div className="absolute right-[12%] top-[16%] h-56 w-56 rounded-full border border-[#facc15]/18 bg-[radial-gradient(circle,rgba(250,204,21,0.14),rgba(251,113,133,0.12)_34%,rgba(192,132,252,0.08)_48%,transparent_58%)] md:h-80 md:w-80" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Sunrise constellation center" className="hero-pulse absolute right-[18%] top-[22%] z-10 h-40 w-40 rotate-[14deg] object-contain md:h-54 md:w-54" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Sunrise constellation north" className="hero-float absolute left-1/2 top-[16%] h-16 w-16 -translate-x-1/2 object-contain opacity-78 md:h-20 md:w-20" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Sunrise constellation west" className="hero-drift-x absolute left-[18%] bottom-[18%] h-16 w-16 object-contain opacity-72 md:h-20 md:w-20" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Sunrise constellation east" className="hero-drift-x absolute right-[22%] bottom-[20%] h-16 w-16 object-contain opacity-72 md:h-20 md:w-20" />
            <div className="absolute left-[8%] bottom-[14%] max-w-[22rem] rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(34,16,34,0.9),rgba(8,7,9,0.9))] p-6">
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/70">Candidate / merged direction</p>
              <p className="pt-4 text-16 text-lightgray">
                Keeps the warmer emotional tone, but makes the whole scene feel intentional through a clear symbolic geometry instead of only a single hero object.
              </p>
            </div>
          </div>
        </div>
      </HeroConcept>

      <HeroConcept
        eyebrow="Concept / 01"
        title={["Drifting", "Monument"]}
        text={blurb}
        className="bg-[radial-gradient(circle_at_75%_30%,rgba(217,70,239,0.2),transparent_20%),radial-gradient(circle_at_84%_46%,rgba(59,130,246,0.12),transparent_22%),radial-gradient(circle_at_92%_18%,rgba(247,199,68,0.08),transparent_10%),#050507]"
      >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 flex min-h-[28rem] items-center justify-end overflow-hidden xl:mt-0">
          <div className="relative h-[24rem] w-[24rem] md:h-[30rem] md:w-[30rem] xl:h-[36rem] xl:w-[36rem]">
            <div className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(217,70,239,0.18)_0%,rgba(217,70,239,0.08)_30%,transparent_60%)]" />
            <div className="absolute inset-[20%] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.08)_0%,rgba(59,130,246,0.04)_24%,transparent_52%)]" />
            <img
              src="/logos/eggplant-logo-smooth.apng"
              alt="Eggplant concept monument"
              className="hero-float absolute -right-[8%] top-1/2 z-10 h-[88%] w-[88%] -translate-y-1/2 rotate-[18deg] object-contain drop-shadow-[0_0_80px_rgba(217,70,239,0.24)]"
            />
          </div>
        </div>
      </HeroConcept>

      <HeroConcept
        eyebrow="Palette / A"
        title={["Monument Orbit", "Warm Aubergine"]}
        text="Same monument-orbit structure, but pushed toward wine, plum, and warm amber. Blue is present only as a faint edge note."
        className="bg-[radial-gradient(circle_at_70%_30%,rgba(132,26,76,0.24),transparent_18%),radial-gradient(circle_at_82%_56%,rgba(217,70,239,0.12),transparent_18%),radial-gradient(circle_at_86%_20%,rgba(247,199,68,0.12),transparent_10%),#050507]"
      >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[30rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.35))] xl:mt-0">
          <div className="relative h-full min-h-[30rem]">
            <SacredGeometryFrame className="opacity-78" />
            <div className="hero-pulse absolute right-[16%] top-[16%] h-64 w-64 rounded-full border border-[#f7c744]/16 bg-[radial-gradient(circle,rgba(132,26,76,0.22),rgba(217,70,239,0.12)_34%,rgba(247,199,68,0.08)_48%,transparent_60%)] md:h-80 md:w-80" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Monument orbit warm aubergine" className="hero-float absolute right-[18%] top-1/2 z-10 h-[14rem] w-[14rem] -translate-y-1/2 rotate-[16deg] object-contain md:h-[20rem] md:w-[20rem]" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Monument orbit warm aubergine companion" className="hero-orbit absolute left-[18%] top-[22%] h-16 w-16 object-contain opacity-70 md:h-20 md:w-20" />
          </div>
        </div>
      </HeroConcept>

      <HeroConcept
        eyebrow="Palette / B"
        title={["Sunrise Constellation", "Royal Cosmic"]}
        text="Same symbolic sunrise layout, but with a cleaner royal-cosmic split: aubergine core, magenta geometry, and a toned blue edge light."
        className="bg-[radial-gradient(circle_at_72%_26%,rgba(250,204,21,0.14),transparent_12%),radial-gradient(circle_at_64%_42%,rgba(251,113,133,0.22),transparent_18%),radial-gradient(circle_at_26%_72%,rgba(192,132,252,0.14),transparent_14%),radial-gradient(circle_at_84%_64%,rgba(249,115,22,0.1),transparent_16%),#070409]"
      >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[30rem] overflow-hidden rounded-[2rem] border border-white/10 xl:mt-0">
          <div className="relative h-full min-h-[30rem]">
            <SacredGeometryFrame className="opacity-90" />
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 700" preserveAspectRatio="none">
              <path d="M180 520 L500 180 L820 520 Z" fill="none" stroke="rgba(250,204,21,0.15)" strokeWidth="1.5" />
              <path d="M500 120 L500 580" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" strokeDasharray="8 10" />
              <path d="M240 520 Q500 360 760 520" fill="none" stroke="rgba(192,132,252,0.14)" strokeWidth="1.5" />
            </svg>
            <div className="absolute right-[12%] top-[16%] h-56 w-56 rounded-full border border-[#c084fc]/16 bg-[radial-gradient(circle,rgba(251,113,133,0.18),rgba(192,132,252,0.12)_42%,rgba(250,204,21,0.06)_56%,transparent_58%)] md:h-76 md:w-76" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Sunrise constellation royal cosmic" className="hero-pulse absolute right-[18%] top-[22%] z-10 h-40 w-40 rotate-[14deg] object-contain md:h-52 md:w-52" />
          </div>
        </div>
      </HeroConcept>

      <HeroConcept
        eyebrow="Palette / C"
        title={["Orbit Cathedral", "Nocturne Gold"]}
        text="Same cathedral logic, but nearly all color is stripped back into black, old gold, and a faint bruised-plum undertone."
        className="bg-[radial-gradient(circle_at_50%_18%,rgba(247,199,68,0.1),transparent_12%),radial-gradient(circle_at_64%_34%,rgba(132,26,76,0.14),transparent_18%),#040405]"
      >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[30rem] overflow-hidden rounded-[2rem] border border-white/10 xl:mt-0">
          <div className="relative grid h-full min-h-[30rem] place-items-center">
            <SacredGeometryFrame className="opacity-75" />
            <div className="absolute inset-x-[10%] top-[12%] h-px bg-linear-to-r from-transparent via-[#f7c744]/26 to-transparent" />
            <div className="absolute inset-x-[10%] bottom-[12%] h-px bg-linear-to-r from-transparent via-white/16 to-transparent" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Orbit cathedral nocturne gold" className="hero-pulse relative z-10 h-44 w-44 rotate-[8deg] object-contain md:h-56 md:w-56" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Orbit cathedral nocturne gold upper left" className="hero-float absolute left-[26%] top-[22%] h-14 w-14 -rotate-[18deg] object-contain opacity-68 md:h-18 md:w-18" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Orbit cathedral nocturne gold upper right" className="hero-float absolute right-[26%] top-[22%] h-14 w-14 rotate-[18deg] object-contain opacity-68 md:h-18 md:w-18" />
          </div>
        </div>
      </HeroConcept>

      <HeroConcept
        eyebrow="Concept / 02"
        title={["Launch", "Window"]}
        text={blurb}
        className="bg-[radial-gradient(circle_at_15%_20%,rgba(217,70,239,0.14),transparent_16%),radial-gradient(circle_at_85%_75%,rgba(59,130,246,0.09),transparent_20%),linear-gradient(135deg,#09090d,#130d18_45%,#0a0b11)]"
      >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 grid min-h-[28rem] place-items-center xl:mt-0">
          <div className="relative flex h-[26rem] w-full items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.06),transparent_32%),linear-gradient(180deg,rgba(0,0,0,0.25),rgba(0,0,0,0.45))]">
            <div className="absolute h-[28rem] w-[28rem] rounded-full border border-white/10" />
            <div className="absolute h-[20rem] w-[20rem] rounded-full border border-[#d946ef]/25" />
            <div className="absolute h-[12rem] w-[12rem] rounded-full border border-[#3b82f6]/18" />
            <div className="absolute h-[2px] w-[70%] rotate-[-18deg] bg-linear-to-r from-transparent via-[#d946ef]/70 to-transparent" />
            <img
              src="/logos/eggplant-logo-smooth.apng"
              alt="Eggplant concept launch window"
              className="hero-float relative z-10 h-44 w-44 rotate-[12deg] object-contain drop-shadow-[0_0_60px_rgba(59,130,246,0.18)] md:h-52 md:w-52"
            />
          </div>
        </div>
      </HeroConcept>

      <HeroConcept
        eyebrow="Concept / 03"
        title={["Close", "Encounter"]}
        text={blurb}
        className="bg-[radial-gradient(circle_at_20%_20%,rgba(217,70,239,0.18),transparent_18%),radial-gradient(circle_at_0%_80%,rgba(59,130,246,0.08),transparent_24%),#050507]"
      >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[28rem] overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 xl:mt-0">
          <div className="relative h-full min-h-[28rem]">
            <div className="absolute -left-[8%] top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(217,70,239,0.14)_0%,rgba(59,130,246,0.05)_28%,transparent_58%)]" />
            <img
              src="/logos/eggplant-logo-smooth.apng"
              alt="Eggplant concept close encounter"
              className="absolute -left-[10%] top-1/2 h-[125%] w-[125%] -translate-y-1/2 rotate-[24deg] object-contain opacity-95"
            />
            <div className="absolute right-6 bottom-6 max-w-[18rem] rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,10,22,0.86),rgba(7,7,9,0.86))] p-5 backdrop-blur-sm md:right-10 md:bottom-10">
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/70">Object / near field</p>
              <p className="text-16 text-lightgray pt-4">
                Pushes the eggplant closest to the viewer so the opening feels less like a logo scene and more like encountering an object in space.
              </p>
            </div>
          </div>
        </div>
      </HeroConcept>

      <HeroConcept
        eyebrow="Concept / 04"
        title={["Eggplant", "Storm"]}
        text={blurb}
        className="bg-[radial-gradient(circle_at_28%_35%,rgba(217,70,239,0.24),transparent_16%),radial-gradient(circle_at_72%_24%,rgba(132,26,76,0.2),transparent_18%),radial-gradient(circle_at_84%_74%,rgba(247,199,68,0.1),transparent_14%),radial-gradient(circle_at_68%_64%,rgba(59,130,246,0.08),transparent_16%),#060507]"
      >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[28rem] overflow-hidden rounded-[2rem] border border-white/10 xl:mt-0">
          <div className="relative flex h-full min-h-[28rem] items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,70,239,0.14),transparent_24%),radial-gradient(circle_at_50%_50%,rgba(247,199,68,0.06),transparent_38%)]" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Eggplant storm core" className="absolute left-[38%] top-[46%] h-48 w-48 -translate-x-1/2 -translate-y-1/2 rotate-[16deg] object-contain md:h-64 md:w-64" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Eggplant storm 1" className="hero-drift-x absolute left-[12%] top-[18%] h-18 w-18 -rotate-[24deg] object-contain opacity-75 md:h-24 md:w-24" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Eggplant storm 2" className="hero-float absolute left-[68%] top-[14%] h-16 w-16 rotate-[35deg] object-contain opacity-70 md:h-22 md:w-22" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Eggplant storm 3" className="hero-drift-x absolute right-[14%] top-[52%] h-20 w-20 -rotate-[12deg] object-contain opacity-80 md:h-28 md:w-28" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Eggplant storm 4" className="hero-float absolute left-[18%] bottom-[10%] h-14 w-14 rotate-[42deg] object-contain opacity-65 md:h-20 md:w-20" />
            <div className="absolute right-8 bottom-8 max-w-[18rem] rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(217,70,239,0.14),transparent_30%),linear-gradient(180deg,rgba(22,12,26,0.88),rgba(8,7,9,0.9))] p-5">
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/70">Field / crowded</p>
              <p className="pt-4 text-16 text-lightgray">Leans into the motif completely: not one holy eggplant, but a whole orbital mess of them.</p>
            </div>
          </div>
        </div>
      </HeroConcept>

      <HeroConcept
        eyebrow="Concept / 05"
        title={["Aubergine", "Sunrise"]}
        text={blurb}
        className="bg-[radial-gradient(circle_at_78%_34%,rgba(247,199,68,0.14),transparent_14%),radial-gradient(circle_at_66%_42%,rgba(217,70,239,0.22),transparent_22%),radial-gradient(circle_at_80%_42%,rgba(132,26,76,0.18),transparent_24%),radial-gradient(circle_at_48%_70%,rgba(59,130,246,0.06),transparent_18%),#060507]"
      >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[28rem] overflow-hidden rounded-[2rem] border border-white/10 xl:mt-0">
          <div className="relative h-full min-h-[28rem]">
            <div className="absolute right-[10%] top-[14%] h-52 w-52 rounded-full border border-[#f7c744]/20 bg-[radial-gradient(circle,rgba(247,199,68,0.16),rgba(217,70,239,0.12)_34%,rgba(59,130,246,0.05)_48%,transparent_58%)] md:h-72 md:w-72" />
            <img
              src="/logos/eggplant-logo-smooth.apng"
              alt="Eggplant sunrise"
              className="absolute right-[10%] top-[16%] h-44 w-44 rotate-[18deg] object-contain md:h-64 md:w-64"
            />
            <div className="absolute left-[8%] bottom-[14%] max-w-[22rem] rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(34,16,34,0.9),rgba(8,7,9,0.9))] p-6">
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/70">Light / warm field</p>
              <p className="pt-4 text-16 text-lightgray">Warmer, less sci-fi, more cosmic-romantic. Feels like an object crossing a colored star instead of floating in generic dark space.</p>
            </div>
            <div className="absolute left-[40%] top-[16%] h-2.5 w-2.5 rounded-full bg-[#f7c744]/85" />
            <div className="absolute left-[56%] bottom-[22%] h-2 w-2 rounded-full bg-white/90" />
          </div>
        </div>
      </HeroConcept>

      <HeroConcept
        eyebrow="Concept / 06"
        title={["Temple", "Of Eggplants"]}
        text={blurb}
        className="bg-[radial-gradient(circle_at_50%_18%,rgba(217,70,239,0.16),transparent_16%),radial-gradient(circle_at_50%_82%,rgba(247,199,68,0.08),transparent_14%),radial-gradient(circle_at_72%_64%,rgba(59,130,246,0.06),transparent_16%),#050507]"
      >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[28rem] overflow-hidden rounded-[2rem] border border-white/10 xl:mt-0">
          <div className="relative grid h-full min-h-[28rem] place-items-center">
            <SacredGeometryFrame className="opacity-70" />
            <div className="absolute inset-x-[18%] top-[14%] h-px bg-linear-to-r from-transparent via-white/25 to-transparent" />
            <div className="absolute inset-x-[10%] bottom-[16%] h-px bg-linear-to-r from-transparent via-[#d946ef]/35 to-transparent" />
            <div className="absolute inset-y-[16%] left-[16%] w-px bg-linear-to-b from-transparent via-white/18 to-transparent" />
            <div className="absolute inset-y-[16%] right-[16%] w-px bg-linear-to-b from-transparent via-white/18 to-transparent" />
            <div className="absolute top-[18%] h-28 w-28 rounded-full border border-[#f7c744]/20 bg-[radial-gradient(circle,rgba(247,199,68,0.12),rgba(59,130,246,0.04)_44%,transparent_62%)]" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Eggplant temple center" className="relative z-10 h-44 w-44 rotate-[8deg] object-contain md:h-56 md:w-56" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Eggplant temple left" className="absolute left-[18%] bottom-[18%] h-18 w-18 -rotate-[24deg] object-contain opacity-70 md:h-24 md:w-24" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Eggplant temple right" className="absolute right-[18%] bottom-[18%] h-18 w-18 rotate-[24deg] object-contain opacity-70 md:h-24 md:w-24" />
          </div>
        </div>
      </HeroConcept>

      <HeroConcept
        eyebrow="Concept / 09"
        title={["Eggplant", "Shrine"]}
        text={blurb}
        className="bg-[radial-gradient(circle_at_50%_18%,rgba(247,199,68,0.1),transparent_12%),radial-gradient(circle_at_50%_50%,rgba(217,70,239,0.14),transparent_20%),#050507]"
      >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[28rem] overflow-hidden rounded-[2rem] border border-white/10 xl:mt-0">
          <div className="relative grid h-full min-h-[28rem] place-items-center">
            <SacredGeometryFrame className="opacity-65" />
            <div className="absolute inset-x-[20%] top-[18%] h-px bg-linear-to-r from-transparent via-[#f7c744]/30 to-transparent" />
            <div className="absolute inset-x-[14%] bottom-[18%] h-px bg-linear-to-r from-transparent via-white/18 to-transparent" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Eggplant shrine center" className="hero-pulse relative z-10 h-42 w-42 rotate-[6deg] object-contain md:h-56 md:w-56" />
            <div className="absolute left-[26%] bottom-[20%] h-3 w-3 rounded-full bg-[#f7c744]/85" />
            <div className="absolute right-[26%] bottom-[20%] h-3 w-3 rounded-full bg-[#f7c744]/85" />
          </div>
        </div>
      </HeroConcept>

      <HeroConcept
        eyebrow="Concept / 10"
        title={["Sacred", "Constellation"]}
        text="Pushes the geometry into a genuine symbolic map. Less object-in-space, more diagram that has somehow become devotional."
        className="bg-[radial-gradient(circle_at_50%_26%,rgba(217,70,239,0.16),transparent_16%),radial-gradient(circle_at_78%_66%,rgba(247,199,68,0.1),transparent_14%),radial-gradient(circle_at_24%_72%,rgba(59,130,246,0.06),transparent_14%),#050507]"
      >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[30rem] overflow-hidden rounded-[2rem] border border-white/10 xl:mt-0">
          <div className="relative h-full min-h-[30rem]">
            <SacredGeometryFrame className="opacity-90" />
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 700" preserveAspectRatio="none">
              <path d="M180 520 L500 140 L820 520 Z" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" />
              <path d="M180 240 L500 560 L820 240 Z" fill="none" stroke="rgba(217,70,239,0.16)" strokeWidth="1.5" />
              <path d="M500 120 L500 580" fill="none" stroke="rgba(247,199,68,0.18)" strokeWidth="1.5" strokeDasharray="8 10" />
            </svg>
            <img src="/logos/eggplant-logo-smooth.apng" alt="Sacred constellation core" className="hero-pulse absolute left-1/2 top-1/2 z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rotate-[10deg] object-contain md:h-52 md:w-52" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Sacred constellation north" className="hero-float absolute left-1/2 top-[14%] h-16 w-16 -translate-x-1/2 object-contain opacity-78 md:h-20 md:w-20" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Sacred constellation west" className="hero-drift-x absolute left-[18%] bottom-[18%] h-16 w-16 object-contain opacity-72 md:h-20 md:w-20" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Sacred constellation east" className="hero-drift-x absolute right-[18%] bottom-[18%] h-16 w-16 object-contain opacity-72 md:h-20 md:w-20" />
          </div>
        </div>
      </HeroConcept>

      <HeroConcept
        eyebrow="Concept / 11"
        title={["Orbit", "Cathedral"]}
        text="The most committed eggplant-geometry hybrid so far: ritual symmetry, repeated bodies, and an architecture made from circles, axes, and orbit lines."
        className="bg-[radial-gradient(circle_at_50%_18%,rgba(247,199,68,0.08),transparent_12%),radial-gradient(circle_at_64%_34%,rgba(217,70,239,0.18),transparent_18%),radial-gradient(circle_at_32%_68%,rgba(59,130,246,0.05),transparent_14%),#050507]"
      >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[32rem] overflow-hidden rounded-[2rem] border border-white/10 xl:mt-0">
          <div className="relative grid h-full min-h-[32rem] place-items-center">
            <SacredGeometryFrame className="opacity-85" />
            <div className="absolute inset-x-[10%] top-[12%] h-px bg-linear-to-r from-transparent via-[#f7c744]/30 to-transparent" />
            <div className="absolute inset-x-[10%] bottom-[12%] h-px bg-linear-to-r from-transparent via-[#d946ef]/30 to-transparent" />
            <div className="absolute inset-y-[14%] left-[22%] w-px bg-linear-to-b from-transparent via-white/18 to-transparent" />
            <div className="absolute inset-y-[14%] right-[22%] w-px bg-linear-to-b from-transparent via-white/18 to-transparent" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Orbit cathedral center" className="hero-pulse relative z-10 h-44 w-44 rotate-[8deg] object-contain md:h-58 md:w-58" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Orbit cathedral upper left" className="hero-float absolute left-[26%] top-[22%] h-14 w-14 -rotate-[18deg] object-contain opacity-72 md:h-18 md:w-18" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Orbit cathedral upper right" className="hero-float absolute right-[26%] top-[22%] h-14 w-14 rotate-[18deg] object-contain opacity-72 md:h-18 md:w-18" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Orbit cathedral lower left" className="hero-drift-x absolute left-[22%] bottom-[18%] h-16 w-16 -rotate-[28deg] object-contain opacity-68 md:h-20 md:w-20" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Orbit cathedral lower right" className="hero-drift-x absolute right-[22%] bottom-[18%] h-16 w-16 rotate-[28deg] object-contain opacity-68 md:h-20 md:w-20" />
          </div>
        </div>
      </HeroConcept>

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

      <HeroConcept
        eyebrow="Concept / 13"
        title={["Eclipse", "Choir"]}
        text="A full ritual scene: seven smaller eggplants orbit a central eclipse like a cosmic choir. It should feel grand, strange, and slightly unhinged."
        className="bg-[radial-gradient(circle_at_50%_20%,rgba(16,255,170,0.12),transparent_16%),radial-gradient(circle_at_50%_48%,rgba(217,70,239,0.18),transparent_26%),radial-gradient(circle_at_82%_68%,rgba(247,199,68,0.08),transparent_18%),#030305]"
      >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[34rem] overflow-hidden rounded-[2rem] border border-white/10 xl:mt-0">
          <div className="relative grid min-h-[34rem] place-items-center">
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 760" preserveAspectRatio="none">
              <circle cx="500" cy="380" r="210" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="1.2" />
              <circle cx="500" cy="380" r="268" fill="none" stroke="rgba(16,255,170,0.12)" strokeWidth="1.2" strokeDasharray="7 12" />
              <circle cx="500" cy="380" r="324" fill="none" stroke="rgba(217,70,239,0.1)" strokeWidth="1" />
              <polygon points="500,112 760,584 240,584" fill="none" stroke="rgba(247,199,68,0.12)" strokeWidth="1.2" />
              <polygon points="500,650 760,176 240,176" fill="none" stroke="rgba(16,255,170,0.1)" strokeWidth="1.2" />
              {Array.from({ length: 7 }, (_, i) => {
                const angle = (-Math.PI / 2) + (Math.PI * 2 * i) / 7;
                const x = 500 + 262 * Math.cos(angle);
                const y = 380 + 262 * Math.sin(angle);
                return <circle key={i} cx={x} cy={y} r="28" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="1" />;
              })}
            </svg>
            <div className="absolute h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(247,199,68,0.12),rgba(217,70,239,0.08)_34%,transparent_66%)] blur-sm" />
            <div className="absolute h-44 w-44 rounded-full border border-[#f7c744]/16 bg-black/80 shadow-[0_0_60px_rgba(0,0,0,0.75)]" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Eclipse choir central eggplant" className="hero-pulse relative z-10 h-44 w-44 rotate-[10deg] object-contain md:h-56 md:w-56" />
            {[
              "top-[10%] left-1/2 -translate-x-1/2",
              "right-[18%] top-[22%]",
              "right-[12%] bottom-[24%]",
              "left-1/2 bottom-[8%] -translate-x-1/2",
              "left-[12%] bottom-[24%]",
              "left-[18%] top-[22%]",
              "left-[50%] top-[18%] translate-x-[11rem] md:translate-x-[14rem]",
            ].map((pos, index) => (
              <img
                key={pos}
                src="/logos/eggplant-logo-smooth.apng"
                alt={`Eclipse choir satellite ${index + 1}`}
                className={cn("hero-float absolute h-14 w-14 object-contain opacity-72 md:h-18 md:w-18", pos)}
              />
            ))}
            <div className="absolute bottom-8 left-1/2 w-[min(90%,30rem)] -translate-x-1/2 rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,14,18,0.9),rgba(7,7,9,0.95))] p-5 text-center md:bottom-10">
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/62">Ritual / orbital recital</p>
              <p className="pt-4 text-16 text-lightgray">This one turns the hero into a full event rather than a single logo pose. More myth. More theater. More “why are there seven of them?”</p>
            </div>
          </div>
        </div>
      </HeroConcept>

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

      <HeroConcept
        eyebrow="Concept / 15"
        title={["Cosmic", "Greenhouse"]}
        text="The oddest one in a softer way: a greenhouse promenade drifting through space, where eggplants grow like sacred planets under a geometric dome."
        className="bg-[radial-gradient(circle_at_18%_18%,rgba(16,255,170,0.14),transparent_16%),radial-gradient(circle_at_84%_20%,rgba(247,199,68,0.12),transparent_16%),radial-gradient(circle_at_60%_74%,rgba(132,26,76,0.18),transparent_22%),#040607]"
      >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[32rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(5,9,9,0.84),rgba(6,7,8,0.96))] xl:mt-0">
          <div className="relative min-h-[32rem] overflow-hidden">
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1100 520" preserveAspectRatio="none">
              <path d="M110 410 Q550 40 990 410" fill="none" stroke="rgba(16,255,170,0.16)" strokeWidth="1.4" />
              <path d="M180 410 Q550 96 920 410" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.1" />
              <path d="M250 410 Q550 150 850 410" fill="none" stroke="rgba(247,199,68,0.12)" strokeWidth="1.1" />
              <path d="M110 410 L990 410" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
              {Array.from({ length: 7 }, (_, i) => {
                const x = 220 + i * 110;
                return <line key={x} x1={x} y1="410" x2="550" y2="78" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />;
              })}
            </svg>
            <div className="absolute inset-x-[8%] bottom-[18%] h-px bg-linear-to-r from-transparent via-white/16 to-transparent" />
            <div className="absolute inset-x-[12%] bottom-[12%] flex items-end justify-between">
              {[
                "h-16 w-16 rotate-[-12deg]",
                "h-20 w-20 rotate-[6deg]",
                "h-24 w-24 rotate-[-8deg]",
                "h-32 w-32 rotate-[10deg]",
                "h-22 w-22 rotate-[-6deg]",
                "h-18 w-18 rotate-[12deg]",
              ].map((size, index) => (
                <img
                  key={size}
                  src="/logos/eggplant-logo-smooth.apng"
                  alt={`Cosmic greenhouse fruit ${index + 1}`}
                  className={cn("hero-float object-contain opacity-75", size)}
                />
              ))}
            </div>
            <div className="absolute left-[8%] top-[10%] max-w-[22rem] rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,15,14,0.92),rgba(8,8,10,0.94))] p-6">
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-[#10ffaa]/60">Habitat / orbital conservatory</p>
              <p className="pt-4 text-16 text-lightgray">
                This is the more poetic route. Still surreal, still cosmic, but instead of pure ritual it becomes a space garden built from arches, symmetry, and strange agricultural devotion.
              </p>
            </div>
            <div className="absolute right-[10%] top-[14%] h-28 w-28 rounded-full border border-[#f7c744]/16 bg-[radial-gradient(circle,rgba(247,199,68,0.16),transparent_62%)]" />
          </div>
        </div>
      </HeroConcept>

      <HeroConcept
        eyebrow="Concept / 16"
        title={["Prism", "Transmission"]}
        text="The eggplant gets hit by a sacred beam and splits the whole hero into spectral geometry. More cosmic poster, less cathedral."
        className="bg-[radial-gradient(circle_at_18%_22%,rgba(56,189,248,0.22),transparent_18%),radial-gradient(circle_at_52%_18%,rgba(250,204,21,0.18),transparent_18%),radial-gradient(circle_at_80%_26%,rgba(244,114,182,0.2),transparent_18%),radial-gradient(circle_at_70%_74%,rgba(167,139,250,0.18),transparent_20%),#06050a]"
      >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[32rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(11,9,18,0.96),rgba(6,6,10,0.96))] xl:mt-0">
          <div className="relative min-h-[32rem] overflow-hidden">
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1100 560" preserveAspectRatio="none">
              <polygon points="86,246 306,198 306,294 86,346" fill="rgba(255,255,255,0.08)" />
              <path d="M306 246 L1010 94" stroke="rgba(56,189,248,0.34)" strokeWidth="18" />
              <path d="M306 258 L1010 166" stroke="rgba(34,197,94,0.28)" strokeWidth="16" />
              <path d="M306 270 L1010 238" stroke="rgba(250,204,21,0.24)" strokeWidth="16" />
              <path d="M306 282 L1010 310" stroke="rgba(251,146,60,0.22)" strokeWidth="16" />
              <path d="M306 294 L1010 382" stroke="rgba(244,114,182,0.24)" strokeWidth="16" />
              <path d="M306 306 L1010 454" stroke="rgba(167,139,250,0.28)" strokeWidth="18" />
              <circle cx="566" cy="276" r="142" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.4" />
              <circle cx="566" cy="276" r="92" fill="none" stroke="rgba(250,204,21,0.12)" strokeWidth="1.2" strokeDasharray="10 14" />
            </svg>
            <div className="absolute left-[28%] top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16),rgba(167,139,250,0.1)_34%,transparent_64%)] blur-sm" />
            <img
              src="/logos/eggplant-logo-smooth.apng"
              alt="Prism transmission eggplant"
              className="hero-float absolute left-[32%] top-1/2 z-10 h-52 w-52 -translate-y-1/2 rotate-[18deg] object-contain md:h-64 md:w-64"
            />
            <div className="absolute right-[6%] top-[12%] max-w-[20rem] rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,13,25,0.92),rgba(10,9,14,0.95))] p-6">
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/65">Optics / sacred refraction</p>
              <p className="pt-4 text-16 text-lightgray">
                If the current set is still too tasteful, this is the answer. Treat the eggplant like a prism event and let the whole section explode into spectrum lines and diagram halos.
              </p>
            </div>
          </div>
        </div>
      </HeroConcept>

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

      <HeroConcept
        eyebrow="Concept / 18"
        title={["Candy", "Supernova"]}
        text="The least restrained version: bubblegum pinks, citrus oranges, acid yellow, and a central blast like the eggplant just became a pop star sun."
        className="bg-[radial-gradient(circle_at_18%_18%,rgba(251,113,133,0.26),transparent_18%),radial-gradient(circle_at_48%_14%,rgba(250,204,21,0.22),transparent_18%),radial-gradient(circle_at_82%_26%,rgba(249,115,22,0.22),transparent_18%),radial-gradient(circle_at_60%_78%,rgba(192,132,252,0.22),transparent_22%),#08050a]"
      >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[33rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(20,8,16,0.9),rgba(9,7,12,0.96))] xl:mt-0">
          <div className="relative grid min-h-[33rem] place-items-center overflow-hidden">
            <div className="absolute h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(250,204,21,0.22),rgba(251,113,133,0.2)_26%,rgba(249,115,22,0.16)_44%,rgba(192,132,252,0.14)_58%,transparent_72%)]" />
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 760" preserveAspectRatio="none">
              {Array.from({ length: 16 }, (_, i) => {
                const angle = (Math.PI * 2 * i) / 16;
                const x2 = 500 + 360 * Math.cos(angle);
                const y2 = 380 + 360 * Math.sin(angle);
                return <line key={i} x1="500" y1="380" x2={x2} y2={y2} stroke="rgba(255,255,255,0.08)" strokeWidth="1.2" />;
              })}
              <circle cx="500" cy="380" r="184" fill="none" stroke="rgba(250,204,21,0.16)" strokeWidth="1.4" />
              <circle cx="500" cy="380" r="246" fill="none" stroke="rgba(251,113,133,0.14)" strokeWidth="1.2" strokeDasharray="10 14" />
            </svg>
            <img src="/logos/eggplant-logo-smooth.apng" alt="Candy supernova core" className="hero-pulse relative z-10 h-52 w-52 rotate-[14deg] object-contain md:h-64 md:w-64" />
            {[
              "left-[14%] top-[18%]",
              "right-[16%] top-[20%]",
              "left-[18%] bottom-[18%]",
              "right-[14%] bottom-[16%]",
            ].map((pos, index) => (
              <div key={pos} className={cn("absolute rounded-full border border-white/10 bg-white/4 backdrop-blur-[2px]", pos, index % 2 === 0 ? "h-20 w-20" : "h-16 w-16")} />
            ))}
            <div className="absolute bottom-8 left-1/2 w-[min(92%,34rem)] -translate-x-1/2 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(29,12,23,0.88),rgba(10,8,12,0.94))] p-6 text-center">
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/62">Event / glamorous detonation</p>
              <p className="pt-4 text-16 text-lightgray">This one should feel almost offensively alive. If you want “more colors” with zero apology, this is the benchmark.</p>
            </div>
          </div>
        </div>
      </HeroConcept>

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

      <HeroConcept
        eyebrow="Concept / 20"
        title={["Neon", "Rift Garden"]}
        text="A strange space garden opened by a geometric rift. More living color, more cyan-green vapor, more magenta cracks across the void."
        className="bg-[radial-gradient(circle_at_20%_22%,rgba(16,255,170,0.2),transparent_18%),radial-gradient(circle_at_50%_14%,rgba(59,130,246,0.14),transparent_16%),radial-gradient(circle_at_80%_18%,rgba(217,70,239,0.22),transparent_18%),radial-gradient(circle_at_62%_76%,rgba(57,255,20,0.12),transparent_20%),#020408]"
      >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[33rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(4,10,10,0.9),rgba(5,5,9,0.96))] xl:mt-0">
          <div className="relative min-h-[33rem] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_24%,rgba(16,255,170,0.12),transparent_16%),radial-gradient(circle_at_72%_24%,rgba(217,70,239,0.14),transparent_18%),radial-gradient(circle_at_56%_70%,rgba(59,130,246,0.1),transparent_20%)] blur-2xl" />
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1100 560" preserveAspectRatio="none">
              <path d="M120 420 Q340 120 550 320 T980 150" fill="none" stroke="rgba(16,255,170,0.16)" strokeWidth="1.6" />
              <path d="M120 440 Q320 200 550 360 T1000 240" fill="none" stroke="rgba(59,130,246,0.12)" strokeWidth="1.4" />
              <path d="M240 108 L550 280 L860 116" fill="none" stroke="rgba(217,70,239,0.14)" strokeWidth="1.4" />
              <path d="M240 450 L550 280 L860 444" fill="none" stroke="rgba(16,255,170,0.12)" strokeWidth="1.2" />
              <circle cx="550" cy="280" r="144" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.1" />
            </svg>
            <img src="/logos/eggplant-logo-smooth.apng" alt="Neon rift garden core" className="hero-float absolute left-1/2 top-1/2 z-10 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rotate-[14deg] object-contain md:h-60 md:w-60" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Neon rift garden left" className="hero-float absolute left-[14%] bottom-[14%] h-20 w-20 -rotate-[18deg] object-contain opacity-74 md:h-24 md:w-24" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Neon rift garden right" className="hero-float absolute right-[12%] top-[16%] h-18 w-18 rotate-[22deg] object-contain opacity-70 md:h-22 md:w-22" />
            <div className="absolute left-[8%] top-[10%] max-w-[20rem] rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,16,18,0.9),rgba(7,7,9,0.95))] p-6">
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-[#10ffaa]/64">Habitat / unstable</p>
              <p className="pt-4 text-16 text-lightgray">This pushes the palette into a more organic neon field: less temple, more rupture, with geometry acting like a crack in space rather than a perfect diagram.</p>
            </div>
          </div>
        </div>
      </HeroConcept>

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

      <HeroConcept
        eyebrow="Concept / 22"
        title={["Candy", "Halo Collapse"]}
        text="Same maximal pop energy as Candy Supernova, but pulled into a giant concentric halo system, like the eggplant triggered a glamorous cosmic alarm."
        className="bg-[radial-gradient(circle_at_18%_20%,rgba(251,113,133,0.24),transparent_18%),radial-gradient(circle_at_48%_14%,rgba(250,204,21,0.22),transparent_18%),radial-gradient(circle_at_82%_22%,rgba(249,115,22,0.22),transparent_18%),radial-gradient(circle_at_68%_78%,rgba(192,132,252,0.22),transparent_22%),#09050b]"
      >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[33rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(24,10,18,0.9),rgba(10,8,13,0.96))] xl:mt-0">
          <div className="relative grid min-h-[33rem] place-items-center overflow-hidden">
            <div className="absolute h-[30rem] w-[30rem] rounded-full border border-[#fb7185]/16" />
            <div className="absolute h-[24rem] w-[24rem] rounded-full border border-[#facc15]/18" />
            <div className="absolute h-[18rem] w-[18rem] rounded-full border border-[#f97316]/18" />
            <div className="absolute h-[12rem] w-[12rem] rounded-full border border-[#c084fc]/18" />
            <div className="absolute h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(250,204,21,0.18),rgba(251,113,133,0.16)_28%,rgba(249,115,22,0.14)_48%,rgba(192,132,252,0.12)_62%,transparent_74%)]" />
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 760" preserveAspectRatio="none">
              <path d="M120 380 H880" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.1" />
              <path d="M500 80 V680" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.1" />
              <path d="M220 160 L780 600" fill="none" stroke="rgba(251,113,133,0.1)" strokeWidth="1.1" />
              <path d="M780 160 L220 600" fill="none" stroke="rgba(192,132,252,0.1)" strokeWidth="1.1" />
            </svg>
            <img src="/logos/eggplant-logo-smooth.apng" alt="Candy halo collapse centerpiece" className="hero-pulse relative z-10 h-52 w-52 rotate-[12deg] object-contain md:h-64 md:w-64" />
            <div className="absolute bottom-8 left-1/2 w-[min(92%,32rem)] -translate-x-1/2 rounded-[1.65rem] border border-white/10 bg-[linear-gradient(180deg,rgba(30,12,22,0.88),rgba(10,8,12,0.95))] p-6 text-center">
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/62">Event / pop detonation halo</p>
              <p className="pt-4 text-16 text-lightgray">This keeps the same sugary violence of Candy Supernova, but organizes it into circles and axes so it still feels designed, not random.</p>
            </div>
          </div>
        </div>
      </HeroConcept>

      <HeroConcept
        eyebrow="Concept / 23"
        title={["Sugar", "Comet Parade"]}
        text="Instead of one central blast, this becomes a diagonal parade of pop-colored eggplants crossing the screen like a tacky sacred comet procession."
        className="bg-[radial-gradient(circle_at_16%_18%,rgba(251,113,133,0.22),transparent_18%),radial-gradient(circle_at_44%_14%,rgba(250,204,21,0.2),transparent_16%),radial-gradient(circle_at_82%_24%,rgba(249,115,22,0.2),transparent_18%),radial-gradient(circle_at_60%_76%,rgba(192,132,252,0.2),transparent_22%),#0a050b]"
      >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[32rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(20,9,17,0.92),rgba(10,8,12,0.96))] xl:mt-0">
          <div className="relative min-h-[32rem] overflow-hidden">
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1100 560" preserveAspectRatio="none">
              <path d="M80 430 L1020 120" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.2" />
              <path d="M140 480 L1080 170" fill="none" stroke="rgba(251,113,133,0.14)" strokeWidth="1.2" />
              <path d="M40 380 L980 70" fill="none" stroke="rgba(250,204,21,0.12)" strokeWidth="1.1" />
            </svg>
            {[
              "left-[8%] top-[58%] h-24 w-24 rotate-[-18deg]",
              "left-[24%] top-[44%] h-32 w-32 rotate-[10deg]",
              "left-[44%] top-[30%] h-44 w-44 rotate-[16deg]",
              "left-[68%] top-[18%] h-28 w-28 rotate-[28deg]",
              "right-[8%] top-[10%] h-20 w-20 rotate-[34deg]",
            ].map((pos, index) => (
              <div key={pos} className={cn("absolute", pos)}>
                <div className="absolute inset-[-18%] rounded-full bg-[radial-gradient(circle,rgba(250,204,21,0.16),rgba(251,113,133,0.14)_42%,transparent_72%)]" />
                <img
                  src="/logos/eggplant-logo-smooth.apng"
                  alt={`Sugar comet parade body ${index + 1}`}
                  className="hero-float relative z-10 h-full w-full object-contain"
                />
              </div>
            ))}
            <div className="absolute left-[8%] bottom-[10%] max-w-[21rem] rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(29,11,21,0.9),rgba(11,8,12,0.95))] p-6">
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/62">Trajectory / glam procession</p>
              <p className="pt-4 text-16 text-lightgray">This takes the Candy Supernova palette but breaks the symmetry. More movement, more procession, more loud celestial nonsense.</p>
            </div>
          </div>
        </div>
      </HeroConcept>

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

      <HeroConcept
        eyebrow="Concept / 25"
        title={["Pop", "Relic Billboard"]}
        text="The trashy-pop branch. Less elegance, more loud holy advertisement: sticker colors, overblown glows, and a giant display-card treatment around the eggplant."
        className="bg-[radial-gradient(circle_at_14%_18%,rgba(251,113,133,0.24),transparent_18%),radial-gradient(circle_at_44%_14%,rgba(250,204,21,0.22),transparent_18%),radial-gradient(circle_at_82%_18%,rgba(249,115,22,0.22),transparent_18%),radial-gradient(circle_at_68%_76%,rgba(192,132,252,0.24),transparent_22%),#0b040b]"
      >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[33rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(27,10,18,0.92),rgba(10,8,12,0.96))] xl:mt-0">
          <div className="relative grid min-h-[33rem] gap-6 p-6 md:grid-cols-[1.08fr_0.92fr] md:p-8">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#fb7185]/18 bg-[linear-gradient(180deg,rgba(49,14,30,0.7),rgba(17,10,15,0.9))] p-6 shadow-[0_0_80px_rgba(251,113,133,0.08)]">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2.2rem_2.2rem] opacity-35" />
              <div className="absolute left-5 top-5 rounded-full border border-[#facc15]/30 bg-[#facc15]/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#facc15]/80">Hot relic</div>
              <div className="absolute right-5 top-5 rounded-full border border-[#c084fc]/30 bg-[#c084fc]/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#f5d0fe]/78">Must see</div>
              <div className="absolute inset-x-[8%] bottom-[10%] h-px bg-linear-to-r from-transparent via-white/14 to-transparent" />
              <div className="absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(251,113,133,0.18),rgba(250,204,21,0.16)_32%,rgba(192,132,252,0.12)_58%,transparent_72%)]" />
              <img src="/logos/eggplant-logo-smooth.apng" alt="Pop relic billboard centerpiece" className="hero-pulse absolute left-1/2 top-1/2 z-10 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rotate-[14deg] object-contain md:h-64 md:w-64" />
            </div>
            <div className="grid gap-4">
              <div className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(31,12,24,0.88),rgba(10,8,12,0.95))] p-6">
                <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/62">Category / sacred tabloid</p>
                <p className="pt-4 text-16 text-lightgray">This is intentionally a bit cheap in the best way. More poster, more flyer, more “holy product launch in a fake universe.”</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Gloss", "Everything should feel laminated, overlit, and slightly ridiculous."],
                  ["Tone", "Candy but not delicate. Loud, commercial, and weirdly devotional."],
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

      <HeroConcept
        eyebrow="Concept / 28"
        title={["Supernova", "Runway"]}
        text="A long, glossy cosmic runway with the eggplant posed like a ridiculous luxury artifact at the end of the universe."
        className="bg-[radial-gradient(circle_at_14%_18%,rgba(251,113,133,0.22),transparent_18%),radial-gradient(circle_at_46%_14%,rgba(250,204,21,0.2),transparent_16%),radial-gradient(circle_at_82%_18%,rgba(249,115,22,0.2),transparent_18%),radial-gradient(circle_at_66%_78%,rgba(192,132,252,0.22),transparent_22%),#0a040b]"
      >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[32rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(26,10,18,0.9),rgba(10,8,12,0.96))] xl:mt-0">
          <div className="relative min-h-[32rem] overflow-hidden">
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1100 560" preserveAspectRatio="none">
              <path d="M220 520 L460 170" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.2" />
              <path d="M880 520 L640 170" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.2" />
              <path d="M330 520 L505 170" fill="none" stroke="rgba(251,113,133,0.12)" strokeWidth="1.2" />
              <path d="M770 520 L595 170" fill="none" stroke="rgba(192,132,252,0.12)" strokeWidth="1.2" />
              <path d="M460 170 H640" fill="none" stroke="rgba(250,204,21,0.14)" strokeWidth="1.2" />
            </svg>
            <div className="absolute left-1/2 top-[38%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(250,204,21,0.18),rgba(251,113,133,0.16)_34%,rgba(192,132,252,0.12)_62%,transparent_74%)]" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Supernova runway centerpiece" className="hero-float absolute left-1/2 top-[38%] z-10 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rotate-[14deg] object-contain md:h-60 md:w-60" />
            <div className="absolute inset-x-[14%] bottom-[16%] h-px bg-linear-to-r from-transparent via-white/16 to-transparent" />
            <div className="absolute left-[8%] top-[10%] max-w-[20rem] rounded-[1.55rem] border border-white/10 bg-[linear-gradient(180deg,rgba(31,12,22,0.88),rgba(10,8,12,0.95))] p-5">
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/62">Scene / celestial catwalk</p>
              <p className="pt-4 text-16 text-lightgray">Same supernova palette, but more editorial and stage-like. It feels posed instead of exploded.</p>
            </div>
          </div>
        </div>
      </HeroConcept>

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

      <HeroConcept
        eyebrow="Concept / 30"
        title={["Blister", "Constellation"]}
        text="The toy-package version. Multiple smaller orbs and compartments make the scene feel like a collectible supernova kit for dangerous space produce."
        className="bg-[radial-gradient(circle_at_16%_18%,rgba(251,113,133,0.22),transparent_18%),radial-gradient(circle_at_46%_14%,rgba(250,204,21,0.18),transparent_16%),radial-gradient(circle_at_82%_18%,rgba(249,115,22,0.2),transparent_18%),radial-gradient(circle_at_66%_78%,rgba(192,132,252,0.22),transparent_22%),#09040b]"
      >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[32rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(24,10,18,0.9),rgba(10,8,12,0.96))] xl:mt-0">
          <div className="relative grid min-h-[32rem] gap-4 p-6 md:grid-cols-[1.08fr_0.92fr] md:p-8">
            <div className="relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(32,12,24,0.7),rgba(11,8,13,0.95))]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.08),transparent_58%)]" />
              <div className="absolute left-[8%] top-[12%] h-20 w-20 rounded-[1.5rem] border border-white/10 bg-white/6 backdrop-blur-[2px]" />
              <div className="absolute right-[8%] top-[16%] h-16 w-16 rounded-full border border-[#facc15]/16 bg-[#facc15]/8" />
              <div className="absolute left-[12%] bottom-[14%] h-18 w-18 rounded-full border border-[#fb7185]/16 bg-[#fb7185]/8" />
              <div className="absolute right-[16%] bottom-[12%] h-24 w-24 rounded-[1.8rem] border border-[#c084fc]/16 bg-[#c084fc]/8" />
              <div className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/14 bg-[radial-gradient(circle,rgba(250,204,21,0.16),rgba(251,113,133,0.14)_34%,rgba(192,132,252,0.12)_62%,transparent_74%)]" />
              <img src="/logos/eggplant-logo-smooth.apng" alt="Blister constellation centerpiece" className="hero-float absolute left-1/2 top-1/2 z-10 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rotate-[12deg] object-contain md:h-60 md:w-60" />
            </div>
            <div className="flex flex-col justify-between rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(31,12,24,0.88),rgba(10,8,12,0.95))] p-6">
              <div>
                <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/62">Format / collectible burst</p>
                <p className="pt-4 text-16 text-lightgray">This is the packaged-object interpretation of the same palette. More compartments, more fetishized framing, more fake-product absurdity.</p>
              </div>
              <div className="grid gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-lightgray/56">
                <span>Edition / unstable deluxe</span>
                <span>Handling / admire only</span>
                <span>Hazard / fabulous</span>
              </div>
            </div>
          </div>
        </div>
      </HeroConcept>

      <HeroConcept
        eyebrow="Concept / 31"
        title={["Solar", "Confetti Shrine"]}
        text="A playful version where the supernova palette becomes floating chips, dots, and celebratory fragments around a central shrine object."
        className="bg-[radial-gradient(circle_at_18%_18%,rgba(251,113,133,0.22),transparent_18%),radial-gradient(circle_at_46%_14%,rgba(250,204,21,0.2),transparent_16%),radial-gradient(circle_at_82%_18%,rgba(249,115,22,0.2),transparent_18%),radial-gradient(circle_at_66%_78%,rgba(192,132,252,0.22),transparent_22%),#09050b]"
      >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[32rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(24,10,18,0.9),rgba(10,8,12,0.96))] xl:mt-0">
          <div className="relative grid min-h-[32rem] place-items-center overflow-hidden">
            <div className="absolute h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(250,204,21,0.18),rgba(251,113,133,0.14)_34%,rgba(192,132,252,0.12)_62%,transparent_74%)]" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Solar confetti shrine centerpiece" className="hero-pulse relative z-10 h-50 w-50 rotate-[12deg] object-contain md:h-62 md:w-62" />
            {[
              "left-[14%] top-[18%] bg-[#fb7185]/80",
              "left-[24%] top-[62%] bg-[#facc15]/80",
              "right-[16%] top-[20%] bg-[#c084fc]/80",
              "right-[22%] bottom-[18%] bg-[#f97316]/80",
              "left-[48%] top-[12%] bg-white/80",
              "left-[70%] top-[48%] bg-[#fb7185]/70",
              "left-[34%] bottom-[18%] bg-[#fde68a]/80",
            ].map((chip, index) => (
              <div key={chip} className={cn("absolute h-4 w-4 rotate-[18deg] rounded-[0.25rem]", chip, index % 2 === 0 ? "hero-float" : "hero-drift-x")} />
            ))}
            <div className="absolute bottom-8 left-1/2 w-[min(92%,32rem)] -translate-x-1/2 rounded-[1.55rem] border border-white/10 bg-[linear-gradient(180deg,rgba(30,12,22,0.88),rgba(10,8,12,0.95))] p-6 text-center">
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/62">Mood / celebratory worship</p>
              <p className="pt-4 text-16 text-lightgray">Still in the supernova palette, but lighter and more playful. Less explosion, more glittering devotional festival.</p>
            </div>
          </div>
        </div>
      </HeroConcept>

      <HeroConcept
        eyebrow="Concept / 32"
        title={["Mega", "Candy Cathedral"]}
        text="The most overbuilt finale: giant layered geometry, repeated color halos, satellites, and a full candy-cathedral scene around the central eggplant."
        className="bg-[radial-gradient(circle_at_18%_18%,rgba(251,113,133,0.24),transparent_18%),radial-gradient(circle_at_46%_14%,rgba(250,204,21,0.22),transparent_16%),radial-gradient(circle_at_82%_18%,rgba(249,115,22,0.22),transparent_18%),radial-gradient(circle_at_66%_78%,rgba(192,132,252,0.24),transparent_22%),#0a040b]"
      >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[35rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(27,10,20,0.92),rgba(10,8,12,0.96))] xl:mt-0">
          <div className="relative grid min-h-[35rem] place-items-center overflow-hidden">
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 800" preserveAspectRatio="none">
              <circle cx="500" cy="400" r="248" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.2" />
              <circle cx="500" cy="400" r="188" fill="none" stroke="rgba(251,113,133,0.14)" strokeWidth="1.2" />
              <circle cx="500" cy="400" r="126" fill="none" stroke="rgba(250,204,21,0.14)" strokeWidth="1.2" strokeDasharray="8 12" />
              <polygon points="500,114 758,572 242,572" fill="none" stroke="rgba(192,132,252,0.14)" strokeWidth="1.3" />
              <polygon points="500,686 758,228 242,228" fill="none" stroke="rgba(249,115,22,0.12)" strokeWidth="1.3" />
              <path d="M260 400 H740" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.1" />
              <path d="M500 148 V652" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.1" />
            </svg>
            <div className="absolute h-[27rem] w-[27rem] rounded-full bg-[radial-gradient(circle,rgba(250,204,21,0.18),rgba(251,113,133,0.16)_28%,rgba(249,115,22,0.14)_46%,rgba(192,132,252,0.14)_62%,transparent_76%)]" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Mega candy cathedral centerpiece" className="hero-pulse relative z-10 h-54 w-54 rotate-[12deg] object-contain md:h-68 md:w-68" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Mega candy cathedral north" className="hero-float absolute left-1/2 top-[10%] h-18 w-18 -translate-x-1/2 object-contain opacity-78 md:h-22 md:w-22" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Mega candy cathedral west" className="hero-float absolute left-[18%] bottom-[18%] h-18 w-18 object-contain opacity-74 md:h-22 md:w-22" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Mega candy cathedral east" className="hero-float absolute right-[18%] bottom-[18%] h-18 w-18 object-contain opacity-74 md:h-22 md:w-22" />
            <div className="absolute bottom-8 right-8 max-w-[21rem] rounded-[1.55rem] border border-white/10 bg-[linear-gradient(180deg,rgba(31,12,24,0.88),rgba(10,8,12,0.95))] p-5">
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/62">Finale / maximal sanctuary</p>
              <p className="pt-4 text-16 text-lightgray">This is the end-state of the whole candy-supernova logic: theatrical, symmetrical, glossy, and fully committed to the bit.</p>
            </div>
          </div>
        </div>
      </HeroConcept>
    </div>
  );
}
