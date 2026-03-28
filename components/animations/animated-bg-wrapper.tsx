import { cn } from "@/helpers/cn";

export default function EggplantRadialWrapper({
  wrapperClass,
  backgroundColor,
  maskClass,
  children,
}: {
  wrapperClass?: string;
  backgroundColor?: string;
  children: React.ReactNode;
  maskClass?: string;
}) {
  return (
    <div className={cn("relative outline", wrapperClass)}>
      {backgroundColor && (
        <div
          style={{
            background: `radial-gradient(ellipse at center, ${backgroundColor} 0%, transparent 90%)`,
            // background: `radial-gradient(ellipse at center, red 0%, transparent 90%)`,
          }}
          className={cn(`pointer-events-none absolute inset-0`, maskClass)}
        />
      )}
      {children}
    </div>
  );
}
