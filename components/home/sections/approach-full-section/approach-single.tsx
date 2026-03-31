import { ScrambleText } from "../../../general/scramble-text";

type ApproachSingleProps = {
  title: string;
  text: string;
};

export const ApproachSingle = ({ title, text }: ApproachSingleProps) => {
  return (
    <article className="flex h-full flex-col">
      <ScrambleText text={title} className="text-24 font-mono uppercase" />
      <p className={`text-16 text-hero-title-secondary scalable h-full pt-4`}>{text}</p>
    </article>
  );
};
