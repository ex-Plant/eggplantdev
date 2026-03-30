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
    <div className={cn("mt-full relative z-10 mx-auto mb-4 flex w-full justify-center", className)}>
      <EggplantImage
        preset={preset}
        sizeClass="size-28 md:size-48 lg:size-56 xl:size-64"
        floatMode={floatMode}
        glowPreset={glowPreset}
        priority
      />
      {children}
    </div>
  );
}
