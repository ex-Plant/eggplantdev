import { HeroConcept } from "./shared";

export function CodexPopRelicBillboard() {
  return (
    <HeroConcept
      eyebrow="Concept / 25"
      title={["Pop", "Relic Billboard"]}
      text="The trashy-pop branch. Less elegance, more loud holy advertisement: sticker colors, overblown glows, and a giant display-card treatment around the eggplant."
      className="bg-[radial-gradient(circle_at_14%_18%,rgba(251,113,133,0.24),transparent_18%),radial-gradient(circle_at_44%_14%,rgba(250,204,21,0.22),transparent_18%),radial-gradient(circle_at_82%_18%,rgba(249,115,22,0.22),transparent_18%),radial-gradient(circle_at_68%_76%,rgba(192,132,252,0.24),transparent_22%),#0b040b]"
    >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[33rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(27,10,18,0.92),rgba(10,8,12,0.96))] xl:mt-0">
          <div className="relative grid min-h-[33rem] gap-6 p-6 md:grid-cols-[1.08fr_0.92fr] md:p-8">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#fb7185]/18 bg-[linear-gradient(180deg,rgba(49,14,30,0.7),rgba(17,10,15,0.9))] p-6 shadow-[0_0_80px_rgba(251,113,133,0.08)]">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2.2rem_2.2rem] opacity-35" />
              <div className="absolute left-5 top-5 rounded-full border border-[#facc15]/30 bg-[#facc15]/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#facc15]/80">Hot relic</div>
              <div className="absolute right-5 top-5 rounded-full border border-[#c084fc]/30 bg-[#c084fc]/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#f5d0fe]/78">Must see</div>
              <div className="absolute inset-x-[8%] bottom-[10%] h-px bg-linear-to-r from-transparent via-white/14 to-transparent" />
              <div className="absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(251,113,133,0.18),rgba(250,204,21,0.16)_32%,rgba(192,132,252,0.12)_58%,transparent_72%)]" />
              <img src="/logos/eggplant-logo-smooth.apng" alt="Pop relic billboard centerpiece" className="hero-pulse absolute left-1/2 top-1/2 z-10 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rotate-[14deg] object-contain md:h-64 md:w-64" />
            </div>
            <div className="grid gap-4">
              <div className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(31,12,24,0.88),rgba(10,8,12,0.95))] p-6">
                <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/62">Category / sacred tabloid</p>
                <p className="pt-4 text-16 text-lightgray">This is intentionally a bit cheap in the best way. More poster, more flyer, more “holy product launch in a fake universe.”</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Gloss", "Everything should feel laminated, overlit, and slightly ridiculous."],
                  ["Tone", "Candy but not delicate. Loud, commercial, and weirdly devotional."],
                ].map(([label, copy]) => (
                  <div key={label} className="rounded-[1.45rem] border border-white/10 bg-black/20 p-5">
                    <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/58">{label}</p>
                    <p className="pt-4 text-16 text-lightgray/88">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </HeroConcept>
  );
}
