"use client";

import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ProjectT } from "@/types/projects-types";
import { RoundedSeparator } from "@/components/general/rounded-separator";
import { AccordionTrigger } from "@/components/projects/project-card/accordion-trigger";
import { AccordionContentPanel } from "@/components/projects/project-card/accordion-content";

type ProjectsAccordionPropsT = {
  projects: ProjectT[];
};

export function ProjectsAccordion({ projects }: ProjectsAccordionPropsT) {
  const [openItem, setOpenItem] = useState<string>("");

  return (
    <Accordion.Root type="single" collapsible value={openItem} onValueChange={setOpenItem} className="flex flex-col">
      {projects.map((project) => (
        <ProjectAccordionItem key={project.uuid} project={project} isOpen={openItem === project.uuid} />
      ))}
    </Accordion.Root>
  );
}

function ProjectAccordionItem({ project, isOpen }: { project: ProjectT; isOpen: boolean }) {
  const { name, description, sections, url } = project;

  const mainSection = sections?.find((s) => s.type === "main");
  const year = mainSection && "cats" in mainSection ? mainSection.cats.Year : undefined;
  const techstack = sections?.find((s) => s.type === "techstack");
  const tags = techstack && "tags" in techstack ? techstack.tags : [];

  return (
    <Accordion.Item value={project.uuid} className="group/card">
      <RoundedSeparator className="transition-transform duration-300 group-hover/card:translate-y-[-6px]" />

      <AccordionTrigger name={name} year={year} isOpen={isOpen} hasUrl={!!url} />

      <AccordionContentPanel isOpen={isOpen} description={description} tags={tags} url={url} />
    </Accordion.Item>
  );
}
