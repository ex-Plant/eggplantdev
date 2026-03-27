import { HeroConcept, SacredGeometryFrame, teaserText } from "./shared";

type PropsT = { txt: string };

export function CodexTempleOfEggplants({ txt }: PropsT) {
  const blurb = teaserText(txt);
  return (
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
  );
}
