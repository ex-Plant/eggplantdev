import { cn } from "@/helpers/cn";

export default function EggplantRadialWrapper({
  wrapperClass,
  gradientFrom = "from-hero-bg-warm",
  maskClass,
  children,
}: {
  wrapperClass?: string;
  gradientFrom?: string;
  children: React.ReactNode;
  maskClass?: string;
}) {
  return (
    <div className={cn("relative", wrapperClass)}>
      <div
        className={cn(
          `pointer-events-none absolute inset-0 bg-radial-[ellipse_at_center] to-transparent to-90%`,
          gradientFrom,
          maskClass,
        )}
      />
      {children}
    </div>
  );
}
