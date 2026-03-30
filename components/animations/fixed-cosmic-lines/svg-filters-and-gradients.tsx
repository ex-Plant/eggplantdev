import { STRIPE_ID } from "./config";

const ORBIT_DOT_ID = "gcb-orbit-dot";
const ORBIT_DOT_PINK_ID = "gcb-orbit-dot-pink";

export function SvgFiltersAndGradients() {
  return (
    <defs>
      <radialGradient id={ORBIT_DOT_ID} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="var(--color-gold)" stopOpacity="0.5" />
        <stop offset="40%" stopColor="var(--color-gold)" stopOpacity="0.15" />
        <stop offset="100%" stopColor="var(--color-gold)" stopOpacity="0" />
      </radialGradient>

      <radialGradient id={ORBIT_DOT_PINK_ID} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="var(--color-hot-pink)" stopOpacity="0.5" />
        <stop offset="40%" stopColor="var(--color-hot-pink)" stopOpacity="0.15" />
        <stop offset="100%" stopColor="var(--color-hot-pink)" stopOpacity="0" />
      </radialGradient>

      <radialGradient id={STRIPE_ID.stripeGold} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="var(--color-gold)" stopOpacity="0.65" />
        <stop offset="35%" stopColor="var(--color-gold)" stopOpacity="0.2" />
        <stop offset="100%" stopColor="var(--color-gold)" stopOpacity="0" />
      </radialGradient>

      <radialGradient id={STRIPE_ID.stripePink} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="var(--color-hot-pink)" stopOpacity="0.6" />
        <stop offset="35%" stopColor="var(--color-hot-pink)" stopOpacity="0.18" />
        <stop offset="100%" stopColor="var(--color-hot-pink)" stopOpacity="0" />
      </radialGradient>
    </defs>
  );
}
