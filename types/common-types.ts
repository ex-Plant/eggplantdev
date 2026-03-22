import { Properties } from "csstype";

export type CustomImagePropsT = {
  src: string;
  className?: string;
  style?: Properties;
  priority?: boolean;
  heightFallback?: number;
  widthFallback?: number;
  alt: string;
  sizes?: string;
  unoptimized?: boolean;
};
