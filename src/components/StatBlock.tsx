"use client";

import { motion, useInView, useMotionValue, useTransform, animate, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

export function StatBlock({
  value,
  suffix = "",
  prefix = "",
  label,
  description,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      mv.set(value);
      return;
    }
    const controls = animate(mv, value, { duration: 1.6, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [inView, value, mv, reduce]);

  return (
    <div className="text-center sm:text-left">
      <span ref={ref} className="block text-5xl sm:text-6xl font-bold tracking-tight text-white">
        {prefix}
        <motion.span>{rounded}</motion.span>
        {suffix}
      </span>
      <span className="mt-3 block text-sm font-semibold uppercase tracking-[0.18em] text-sun-300">{label}</span>
      {description && <p className="mt-2 text-sm text-ink-300 max-w-xs">{description}</p>}
    </div>
  );
}
