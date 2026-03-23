"use client";

import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ProjectT } from "@/types/projects-types";
import { ScrambleText } from "@/components/general/scramble-text";
import { GlowArrow } from "@/components/general/glow-arrow";
import { RoundedSeparator } from "@/components/general/rounded-separator";
import { GlowWrapper } from "@/components/general/glow-wrapper";
import { useTranslation } from "@/lib/i18n/hooks/use-translation";

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

function ProjectAccordionItem({ project, isOpen, index }: { project: ProjectT; isOpen: boolean; index: number }) {
  const { name, description, sections, url } = project;
  const { t } = useTranslation("projects");

  const mainSection = sections?.find((s) => s.type === "main");
  const year = mainSection && "cats" in mainSection ? mainSection.cats.Year : undefined;
  const techstack = sections?.find((s) => s.type === "techstack");
  const tags = techstack && "tags" in techstack ? techstack.tags : [];

  return (
    <Accordion.Item value={project.uuid} className="group/card">
      <RoundedSeparator className="transition-transform duration-300 group-hover/card:translate-y-[-6px]" />

      <Accordion.Trigger className="w-full cursor-pointer transition-transform duration-300 hover:translate-y-[-6px]">
        <GlowWrapper glowClassName="-inset-x-8 -inset-y-4 rounded-2xl blur-3xl">
          <div className="grid grid-cols-[1fr_auto] items-center gap-4 py-12">
            <div className="flex flex-col items-start">
              <ScrambleText className="text-24 font-mono uppercase" text={name} />
              {year && <p className="text-gray7 text-14 pt-1">{year}</p>}
            </div>
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3, ease: [0.87, 0, 0.13, 1] }}
              className="self-center"
            >
              <GlowArrow inactive={!url} />
            </motion.div>
          </div>
        </GlowWrapper>
      </Accordion.Trigger>

      <AnimatePresence initial={false}>
        {isOpen && (
          <Accordion.Content forceMount asChild>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.87, 0, 0.13, 1] }}
              className="overflow-hidden"
            >
              <div className="grid gap-6 pr-10 pb-12">
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -5, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                  className="text-16 text-lightgray text-balance"
                >
                  {description}
                </motion.p>

                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span key={tag} className="border-gray5 text-gray7 text-12 rounded-lg border px-3">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {url && (
                  <GlowWrapper>
                    <Link
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-14 text-lightgray relative transition-colors duration-300 hover:text-white"
                    >
                      {t("visitWebsite")}
                    </Link>
                  </GlowWrapper>
                )}
              </div>
            </motion.div>
          </Accordion.Content>
        )}
      </AnimatePresence>
    </Accordion.Item>
  );
}
