"use client";

import { ScrambleText } from "@/components/general/scramble-text";

export type SimpleHeaderPropsT = {
  title: string | string[];
  as?: "h2" | "h3" | "h4";
};

export const SimpleHeader = ({ title, as: Tag = "h2" }: SimpleHeaderPropsT) => {
  const lines = typeof title === "string" ? title.split("\n").map((line) => line.trim()) : title;

  return (
    <Tag className={`text-40 sm:text-48 md:text-64 lg:text-80 xl:text-96 font-mono uppercase`}>
      {lines.map((el, index) => (
        <ScrambleText key={index + "text"} text={el} />
      ))}
    </Tag>
  );
};
