"use client";

import { useEffect, useRef, useState } from "react";

type SnakeBorderPropsT = {
  isVisible: boolean;
  borderRadius?: number;
  strokeWidth?: number;
  duration?: number;
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

/**
 * Builds a clockwise rounded-rect SVG path starting from the top-right corner.
 * The path starts at (x+w, y+r) and traces: right side ↓ → bottom → left side ↑ → top → back to start.
 * Inset by half strokeWidth (hs) so the stroke doesn't clip outside the viewBox.
 */
function buildPath(x: number, y: number, w: number, h: number, r: number) {
  return [
    `M ${x + w} ${y + r}`,
    `L ${x + w} ${y + h - r}`,
    `A ${r} ${r} 0 0 1 ${x + w - r} ${y + h}`,
    `L ${x + r} ${y + h}`,
    `A ${r} ${r} 0 0 1 ${x} ${y + h - r}`,
    `L ${x} ${y + r}`,
    `A ${r} ${r} 0 0 1 ${x + r} ${y}`,
    `L ${x + w - r} ${y}`,
    `A ${r} ${r} 0 0 1 ${x + w} ${y + r}`,
    "Z",
  ].join(" ");
}

/**
 * Animated SVG border that draws itself in and retraces on close.
 *
 * How it works:
 * - A single `<path>` with `pathLength={1}` and `strokeDasharray={1}` means
 *   the entire stroke is one "dash" of length 1.
 * - `strokeDashoffset={1}` hides the stroke (shifted off by its full length).
 * - `strokeDashoffset={0}` reveals the stroke (no shift).
 * - CSS `transition` on `stroke-dashoffset` animates between these states.
 *
 * Draw in:  offset transitions 1 → 0 (stroke progressively revealed, clockwise from top-right).
 * Erase:    offset transitions 0 → 1 (stroke retraces the same path in reverse).
 *
 * The draw-in uses a configurable `delay` so it can sync with content appearing.
 * The erase has no delay so it starts immediately on close.
 */
export function SnakeBorder({
  isVisible,
  borderRadius = 6,
  strokeWidth = 1,
  duration = 0.6,
  delay = 0,
  className,
  children,
}: SnakeBorderPropsT) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Track container size so the SVG viewBox and path match the actual element
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setDimensions({ width, height });
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // After a language-switch reload the menu reopens immediately, so isVisible
  // is already true when the SVG first mounts. Without this delay the browser
  // never sees strokeDashoffset=1 and the draw-in transition is skipped.
  // requestAnimationFrame defers setReady out of the synchronous effect body
  // (avoids React's cascading render warning) and gives the browser one frame
  // to register the hidden state before flipping to visible.
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      const id = requestAnimationFrame(() => setReady(true));
      return () => cancelAnimationFrame(id);
    }
    requestAnimationFrame(() => setReady(false));
  }, [dimensions.width, dimensions.height]);

  const { width, height } = dimensions;
  const hs = strokeWidth / 2;
  const pathD = buildPath(hs, hs, width - strokeWidth, height - strokeWidth, borderRadius);

  return (
    <div ref={containerRef} className={className} style={{ position: "relative" }}>
      {children}
      {width > 0 && height > 0 && (
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
          viewBox={`0 0 ${width} ${height}`}
        >
          <path
            d={pathD}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={isVisible && ready ? 0 : 1}
            style={{
              transition: isVisible
                ? `stroke-dashoffset ${duration}s ease ${delay}s`
                : `stroke-dashoffset ${duration}s ease`,
            }}
          />
        </svg>
      )}
    </div>
  );
}
