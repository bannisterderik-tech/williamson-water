"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/site";
import { ServiceIcon } from "./ServiceIcon";
import { fadeUp } from "@/lib/motion";

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  return (
    <motion.div variants={fadeUp} custom={index} className="h-full">
      <Link
        href={`/services/${service.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-7 ring-1 ring-ink-100 transition-all duration-500 hover:ring-brand-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-24px_rgba(8,29,77,0.25)]"
      >
        {service.badge && (
          <span className="absolute right-5 top-5 rounded-full bg-sun-400/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-sun-700">
            {service.badge}
          </span>
        )}
        <div className="relative flex size-14 items-center justify-center rounded-2xl gradient-brand text-white shadow-lg">
          <ServiceIcon name={service.icon} className="size-6" />
          <span className="absolute inset-0 rounded-2xl bg-sun-400/0 transition-colors group-hover:bg-sun-400/10" />
        </div>
        <h3 className="mt-5 text-xl font-bold tracking-tight text-ink-900">{service.name}</h3>
        <p className="mt-2 text-sm text-ink-500">{service.short}</p>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-700">{service.blurb}</p>
        <div className="mt-6 flex items-center justify-between border-t border-ink-100 pt-5">
          <div>
            {service.startingAt && (
              <>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-400">From</span>
                <span className="text-lg font-bold text-brand-800">{service.startingAt}</span>
              </>
            )}
          </div>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 group-hover:text-brand-900">
            Learn more
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
