/* Agent: Claude — Metatron's Cube */

"use client";

import { EggplantImage } from "@/components/general/eggplant-image";
import {
  ALL_POINTS,
  INNER_R,
  PALETTES,
  SVG_VIEWBOX,
  SACRED_SYMBOLS,
  CONTAINMENT,
  COPY,
  buildStars,
  type ThemeT,
} from "./config";
import styles from "./metatrons-cube.module.css";

export function MetatronsCubeCore({ theme = "gold" }: { theme?: ThemeT }) {
  const p = PALETTES[theme];
  const stars = buildStars(p);

  const lines: [number, number, number, number][] = [];
  for (let i = 0; i < ALL_POINTS.length; i++) {
    for (let j = i + 1; j < ALL_POINTS.length; j++) {
      lines.push([ALL_POINTS[i][0], ALL_POINTS[i][1], ALL_POINTS[j][0], ALL_POINTS[j][1]]);
    }
  }

  return (
    <div
      id={`hero-metatrons-cube-${theme}`}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Star field */}
      {/* {stars.map((s, i) => (
        <div
          key={`s-${i}`}
          className="pointer-events-none absolute rounded-full"
          style={{ left: s.x, top: s.y, width: s.size, height: s.size, backgroundColor: s.color, opacity: s.opacity }}
        />
      ))} */}

      {/* Sacred geometry SVG */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox={SVG_VIEWBOX}
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Connecting lines between all 13 centers */}
        {lines.map(([x1, y1, x2, y2], i) => (
          <line
            key={`l-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={p.strokes[i % 3]}
            strokeWidth="0.5"
            opacity={0.08 + (i % 3) * 0.04}
          />
        ))}
        {/* 13 circles */}
        {ALL_POINTS.map(([cx, cy], i) => (
          <circle
            key={`c-${i}`}
            cx={cx}
            cy={cy}
            r={i === 0 ? INNER_R : INNER_R * 0.65}
            fill="none"
            stroke={p.strokes[i % 3]}
            strokeWidth={i === 0 ? 0.8 : 0.5}
            opacity={i === 0 ? 0.2 : 0.12}
          />
        ))}
        {/* Outer containment circle */}
        <circle
          cx={CONTAINMENT.cx}
          cy={CONTAINMENT.cy}
          r={CONTAINMENT.r}
          fill="none"
          stroke={p.strokes[0]}
          strokeWidth="0.3"
          opacity="0.06"
          strokeDasharray={CONTAINMENT.dasharray}
        />
        {/* Scattered sacred symbols */}
        <polygon
          points={SACRED_SYMBOLS.triangleTop.points}
          fill="none"
          stroke={p.strokes[2]}
          strokeWidth="0.4"
          opacity="0.1"
        />
        <polygon
          points={SACRED_SYMBOLS.triangleBottom.points}
          fill="none"
          stroke={p.strokes[1]}
          strokeWidth="0.4"
          opacity="0.08"
        />
        <rect
          x={SACRED_SYMBOLS.diamondLeft.x}
          y={SACRED_SYMBOLS.diamondLeft.y}
          width={SACRED_SYMBOLS.diamondLeft.width}
          height={SACRED_SYMBOLS.diamondLeft.height}
          fill="none"
          stroke={p.strokes[0]}
          strokeWidth="0.4"
          opacity="0.08"
          transform={SACRED_SYMBOLS.diamondLeft.transform}
        />
        <rect
          x={SACRED_SYMBOLS.diamondRight.x}
          y={SACRED_SYMBOLS.diamondRight.y}
          width={SACRED_SYMBOLS.diamondRight.width}
          height={SACRED_SYMBOLS.diamondRight.height}
          fill="none"
          stroke={p.strokes[2]}
          strokeWidth="0.4"
          opacity="0.08"
          transform={SACRED_SYMBOLS.diamondRight.transform}
        />

        {/* Defs — vertex radial gradients */}
        <defs>
          {ALL_POINTS.slice(1).map(([cx, cy], i) => (
            <radialGradient key={`bg-${i}`} id={`burstGlow-${i}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f0c040" stopOpacity="0.35" />
              <stop offset="25%" stopColor="#daa520" stopOpacity="0.15" />
              <stop offset="70%" stopColor="#daa520" stopOpacity="0" />
            </radialGradient>
          ))}
        </defs>

        {/* Central star — tiny core with many even hair-thin rays */}
        <g>
          <circle cx={600} cy={400} r={1.5} fill={p.strokes[2]} opacity="0.9" />
          {Array.from({ length: 16 }, (_, i) => {
            const angle = (i * 22.5 * Math.PI) / 180;
            return (
              <line
                key={`star-${i}`}
                x1={600 + Math.cos(angle) * 2}
                y1={400 + Math.sin(angle) * 2}
                x2={600 + Math.cos(angle) * 5}
                y2={400 + Math.sin(angle) * 5}
                stroke={p.strokes[2]}
                strokeWidth={0.15}
                opacity={0.35}
              />
            );
          })}
        </g>
        {ALL_POINTS.slice(1).map(([cx, cy], i) => (
          <circle
            key={`burst-${i}`}
            cx={cx}
            cy={cy}
            r={40}
            fill={`url(#burstGlow-${i})`}
            className={styles.burstDot}
            style={{ animationDelay: `${i * 3.5}s` }}
          />
        ))}
      </svg>

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ backgroundImage: p.glow }}
      />

      {/* Central pulsing glow */}
      <div
        className={`pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ${styles.centerPulse}`}
        style={{
          width: "6rem",
          height: "6rem",
          background: `radial-gradient(circle, ${p.strokes[0]}40 0%, ${p.strokes[1]}15 35%, transparent 70%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="mb-3 font-mono text-xs tracking-widest uppercase" style={{ color: p.subtitle }}>
          {COPY.subtitle}
        </p>

        <EggplantImage filter={p.eggplantFilter} sizeClass="h-48 w-48 mb-8" float glowPreset="gold" />

        <h1 className="text-48 md:text-72 pt-1 font-mono leading-none tracking-tight uppercase">
          <span className="block" style={{ color: p.titlePrimary }}>
            Metatron&apos;s
          </span>
          <span className="block" style={{ color: p.titleSecondary }}>
            Cube
          </span>
        </h1>

        <p className="mt-6 max-w-md font-mono text-sm" style={{ color: p.caption }}>
          {COPY.description}
        </p>
      </div>
    </div>
  );
}

/* ── Named exports for each theme ── */

export function HeroMetatronsCube() {
  return <MetatronsCubeCore theme="gold" />;
}

export function HeroMetatronsCubeRaw() {
  return <MetatronsCubeCore theme="raw" />;
}

export function HeroMetatronsCubeSilver() {
  return <MetatronsCubeCore theme="silver" />;
}

export function HeroMetatronsCubeMono() {
  return <MetatronsCubeCore theme="mono" />;
}
