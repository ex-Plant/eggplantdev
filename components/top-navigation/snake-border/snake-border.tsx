"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { SnakePaths } from "./snake-paths";

// Safari detection via useSyncExternalStore to avoid SSR hydration mismatch.
// subscribe is a no-op because the user agent never changes mid-session.
const subscribe = () => () => {};
const getIsSafari = () => /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
const getServerSnapshot = () => false;

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

/** Clockwise from top-right (Chrome/Firefox) */
function buildClockwisePath(x: number, y: number, w: number, h: number, r: number) {
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
 * Counterclockwise from top-right (Safari).
 * Safari reverses stroke-dashoffset transition direction, so combining
 * a reversed path with flipped offsets produces the correct visual.
 */
function buildCounterclockwisePath(x: number, y: number, w: number, h: number, r: number) {
  return [
    `M ${x + w} ${y + r}`,
    `A ${r} ${r} 0 0 0 ${x + w - r} ${y}`,
    `L ${x + r} ${y}`,
    `A ${r} ${r} 0 0 0 ${x} ${y + r}`,
    `L ${x} ${y + h - r}`,
    `A ${r} ${r} 0 0 0 ${x + r} ${y + h}`,
    `L ${x + w - r} ${y + h}`,
    `A ${r} ${r} 0 0 0 ${x + w} ${y + h - r}`,
    `L ${x + w} ${y + r}`,
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

  // Safari reverses stroke-dashoffset CSS transition direction compared to Chrome.
  // To fix this, we use a counterclockwise path + flipped offset signs on Safari.
  // Both inversions combined with Safari's own reversal = correct visual direction.
  const safari = useSyncExternalStore(subscribe, getIsSafari, getServerSnapshot);

  // Track container size for the SVG viewBox and path calculations
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setDimensions({ width, height });
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Animation state machine:
  // 1. Open:  erasing → false, then drawn → true  (border draws in)
  // 2. Close: erasing → true (eraser line covers the drawn border)
  // Double-rAF ensures the browser commits state between steps.
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
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = requestAnimationFrame(() => setErasing(true));
      });
      return () => cancelAnimationFrame(rafRef.current);
    }
  }, [isVisible, dimensions.width, dimensions.height]);

  const { width, height } = dimensions;
  const hs = strokeWidth / 2;
  const r = borderRadius;

  // Safari: counterclockwise path + flipped offsets to counter reversed interpolation
  // Chrome: clockwise path + standard offsets
  const buildPath = safari ? buildCounterclockwisePath : buildClockwisePath;
  const pathD = buildPath(hs, hs, width - strokeWidth, height - strokeWidth, r);

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
          <SnakePaths
            pathD={pathD}
            strokeWidth={strokeWidth}
            duration={duration}
            delay={delay}
            drawn={drawn}
            erasing={erasing}
            eraseColor={eraseColor}
            drawHidden={safari ? -1 : 1}
            eraseHidden={safari ? 1 : -1}
          />
        </svg>
      )}
    </div>
  );
}
