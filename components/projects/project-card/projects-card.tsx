import Link from "next/link";
import { ProjectsCardPropsT } from "@/types/projects-types";
import { ScrambleText } from "@/components/general/scramble-text";
import { GlowArrow } from "@/components/general/glow-arrow";

export function ProjectsCard({ project }: ProjectsCardPropsT) {
  const { name, description, tempSlug, sections, url } = project ?? {};

  const mainSection = sections?.find((s) => s.type === "main");
  const year = mainSection && "cats" in mainSection ? mainSection.cats.Year : undefined;
  const techstack = sections?.find((s) => s.type === "techstack");
  const tags = techstack && "tags" in techstack ? techstack.tags : [];

  const Wrapper = url
    ? ({ children, className }: { children: React.ReactNode; className?: string }) => (
        <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
          {children}
        </a>
      )
    : ({ children, className }: { children: React.ReactNode; className?: string }) => (
        <div className={className}>{children}</div>
      );

  return (
    <Wrapper className="block">
      <article className={`group/card relative flex h-full ${url ? "cursor-pointer" : ""} flex-col`}>
        <div
          className={`border-gray5 h-full rounded-3xl border-t px-4 pt-7 duration-300 group-hover/card:translate-y-[-10px] md:px-6 md:pt-6`}
        >
          <div className="flex items-start justify-between">
            <ScrambleText className={`text-24 font-mono uppercase`} text={name} />
            <GlowArrow inactive={!url} />
          </div>

          {year && <p className="text-gray7 text-14 pt-1">{year}</p>}

          <p className={`text-16 text-lightgray py-8`}>{description}</p>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="border-gray5 text-gray7 text-12 rounded-lg border px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Wrapper>
  );
}
