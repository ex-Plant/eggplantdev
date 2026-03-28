import { CSSProperties } from "react";
import { cn } from "@/helpers/cn";

export default function AnimatedBgWrapper({
  wrapperClass,
  maskStyle,
  maskClass,
  children,
}: {
  wrapperClass?: string;
  maskStyle?: CSSProperties;
  children: React.ReactNode;
  maskClass?: string;
}) {
  return (
    <div className={cn("relative outline", wrapperClass)}>
      <div className={"to-bgc absolute top-0 right-0 left-0 z-10 h-[15vh] bg-linear-to-t from-transparent"} />

      <div style={maskStyle} className={cn(`pointer-events-none absolute inset-0`, maskClass)} />
      {children}
      <div className={"to-bgc absolute right-0 bottom-0 left-0 z-10 h-[15vh] bg-linear-to-b from-transparent"} />
    </div>
  );
}
