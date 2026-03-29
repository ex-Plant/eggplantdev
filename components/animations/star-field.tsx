/* Shared star field — scattered dots positioned via inline styles from config data */

type StarT = {
  readonly x: string;
  readonly y: string;
  readonly size: number;
  readonly opacity: number;
  readonly color: string;
};

export function StarField({ stars }: { stars: readonly StarT[] }) {
  return (
    <>
      {stars.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            backgroundColor: s.color,
            opacity: s.opacity,
          }}
        />
      ))}
    </>
  );
}
