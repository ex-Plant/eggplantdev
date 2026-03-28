/* Agent: Claude — Sacred Manifesto */
import { cn } from '@/helpers/cn';

type PropsT = { className?: string; colorful?: boolean };

const EYEBROW = 'How I Work';
const STATEMENT =
  'I work best with founders and product teams that need someone who moves between product thinking and implementation without dropping either.';
const PARAGRAPHS = [
  'My default mode is clarity. Define scope early, surface tradeoffs before they become problems, ship in small defensible increments.',
  'If you need a frontend or full-stack partner who can own delivery and keep accessibility in scope from day one — let\u2019s talk.',
] as const;

function SacredGeometrySvg() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 m-auto h-[28rem] w-[28rem] opacity-100"
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="200" cy="200" r="140" stroke="#daa520" strokeOpacity="0.08" />
      <circle cx="200" cy="200" r="180" stroke="#daa520" strokeOpacity="0.05" />
      <line x1="200" y1="10" x2="200" y2="50" stroke="#daa520" strokeOpacity="0.1" />
      <line x1="200" y1="350" x2="200" y2="390" stroke="#daa520" strokeOpacity="0.1" />
      <line x1="10" y1="200" x2="50" y2="200" stroke="#daa520" strokeOpacity="0.1" />
      <line x1="350" y1="200" x2="390" y2="200" stroke="#daa520" strokeOpacity="0.1" />
    </svg>
  );
}

export function SacredManifesto({ className, colorful = false }: PropsT) {
  return (
    <section className={cn(
      'relative py-24 md:py-40',
      colorful ? 'bg-[#080610]' : 'bg-transparent',
      className,
    )}>
      {colorful && <SacredGeometrySvg />}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <p className={cn(
          'font-mono text-sm uppercase tracking-[0.4em]',
          colorful ? 'text-[#daa520]/30' : 'text-lightgray',
        )}>
          {EYEBROW}
        </p>
        <h2 className={cn(
          'mt-8 font-mono text-24 uppercase leading-tight md:text-40',
          colorful ? 'text-[#f5e6c0]' : 'text-white',
        )}>
          {STATEMENT}
        </h2>
        <div className="mt-10 space-y-4">
          {PARAGRAPHS.map((p) => (
            <p key={p.slice(0, 20)} className={cn(
              'font-mono text-16 md:text-20',
              colorful ? 'text-[#c8b080]/50' : 'text-lightgray',
            )}>
              {p}
            </p>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <button className={cn(
            'rounded-full border px-5 py-2 font-mono text-sm uppercase',
            colorful ? 'border-[#daa520]/20 text-[#daa520]/40' : 'border-white/10 text-white',
          )}>
            See Commercial Work
          </button>
          <button className={cn(
            'rounded-full border px-5 py-2 font-mono text-sm uppercase',
            colorful ? 'border-[#ffd700]/20 text-[#ffd700]/40' : 'border-white/10 text-white',
          )}>
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
