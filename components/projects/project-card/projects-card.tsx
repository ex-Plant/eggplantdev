import Link from "next/link";
import { ProjectsCardPropsT } from "@/types/projects-types";
import { ScrambleText } from "@/components/general/scramble-text";
import { GlowArrow } from "@/components/general/glow-arrow";

export function ProjectsCard({ project }: ProjectsCardPropsT) {
  const { name, description, tempSlug } = project ?? {};

  return (
    // <Link className={"block"} href={tempSlug}>
    <article className={`group/card relative flex h-full cursor-pointer flex-col`}>
      <div
        className={`border-gray5 h-full rounded-3xl border-t px-4 pt-7 duration-300 group-hover/card:translate-y-[-10px] md:px-6 md:pt-6`}
      >
        <div className="flex items-start justify-between gap-4">
          <ScrambleText className={`text-24 min-h-15 font-mono uppercase`} text={name} />
          <GlowArrow />
        </div>

        <p className={`text-16 text-gray7 no-scrollbar 1280:h-[300px] overflow-y-scroll py-6`}>{description}</p>
      </div>
    </article>
    // </Link>
  );
}
