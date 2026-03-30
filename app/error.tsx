"use client";

import { GridOfLife } from "@/components/home/heroes/grid-of-life/grid-of-life";

export default function ErrorPage({ error: _error, reset: _reset }: { error: Error; reset: () => void }) {
  return (
    <div className="bg-bgc text-primary">
      <GridOfLife copyKey="notFound" />
    </div>
  );
}
