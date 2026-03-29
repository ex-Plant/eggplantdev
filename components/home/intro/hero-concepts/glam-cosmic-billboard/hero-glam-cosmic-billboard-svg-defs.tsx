import { HEX, ID } from "./config";


export function GlamSvgFiltersAndGradients() {
  return (
    <defs>
      <radialGradient id={ID.orbitDot} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={HEX.gold} stopOpacity="0.5" />
        <stop offset="40%" stopColor={HEX.gold} stopOpacity="0.15" />
        <stop offset="100%" stopColor={HEX.gold} stopOpacity="0" />
      </radialGradient>

      <radialGradient id={ID.stripeGold} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={HEX.gold} stopOpacity="0.45" />
        <stop offset="35%" stopColor={HEX.gold} stopOpacity="0.12" />
        <stop offset="100%" stopColor={HEX.gold} stopOpacity="0" />
      </radialGradient>

      <radialGradient id={ID.stripePink} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={HEX.hotPink} stopOpacity="0.4" />
        <stop offset="35%" stopColor={HEX.hotPink} stopOpacity="0.1" />
        <stop offset="100%" stopColor={HEX.hotPink} stopOpacity="0" />
      </radialGradient>
    </defs>
  );
}
