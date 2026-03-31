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

// DO NOT REMOVE — this fixed-height system is a performance optimization.
// Without it, opening/closing accordion items causes the entire page below
// to reflow and repaint (heavy content: heroes, SVG geometry, animations).
//
// How it works:
// 1. Offscreen container renders all ContentInner panels invisibly (same width).
// 2. On mount + resize, we measure each panel's scrollHeight and find the tallest.
// 3. fixedHeight = root.scrollHeight - currentOpenPanelHeight + tallestPanelHeight
//    (root already includes the open panel, so we swap it for the tallest.)
// 4. minHeight on the root locks the accordion to worst-case height.
// Result: switching items only reflows *within* the accordion — nothing else moves.
export function ProjectsAccordion({ projects }: ProjectsAccordionPropsT) {
  const [openItem, setOpenItem] = useState<string>(projects[0]?.uuid ?? "");
  const [fixedHeight, setFixedHeight] = useState<number | undefined>(undefined);
  const rootRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);

  const measure = useCallback(() => {
    const root = rootRef.current;
    const measureContainer = measureRef.current;
    if (!root || !measureContainer) return;

    const children = measureContainer.children;
    let tallest = 0;
    let currentOpenHeight = 0;

    for (let i = 0; i < children.length; i++) {
      const h = children[i].scrollHeight;
      if (h > tallest) tallest = h;
      if (projects[i]?.uuid === openItem) currentOpenHeight = h;
    }

    // root.scrollHeight already includes currentOpenHeight.
    // Replace it with the tallest panel to get worst-case total.
    setFixedHeight(root.scrollHeight - currentOpenHeight + tallest);
  }, [openItem, projects]);

  // Measure on mount after first layout frame.
  useEffect(() => {
    const raf = requestAnimationFrame(measure);
    return () => cancelAnimationFrame(raf);
  }, [measure]);

  // Remeasure on resize so fixedHeight stays accurate when text reflows.
  useEffect(() => {
    const onResize = () => requestAnimationFrame(measure);
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

      {/* Offscreen panels for height measurement — invisible but in the DOM so
          we can read scrollHeight. Matches accordion width via absolute left-0/right-0. */}
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
