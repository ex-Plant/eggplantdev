import { ProjectT, ProjectSectionT } from "@/types/projects-types";
import { SpHeroSection } from "@/components/single-project/sp-hero-section";
import { SimpleSection } from "@/components/home/sections/simple-section";
import { Screens } from "@/components/single-project/sp-screens";
import { SpVideo } from "@/components/single-project/sp-video";
import { SpTechStack } from "@/components/single-project/sp-tech-stack";
import { SpTeam } from "@/components/single-project/sp-team";
import { QuoteSection } from "@/components/home/sections/quote-section";
import { cn } from "@/helpers/cn";

type SingleProjectMainPropsT = {
  project: ProjectT;
};

export const SingleProjectMain = ({ project }: SingleProjectMainPropsT) => {
  const { name, sections } = project;

  return (
    <div className="mx-auto max-w-xxl pt-20 xl:pt-40 ">
      {sections.map((section, index) => (
        <section
          key={section.type + index}
          className={"border-b border-gray2 py-40 first:pt-0 last:border-0 "}
        >
          <RenderProjectSection section={section} name={name} />
        </section>
      ))}
    </div>
  );
};

type RenderProjectSectionPropsT = {
  section: ProjectSectionT;
  name: string;
};

const RenderProjectSection = ({
  section,
  name,
}: RenderProjectSectionPropsT) => {
  switch (section.type) {
    case "main":
      return <SpHeroSection name={name} mainSection={section} />;
    case "simple":
      return (
        <SimpleSection
          titleLine={section.titleLine}
          text={section.text}
          className="fest-container"
        />
      );
    case "screenshots":
      return <Screens data={section} />;
    case "video":
      return <SpVideo data={section} />;
    case "techstack":
      return <SpTechStack data={section} />;
    case "team":
      return <SpTeam data={section} />;
    case "quote":
      return (
        <QuoteSection
          data={section}
          singleProjectPage={true}
          className="fest-container"
        />
      );
  }
};
