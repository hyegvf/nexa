"use client";

import { ArrowUpRight, Send, Youtube } from "lucide-react";
import { BRAND, LINKS, MENU_LINKS } from "@/lib/nexa";
import { NexaLogo } from "./logo";
import { useScrollTo } from "./smooth-scroll";

/**
 * Premium dark footer. Sticks to the bottom of short viewports
 * (mt-auto in the page shell) and is pushed naturally on long pages.
 */
export function Footer() {
  const scrollTo = useScrollTo();

  return (
    <footer className="relative mt-auto border-t border-white/[0.07] bg-[#060310]">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-nexa-violet-2/40 to-transparent"
      />

      <div className="nx-container py-16 sm:py-20">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* brand */}
          <div className="lg:col-span-5">
            <NexaLogo className="h-14" rounded="rounded-2xl" />
            <p className="mt-7 max-w-xs text-lg font-semibold text-white/80">
              Nexa — Intelligence, reimagined.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href={LINKS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nexa on Telegram"
                className="group flex h-11 items-center gap-2 rounded-full border border-white/10 px-4 nx-micro text-white/60 transition-all duration-300 hover:border-nexa-violet-2/60 hover:text-white"
              >
                <Send className="h-3.5 w-3.5" />
                Telegram
                <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nexa on YouTube"
                className="group flex h-11 items-center gap-2 rounded-full border border-white/10 px-4 nx-micro text-white/60 transition-all duration-300 hover:border-nexa-violet-2/60 hover:text-white"
              >
                <Youtube className="h-3.5 w-3.5" />
                YouTube
                <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* navigation */}
          <div className="lg:col-span-3 lg:col-start-8">
            <p className="nx-micro mb-6 text-white/30">NAVIGATE</p>
            <ul className="space-y-3.5">
              {MENU_LINKS.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className="text-[15px] font-semibold text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* meta */}
          <div className="lg:col-span-2">
            <p className="nx-micro mb-6 text-white/30">SYSTEM</p>
            <ul className="space-y-3.5 text-[15px] font-semibold text-white/60">
              <li>Brand — {BRAND.name}</li>
              <li>Year — {BRAND.year}</li>
              <li>Status — Evolving</li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/[0.06] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="nx-micro text-white/35">
            © {BRAND.year} {BRAND.name.toUpperCase()}. ALL RIGHTS RESERVED.
          </p>
          <p className="nx-micro text-white/25">
            DESIGNED FOR WHAT&apos;S NEXT · NX-2026
          </p>
        </div>
      </div>
    </footer>
  );
}
