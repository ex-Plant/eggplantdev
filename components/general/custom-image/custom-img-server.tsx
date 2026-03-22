import Image from "next/image";
import { cn } from "@/helpers/cn";
import { CustomImagePropsT } from "@/types/common-types";

export const CustomImgServer = ({
  //image component for server side rendering = no loading state
  src,
  className,
  style,
  priority,
  alt,
  heightFallback,
  widthFallback,
  sizes,
  unoptimized = false,
}: CustomImagePropsT) => {
  const height = heightFallback ?? 0;
  const width = widthFallback ?? 0;

  return (
    <>
      {src && (
        <Image
          priority={priority}
          style={style}
          className={cn(className)}
          src={src}
          width={width}
          height={height}
          alt={alt}
          sizes={sizes}
          unoptimized={unoptimized}
        />
      )}
    </>
  );
};
