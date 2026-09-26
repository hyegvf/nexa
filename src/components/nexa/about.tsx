"use client";

import { NexaLogo } from "./logo";
import { MaskWords, Reveal } from "./reveal";

/**
 * 02 — ABOUT NEXA — concise editorial block with a large logo treatment.
 */
export function About() {
  return (
    <section
      id="about"
      aria-label="About Nexa"
      className="relative overflow-hidden border-t border-white/[0.06] py-24 sm:py-36 lg:py-44"
    >
      <div
        aria-hidden="true"
        className="absolute left-[-12%] top-[30%] h-[44vmin] w-[44vmin] rounded-full bg-nexa-violet/14 blur-[130px]"
      />

      <div className="nx-container grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        {/* text */}
        <div>
          <Reveal>
            <p className="nx-micro mb-6 flex items-center gap-3 text-nexa-lav/70">
              <span className="h-px w-8 bg-nexa-violet-2/60" />
              02 — ABOUT NEXA
            </p>
          </Reveal>

          <h2 className="text-[clamp(2.3rem,6.5vw,6rem)] font-extrabold leading-[1.0] tracking-[-0.03em]">
            <MaskWords text="BUILT AROUND" />
            <br />
            <MaskWords
              text="CURIOSITY."
              delay={150}
              wordClassName="bg-gradient-to-r from-nexa-lav to-nexa-violet-2 bg-clip-text text-transparent"
            />
          </h2>

          <Reveal delay={220}>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-white/55 sm:text-lg">
              Nexa is an evolving technology brand exploring what becomes
              possible when artificial intelligence meets creativity, software
              and experimentation.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex items-center gap-4">
              <span className="h-px flex-1 bg-white/[0.08]" />
              <span className="nx-micro text-white/30">EST. 2026</span>
            </div>
          </Reveal>
        </div>

        {/* visual — large logo treatment */}
        <Reveal delay={150}>
          <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[2.5rem] bg-nexa-violet/20 blur-[90px]"
            />
            <div
              aria-hidden="true"
              className="nx-anim-spin-slow absolute inset-[-6%] rounded-full border border-dashed border-white/[0.09]"
            />
            <div
              aria-hidden="true"
              className="nx-anim-spin-slower absolute inset-[4%] rounded-full border border-nexa-violet-2/20"
            />
            <NexaLogo
              className="relative w-full drop-shadow-[0_0_60px_rgba(106,13,242,0.55)]"
              rounded="rounded-[2rem]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
