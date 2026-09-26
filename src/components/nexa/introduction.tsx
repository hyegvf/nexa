"use client";

import { MaskWords, Reveal } from "./reveal";

/**
 * 01 — WHAT IS NEXA
 * Two-column editorial block: giant index number left, huge type right.
 */
export function Introduction() {
  return (
    <section
      id="intelligence"
      aria-label="What is Nexa"
      className="relative overflow-x-clip py-24 sm:py-36 lg:py-44"
    >
      <div
        aria-hidden="true"
        className="absolute left-[-10%] top-[10%] h-[40vmin] w-[40vmin] rounded-full bg-nexa-violet/12 blur-[120px]"
      />

      <div className="nx-container grid gap-10 lg:grid-cols-12 lg:gap-8">
        {/* left — index */}
        <div className="lg:col-span-3">
          <Reveal>
            <p className="nx-micro mb-6 flex items-center gap-3 text-nexa-lav/70">
              <span className="h-px w-8 bg-nexa-violet-2/60" />
              01 — WHAT IS NEXA
            </p>
          </Reveal>
          <Reveal delay={120}>
            <span
              aria-hidden="true"
              className="nx-ghost-text block select-none text-[clamp(4.5rem,10vw,9rem)] font-extrabold leading-none tracking-tighter"
            >
              01
            </span>
          </Reveal>
        </div>

        {/* right — statement */}
        <div className="lg:col-span-9 lg:pl-6">
          <h2 className="text-[clamp(2.3rem,6.5vw,6rem)] font-extrabold leading-[1.0] tracking-[-0.03em] text-nexa-mist">
            <MaskWords text="WE BUILD" stagger={90} />
            <br />
            <MaskWords
              text="INTELLIGENCE."
              stagger={90}
              delay={140}
              wordClassName="bg-gradient-to-r from-nexa-lav to-nexa-violet-2 bg-clip-text text-transparent"
            />
          </h2>

          <div className="mt-9 grid gap-8 md:grid-cols-2 md:gap-12">
            <Reveal delay={150}>
              <p className="max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
                Nexa brings artificial intelligence, creative tools, automation,
                and modern technology together in one evolving ecosystem.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <ul className="flex flex-wrap items-start gap-2.5 md:justify-end">
                {["INTELLIGENCE", "CREATIVITY", "AUTOMATION", "POSSIBILITY"].map(
                  (t) => (
                    <li
                      key={t}
                      className="nx-micro rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-white/60"
                    >
                      {t}
                    </li>
                  )
                )}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
