"use client";

import { ArrowUpRight } from "lucide-react";
import { MaskWords, Reveal } from "./reveal";

const ITEMS = [
  {
    n: "01",
    title: "AI CHAT",
    desc: "Intelligent conversations, reasoning and creative assistance.",
  },
  {
    n: "02",
    title: "AI TOOLS",
    desc: "A growing ecosystem of AI-powered utilities.",
  },
  {
    n: "03",
    title: "AUTOMATION",
    desc: "Turn repetitive workflows into intelligent systems.",
  },
  {
    n: "04",
    title: "CREATIVE AI",
    desc: "Images, interfaces, content and ideas.",
  },
  {
    n: "05",
    title: "DEVELOPER AI",
    desc: "Code, architecture, debugging and experimentation.",
  },
  {
    n: "06",
    title: "AI AGENTS",
    desc: "Systems that can reason, plan and execute tasks.",
  },
];

/**
 * Capabilities — a 1px-gap editorial grid (not standard SaaS cards).
 * Huge ghost indices, violet glow on hover, arrow micro-motion.
 */
export function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-label="Nexa capabilities"
      className="relative overflow-x-clip py-24 sm:py-36 lg:py-44"
    >
      <div className="nx-container">
        <div className="mb-14 flex flex-col gap-6 sm:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal>
              <p className="nx-micro mb-6 flex items-center gap-3 text-nexa-lav/70">
                <span className="h-px w-8 bg-nexa-violet-2/60" />
                CAPABILITIES
              </p>
            </Reveal>
            <h2 className="text-[clamp(2.3rem,6.5vw,6rem)] font-extrabold leading-[1.0] tracking-[-0.03em]">
              <MaskWords text="BUILT FOR" />
              <br />
              <span className="nx-ghost-text">
                <MaskWords text="WHAT'S NEXT." delay={160} />
              </span>
            </h2>
          </div>
          <Reveal delay={250}>
            <p className="max-w-sm text-base leading-relaxed text-white/50">
              Six disciplines. One system. Every part of Nexa is designed to
              compound — tools feeding agents, agents feeding ideas.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.06] md:grid-cols-2 xl:grid-cols-3">
          {ITEMS.map((item, i) => (
            <Reveal key={item.n} delay={(i % 3) * 110} className="h-full">
              <article className="group relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden bg-nexa-panel p-7 transition-colors duration-500 hover:bg-nexa-raise sm:min-h-[320px] sm:p-9">
                {/* hover glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[130%] -translate-x-1/2 rounded-full bg-nexa-violet/0 blur-[70px] transition-all duration-700 group-hover:bg-nexa-violet/25"
                />

                <div className="relative flex items-start justify-between">
                  <span
                    aria-hidden="true"
                    className="nx-ghost-text text-6xl font-extrabold leading-none tracking-tighter transition-all duration-500 group-hover:[-webkit-text-stroke-color:rgba(189,169,255,0.65)] sm:text-7xl"
                  >
                    {item.n}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-5 w-5 text-white/25 transition-all duration-400 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-nexa-violet-2"
                  />
                </div>

                <div className="relative mt-16">
                  <h3 className="text-xl font-extrabold uppercase tracking-wide text-nexa-mist sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[30ch] text-sm leading-relaxed text-white/50 sm:text-[15px]">
                    {item.desc}
                  </p>
                </div>

                {/* bottom hairline that lights up */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-nexa-violet to-nexa-violet-2/0 transition-transform duration-700 ease-out group-hover:scale-x-100"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
