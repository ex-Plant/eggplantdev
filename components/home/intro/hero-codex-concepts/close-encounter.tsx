import { HeroConcept, teaserText } from "./shared";

type PropsT = { txt: string };

export function CodexCloseEncounter({ txt }: PropsT) {
  const blurb = teaserText(txt);
  return (
    <HeroConcept
      eyebrow="Concept / 03"
      title={["Close", "Encounter"]}
      text={blurb}
      className="bg-[radial-gradient(circle_at_20%_20%,rgba(217,70,239,0.18),transparent_18%),radial-gradient(circle_at_0%_80%,rgba(59,130,246,0.08),transparent_24%),#050507]"
    >
      <div className="640:col-span-8 1280:col-span-10 1280:col-start-7 col-span-full mt-12 min-h-[28rem] overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 xl:mt-0">
        <div className="relative h-full min-h-[28rem]">
          <div className="absolute top-1/2 -left-[8%] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(217,70,239,0.14)_0%,rgba(59,130,246,0.05)_28%,transparent_58%)]" />
          <img
            src="/logos/eggplant-logo-smooth.apng"
            alt="Eggplant concept close encounter"
            className="absolute inset-0 h-full w-full rotate-[24deg] scale-125 object-contain opacity-95"
          />
          <div className="absolute right-6 bottom-6 max-w-[18rem] rounded-[1.5rem] border border-white/10 p-5 md:right-10 md:bottom-10">
            <p className="text-lightgray/70 font-mono text-sm tracking-[0.18em] uppercase">Object / near field</p>
            <p className="text-16 text-lightgray pt-4">
              Pushes the eggplant closest to the viewer so the opening feels less like a logo scene and more like
              encountering an object in space.
            </p>
          </div>
        </div>
      </div>
    </HeroConcept>
  );
}
