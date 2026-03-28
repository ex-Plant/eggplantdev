import { DesignSpecPanel } from "@/components/debug-tools/design-spec-panel";

export default function TestLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="test-layout bg-bgc min-h-screen text-white">
      <DesignSpecPanel />
      {children}
    </div>
  );
}
