"use client";

import { notFound } from "next/navigation";
import { useLocalizedData } from "@/hooks/use-localized-data";
import { SingleProjectMain } from "@/components/single-project/sp-main";

type SpPageClientPropsT = {
  slug: string;
};

export function SpPageClient({ slug }: SpPageClientPropsT) {
  const { projects } = useLocalizedData("projects");
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return <SingleProjectMain project={project} />;
}
