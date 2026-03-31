"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ProjectT } from "@/types/projects-types";
import { RoundedSeparator } from "@/components/general/rounded-separator";
import { AccordionTrigger } from "@/components/projects/project-card/accordion-trigger";
import { AccordionContentPanel, ContentInner } from "@/components/projects/project-card/accordion-content";

type ProjectsAccordionPropsT = {
  projects: ProjectT[];
};

// Reserves minHeight = collapsed triggers + tallest content panel so that
// opening/closing items only reflows *within* the accordion — page content
// below never shifts. Remeasures on resize to handle text reflow.
export function ProjectsAccordion({ projects }: ProjectsAccordionPropsT) {
  const [openItem, setOpenItem] = useState<string>("");
  const [fixedHeight, setFixedHeight] = useState<number | undefined>(undefined);
  const rootRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);

  const measure = useCallback(() => {
    const root = rootRef.current;
    const measureContainer = measureRef.current;
    if (!root || !measureContainer) return;

    const children = measureContainer.children;
    let maxContent = 0;
    for (let i = 0; i < children.length; i++) {
      maxContent = Math.max(maxContent, children[i].scrollHeight);
    }

    // collapsedBase + tallest panel = worst-case expanded height
    const collapsedBase = root.scrollHeight;
    setFixedHeight(collapsedBase + maxContent);
  }, []);

  // Measure on mount after first layout frame.
  useEffect(() => {
    const raf = requestAnimationFrame(measure);
    return () => cancelAnimationFrame(raf);
  }, [measure]);

  // Remeasure on resize so fixedHeight stays accurate when text reflows.
  useEffect(() => {
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measure]);

  return (
    <div className="relative">
      <Accordion.Root
        ref={rootRef}
        type="single"
        collapsible
        value={openItem}
        onValueChange={setOpenItem}
        className="flex flex-col"
        style={fixedHeight ? { minHeight: fixedHeight } : undefined}
      >
        {projects.map((project) => (
          <ProjectAccordionItem key={project.uuid} project={project} isOpen={openItem === project.uuid} />
        ))}
        <RoundedSeparator className="transition-transform duration-300 group-hover/card:translate-y-[-6px]" />
      </Accordion.Root>

      {/* Offscreen panels for height measurement — invisible but in the DOM so we can read scrollHeight. */}
      <div ref={measureRef} aria-hidden className="pointer-events-none invisible absolute top-0 right-0 left-0">
        {projects.map((project) => (
          <ContentInner
            key={project.uuid}
            description={project.description}
            tags={getProjectTags(project)}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
}

type ProjectAccordionItemPropsT = {
  project: ProjectT;
  isOpen: boolean;
};

function ProjectAccordionItem({ project, isOpen }: ProjectAccordionItemPropsT) {
  const { name, description, sections, url } = project;

  const mainSection = sections?.find((s) => s.type === "main");
  const year = mainSection && "cats" in mainSection ? mainSection.cats.Year : undefined;
  const tags = getProjectTags(project);

  return (
    <Accordion.Item value={project.uuid} className="group/card">
      <RoundedSeparator className="transition-transform duration-300 group-hover/card:translate-y-[-6px]" />

      <AccordionTrigger name={name} year={year} isOpen={isOpen} hasUrl={!!url} />

      <AccordionContentPanel isOpen={isOpen} description={description} tags={tags} url={url} />
    </Accordion.Item>
  );
}

function getProjectTags(project: ProjectT): string[] {
  const techstack = project.sections?.find((s) => s.type === "techstack");
  return techstack && "tags" in techstack ? techstack.tags : [];
}
