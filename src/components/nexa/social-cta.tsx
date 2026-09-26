"use client";

import { ArrowUpRight, Send, Youtube } from "lucide-react";
import { LINKS } from "@/lib/nexa";
import { MaskWords, Reveal } from "./reveal";

const ROWS = [
  {
    label: "TELEGRAM",
    handle: "@Pixel_Ping",
    href: LINKS.telegram,
    aria: "Join the Nexa Telegram channel",
    icon: <Send className="h-6 w-6" />,
  },
  {
    label: "YOUTUBE",
    handle: "ShadowDrop-024",
    href: LINKS.youtube,
    aria: "Watch the Nexa YouTube channel",
    icon: <Youtube className="h-6 w-6" />,
  },
];

/**
 * STAY CONNECTED — full-width editorial social navigation.
 * Giant rows behave like index entries, not buttons.
 */
export function SocialCTA() {
  return (
    <section
      aria-label="Stay connected"
      className="relative overflow-hidden border-y border-white/[0.06] bg-[#0b0318] py-24 sm:py-32"
    >
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute left-1/2 top-[-20%] h-[46vmin] w-[70vmin] -translate-x-1/2 rounded-full bg-nexa-violet/16 blur-[130px]" />
        <div className="nx-grid-bg absolute inset-0 opacity-40" />
      </div>

      <div className="nx-container relative">
        <div className="mb-14 text-center sm:mb-20">
          <Reveal>
            <p className="nx-micro mb-6 text-nexa-lav/70">
              THE ECOSYSTEM GROWS IN PUBLIC
            </p>
          </Reveal>
          <h2 className="text-[clamp(3rem,9vw,8.5rem)] font-extrabold leading-[0.96] tracking-[-0.035em]">
            <MaskWords text="STAY" />
            <br />
            <MaskWords
              text="CONNECTED."
              delay={160}
              wordClassName="bg-gradient-to-r from-nexa-violet-2 via-nexa-lav to-nexa-violet-2 bg-clip-text text-transparent"
            />
          </h2>
          <Reveal delay={280}>
            <p className="mx-auto mt-7 max-w-md text-base leading-relaxed text-white/50">
              Follow Nexa as the ecosystem grows.
            </p>
          </Reveal>
        </div>

        <div>
          {ROWS.map((r, i) => (
            <Reveal key={r.label} delay={i * 140}>
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={r.aria}
                className={`group relative flex items-center justify-between gap-6 border-t border-white/[0.08] py-10 transition-colors duration-500 hover:bg-white/[0.02] sm:py-14 ${
                  i === ROWS.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="flex items-center gap-5 sm:gap-8">
                  <span className="hidden h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-nexa-lav transition-all duration-500 group-hover:border-nexa-violet-2/50 group-hover:text-white sm:flex">
                    {r.icon}
                  </span>
                  <div>
                    <span className="block text-[clamp(2.4rem,7vw,6.5rem)] font-extrabold uppercase leading-none tracking-tight text-nexa-mist transition-all duration-500 group-hover:translate-x-3 group-hover:text-white">
                      {r.label}
                    </span>
                    <span className="nx-micro mt-3 block text-white/35 transition-colors duration-500 group-hover:text-nexa-lav/80">
                      {r.handle}
                    </span>
                  </div>
                </div>

                <span
                  aria-hidden="true"
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:border-nexa-violet-2 group-hover:bg-nexa-violet/25 group-hover:text-white sm:h-20 sm:w-20"
                >
                  <ArrowUpRight className="h-7 w-7 sm:h-9 sm:w-9" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
