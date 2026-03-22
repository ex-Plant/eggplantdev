import { CustomImgServer } from "@/components/general/custom-image/custom-img-server";
import { cn } from "@/helpers/cn";

type ScreensPropsT = {
  data: {
    type: "screenshots";
    gridColumnsNumber: number;
    images: string[];
  };
};

export const Screens = ({ data }: ScreensPropsT) => {
  const { gridColumnsNumber, images } = data;
  const GRID_COLS: Record<number, string> = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
  };

  return (
    <div className={cn("fest-container grid gap-4", GRID_COLS[gridColumnsNumber])}>
      {images.map((src, index) => (
        <div key={index} className="xxl:h-[722px] h-[426px] xl:h-[560px]">
          <CustomImgServer
            src={src}
            alt={`Screenshot ${index + 1}`}
            className="h-full w-full rounded-3xl object-cover object-center"
          />
        </div>
      ))}
    </div>
  );
};
