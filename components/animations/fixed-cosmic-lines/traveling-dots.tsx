import { STRIPE_PULSE_COUNT as DEFAULT_PULSE_COUNT, STRIPE_DURATIONS as DEFAULT_DURATIONS, STRIPE_ID } from "./config";

type StripeLike = { y1: number; y2: number; tone: "pink" | "gold" };

export function TravelingDots({
  stripes,
  pulseCount = DEFAULT_PULSE_COUNT,
  durations = DEFAULT_DURATIONS as unknown as readonly number[],
}: {
  stripes: readonly StripeLike[];
  pulseCount?: number;
  durations?: readonly number[];
}) {
  return (
    <>
      {stripes.map((stripe, si) => {
        const gradientId = stripe.tone === "gold" ? STRIPE_ID.stripeGold : STRIPE_ID.stripePink;
        const linePath = `M 0 ${stripe.y1} L 1200 ${stripe.y2}`;

        return Array.from({ length: pulseCount }, (_, di) => {
          const dur = durations[si * pulseCount + di];
          /* Spread delays evenly across the cycle so dots don't cluster */
          const totalDots = stripes.length * pulseCount;
          const globalIndex = si * pulseCount + di;
          const delay = (globalIndex / totalDots) * dur;
          return (
            <circle key={`stripe-dot-${si}-${di}`} r="20" fill={`url(#${gradientId})`}>
              <animateMotion
                dur={`${dur}s`}
                repeatCount="indefinite"
                path={linePath}
                begin={`${delay}s`}
                keyPoints="0;1;1"
                keyTimes="0;0.65;1"
                calcMode="linear"
              />
              <animate
                attributeName="opacity"
                values="0;1;0.7;0.5;0.3;0;0"
                keyTimes="0;0.02;0.2;0.45;0.6;0.65;1"
                dur={`${dur}s`}
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="r"
                values="8;22;18;14;10;8;8"
                keyTimes="0;0.02;0.2;0.45;0.6;0.65;1"
                dur={`${dur}s`}
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
            </circle>
          );
        });
      })}
    </>
  );
}
