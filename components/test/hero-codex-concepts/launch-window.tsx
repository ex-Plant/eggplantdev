import { HeroConcept, teaserText } from "./shared";

type PropsT = { txt: string };

export function CodexLaunchWindow({ txt }: PropsT) {
  const blurb = teaserText(txt);
  return (
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
  );
}
