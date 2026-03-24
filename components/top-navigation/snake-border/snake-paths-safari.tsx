import type { SnakePathsPropsT } from "./snake-border";

/**
 * Safari reverses stroke-dashoffset CSS transition direction.
 * This component compensates by flipping the offset signs.
 * Edit freely — changes here cannot affect Chrome/Firefox.
 */
export function SnakePathsSafari({
  pathD,
  strokeWidth,
  duration,
  delay,
  drawn,
  erasing,
  eraseColor,
}: SnakePathsPropsT) {
  return (
    <>
      {/* Visible border — draws in, stays fully drawn during erase */}
      <path
        d={pathD}
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
          d={pathD}
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
