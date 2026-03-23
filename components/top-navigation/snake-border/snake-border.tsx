"use client";

import { useEffect, useRef, useState } from "react";

type SnakeBorderPropsT = {
  isVisible: boolean;
  borderRadius?: number;
  strokeWidth?: number;
  duration?: number;
  delay?: number;
  eraseColor?: string;
  className?: string;
  children: React.ReactNode;
};

function buildRoundedRectPath(x: number, y: number, w: number, h: number, r: number) {
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

export function SnakeBorder({
  isVisible,
  borderRadius = 6,
  strokeWidth = 1,
  duration = 0.6,
  delay = 0,
  eraseColor,
  className,
  children,
}: SnakeBorderPropsT) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [drawn, setDrawn] = useState(false);
  const [erasing, setErasing] = useState(false);
  const wasVisibleRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setDimensions({ width, height });
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Draw in on enter, start eraser on exit.
  const rafRef = useRef<number>(0);
  useEffect(() => {
    if (isVisible && dimensions.width > 0 && dimensions.height > 0) {
      wasVisibleRef.current = true;
      rafRef.current = requestAnimationFrame(() => {
        setErasing(false);
        rafRef.current = requestAnimationFrame(() => setDrawn(true));
      });
      return () => cancelAnimationFrame(rafRef.current);
    }
    if (!isVisible && wasVisibleRef.current) {
      wasVisibleRef.current = false;
      // Keep the drawn border visible, draw the eraser path on top
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = requestAnimationFrame(() => setErasing(true));
      });
      return () => cancelAnimationFrame(rafRef.current);
    }
  }, [isVisible, dimensions.width, dimensions.height]);

  const { width, height } = dimensions;
  const hs = strokeWidth / 2;

  const r = borderRadius;
  const pathD = buildRoundedRectPath(hs, hs, width - strokeWidth, height - strokeWidth, r);

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
          {/* Visible border — draws in, stays fully drawn during erase */}
          <path
            d={pathD}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={drawn ? 0 : 1}
            style={{
              transition: `stroke-dashoffset ${duration}s ease ${drawn ? `${delay}s` : "0s"}`,
            }}
          />
          {/* Eraser — draws over with background color, looks like the border is being erased */}
          {eraseColor && (
            <path
              d={pathD}
              fill="none"
              stroke={eraseColor}
              strokeWidth={strokeWidth + 1}
              pathLength={1}
              strokeDasharray={1}
              strokeDashoffset={erasing ? 0 : -1}
              style={{
                transition: `stroke-dashoffset ${duration}s ease`,
              }}
            />
          )}
        </svg>
      )}
    </div>
  );
}
