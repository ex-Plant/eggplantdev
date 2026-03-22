import projectsData from "@/data/projects.json";
import { ProjectT } from "@/types/projects-types";

const projects = projectsData.projects as ProjectT[];

export const getProjectBySlug = (slug: string): ProjectT | undefined =>
  projects.find((p) => p.slug === slug);

export const getAllProjectSlugs = (): string[] =>
  projects.map((p) => p.slug);
