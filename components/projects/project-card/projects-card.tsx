import Link from "next/link";
import { ProjectsCardPropsT } from "@/types/projects-types";
import { ScrambleText } from "@/components/general/scramble-text";

export const ProjectsCard = ({ project }: ProjectsCardPropsT) => {
  const { name, description, tempSlug } = project ?? {};

  return (
    <Link className={"block"} href={tempSlug}>
      <article className={`group/card relative flex h-full cursor-pointer flex-col`}>
        <div
          className={`border-gray5 h-full rounded-3xl border-t px-4 pt-7 duration-300 group-hover/card:translate-y-[-10px] md:px-6 md:pt-6`}
        >
          <div className="flex items-start justify-between gap-4">
            <ScrambleText className={`text-24 min-h-15 font-mono uppercase`} text={name} />
            <svg
              className="mt-1 shrink-0"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1H17M17 1V17M17 1L1 17" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>

          <p className={`text-16 text-gray7 no-scrollbar 1280:h-[300px] overflow-y-scroll py-6`}>{description}</p>
        </div>
      </article>
    </Link>
  );
};
