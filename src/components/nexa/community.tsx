"use client";

import { ArrowUpRight, Send, Youtube } from "lucide-react";
import { LINKS } from "@/lib/nexa";
import { MaskWords, Reveal } from "./reveal";

const CARDS = [
  {
    key: "telegram",
    icon: <Send className="h-5 w-5" />,
    name: "TELEGRAM",
    handle: "@Pixel_Ping",
    desc: "Daily updates, tools, discoveries and Nexa news.",
    cta: "JOIN TELEGRAM",
    href: LINKS.telegram,
    aria: "Join the Nexa Telegram channel",
  },
  {
    key: "youtube",
    icon: <Youtube className="h-5 w-5" />,
    name: "YOUTUBE",
    handle: "ShadowDrop-024",
    desc: "Tutorials, experiments, AI workflows and deep dives.",
    cta: "WATCH ON YOUTUBE",
    href: LINKS.youtube,
    aria: "Watch the Nexa YouTube channel",
  },
];

/**
 * FOLLOW THE BUILD — Telegram & YouTube community cards.
 * Real links only. No invented statistics.
 */
export function Community() {
  return (
    <section
      id="community"
      aria-label="Follow the build"
      className="relative overflow-x-clip py-24 sm:py-36 lg:py-44"
    >
      <div
        aria-hidden="true"
        className="absolute right-[-8%] top-[20%] h-[38vmin] w-[38vmin] rounded-full bg-nexa-violet/12 blur-[120px]"
      />

      <div className="nx-container">
        <div className="mb-14 sm:mb-20">
          <Reveal>
            <p className="nx-micro mb-6 flex items-center gap-3 text-nexa-lav/70">
              <span className="h-px w-8 bg-nexa-violet-2/60" />
              FOLLOW THE BUILD
            </p>
          </Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="text-[clamp(2.3rem,6.5vw,6rem)] font-extrabold leading-[1.0] tracking-[-0.03em]">
              <MaskWords text="FOLLOW THE" />
              <br />
              <MaskWords
                text="BUILD."
                delay={150}
                wordClassName="bg-gradient-to-r from-nexa-lav to-nexa-violet-2 bg-clip-text text-transparent"
              />
            </h2>
            <Reveal delay={250}>
              <p className="max-w-sm text-base leading-relaxed text-white/50">
                New AI tools, experiments, tutorials and discoveries.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {CARDS.map((c, i) => (
            <Reveal key={c.key} delay={i * 140} className="h-full">
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={c.aria}
                className="group relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.08] bg-nexa-panel p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-nexa-violet-2/40 hover:shadow-[0_20px_70px_-20px_rgba(106,13,242,0.5)] sm:p-10"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-nexa-violet/0 blur-[70px] transition-all duration-700 group-hover:bg-nexa-violet/25"
                />

                <div className="relative flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-nexa-lav transition-colors duration-500 group-hover:border-nexa-violet-2/50 group-hover:text-white">
                    {c.icon}
                  </span>
                  <ArrowUpRight className="h-6 w-6 text-white/25 transition-all duration-400 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-nexa-violet-2" />
                </div>

                <div className="relative mt-14">
                  <p className="nx-micro text-white/40">{c.handle}</p>
                  <h3 className="mt-2 text-3xl font-extrabold uppercase tracking-tight text-nexa-mist sm:text-4xl">
                    {c.name}
                  </h3>
                  <p className="mt-3 max-w-[34ch] text-sm leading-relaxed text-white/50 sm:text-[15px]">
                    {c.desc}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] text-white/85 transition-colors duration-300 group-hover:text-nexa-lav">
                    {c.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
