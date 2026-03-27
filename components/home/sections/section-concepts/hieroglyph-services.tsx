/* Agent: Claude — Hieroglyph Services */
import { cn } from '@/helpers/cn';

type PropsT = { className?: string; colorful?: boolean };

const SERVICES = [
  { title: 'Frontend Development', text: 'React, Next.js, TypeScript interfaces built for performance, accessibility, and maintainability.' },
  { title: 'Full-Stack Delivery', text: 'End-to-end project ownership. Architecture, API design, deployment, and handoff.' },
  { title: 'Legacy Modernization', text: 'Taking existing codebases from fragile to solid. Incremental migration, no big rewrites.' },
  { title: 'AI Integration', text: 'Building applications with LLM agents, AI-powered features, and intelligent interfaces.' },
] as const;

export function HieroglyphServices({ className, colorful = false }: PropsT) {
  return (
    <section className={cn('py-20 md:py-32', colorful ? 'bg-[#0a0806]' : 'bg-transparent', className)}>
      <div className="fest-container">
        <h2
          className={cn(
            'font-mono text-40 uppercase md:text-64',
            colorful ? 'text-[#f5e6c0]' : 'text-white',
          )}
        >
          What I
          <br />
          Offer
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className={cn(
                'relative rounded-2xl border p-8',
                colorful
                  ? 'border-[#daa520]/10 bg-[#daa520]/[0.01]'
                  : 'border-white/10 bg-white/[0.02]',
              )}
            >
              <span
                className={cn(
                  'pointer-events-none absolute right-6 top-4 select-none font-mono text-80',
                  colorful ? 'text-[#daa520]/8' : 'text-white/5',
                )}
              >
                {i + 1}
              </span>
              <h3
                className={cn(
                  'font-mono text-20 uppercase',
                  colorful ? 'text-[#ffd700]' : 'text-white',
                )}
              >
                {service.title}
              </h3>
              <p
                className={cn(
                  'mt-3 text-16',
                  colorful ? 'text-[#c8b080]/50' : 'text-lightgray',
                )}
              >
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
