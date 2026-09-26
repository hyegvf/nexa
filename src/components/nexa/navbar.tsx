"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu as MenuIcon, Send, X, Youtube } from "lucide-react";
import { useEffect, useState } from "react";
import { LINKS, MENU_LINKS, NAV_LINKS } from "@/lib/nexa";
import { NexaLogo } from "./logo";
import { useScrollTo } from "./smooth-scroll";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const scrollTo = useScrollTo();

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        setScrolled(window.scrollY > 28);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  /* lock scroll while the fullscreen menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    /* wait a tick so body overflow unlocks before scrolling */
    window.setTimeout(() => scrollTo(id), 60);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[80] transition-all duration-500 ${
          scrolled
            ? "border-b border-white/[0.06] bg-[#07040e]/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="nx-container flex h-16 items-center justify-between gap-4"
        >
          {/* LEFT — logo */}
          <button
            onClick={() => go("home")}
            className="flex items-center gap-3 transition-opacity hover:opacity-80"
            aria-label="Nexa — back to top"
          >
            <NexaLogo className="h-8 sm:h-9" />
          </button>

          {/* CENTER — links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className="group relative nx-micro py-2 text-white/55 transition-colors duration-300 hover:text-white"
                >
                  {l.label}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-nexa-violet-2 transition-transform duration-400 ease-out group-hover:scale-x-100"
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* RIGHT — socials + menu */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            <a
              href={LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nexa on Telegram"
              className="hidden h-10 w-10 items-center justify-center rounded-full text-white/55 transition-all duration-300 hover:bg-white/[0.06] hover:text-white sm:flex"
            >
              <Send className="h-4 w-4" />
            </a>
            <a
              href={LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nexa on YouTube"
              className="hidden h-10 w-10 items-center justify-center rounded-full text-white/55 transition-all duration-300 hover:bg-white/[0.06] hover:text-white sm:flex"
            >
              <Youtube className="h-4 w-4" />
            </a>

            <span
              aria-hidden="true"
              className="hidden h-5 w-px bg-white/15 sm:block"
            />

            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="flex h-10 items-center gap-2.5 rounded-full border border-white/10 px-4 text-white/80 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.05] hover:text-white"
            >
              <MenuIcon className="h-4 w-4" />
              <span className="nx-micro hidden sm:inline">Menu</span>
            </button>
          </div>
        </nav>
      </header>

      {/* ── Fullscreen menu ─────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-[95] flex flex-col bg-[#0a0416]/98 backdrop-blur-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div
              aria-hidden="true"
              className="nx-grid-bg absolute inset-0 opacity-40"
            />
            <div
              aria-hidden="true"
              className="absolute -right-32 top-1/3 h-[55vmin] w-[55vmin] rounded-full bg-nexa-violet/20 blur-[130px]"
            />

            <div className="nx-container relative flex h-16 items-center justify-between">
              <NexaLogo className="h-8 sm:h-9" />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-white/35"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav
              aria-label="Menu"
              className="nx-container relative flex flex-1 flex-col justify-center gap-1 py-10"
            >
              {MENU_LINKS.map((l, i) => (
                <motion.button
                  key={l.id}
                  initial={{ y: 44, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.08 + i * 0.07,
                    duration: 0.7,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  onClick={() => go(l.id)}
                  className="group flex w-fit items-baseline gap-4 py-1.5 text-left sm:gap-6"
                >
                  <span className="nx-micro w-8 text-nexa-violet-2/80">
                    0{i + 1}
                  </span>
                  <span className="text-[clamp(2.2rem,7.5vw,4.6rem)] font-extrabold uppercase leading-[1.02] tracking-tight text-white/85 transition-all duration-400 group-hover:translate-x-2 group-hover:text-white">
                    {l.label}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-6 w-6 self-center text-white/0 transition-all duration-400 group-hover:text-nexa-violet-2 sm:h-8 sm:w-8"
                  />
                </motion.button>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              className="nx-container relative flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/[0.08] py-6"
            >
              <a
                href={LINKS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 nx-micro text-white/55 transition-colors hover:text-white"
              >
                <Send className="h-3.5 w-3.5" />
                Telegram
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 nx-micro text-white/55 transition-colors hover:text-white"
              >
                <Youtube className="h-3.5 w-3.5" />
                YouTube
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <span className="nx-micro ml-auto hidden text-white/25 sm:inline">
                NEXA — INTELLIGENCE, REIMAGINED.
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
