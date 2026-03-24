import { SimpleSection } from "@/components/home/sections/simple-section";
import { ProjectsSection } from "@/components/home/sections/projects-section";
import { FullSection } from "@/components/home/sections/full-section";
import { QuoteSection } from "@/components/home/sections/quote-section";
import { SectionPropsT } from "@/types/home-page-types";

export function RenderSections({ data }: SectionPropsT) {
  function renderContent() {
    switch (data.type) {
      case "simple":
        return (
          <SimpleSection titleLine={data.titleLine} text={data.text} className={"fest-container py-20 md:py-60"} />
        );
      case "projects":
        return <ProjectsSection data={data} className={"fest-container py-20 md:py-40"} />;
      case "fullSection":
        return <FullSection data={data} className={"fest-container py-20 md:py-40"} />;
      case "quote":
        return <QuoteSection data={data} className={"fest-container py-20 md:py-40"} />;
    }
  }

  return renderContent();
}
