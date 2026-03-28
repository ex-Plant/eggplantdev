/* Agent: Codex — Drifting Monument (moved from hero-codex-concepts) */
import { HeroConcept, teaserText } from "@/components/home/intro/hero-codex-concepts/shared";

type PropsT = { txt: string };

export function DriftingMonument({ txt }: PropsT) {
  const blurb = teaserText(txt);
  return (
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
  );
}
