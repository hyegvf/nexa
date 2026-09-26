"use client";

import { useEffect, useRef, useState } from "react";
import { NexaLogo } from "./logo";

/**
 * Cinematic opening loader.
 * Deep violet field → logo → "INITIALIZING INTELLIGENCE" → thin progress line.
 * Exits as an upward curtain (700–900ms). Respects prefers-reduced-motion.
 */
export function Loader({ onReveal }: { onReveal: () => void }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [gone, setGone] = useState(false);
  const doneRef = useRef(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const DURATION = reduced ? 350 : 1750;
    let raf = 0;
    const t0 = performance.now();

    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / DURATION);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setProgress(Math.round(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        window.setTimeout(() => {
          setExiting(true);
          onReveal();
          window.setTimeout(() => setGone(true), reduced ? 40 : 850);
        }, reduced ? 60 : 200);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
     
  }, []);

  useEffect(() => {
    document.body.style.overflow = gone ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [gone]);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0416] transition-transform duration-[850ms] [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] ${
        exiting ? "-translate-y-full" : "translate-y-0"
      }`}
      role="status"
      aria-label="Nexa is loading"
    >
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-nexa-violet/25 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="nx-grid-bg absolute inset-0 opacity-60"
      />

      <div className="relative flex flex-col items-center gap-8">
        <NexaLogo
          className={`h-16 transition-all duration-700 sm:h-20 ${
            progress > 8 ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
          rounded="rounded-2xl"
        />

        <div className="flex flex-col items-center gap-3">
          <p className="nx-micro text-white/50">
            NEXA&nbsp;&nbsp;·&nbsp;&nbsp;INITIALIZING INTELLIGENCE
          </p>

          {/* thin progress line */}
          <div className="relative h-px w-52 overflow-hidden bg-white/10 sm:w-64">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-nexa-violet to-nexa-violet-2 transition-[width] duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="nx-micro tabular-nums text-nexa-lav/80">
            {String(progress).padStart(3, "0")}%
          </p>
        </div>
      </div>

      {/* corner microtext */}
      <span className="nx-micro absolute bottom-6 left-6 text-white/25">
        NX-01 / BOOT
      </span>
      <span className="nx-micro absolute bottom-6 right-6 text-white/25">
        © 2026
      </span>
    </div>
  );
}
