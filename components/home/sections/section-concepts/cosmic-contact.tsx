/* Agent: Claude — Cosmic Contact */
import { cn } from "@/helpers/cn";

type PropsT = { className?: string; colorful?: boolean };

const CONTACT_LINKS_COLORFUL = [
  { label: "Email", href: "mailto:hello@example.com", color: "border-[#daa520]/20 text-[#daa520]/50" },
  { label: "LinkedIn", href: "#", color: "border-[#10ffaa]/20 text-[#10ffaa]/40" },
  { label: "GitHub", href: "#", color: "border-[#d946ef]/20 text-[#d946ef]/40" },
] as const;

const CONTACT_LINKS_STANDARD = [
  { label: "Email", href: "mailto:hello@example.com", color: "border-white/10 text-lightgray" },
  { label: "LinkedIn", href: "#", color: "border-white/10 text-lightgray" },
  { label: "GitHub", href: "#", color: "border-white/10 text-lightgray" },
] as const;

function SignalRings() {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
      {[180, 300, 440].map((r) => (
        <circle key={r} cx="50%" cy="50%" r={r} fill="none" stroke="#10ffaa" strokeWidth="1" opacity="0.06" />
      ))}
    </svg>
  );
}

export function CosmicContact({ className, colorful = false }: PropsT) {
  const links = colorful ? CONTACT_LINKS_COLORFUL : CONTACT_LINKS_STANDARD;

  return (
    <section
      className={cn(
        "relative overflow-hidden py-24 md:py-40",
        colorful ? "bg-[#080610]" : "bg-transparent",
        className,
      )}
    >
      {colorful && <SignalRings />}

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <p
          className={cn(
            "font-mono text-sm uppercase tracking-[0.4em]",
            colorful ? "text-[#10ffaa]/30" : "text-lightgray",
          )}
        >
          Open transmission
        </p>

        <h2
          className={cn(
            "mt-6 font-mono text-48 uppercase leading-none md:text-72",
            colorful ? "text-[#f5f0e6]" : "text-white",
          )}
        >
          Get In
          <br />
          Touch
        </h2>

        <p
          className={cn(
            "mx-auto mt-6 max-w-lg text-16 md:text-20",
            colorful ? "text-[#c8b080]/50" : "text-lightgray",
          )}
        >
          Currently open to selected freelance collaborations and agency partnerships. Based in
          Kraków/Warsaw, working remotely across Europe.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {links.map(({ label, href, color }) => (
            <a
              key={label}
              href={href}
              className={cn("rounded-full border px-6 py-3 font-mono text-sm uppercase", color)}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
