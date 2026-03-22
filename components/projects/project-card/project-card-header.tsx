type ProjectCardHeaderProps = {
  name: string;
  description: string;
};

export const ProjectCardHeader = ({
  name,
  description,
}: ProjectCardHeaderProps) => {
  return (
    <>
      <div
        className={`h-full rounded-3xl border-t border-gray5 pt-[27px] duration-300 group-hover/card:translate-y-[-10px] md:pt-6 `}
      >
        <div
          className={`no-scrollbar max-h-[204px] overflow-y-scroll px-4 md:px-6   `}
        >
          <p className={`font-mono text-24 uppercase `}>{name}</p>
          <p className={`max-w-[60%] pt-6 text-16 text-gray7 `}>
            {description}
          </p>
        </div>
      </div>
    </>
  );
};
