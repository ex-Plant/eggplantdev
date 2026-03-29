import { HeroConcept } from "./shared";

const ROSETTE_PETALS = Array.from({ length: 10 }, (_, i) => {
  const angle = (Math.PI * 2 * i) / 10 - Math.PI / 2;
  return {
    x: Number((500 + 180 * Math.cos(angle)).toFixed(2)),
    y: Number((360 + 180 * Math.sin(angle)).toFixed(2)),
  };
});

export function CodexRosetteEngine() {
  return (
    <HeroConcept
      eyebrow="Concept / 34 / Agent: Codex"
      title={["Rosette", "Engine"]}
      text="This one treats sacred geometry like a machine diagram: a stained-glass rosette on the outside, a calibrated engine core in the middle, and tiny observatory annotations around it."
      className="bg-[radial-gradient(circle_at_24%_18%,rgba(245,230,192,0.12),transparent_16%),radial-gradient(circle_at_80%_16%,rgba(218,165,32,0.18),transparent_16%),radial-gradient(circle_at_64%_78%,rgba(240,192,64,0.18),transparent_22%),#0a0808]"
    >
      <div className="col-span-full mt-12 min-h-[35rem] overflow-hidden rounded-[2rem] border border-[#f5e6c0]/10 bg-[linear-gradient(180deg,rgba(17,12,10,0.95),rgba(10,8,7,0.98))] xl:col-span-10 xl:col-start-7 xl:mt-0">
        <div className="relative grid min-h-[35rem] place-items-center overflow-hidden px-6 py-10">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1000 760"
            preserveAspectRatio="none"
          >
            <circle cx="500" cy="360" r="226" fill="none" stroke="rgba(218,165,32,0.14)" strokeWidth="1.2" />
            <circle cx="500" cy="360" r="174" fill="none" stroke="rgba(245,230,192,0.16)" strokeWidth="1.1" />
            <circle cx="500" cy="360" r="118" fill="none" stroke="rgba(200,134,14,0.16)" strokeWidth="1.1" />
            {ROSETTE_PETALS.map((petal, i) => (
              <g key={i}>
                <circle
                  cx={petal.x}
                  cy={petal.y}
                  r="70"
                  fill="none"
                  stroke={i % 2 === 0 ? "rgba(218,165,32,0.16)" : "rgba(245,230,192,0.14)"}
                  strokeWidth="1"
                />
                <line x1="500" y1="360" x2={petal.x} y2={petal.y} stroke="rgba(200,176,128,0.12)" strokeWidth="0.8" />
              </g>
            ))}
            <path d="M182 94 H292 M182 94 V204" fill="none" stroke="rgba(245,230,192,0.1)" strokeWidth="1" />
            <path d="M818 94 H708 M818 94 V204" fill="none" stroke="rgba(245,230,192,0.1)" strokeWidth="1" />
            <path d="M182 666 H292 M182 666 V556" fill="none" stroke="rgba(245,230,192,0.1)" strokeWidth="1" />
            <path d="M818 666 H708 M818 666 V556" fill="none" stroke="rgba(245,230,192,0.1)" strokeWidth="1" />
            <polygon
              points="500,154 608,360 500,566 392,360"
              fill="none"
              stroke="rgba(240,192,64,0.13)"
              strokeWidth="1.2"
            />
          </svg>

          <div className="absolute top-1/2 left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,230,192,0.16),rgba(218,165,32,0.08)_40%,transparent_72%)]" />

          <div className="relative z-10 flex w-full max-w-[30rem] flex-col items-center gap-5 text-center">
            <p className="rounded-full border border-[#daa520]/18 px-4 py-2 font-mono text-[10px] tracking-[0.32em] text-[#c8b080] uppercase">
              Agent: Codex / Rose-window machine
            </p>
            <div className="relative">
              <div className="absolute inset-0 rounded-full border border-[#f5e6c0]/14" />
              <div className="absolute top-1/2 left-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#daa520]/20" />
              <img
                src="/logos/eggplant-logo-smooth.apng"
                alt="Rosette Engine centerpiece"
                className="hero-pulse relative h-40 w-40 object-contain sm:h-48 sm:w-48 md:h-56 md:w-56"
                style={{ filter: "sepia(0.24) saturate(1.28) brightness(1.02)" }}
              />
            </div>
            <div className="grid w-full gap-4 md:grid-cols-3">
              <div className="rounded-[1.3rem] border border-[#f5e6c0]/10 bg-[#130d0b]/72 px-4 py-4">
                <p className="font-mono text-[10px] tracking-[0.24em] text-[#daa520]/65 uppercase">Outer ring</p>
                <p className="pt-3 text-sm text-[#c8b080]">
                  Rosette petals keep the silhouette sacred even when the layout compresses.
                </p>
              </div>
              <div className="rounded-[1.3rem] border border-[#f5e6c0]/10 bg-[#130d0b]/72 px-4 py-4">
                <p className="font-mono text-[10px] tracking-[0.24em] text-[#daa520]/65 uppercase">Core idol</p>
                <p className="pt-3 text-sm text-[#c8b080]">
                  The eggplant stays isolated in the middle, like a calibrated ritual engine.
                </p>
              </div>
              <div className="rounded-[1.3rem] border border-[#f5e6c0]/10 bg-[#130d0b]/72 px-4 py-4">
                <p className="font-mono text-[10px] tracking-[0.24em] text-[#daa520]/65 uppercase">Mobile rule</p>
                <p className="pt-3 text-sm text-[#c8b080]">
                  Annotation cards wrap below instead of covering the center geometry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroConcept>
  );
}
