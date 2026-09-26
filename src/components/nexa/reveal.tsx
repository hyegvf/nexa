"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

/* Shared IntersectionObserver hook — plays once, then disconnects. */
export function useInView<T extends HTMLElement>(opts?: {
  threshold?: number;
  rootMargin?: string;
  enabled?: boolean;
}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  const enabled = opts?.enabled ?? true;

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      const id = window.setTimeout(() => setInView(true), 0);
      return () => window.clearTimeout(id);
    }
    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      {
        threshold: opts?.threshold ?? 0.15,
        rootMargin: opts?.rootMargin ?? "0px 0px -8% 0px",
      }
    );
    io.observe(el);
    return () => io.disconnect();
     
  }, [enabled]);

  return { ref, inView };
}

/* Fade + rise reveal wrapper */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`rv ${inView ? "is-in" : ""} ${className}`}
      style={{ "--rv-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

/* Clip-mask word-by-word reveal — words rise from below an overflow mask. */
export function MaskWords({
  text,
  className = "",
  wordClassName = "",
  active,
  delay = 0,
  stagger = 80,
}: {
  text: string;
  className?: string;
  /** applied to each inner word span (e.g. gradient text utilities) */
  wordClassName?: string;
  /** Force activation (e.g. hero after loader). Defaults to own viewport detection. */
  active?: boolean;
  delay?: number;
  stagger?: number;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const on = active ?? inView;
  const words = text.split(" ");

  return (
    <span
      ref={ref}
      className={`mask-group ${on ? "is-in" : ""} ${className}`}
      aria-label={text}
      role="text"
    >
      {words.map((w, i) => (
        <span key={i} className="mask-line" aria-hidden="true">
          <span
            className={wordClassName}
            style={{ "--d": `${delay + i * stagger}ms` } as CSSProperties}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </span>
  );
}
