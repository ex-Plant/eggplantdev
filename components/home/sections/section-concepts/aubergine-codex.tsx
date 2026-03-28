/* Agent: Claude — Aubergine Codex */
import { cn } from '@/helpers/cn';

type PropsT = { className?: string; colorful?: boolean };

const NOTES = [
  { title: 'Speed Is Felt', text: 'Interfaces are judged before they are understood. Perceived responsiveness is part of the design.' },
  { title: 'Clarity Wins', text: 'If a feature needs a paragraph to justify itself, the UI needs another pass.' },
  { title: 'Real Users Break Nice Systems', text: 'The structure proves itself when content is messy and people use the product in ways nobody planned.' },
  { title: 'Leave Room', text: 'Good systems are specific enough to guide work and loose enough to survive iteration.' },
  { title: 'Polish Matters', text: 'Spacing, motion, and copy tone decide whether a product feels considered or generic.' },
] as const;

function CornerBrackets() {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
      {/* top-left */}
      <path d="M24 8 H8 V24" stroke="#daa520" strokeOpacity="0.12" fill="none" />
      {/* top-right */}
      <path d="M100% 8" stroke="none" fill="none" />
      <path d="M-24 8 H-8 V24" stroke="#daa520" strokeOpacity="0.12" fill="none" transform="translate(100%,0) scale(-1,1)" />
      {/* bottom-left */}
      <path d="M24 -8 H8 V-24" stroke="#daa520" strokeOpacity="0.12" fill="none" transform="translate(0,100%) scale(1,-1)" />
      {/* bottom-right */}
      <path d="M24 8 H8 V24" stroke="#daa520" strokeOpacity="0.12" fill="none" transform="translate(100%,100%) scale(-1,-1)" />
      {/* ruled lines */}
      <line x1="8" y1="30%" x2="100%" y2="30%" stroke="#daa520" strokeOpacity="0.06" />
      <line x1="0" y1="88%" x2="100%" y2="88%" stroke="#daa520" strokeOpacity="0.06" />
    </svg>
  );
}

export function AubergineCodex({ className, colorful = false }: PropsT) {
  return (
    <section className={cn('relative py-20 md:py-32', colorful ? 'bg-[#0a0806]' : 'bg-transparent', className)}>
      {colorful && <CornerBrackets />}
      <div className="fest-container relative z-10">
        <h2
          className={cn(
            'font-mono text-40 uppercase leading-none md:text-64',
            colorful ? 'text-[#f5e6c0]' : 'text-white',
          )}
        >
          Field<br />Notes
        </h2>
        <p
          className={cn(
            'mt-6 text-16 md:text-20',
            colorful ? 'text-[#c8b080]/50' : 'text-lightgray',
          )}
        >
          A few things I keep coming back to when building products.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {NOTES.map((note, i) => (
            <div
              key={note.title}
              className={cn(
                'relative rounded-lg border p-6',
                colorful
                  ? 'border-[#daa520]/12 bg-[#daa520]/[0.015]'
                  : 'border-white/10 bg-white/[0.02]',
                i === 0 && 'lg:col-span-2',
              )}
            >
              <span
                className={cn(
                  'font-mono text-sm',
                  colorful ? 'text-[#daa520]/40' : 'text-lightgray',
                )}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3
                className={cn(
                  'mt-1 font-mono text-18 uppercase',
                  colorful ? 'text-[#f5e6c0]' : 'text-white',
                )}
              >
                {note.title}
              </h3>
              <p
                className={cn(
                  'mt-3 text-14',
                  colorful ? 'text-[#c8b080]/45' : 'text-lightgray',
                )}
              >
                {note.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <button
            className={cn(
              'rounded-full border px-5 py-2 font-mono text-sm uppercase',
              colorful
                ? 'border-[#daa520]/25 text-[#daa520]/60'
                : 'border-white/10 text-lightgray',
            )}
          >
            About Me
          </button>
          <button
            className={cn(
              'rounded-full border px-5 py-2 font-mono text-sm uppercase',
              colorful
                ? 'border-[#ffd700]/20 text-[#ffd700]/50'
                : 'border-white/10 text-lightgray',
            )}
          >
            What I Value
          </button>
        </div>
      </div>
    </section>
  );
}
