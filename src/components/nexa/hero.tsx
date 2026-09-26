"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef, type CSSProperties } from "react";
import { LINKS } from "@/lib/nexa";
import { MaskWords } from "./reveal";
import { useScrollTo } from "./smooth-scroll";

/**
 * Full-screen cinematic hero.
 * Enormous clip-mask typography, ambient violet field,
 * neural orb visual with subtle scroll parallax.
 */
export function Hero({ active }: { active: boolean }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const scrollTo = useScrollTo();

  /* subtle scroll parallax via CSS var --p (0..1 over first viewport) */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const vh = window.innerHeight || 1;
        const p = Math.min(1.15, window.scrollY / vh);
        el.style.setProperty("--p", p.toFixed(4));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const on = active;

  return (
    <section
      id="home"
      ref={sectionRef}
      aria-label="Nexa — intelligence, reimagined"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
      style={{ "--p": 0 } as CSSProperties}
    >
      {/* ── ambient background ─────────────────────────── */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="nx-grid-bg absolute inset-0 opacity-70" />
        <div
          className="nx-anim-drift absolute -left-[12%] top-[-18%] h-[55vmin] w-[55vmin] rounded-full bg-nexa-violet/30 blur-[120px]"
          style={{ transform: "translateY(calc(var(--p) * 70px))" }}
        />
        <div
          className="absolute right-[-14%] top-[24%] h-[62vmin] w-[62vmin] rounded-full bg-[#3b0a9e]/45 blur-[130px]"
          style={{ transform: "translateY(calc(var(--p) * -50px))" }}
        />
        <div className="absolute bottom-[-30%] left-[28%] h-[50vmin] w-[70vmin] rounded-full bg-nexa-violet-2/15 blur-[140px]" />
        {/* horizon line glow */}
        <div className="absolute inset-x-0 top-[78%] h-px bg-gradient-to-r from-transparent via-nexa-violet-2/35 to-transparent" />
      </div>

      {/* ── orb visual ─────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center sm:justify-end sm:pr-[6vw] lg:pr-[9vw]"
        style={{
          opacity: "calc(1 - var(--p) * 0.9)",
          transform: "translateY(calc(var(--p) * -120px))",
        }}
      >
        <NeuralOrbSlot className="h-[64vmin] w-[64vmin] opacity-45 sm:h-[74vmin] sm:w-[74vmin] sm:opacity-100 lg:h-[80vmin] lg:w-[80vmin]" />
      </div>

      {/* ── content ────────────────────────────────────── */}
      <div
        className="nx-container relative z-10 flex flex-1 flex-col justify-center pb-24 pt-32 sm:pb-28 sm:pt-36"
        style={{
          transform: "translateY(calc(var(--p) * 64px))",
          opacity: "calc(1 - var(--p) * 0.55)",
        }}
      >
        {/* eyebrow */}
        <div
          className={`mb-7 flex items-center gap-3 transition-all duration-1000 ${
            on ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <span className="nx-anim-pulse-dot h-1.5 w-1.5 rounded-full bg-nexa-violet-2" />
          <p className="nx-micro text-white/50">
            ARTIFICIAL INTELLIGENCE — EST. 2026
          </p>
        </div>

        {/* headline */}
        <h1 className="text-[clamp(2.4rem,10.2vw,10.2rem)] font-extrabold leading-[0.94] tracking-[-0.035em]">
          <span className="block text-nexa-mist">
            <MaskWords
              text="INTELLIGENCE,"
              active={on}
              delay={120}
              stagger={110}
            />
          </span>
          <span className="block">
            <MaskWords
              text="REIMAGINED."
              active={on}
              delay={420}
              stagger={110}
              wordClassName="bg-gradient-to-r from-nexa-violet-2 via-nexa-lav to-nexa-violet-2 bg-clip-text text-transparent"
            />
          </span>
        </h1>

        {/* statement + CTAs */}
        <div
          className={`mt-9 flex flex-col gap-9 transition-all delay-[900ms] duration-1000 sm:mt-12 sm:flex-row sm:items-end sm:justify-between ${
            on ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="max-w-md text-base leading-relaxed text-white/55 sm:text-lg">
            Nexa is a new generation AI experience built around intelligence,
            creativity, and possibility.
          </p>

          <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <button
              onClick={() => scrollTo("intelligence")}
              className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-nexa-mist px-7 text-[13px] font-bold uppercase tracking-[0.14em] text-black transition-all duration-300 hover:bg-white hover:shadow-[0_0_36px_rgba(139,49,255,0.45)]"
            >
              Explore Nexa
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a
              href={LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-white/20 px-7 text-[13px] font-bold uppercase tracking-[0.14em] text-white/85 transition-all duration-300 hover:border-nexa-violet-2 hover:bg-white/[0.04] hover:text-white"
            >
              Join the community
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* ── bottom strip ───────────────────────────────── */}
      <div
        className={`nx-container relative z-10 flex items-center justify-between pb-7 transition-all delay-[1300ms] duration-1000 ${
          on ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="relative h-8 w-px overflow-hidden bg-white/10">
            <span className="absolute inset-x-0 top-0 h-3 animate-[nx-float_2.2s_ease-in-out_infinite] bg-nexa-violet-2" />
          </span>
          <span className="nx-micro text-white/35">SCROLL</span>
        </div>
        <span className="nx-micro hidden text-white/25 sm:inline">
          NX — 2026 / VIOLET SYSTEM
        </span>
      </div>
    </section>
  );
}

/* client-only dynamic import keeps the canvas out of SSR */
import dynamic from "next/dynamic";
const NeuralOrbSlot = dynamic(
  () => import("./neural-orb").then((m) => m.NeuralOrb),
  {
    ssr: false,
    loading: () => (
      <div className="h-[64vmin] w-[64vmin] sm:h-[74vmin] sm:w-[74vmin] lg:h-[80vmin] lg:w-[80vmin]" />
    ),
  }
);
