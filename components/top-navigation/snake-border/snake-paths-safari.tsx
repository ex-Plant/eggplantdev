import type { SnakePathsPropsT } from "./snake-border";

/**
 * Safari reverses stroke-dashoffset CSS transition direction.
 * We reverse the path direction (counterclockwise instead of clockwise)
 * so Safari's reversed animation produces the correct visual direction.
 * Edit freely — changes here cannot affect Chrome/Firefox.
 */

function buildReversedRectPath(x: number, y: number, w: number, h: number, r: number) {
  // Same rounded rect as the default, but drawn counterclockwise from top-right.
  // Arcs use sweep-flag=0 (counterclockwise) instead of 1.
  return [
    `M ${x + w} ${y + r}`,
    // Top-right corner ↰ (counterclockwise arc to top edge)
    `A ${r} ${r} 0 0 0 ${x + w - r} ${y}`,
    // Top side ←
    `L ${x + r} ${y}`,
    // Top-left corner ↰
    `A ${r} ${r} 0 0 0 ${x} ${y + r}`,
    // Left side ↓
    `L ${x} ${y + h - r}`,
    // Bottom-left corner ↰
    `A ${r} ${r} 0 0 0 ${x + r} ${y + h}`,
    // Bottom side →
    `L ${x + w - r} ${y + h}`,
    // Bottom-right corner ↰
    `A ${r} ${r} 0 0 0 ${x + w} ${y + h - r}`,
    // Right side ↑ (back to start)
    `L ${x + w} ${y + r}`,
    "Z",
  ].join(" ");
}

export function SnakePathsSafari({ geo, strokeWidth, duration, delay, drawn, erasing, eraseColor }: SnakePathsPropsT) {
  const reversedPath = buildReversedRectPath(geo.x, geo.y, geo.w, geo.h, geo.r);

  return (
    <>
      {/* Visible border — draws in */}
      <path
        d={reversedPath}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={drawn ? 0 : -1}
        style={{
          transition: `stroke-dashoffset ${duration}s ease ${drawn ? `${delay}s` : "0s"}`,
        }}
      />
      {/* Eraser — draws over with background color */}
      {eraseColor && (
        <path
          d={reversedPath}
          fill="none"
          stroke={eraseColor}
          strokeWidth={strokeWidth + 1}
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={erasing ? 0 : 1}
          style={{
            transition: `stroke-dashoffset ${duration}s ease`,
          }}
        />
      )}
    </>
  );
}
