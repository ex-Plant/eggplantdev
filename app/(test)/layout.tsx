import { notFound } from "next/navigation";
import { DesignSpecPanel } from "@/components/debug-tools/design-spec-panel";

export default function TestLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  if (process.env.NODE_ENV !== "development") notFound();

  return (
    <div className="test-layout bg-bgc min-h-screen text-white">
      <DesignSpecPanel />
      {children}
    </div>
  );
}
