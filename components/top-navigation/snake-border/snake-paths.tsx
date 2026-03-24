import { useRef, useEffect } from "react";

type SnakePathsPropsT = {
  pathD: string;
  strokeWidth: number;
  duration: number;
  delay: number;
  drawn: boolean;
  erasing: boolean;
  drawHidden: number;
  eraseHidden: number;
};

export function SnakePaths({
  pathD,
  strokeWidth,
  duration,
  delay,
  drawn,
  erasing,
  drawHidden,
  eraseHidden,
}: SnakePathsPropsT) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const el = pathRef.current;
    if (!el) return;

    if (drawn && !erasing) {
      // Draw in: snap to drawHidden with no transition, then animate to 0
      el.style.transition = "none";
      el.setAttribute("stroke-dashoffset", String(drawHidden));
      el.getBoundingClientRect();
      el.style.transition = `stroke-dashoffset ${duration}s ease ${delay}s`;
      el.setAttribute("stroke-dashoffset", "0");
    } else if (erasing) {
      // Erase: animate from current to eraseHidden
      el.style.transition = `stroke-dashoffset ${duration}s ease`;
      el.setAttribute("stroke-dashoffset", String(eraseHidden));
    }
  }, [drawn, erasing, drawHidden, eraseHidden, duration, delay]);

  return (
    <path
      ref={pathRef}
      d={pathD}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      pathLength={1}
      strokeDasharray={1}
      strokeDashoffset={drawHidden}
    />
  );
}
