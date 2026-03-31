"use client";

import { useRef, useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ProjectT } from "@/types/projects-types";
import { RoundedSeparator } from "@/components/general/rounded-separator";
import { AccordionTrigger } from "@/components/projects/project-card/accordion-trigger";
import { AccordionContentPanel } from "@/components/projects/project-card/accordion-content";

type ProjectsAccordionPropsT = {
  projects: ProjectT[];
};

// Delay hover-open slightly so scroll passes do not trigger accidental expansion.
const HOVER_OPEN_DELAY_MS = 300;

export function ProjectsAccordion({ projects }: ProjectsAccordionPropsT) {
  const [openItem, setOpenItem] = useState<string>("");

  return (
    <Accordion.Root type="single" collapsible value={openItem} onValueChange={setOpenItem} className="flex flex-col">
      {projects.map((project) => (
        <ProjectAccordionItem
          key={project.uuid}
          project={project}
          isOpen={openItem === project.uuid}
          onOpen={() => setOpenItem(project.uuid)}
        />
      ))}
    </Accordion.Root>
  );
}

function ProjectAccordionItem({ project, isOpen, onOpen }: { project: ProjectT; isOpen: boolean; onOpen: () => void }) {
  const { name, description, sections, url } = project;
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const mainSection = sections?.find((s) => s.type === "main");
  const year = mainSection && "cats" in mainSection ? mainSection.cats.Year : undefined;
  const techstack = sections?.find((s) => s.type === "techstack");
  const tags = techstack && "tags" in techstack ? techstack.tags : [];

  const clearHoverTimeout = () => {
    if (!hoverTimeoutRef.current) return;
    clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = null;
  };

  const startHoverTimeout = () => {
    clearHoverTimeout();
    hoverTimeoutRef.current = setTimeout(() => {
      onOpen();
      hoverTimeoutRef.current = null;
    }, HOVER_OPEN_DELAY_MS);
  };

  return (
    <Accordion.Item
      value={project.uuid}
      className="group/card"
      onMouseEnter={startHoverTimeout}
      onMouseLeave={clearHoverTimeout}
      onFocusCapture={() => {
        // Keyboard users should get the panel immediately without waiting on hover timing.
        clearHoverTimeout();
        onOpen();
      }}
    >
      <RoundedSeparator className="transition-transform duration-300 group-hover/card:translate-y-[-6px]" />

      <AccordionTrigger name={name} year={year} isOpen={isOpen} hasUrl={!!url} />

      <RoundedSeparator className="transition-transform duration-300 group-hover/card:translate-y-[-6px]" />

      <AccordionContentPanel isOpen={isOpen} description={description} tags={tags} url={url} />
    </Accordion.Item>
  );
}
