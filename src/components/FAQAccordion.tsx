"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export type FAQ = { q: string; a: string };

export function FAQAccordion({ items, dark = false }: { items: FAQ[]; dark?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-ink-100/60">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="py-2">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className={cn(
                "flex w-full items-center justify-between gap-6 py-5 text-left transition-colors",
                dark ? "text-white" : "text-ink-900",
              )}
            >
              <span className="text-lg font-semibold tracking-tight">{it.q}</span>
              <span
                className={cn(
                  "shrink-0 inline-flex size-9 items-center justify-center rounded-full ring-1 transition-all",
                  isOpen
                    ? "bg-brand-700 text-white ring-brand-700 rotate-45"
                    : dark
                    ? "ring-white/20 text-white"
                    : "ring-ink-200 text-ink-700",
                )}
              >
                <Plus className="size-4" />
              </span>
            </button>
            {isOpen && (
              <div className="overflow-hidden">
                  <p
                    className={cn(
                      "pb-6 pr-12 text-[15.5px] leading-relaxed",
                      dark ? "text-ink-300" : "text-ink-600",
                    )}
                  >
                    {it.a}
                  </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
