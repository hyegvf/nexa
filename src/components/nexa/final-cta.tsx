"use client";

import { ArrowRight } from "lucide-react";
import { LINKS } from "@/lib/nexa";
import { MaskWords, Reveal } from "./reveal";
import { useScrollTo } from "./smooth-scroll";

/**
 * READY FOR WHAT'S NEXT? — dramatic violet-glow finale.
 */
export function FinalCTA() {
  const scrollTo = useScrollTo();

  return (
    <section
      aria-label="Ready for what's next"
      className="relative overflow-hidden py-28 sm:py-40 lg:py-48"
    >
      {/* glow stage */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[70vmin] w-[110vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-nexa-violet/22 blur-[150px]" />
        <div className="absolute left-1/2 top-1/2 h-[36vmin] w-[52vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-nexa-violet-2/25 blur-[90px]" />
        <div className="nx-grid-bg absolute inset-0 opacity-50" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-nexa-violet-2/40 to-transparent" />
      </div>

      <div className="nx-container relative flex flex-col items-center text-center">
        <h2 className="text-[clamp(2.8rem,8.5vw,8rem)] font-extrabold leading-[0.98] tracking-[-0.035em]">
          <MaskWords text="READY FOR" />
          <br />
          <MaskWords
            text="WHAT'S NEXT?"
            delay={170}
            wordClassName="bg-gradient-to-r from-nexa-violet-2 via-nexa-lav to-nexa-violet-2 bg-clip-text text-transparent"
          />
        </h2>

        <Reveal delay={260}>
          <p className="mt-7 max-w-md text-base leading-relaxed text-white/55 sm:text-lg">
            Explore Nexa. Follow the journey.
          </p>
        </Reveal>

        <Reveal delay={380}>
          <div className="mt-11 flex flex-col items-center gap-3.5 sm:flex-row">
            <button
              onClick={() => scrollTo("intelligence")}
              className="group inline-flex h-13 min-h-12 items-center justify-center gap-2.5 rounded-full bg-nexa-mist px-8 py-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-black transition-all duration-300 hover:bg-white hover:shadow-[0_0_44px_rgba(139,49,255,0.55)]"
            >
              Explore Nexa
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a
              href={LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-13 min-h-12 items-center justify-center gap-2.5 rounded-full border border-white/25 px-8 py-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-nexa-violet-2 hover:bg-nexa-violet/15"
            >
              Join Telegram
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
