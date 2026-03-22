"use client";

import { ScrambleText } from "@/components/general/scramble-text";

type SpTitlePropsT = {
  name: string;
};

export const SpTitle = ({ name }: SpTitlePropsT) => {
  return (
    <h1 className="break-words font-mono text-40 uppercase sm:text-48 md:text-64 lg:text-80 xl:text-96">
      <ScrambleText text={name} triggerOnMount />
    </h1>
  );
};
