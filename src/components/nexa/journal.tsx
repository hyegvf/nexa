"use client";

import { useState } from "react";
import { Clock3 } from "lucide-react";
import { MaskWords, Reveal } from "./reveal";

const CATEGORIES = [
  "ALL",
  "AI",
  "TOOLS",
  "TUTORIALS",
  "AGENTS",
  "TECH",
  "EXPERIMENTS",
] as const;

type Category = (typeof CATEGORIES)[number];

/**
 * THE NEXA JOURNAL — editorial archive prepared for future content.
 * Honest placeholder states only: no fabricated articles, dates or stats.
 */
export function Journal() {
  const [cat, setCat] = useState<Category>("ALL");

  const visible = CATEGORIES.filter((c) => c !== "ALL").filter(
    (c) => cat === "ALL" || c === cat
  );

  return (
    <section
      id="journal"
      aria-label="The Nexa journal"
      className="relative overflow-x-clip py-24 sm:py-36 lg:py-44"
    >
      <div className="nx-container">
        <div className="mb-12 flex flex-col gap-8 sm:mb-16">
          <Reveal>
            <p className="nx-micro mb-6 flex items-center gap-3 text-nexa-lav/70">
              <span className="h-px w-8 bg-nexa-violet-2/60" />
              THE NEXA JOURNAL
            </p>
          </Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="text-[clamp(2.3rem,6.5vw,6rem)] font-extrabold leading-[1.0] tracking-[-0.03em]">
              <MaskWords text="FIELD" />
              <br />
              <span className="nx-ghost-text">
                <MaskWords text="NOTES." delay={150} />
              </span>
            </h2>
            <Reveal delay={220}>
              <p className="max-w-sm text-base leading-relaxed text-white/50">
                Notes, experiments and write-ups from the Nexa lab. The archive
                is being prepared — nothing here is published yet.
              </p>
            </Reveal>
          </div>

          {/* category filter — real filtering over placeholder slots */}
          <Reveal delay={300}>
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Filter journal categories"
            >
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  aria-pressed={cat === c}
                  className={`nx-micro rounded-full border px-4 py-2.5 transition-all duration-300 ${
                    cat === c
                      ? "border-nexa-violet-2/70 bg-nexa-violet/20 text-white"
                      : "border-white/10 bg-transparent text-white/45 hover:border-white/30 hover:text-white/80"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* placeholder slots — clearly labeled COMING SOON */}
        <div
          key={cat}
          className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.06] sm:grid-cols-2 xl:grid-cols-3"
          style={{ animation: "nx-fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          {visible.map((c, i) => (
            <article
              key={c}
              className="group relative flex min-h-[220px] flex-col justify-between bg-nexa-panel p-7 transition-colors duration-500 hover:bg-nexa-raise sm:p-8"
            >
              <div className="flex items-start justify-between">
                <span
                  aria-hidden="true"
                  className="nx-ghost-text text-5xl font-extrabold leading-none tracking-tighter sm:text-6xl"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="nx-micro rounded-full border border-white/10 px-3 py-1.5 text-white/50">
                  {c}
                </span>
              </div>

              <div className="mt-12 flex items-center gap-3 text-white/30">
                <Clock3 className="h-4 w-4" />
                <span className="nx-micro">COMING SOON</span>
              </div>

              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-nexa-violet to-nexa-violet-2/0 transition-transform duration-700 group-hover:scale-x-100"
              />
            </article>
          ))}
        </div>

        <Reveal>
          <p className="nx-micro mt-8 text-white/25">
            NO ARTICLES PUBLISHED YET — THE ARCHIVE OPENS WITH THE ECOSYSTEM.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
