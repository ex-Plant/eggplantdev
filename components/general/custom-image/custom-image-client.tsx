"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/helpers/cn";
import { CustomImagePropsT } from "@/types/common-types";
import { Spinner } from "@/components/general/spinner";

type CustomImageClientPropsT = CustomImagePropsT & {
  showSpinner?: boolean;
};

export const CustomImageClient = ({
  src,
  className,
  style,
  priority,
  showSpinner = true,
  alt,
  heightFallback,
  widthFallback,
  unoptimized = false,
}: CustomImageClientPropsT) => {
  const [loaded, setLoaded] = useState(false);
  const height = heightFallback ?? 0;
  const width = widthFallback ?? 0;
  const onLoadingComplete = () => setLoaded(true);
  const opacity = loaded ? "opacity-1 duration-500 " : "opacity-0";

  return (
    <>
      {src && (
        <>
          <Image
            priority={priority}
            style={style}
            className={cn(className + opacity)}
            src={src}
            width={width}
            height={height}
            alt={alt}
            onLoad={onLoadingComplete}
            unoptimized={unoptimized}
          />
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
            {!loaded && showSpinner && <Spinner />}
          </div>
        </>
      )}
    </>
  );
};
