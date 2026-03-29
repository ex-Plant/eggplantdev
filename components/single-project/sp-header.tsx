import Link from "next/link";

type SpHeaderPropsT = {
  name: string;
};

export const SpHeader = ({ name }: SpHeaderPropsT) => {
  return (
    <section className="fest-container mt-20 pt-17 md:pt-22">
      <div className="group text-16 mb-1 flex items-center space-x-4">
        <Link href="/">
          <span className="text-copy-body duration-500 group-hover:text-copy-strong">Projects</span>
        </Link>
      </div>
      <h1 className="text-40 sm:text-48 md:text-64 lg:text-80 xl:text-96 wrap-break-words font-mono uppercase">
        {name}
      </h1>
    </section>
  );
};
