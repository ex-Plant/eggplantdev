"use client";

import { useSyncExternalStore, useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/helpers/cn";

const APNG_SRC = "/logos/eggplant-logo-smooth.apng";
const STATIC_SRC = "/logos/eggplant-logo.png";
const FADE_DURATION_MS = 600;

/** Preload the APNG outside React to avoid setState-in-effect lint errors. */
let apngLoaded = false;
const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function getSnapshot() {
  return apngLoaded;
}

function startPreload() {
  if (typeof window === "undefined") return;

  const img = new window.Image();
  img.src = APNG_SRC;

  const markLoaded = () => {
    apngLoaded = true;
    listeners.forEach((cb) => cb());
  };

  if (img.complete) {
    markLoaded();
  } else {
    img.onload = markLoaded;
    img.onerror = markLoaded; // don't block forever on error
  }
}

// Kick off preload immediately on module load (client only)
if (typeof window !== "undefined") {
  startPreload();
}

export function PagePreloader() {
  const isLoaded = useSyncExternalStore(subscribe, getSnapshot, () => false);
  const [isRemoved, setIsRemoved] = useState(false);

  // Remove from DOM after fade-out completes
  useEffect(() => {
    if (!isLoaded) return;

    const timeout = setTimeout(() => setIsRemoved(true), FADE_DURATION_MS);
    return () => clearTimeout(timeout);
  }, [isLoaded]);

  if (isRemoved) return null;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "bg-bgc fixed inset-0 z-[9999] flex items-center justify-center transition-opacity",
        isLoaded ? "pointer-events-none opacity-0" : "opacity-100",
      )}
      style={{ transitionDuration: `${FADE_DURATION_MS}ms` }}
    >
      <Image src={STATIC_SRC} alt="" width={48} height={48} className="size-12 animate-bounce lg:size-16" priority />
    </div>
  );
}
