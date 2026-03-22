import { SimpleHeader } from "@/components/general/simple-header";
import { Button } from "@/components/ui/button";

type SpTechStackPropsT = {
  data: {
    type: "techstack";
    title: string;
    tags: string[];
  };
};

export const SpTechStack = ({ data }: SpTechStackPropsT) => {
  const { title, tags } = data;

  return (
    <div className={`fest-container`}>
      <SimpleHeader title={title} />
      <div className="flex flex-wrap gap-3 pt-8 md:pt-12">
        {tags.map((tag) => (
          <Button key={tag}>{tag}</Button>
        ))}
      </div>
    </div>
  );
};
