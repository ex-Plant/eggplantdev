import { getServerSideSitemap } from "next-sitemap";
import projectsData from "@/data/projects.en.json";
import { env } from "@/helpers/env";

export async function GET() {
  const siteUrl = env.NEXT_PUBLIC_SITE_URL;

  const dynamicUrls = projectsData.projects.map((project) => ({
    loc: `${siteUrl}/projects/${project.slug}`,
    lastmod: new Date().toISOString(),
  }));

  const staticUrls = [{ loc: siteUrl, lastmod: new Date().toISOString() }];

  const allUrls = [...staticUrls, ...dynamicUrls];

  return getServerSideSitemap(allUrls);
}
