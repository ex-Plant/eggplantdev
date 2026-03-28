/* Agent: Claude — Void Process */
import { cn } from '@/helpers/cn';

type PropsT = { className?: string; colorful?: boolean };

const STEPS = [
  { num: '01', title: 'Scope', text: 'Define what we\u2019re building, why, and what success looks like. No ambiguity.' },
  { num: '02', title: 'Architect', text: 'Pick the right tools, plan the data model, surface tradeoffs early.' },
  { num: '03', title: 'Build', text: 'Ship in small increments. Accessibility and polish baked in, not bolted on.' },
  { num: '04', title: 'Deliver', text: 'Deploy, document, hand off. Leave the codebase better than I found it.' },
] as const;

export function VoidProcess({ className, colorful = false }: PropsT) {
  return (
    <section
      className={cn(
        'relative py-20 md:py-32',
        colorful ? 'bg-[#080610]' : 'bg-transparent',
        className,
      )}
      style={
        colorful
          ? {
              backgroundImage:
                'radial-gradient(ellipse at center, rgba(218,165,32,0.06) 0%, transparent 60%)',
            }
          : undefined
      }
    >
      <div className="fest-container">
        <h2 className="font-mono text-40 md:text-64 uppercase leading-none">
          <span className={cn(colorful ? 'text-[#daa520]' : 'text-white')}>How I</span>
          <br />
          <span className={cn(colorful ? 'text-[#ffd700]' : 'text-white')}>Work</span>
        </h2>

        {/* Connecting dashed line — desktop only */}
        <div className="relative mt-14 hidden xl:block">
          <div
            className={cn(
              'absolute top-0 left-[12.5%] right-[12.5%] border-t border-dashed',
              colorful ? 'border-[#daa520]/15' : 'border-white/10',
            )}
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:mt-8 xl:grid-cols-4">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className={cn(
                'relative rounded-xl border p-6',
                colorful
                  ? 'border-white/5 bg-white/[0.02]'
                  : 'border-white/10 bg-white/[0.02]',
              )}
            >
              <span
                className={cn(
                  'font-mono text-sm',
                  colorful ? 'text-[#ffd700]/40' : 'text-lightgray',
                )}
              >
                {step.num}
              </span>
              <h3
                className={cn(
                  'mt-2 font-mono text-18 uppercase',
                  colorful ? 'text-[#f5e6c0]' : 'text-white',
                )}
              >
                {step.title}
              </h3>
              <p
                className={cn(
                  'mt-3 text-14',
                  colorful ? 'text-[#c8b080]/45' : 'text-lightgray',
                )}
              >
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
