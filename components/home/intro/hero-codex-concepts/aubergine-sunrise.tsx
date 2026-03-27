import { HeroConcept, teaserText } from "./shared";

type PropsT = { txt: string };

export function CodexAubergineSunrise({ txt }: PropsT) {
  const blurb = teaserText(txt);
  return (
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
  );
}
