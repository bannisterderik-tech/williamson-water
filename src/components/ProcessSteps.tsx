"use client";

import { ClipboardCheck, FlaskConical, Wrench, BadgeCheck } from "lucide-react";
import { fadeUp } from "@/lib/motion";
import { Stagger } from "./Reveal";

const STEPS = [
  {
    icon: ClipboardCheck,
    n: "01",
    title: "Request a water test",
    body:
      "We come to your home, test from the tap (or well), and pull a test report on hardness, iron, pH, TDS, chlorine, nitrates, and bacteria.",
  },
  {
    icon: FlaskConical,
    n: "02",
    title: "Design the right system",
    body:
      "Ken walks you through the results, recommends only what your water actually needs, and quotes a fixed price — no upsells, no surprises.",
  },
  {
    icon: Wrench,
    n: "03",
    title: "Clean, code-compliant install",
    body:
      "Install in one day for most systems. We protect floors, label every line, and program the system for your household.",
  },
  {
    icon: BadgeCheck,
    n: "04",
    title: "Follow-up after install",
    body:
      "We re-test in 30 days, refill salt and rotate filters on schedule, and back every install with a real warranty you can call about.",
  },
];

export function ProcessSteps({ dark = false }: { dark?: boolean }) {
  return (
    <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {STEPS.map((s) => (
        <div
          key={s.n}
          className={
            "group relative rounded-3xl p-7 ring-1 transition-all duration-500 hover:-translate-y-1 " +
            (dark
              ? "bg-white/[0.04] ring-white/10 hover:ring-sun-400/40"
              : "bg-white ring-ink-100 hover:ring-brand-300 hover:shadow-[0_20px_50px_-24px_rgba(8,29,77,0.2)]")
          }
        >
          <div className="flex items-baseline justify-between">
            <span className={"text-5xl font-bold tracking-tight " + (dark ? "text-white/10" : "text-ink-100")}>{s.n}</span>
            <span className="inline-flex size-12 items-center justify-center rounded-2xl gradient-sun text-ink-900">
              <s.icon className="size-5" />
            </span>
          </div>
          <h3 className={"mt-6 text-xl font-bold tracking-tight " + (dark ? "text-white" : "text-ink-900")}>
            {s.title}
          </h3>
          <p className={"mt-3 text-sm leading-relaxed " + (dark ? "text-ink-300" : "text-ink-600")}>{s.body}</p>
        </div>
      ))}
    </Stagger>
  );
}
