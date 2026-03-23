"use client";

import { useEffect, useRef, useState } from "react";

type SnakeBorderPropsT = {
  isVisible: boolean;
  borderRadius?: number;
  strokeWidth?: number;
  duration?: number;
  className?: string;
  children: React.ReactNode;
};

function buildRoundedRectPath(
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  // Draws a rounded rect starting from top-right corner, going clockwise:
  // top-right → right side → bottom-right → bottom → bottom-left → left side → top-left → top → back to start
  return [
    `M ${x + w} ${y + r}`,
    // Right side down
    `L ${x + w} ${y + h - r}`,
    // Bottom-right corner
    `A ${r} ${r} 0 0 1 ${x + w - r} ${y + h}`,
    // Bottom side
    `L ${x + r} ${y + h}`,
    // Bottom-left corner
    `A ${r} ${r} 0 0 1 ${x} ${y + h - r}`,
    // Left side up
    `L ${x} ${y + r}`,
    // Top-left corner
    `A ${r} ${r} 0 0 1 ${x + r} ${y}`,
    // Top side
    `L ${x + w - r} ${y}`,
    // Top-right corner
    `A ${r} ${r} 0 0 1 ${x + w} ${y + r}`,
    "Z",
  ].join(" ");
}

function computePerimeter(w: number, h: number, r: number) {
  const straights = 2 * (w - 2 * r) + 2 * (h - 2 * r);
  const corners = 2 * Math.PI * r;
  return straights + corners;
}

export function SnakeBorder({
  isVisible,
  borderRadius = 6,
  strokeWidth = 1,
  duration = 0.6,
  className,
  children,
}: SnakeBorderPropsT) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  // Deferred flag — starts false, flips to true AFTER dimensions are measured
  // so the browser paints the hidden (full dashoffset) state first.
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setDimensions({ width, height });
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Only trigger the draw AFTER dimensions are available (SVG is rendered with full offset).
  // Double-rAF ensures the browser has painted the hidden state before we transition.
  const rafRef = useRef<number>(0);
  useEffect(() => {
    if (isVisible && dimensions.width > 0 && dimensions.height > 0) {
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = requestAnimationFrame(() => setDrawn(true));
      });
      return () => cancelAnimationFrame(rafRef.current);
    }
    setDrawn(false);
  }, [isVisible, dimensions.width, dimensions.height]);

  const { width, height } = dimensions;
  const hs = strokeWidth / 2;

  const r = borderRadius;
  const pathD = buildRoundedRectPath(hs, hs, width - strokeWidth, height - strokeWidth, r);
  const perimeter = computePerimeter(width - strokeWidth, height - strokeWidth, r);

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
            strokeDasharray={perimeter}
            strokeDashoffset={drawn ? 0 : perimeter}
            style={{
              transition: `stroke-dashoffset ${duration}s ease`,
            }}
          />
        </svg>
      )}
    </div>
  );
}
