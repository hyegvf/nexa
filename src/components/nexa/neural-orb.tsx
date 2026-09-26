"use client";

import { useEffect, useRef } from "react";

/**
 * Abstract "intelligent core" — a slowly rotating neural sphere.
 * Canvas + requestAnimationFrame. Pauses offscreen / hidden tab,
 * renders a single static frame under prefers-reduced-motion.
 */
export function NeuralOrb({
  className = "",
  density = 1,
}: {
  className?: string;
  /** point density multiplier (mobile uses less) */
  density?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.innerWidth < 768;
    const N = Math.round((small ? 150 : 280) * density);

    /* Fibonacci sphere distribution */
    const pts: { x: number; y: number; z: number }[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const th = golden * i;
      pts.push({ x: Math.cos(th) * r, y, z: Math.sin(th) * r });
    }

    /* pre-computed connection pairs (indices) to keep per-frame work cheap */
    const pairs: [number, number][] = [];
    const MAX_D = small ? 0.42 : 0.36;
    for (let i = 0; i < N; i++) {
      for (let k = 1; k <= 5 && i + k < N; k++) {
        const a = pts[i];
        const b = pts[i + k];
        const d = Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
        if (d < MAX_D) pairs.push([i, i + k]);
      }
    }

    let W = 0;
    let H = 0;
    let dpr = 1;

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = rect.width;
      H = rect.height;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    let visible = true;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(wrap);

    let raf = 0;
    let running = true;
    let t = 0;
    const SPEED = 0.00012;

    const draw = () => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);

      const cx = W / 2;
      const cy = H / 2;
      const R = Math.min(W, H) * 0.36;
      const breath = 1 + Math.sin(t * 0.0011) * 0.018;
      const cosA = Math.cos(t * SPEED);
      const sinA = Math.sin(t * SPEED);
      const tilt = -0.38;
      const cosT = Math.cos(tilt);
      const sinT = Math.sin(tilt);

      const proj = new Float32Array(N * 3);
      for (let i = 0; i < N; i++) {
        const p = pts[i];
        /* rotate Y */
        let x = p.x * cosA + p.z * sinA;
        let z = -p.x * sinA + p.z * cosA;
        let y = p.y;
        /* tilt X */
        const y2 = y * cosT - z * sinT;
        const z2 = y * sinT + z * cosT;
        y = y2;
        z = z2;
        const persp = 2.4 / (2.4 - z * breath);
        proj[i * 3] = cx + x * R * breath * persp;
        proj[i * 3 + 1] = cy + y * R * breath * persp;
        proj[i * 3 + 2] = z;
      }

      /* connections */
      ctx.lineWidth = 1;
      for (let p = 0; p < pairs.length; p++) {
        const i = pairs[p][0];
        const j = pairs[p][1];
        const z = (proj[i * 3 + 2] + proj[j * 3 + 2]) / 2;
        const depth = (z + 1) / 2; // 0..1
        const alpha = 0.035 + depth * 0.16;
        ctx.strokeStyle = `rgba(150, 96, 255, ${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(proj[i * 3], proj[i * 3 + 1]);
        ctx.lineTo(proj[j * 3], proj[j * 3 + 1]);
        ctx.stroke();
      }

      /* nodes */
      for (let i = 0; i < N; i++) {
        const z = proj[i * 3 + 2];
        const depth = (z + 1) / 2;
        const r = 0.6 + depth * 1.5;
        const a = 0.12 + depth * 0.75;
        ctx.fillStyle =
          depth > 0.82
            ? `rgba(233, 221, 255, ${a.toFixed(3)})`
            : `rgba(158, 108, 255, ${a.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(proj[i * 3], proj[i * 3 + 1], r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = (now: number) => {
      if (!running) return;
      if (visible && !document.hidden) {
        t = now;
        draw();
      }
      raf = requestAnimationFrame(loop);
    };

    if (reduced) {
      draw();
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [density]);

  return (
    <div ref={wrapRef} className={`relative ${className}`} aria-hidden="true">
      {/* ambient core glow */}
      <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-nexa-violet/40 blur-[80px]" />
      <div className="absolute left-1/2 top-1/2 h-[26%] w-[26%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9b4ff]/25 blur-[36px]" />
      <canvas ref={canvasRef} className="relative h-full w-full" />
    </div>
  );
}
