"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BrainCircuit,
  Eye,
  Layers,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { ReactNode } from "react";
import { MaskWords, Reveal } from "./reveal";

const PANELS: {
  icon: ReactNode;
  label: string;
  note: string;
  pos: string;
  dur: number;
  delay: number;
}[] = [
  {
    icon: <BrainCircuit className="h-4 w-4" />,
    label: "REASONING",
    note: "multi-step thought",
    pos: "left-[2%] top-[6%] sm:left-[6%] sm:top-[10%]",
    dur: 6.2,
    delay: 0,
  },
  {
    icon: <Sparkles className="h-4 w-4" />,
    label: "GENERATION",
    note: "ideas → output",
    pos: "right-[2%] top-[16%] sm:right-[7%] sm:top-[14%]",
    dur: 7.1,
    delay: 0.7,
  },
  {
    icon: <Layers className="h-4 w-4" />,
    label: "ANALYSIS",
    note: "patterns & signal",
    pos: "left-[4%] bottom-[16%] sm:left-[9%] sm:bottom-[18%]",
    dur: 6.8,
    delay: 1.3,
  },
  {
    icon: <Workflow className="h-4 w-4" />,
    label: "AUTOMATION",
    note: "flows that run",
    pos: "right-[4%] bottom-[8%] sm:right-[9%] sm:bottom-[12%]",
    dur: 7.6,
    delay: 0.4,
  },
  {
    icon: <Eye className="h-4 w-4" />,
    label: "VISION",
    note: "seeing structure",
    pos: "left-1/2 top-[-4%] -translate-x-1/2 sm:top-[2%]",
    dur: 8,
    delay: 1.8,
  },
];

/**
 * ONE PLACE. INFINITE POSSIBILITIES.
 * Deep violet field, rotating core rings, floating glass panels.
 * Visual representation only — no functional claims.
 */
export function Experience() {
  const reduced = useReducedMotion();

  return (
    <section
      id="ecosystem"
      aria-label="The Nexa ecosystem"
      className="relative overflow-hidden border-y border-white/[0.06] bg-[#0b0318] py-24 sm:py-36 lg:py-44"
    >
      {/* ambient field */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="nx-grid-bg absolute inset-0 opacity-50" />
        <div className="absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-nexa-violet/18 blur-[150px]" />
        <div className="absolute left-[8%] top-[8%] h-[30vmin] w-[30vmin] rounded-full bg-[#3b0a9e]/40 blur-[110px]" />
        <div className="absolute bottom-[6%] right-[10%] h-[26vmin] w-[26vmin] rounded-full bg-nexa-violet-2/15 blur-[100px]" />
      </div>

      <div className="nx-container relative">
        <div className="mb-16 text-center sm:mb-24">
          <Reveal>
            <p className="nx-micro mb-6 inline-flex items-center gap-3 text-nexa-lav/70">
              <span className="h-px w-8 bg-nexa-violet-2/60" />
              THE NEXA ECOSYSTEM
              <span className="h-px w-8 bg-nexa-violet-2/60" />
            </p>
          </Reveal>
          <h2 className="text-[clamp(2.3rem,6.5vw,6rem)] font-extrabold leading-[1.0] tracking-[-0.03em]">
            <MaskWords text="ONE PLACE." />
            <br />
            <MaskWords
              text="INFINITE"
              delay={140}
              wordClassName="bg-gradient-to-r from-nexa-violet-2 to-nexa-lav bg-clip-text text-transparent"
            />
            <br />
            <MaskWords text="POSSIBILITIES." delay={280} />
          </h2>
        </div>

        {/* stage */}
        <div className="relative mx-auto flex max-w-5xl items-center justify-center py-10 sm:py-16">
          {/* core rings */}
          <div
            className="relative aspect-square w-[72vw] max-w-[440px] sm:w-[46vw]"
            aria-hidden="true"
          >
            <div className="absolute inset-[8%] rounded-full border border-white/[0.07]" />
            <div className="nx-anim-spin-slow absolute inset-[8%] rounded-full border border-dashed border-nexa-violet-2/35" />
            <div className="nx-anim-spin-slower absolute inset-[20%] rounded-full border border-white/[0.09]" />
            <div className="nx-anim-spin-slow absolute inset-[20%] rounded-full border border-dashed border-white/15" />
            <div className="nx-anim-spin-slower absolute inset-[32%] rounded-full border border-nexa-violet-2/30" />

            {/* core */}
            <div className="absolute inset-[41%] rounded-full bg-gradient-to-br from-nexa-violet-2 to-nexa-violet shadow-[0_0_60px_rgba(139,49,255,0.75),0_0_140px_rgba(106,13,242,0.45)]" />
            <div className="absolute inset-[46.5%] rounded-full bg-white/80 blur-[2px]" />
          </div>

          {/* floating panels */}
          {PANELS.map((p) => (
            <motion.div
              key={p.label}
              className={`nx-glass absolute ${p.pos} flex items-center gap-3 rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5`}
              animate={
                reduced ? undefined : { y: [0, -10, 0] }
              }
              transition={{
                duration: p.dur,
                repeat: Infinity,
                ease: "easeInOut",
                delay: p.delay,
              }}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-nexa-violet/25 text-nexa-lav">
                {p.icon}
              </span>
              <span className="flex flex-col">
                <span className="nx-micro text-white/85">{p.label}</span>
                <span className="mt-0.5 text-[10px] tracking-wide text-white/35">
                  {p.note}
                </span>
              </span>
            </motion.div>
          ))}
        </div>

        <Reveal>
          <p className="nx-micro mt-4 text-center text-white/25">
            VISUAL REPRESENTATION OF THE NEXA ECOSYSTEM
          </p>
        </Reveal>
      </div>
    </section>
  );
}
