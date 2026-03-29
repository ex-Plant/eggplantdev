import { ORBIT_DURATION_S, ID } from "./config";

export function GlamOrbitingDot({ path }: { path: string }) {
  return (
    <g>
      <circle r="10" fill={`url(#${ID.orbitDot})`} opacity="0.9">
        <animateMotion dur={`${ORBIT_DURATION_S}s`} repeatCount="indefinite" path={path} rotate="auto" />
        <animate
          attributeName="r"
          values="8;12;9;11;8"
          keyTimes="0;0.25;0.5;0.75;1"
          dur="6s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  );
}
