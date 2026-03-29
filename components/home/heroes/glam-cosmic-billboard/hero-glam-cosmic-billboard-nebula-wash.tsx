export function GlamBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,white_10vh,white_calc(100%-10vh),transparent_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(from_var(--color-gold)_l_c_h/0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,oklch(from_var(--color-hot-pink)_l_c_h/0.06),transparent_60%)]" />
    </div>
  );
}
