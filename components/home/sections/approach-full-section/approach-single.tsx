import { ScrambleText } from "../../../general/scramble-text";

type ApproachSingleProps = {
  title: string;
  text: string;
};

export const ApproachSingle = ({ title, text }: ApproachSingleProps) => {
  return (
    <article className="md:pb-15 xl:pb-21 flex h-full flex-col pb-11 ">
      <ScrambleText text={title} className="text-24 font-mono uppercase" />
      <p className={`text-14 text-lightgray h-full pt-4 `}>{text}</p>
    </article>
  );
};
