import { GLAM_STRIPES, STRIPE_PULSE_COUNT, STRIPE_DURATIONS, ID } from "./config";

export function GlamTravelingDots({ stripes }: { stripes: readonly (typeof GLAM_STRIPES)[number][] }) {
  return (
    <>
      {stripes.map((stripe, si) => {
        const gradientId = stripe.tone === "gold" ? ID.stripeGold : ID.stripePink;
        const linePath = `M 0 ${stripe.y1} L 1200 ${stripe.y2}`;

        return Array.from({ length: STRIPE_PULSE_COUNT }, (_, di) => {
          const dur = STRIPE_DURATIONS[si * STRIPE_PULSE_COUNT + di];
          const delay = di * 8 + si * 5;
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
