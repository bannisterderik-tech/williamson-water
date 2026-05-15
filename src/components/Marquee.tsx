import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div className={cn("overflow-hidden", className)} aria-hidden>
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-ink-400">
            <span className="size-1.5 rounded-full bg-brand-500" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
