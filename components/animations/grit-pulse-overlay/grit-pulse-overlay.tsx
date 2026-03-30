/* Agent: Claude — Grit Pulse Overlay */

"use client";

import { cn } from "@/helpers/cn";
import styles from "./grit-pulse-overlay.module.css";

/** Dot diameter in px */
const SIZE = 10;
/** Full animation cycle in seconds (pulse + idle) */
const CYCLE = 24;

/**
 * Fixed positions spread across the viewport (x%, y%).
 * Hand-picked to avoid clumping — edit freely.
 */
const DOTS = [
  [8, 12],
  [92, 7],
  [35, 22],
  [68, 15],
  [15, 48],
  [82, 42],
  [50, 55],
  [28, 72],
  [72, 68],
  [5, 88],
  [58, 85],
  [90, 78],
  [42, 38],
  [18, 95],
] as const;

export function GritPulseOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-1" aria-hidden="true">
      {DOTS.map(([x, y], i) => (
        <div
          key={i}
          className={cn(
            `absolute rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.3)_35%,transparent_70%)] opacity-0`,
            styles.pulse,
          )}
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: SIZE,
            height: SIZE,
            marginLeft: -SIZE / 2,
            marginTop: -SIZE / 2,
            animationDuration: `${CYCLE}s`,
            animationDelay: `${(i * CYCLE) / DOTS.length}s`,
          }}
        />
      ))}
    </div>
  );
}
