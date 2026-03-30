"use client";

import { GridOfLife } from "@/components/home/heroes/grid-of-life/grid-of-life";

export default function NotFound() {
  return (
    <div className="bg-bgc text-primary">
      <GridOfLife copyKey="notFound" />
    </div>
  );
}
