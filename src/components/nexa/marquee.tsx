"use client";

const WORDS = [
  "AI",
  "INTELLIGENCE",
  "CREATIVITY",
  "AGENTS",
  "AUTOMATION",
  "VISION",
  "CODE",
  "FUTURE",
];

/**
 * Editorial marquee — large uppercase words drifting slowly sideways.
 * Duplicated track (aria-hidden) loops seamlessly via CSS.
 */
export function Marquee() {
  const row = (ariaHidden: boolean) => (
    <div
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center"
    >
      {WORDS.map((w, i) => (
        <span key={i} className="flex items-center">
          <span
            className={`whitespace-nowrap px-6 text-[clamp(1.9rem,5vw,4.2rem)] font-extrabold uppercase leading-none tracking-tight sm:px-10 ${
              i % 2 === 1 ? "nx-ghost-text" : "text-nexa-mist/90"
            }`}
          >
            {w}
          </span>
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rotate-45 bg-nexa-violet-2/70"
          />
        </span>
      ))}
    </div>
  );

  return (
    <section
      aria-label="Nexa focus areas"
      className="relative overflow-hidden border-y border-white/[0.06] bg-[#0a0514] py-7 sm:py-9"
    >
      <div className="nx-anim-marquee flex w-max will-change-transform">
        {row(false)}
        {row(true)}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#07040e] to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#07040e] to-transparent sm:w-28" />
    </section>
  );
}
