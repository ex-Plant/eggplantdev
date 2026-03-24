type SnakePathsPropsT = {
  pathD: string;
  strokeWidth: number;
  duration: number;
  delay: number;
  drawn: boolean;
  erasing: boolean;
  eraseColor?: string;
  /** Hidden offset for the draw path (1 for Chrome, -1 for Safari) */
  drawHidden: number;
  /** Hidden offset for the erase path (-1 for Chrome, 1 for Safari) */
  eraseHidden: number;
};

export function SnakePaths({
  pathD,
  strokeWidth,
  duration,
  delay,
  drawn,
  erasing,
  eraseColor,
  drawHidden,
  eraseHidden,
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
        strokeDashoffset={drawn ? 0 : drawHidden}
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
          strokeDashoffset={erasing ? 0 : eraseHidden}
          style={{
            transition: `stroke-dashoffset ${duration}s ease`,
          }}
        />
      )}
    </>
  );
}
