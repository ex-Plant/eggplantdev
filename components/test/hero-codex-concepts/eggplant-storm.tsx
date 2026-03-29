import { HeroConcept, teaserText } from "./shared";

type PropsT = { txt: string };

export function CodexEggplantStorm({ txt }: PropsT) {
  const blurb = teaserText(txt);
  return (
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
  );
}
