import { ApproachSingle } from "@/components/home/sections/approach-full-section/approach-single";
import { cn } from "@/helpers/cn";
import { CustomImgServer } from "@/components/general/custom-image/custom-img-server";

export type ApproachPropsT = {
  approachArray: Array<{ title: string; content: string }>;
  foto?: string;
  className?: string;
};

export const Approach = ({ approachArray, foto, className }: ApproachPropsT) => {
  return (
    <section className={cn("fest-grid", className)}>
      <div className={`640:col-span-8 1280:col-span-9 col-span-full md:col-span-11 xl:col-span-11`}>
        <div
          className={`xxl:gap-x-36 mdgapy-15 grid gap-x-10 gap-y-11 pt-16 lg:grid-cols-3 lg:pt-20 xl:gap-x-12 xl:gap-y-21 xl:pt-28`}
        >
          {approachArray.map((item, index) => {
            return <ApproachSingle title={item.title} text={item.content} key={index + "approach"} />;
          })}
        </div>
        {/* {foto && (
          <CustomImgServer
            src={foto}
            alt=""
            className={`mt-9 h-[480px] w-full rounded-3xl object-cover object-center`}
          />
        )} */}
      </div>
    </section>
  );
};
