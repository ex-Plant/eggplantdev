import { HeroConcept, SacredGeometryFrame, teaserText } from "./shared";

type PropsT = { txt: string };

export function CodexEggplantShrine({ txt }: PropsT) {
  const blurb = teaserText(txt);
  return (
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
  );
}
