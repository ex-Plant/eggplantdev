"use client";

import { cn } from "@/helpers/cn";
import { ProjectsCard } from "@/components/projects/project-card/projects-card";
import { SimpleSection } from "@/components/home/sections/simple-section";
import { ProjectsSectionT } from "@/types/home-page-types";
import { useLocalizedData } from "@/hooks/use-localized-data";

type ProjectsSectionPropsT = {
  data: ProjectsSectionT;
  className?: string;
};

export const ProjectsSection = ({ data, className }: ProjectsSectionPropsT) => {
  const { projects } = useLocalizedData("projects");

  const filtered = data.filterCategory ? projects.filter((p) => p.category === data.filterCategory) : projects;

  return (
    <section className={cn("fest-grid", className)}>
      <SimpleSection titleLine={data.titleLine} text={data.text} className="col-span-full" />

      <div className="640:col-span-7 col-span-full grid grid-cols-1 gap-20 pt-20 md:col-span-8">
        {filtered.map((project) => (
          <ProjectsCard key={project.uuid} project={project} />
        ))}
      </div>
    </section>
  );
};
