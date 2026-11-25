import { cn } from "@/lib/utils";

export function Logo({ className, mono = false }: { className?: string; mono?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative inline-flex size-9 items-center justify-center">
        <svg
          viewBox="0 0 40 40"
          aria-hidden
          className="absolute inset-0 size-full"
        >
          <defs>
            <linearGradient id="lg-drop" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={mono ? "#ffffff" : "#2f7bff"} />
              <stop offset="100%" stopColor={mono ? "#ffffff" : "#0c2f76"} />
            </linearGradient>
            <linearGradient id="lg-sun" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffd24a" />
              <stop offset="100%" stopColor="#f4ac00" />
            </linearGradient>
          </defs>
          <path
            d="M20 3 C 28 14, 33 19, 33 25 a 13 13 0 1 1 -26 0 C 7 19, 12 14, 20 3 Z"
            fill="url(#lg-drop)"
          />
          <circle cx="26.5" cy="14" r="3.4" fill="url(#lg-sun)" />
        </svg>
      </span>
      <span className={cn("flex flex-col leading-none", mono ? "text-white" : "text-ink-900")}>
        <span className="whitespace-nowrap text-[15px] font-bold tracking-tight">Pure Tap Water Co.</span>
        <span className={cn("whitespace-nowrap text-[9px] uppercase tracking-[0.16em]", mono ? "text-brand-100/80" : "text-brand-700/80")}>
          Pure · Tested · Promised
        </span>
      </span>
    </span>
  );
}
