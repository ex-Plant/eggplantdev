"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { SnakePathsDefault } from "./snake-paths-default";
import { SnakePathsSafari } from "./snake-paths-safari";

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

export function buildRoundedRectPath(x: number, y: number, w: number, h: number, r: number) {
  // Draws a rounded rect starting from top-right corner, going clockwise:
  // top-right → right side → bottom-right → bottom → bottom-left → left side → top-left → top → back to start
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

export type SnakePathsPropsT = {
  pathD: string;
  /** Raw geometry for building alternative paths (e.g. reversed for Safari) */
  geo: { x: number; y: number; w: number; h: number; r: number };
  strokeWidth: number;
  duration: number;
  delay: number;
  drawn: boolean;
  erasing: boolean;
  eraseColor?: string;
};

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

  const safari = useSyncExternalStore(subscribe, getIsSafari, getServerSnapshot);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setDimensions({ width, height });
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

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
  const pathD = buildRoundedRectPath(hs, hs, width - strokeWidth, height - strokeWidth, r);

  const PathsComponent = safari ? SnakePathsSafari : SnakePathsDefault;

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
          <PathsComponent
            pathD={pathD}
            geo={{ x: hs, y: hs, w: width - strokeWidth, h: height - strokeWidth, r }}
            strokeWidth={strokeWidth}
            duration={duration}
            delay={delay}
            drawn={drawn}
            erasing={erasing}
            eraseColor={eraseColor}
          />
        </svg>
      )}
    </div>
  );
}
