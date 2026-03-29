"use client";

import { useSyncExternalStore, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/helpers/cn";

const APNG_SRC = "/logos/eggplant-logo-smooth.apng";
const STATIC_SRC = "/logos/eggplant-logo.png";
const FADE_DURATION_MS = 600;
const POLL_INTERVAL_MS = 200;

/**
 * Track readiness outside React to avoid setState-in-effect lint errors.
 * Ready = the APNG file is cached AND all eggplant <img> elements in the
 * DOM have finished loading (i.e. the page is visually complete).
 */
let isReady = false;
const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function getSnapshot() {
  return isReady;
}

function notifyAll() {
  listeners.forEach((cb) => cb());
}

/** Preload the APNG into browser cache. */
let apngCached = false;

function startPreload() {
  if (typeof window === "undefined") return;

  const img = new window.Image();
  img.src = APNG_SRC;

  const onDone = () => {
    apngCached = true;
    checkReady();
  };

  if (img.complete) {
    onDone();
  } else {
    img.onload = onDone;
    img.onerror = onDone;
  }
}

/**
 * Poll the DOM for eggplant images. Once cached APNG + all visible
 * eggplant <img> elements report `complete`, we're ready.
 */
function checkReady() {
  if (isReady) return;
  if (!apngCached) return;

  const imgs = document.querySelectorAll<HTMLImageElement>('img[src*="eggplant-logo-smooth"]');

  // If no eggplant images in DOM yet, keep waiting
  if (imgs.length === 0) return;

  const allComplete = Array.from(imgs).every((img) => img.complete);
  if (!allComplete) return;

  isReady = true;
  notifyAll();
}

// Kick off preload immediately on module load (client only)
if (typeof window !== "undefined") {
  startPreload();
}

export function PagePreloader() {
  const ready = useSyncExternalStore(subscribe, getSnapshot, () => false);
  const [isRemoved, setIsRemoved] = useState(false);

  // Poll DOM for eggplant image completion
  useEffect(() => {
    if (ready) return;

    const interval = setInterval(checkReady, POLL_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [ready]);

  // Remove from DOM after fade-out completes
  useEffect(() => {
    if (!ready) return;

    const timeout = setTimeout(() => setIsRemoved(true), FADE_DURATION_MS);
    return () => clearTimeout(timeout);
  }, [ready]);

  if (isRemoved) return null;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "bg-bgc grit fixed inset-0 z-9999 flex items-center justify-center transition-opacity",
        ready ? "pointer-events-none opacity-0" : "opacity-100",
      )}
      style={{ transitionDuration: `${FADE_DURATION_MS}ms` }}
    >
      <Image src={STATIC_SRC} alt="" width={48} height={48} className="size-12 animate-bounce lg:size-16" priority />
    </div>
  );
}
