import { getProjectBySlug, getAllProjectSlugs } from "@/helpers/get-project-by-slug";
import { SpPageClient } from "@/components/single-project/sp-page-client";

type ParamsT = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ParamsT) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: project.name, description: project.description };
}

export default async function ProjectPage({ params }: ParamsT) {
  const { slug } = await params;
  return <SpPageClient slug={slug} />;
}
