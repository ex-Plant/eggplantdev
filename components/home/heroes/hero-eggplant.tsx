import { EggplantImage, type EggplantPresetT, type GlowPresetT } from "@/components/general/eggplant-image";
import { type ZeroGravityModeT } from "@/hooks/use-zero-gravity";
import { cn } from "@/helpers/cn";

type HeroEggplantPropsT = {
  preset?: EggplantPresetT;
  floatMode?: ZeroGravityModeT;
  glowPreset?: GlowPresetT;
  /** Extra content rendered inside the wrapper (e.g. halo rings) */
  children?: React.ReactNode;
  /** Additional classes on the outer wrapper */
  className?: string;
};

export function HeroEggplant({
  preset = "warm-gold-glow",
  floatMode,
  glowPreset = "gold",
  children,
  className,
}: HeroEggplantPropsT) {
  return (
    <div className={cn("relative z-10 mx-auto mt-6 mb-8 lg:mt-8 lg:mb-12", className)}>
      <EggplantImage
        preset={preset}
        sizeClass="size-28 sm:size-36 md:size-44 lg:size-56 xl:size-64"
        floatMode={floatMode}
        glowPreset={glowPreset}
        priority
      />
      {children}
    </div>
  );
}
