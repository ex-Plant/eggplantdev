import { CustomImgServer } from "@/components/general/custom-image/custom-img-server";

type SpVideoPropsT = {
  data: {
    type: "video";
    desktopScreenshot: string;
    mobileScreenshot: string;
  };
};

export const SpVideo = ({ data }: SpVideoPropsT) => {
  const { desktopScreenshot } = data;

  return (
    <div className={`fest-container`}>
      <div className="no-scrollbar xxl:max-h-[720px] relative h-[calc(480/360*100vw)] max-h-[640px] overflow-y-scroll rounded-xl border lg:h-[calc(400/1024*100vw)] xl:h-[calc(560/1024*100vw)]">
        <CustomImgServer
          src={desktopScreenshot}
          alt="Desktop view screenshot"
          className="w-full object-cover object-top"
        />
      </div>
    </div>
  );
};
