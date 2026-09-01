import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export type Testimonial = {
  name: string;
  location: string;
  rating: number;
  quote: string;
  service?: string;
};

export function TestimonialCard({ t, dark = false }: { t: Testimonial; dark?: boolean }) {
  return (
    <figure
      className={cn(
        "relative h-full overflow-hidden rounded-3xl p-7 sm:p-8 ring-1 transition-shadow",
        dark
          ? "bg-white/[0.06] ring-white/10 text-white"
          : "bg-white ring-ink-100 text-ink-900 hover:shadow-[0_20px_50px_-24px_rgba(8,29,77,0.2)]",
      )}
    >
      <Quote className={cn("absolute right-5 top-5 size-9 opacity-10", dark ? "text-white" : "text-brand-700")} />
      <div className="flex gap-0.5 text-sun-400">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="size-4 fill-sun-400" />
        ))}
      </div>
      <blockquote className={cn("mt-4 text-pretty text-[17px] leading-relaxed", dark ? "text-ink-100" : "text-ink-800")}>
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="inline-flex size-10 items-center justify-center rounded-full gradient-brand text-white font-bold text-sm">
          {t.name.split(" ").map((s) => s[0]).join("").slice(0, 2)}
        </span>
        <span>
          <span className={cn("block text-sm font-semibold", dark ? "text-white" : "text-ink-900")}>{t.name}</span>
          <span className={cn("block text-xs", dark ? "text-ink-300" : "text-ink-500")}>
            {t.location}
            {t.service && <> · {t.service}</>}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

// EMPTY BY DESIGN — rail 3.
// The May 2026 build shipped six fabricated named testimonials here and nine more
// in src/app/reviews/page.tsx, under a headline reading "Names, towns, and stories
// — all real … call any name on the page to verify it yourself." One of them
// disparaged Culligan by name. None of these people exist.
//
// Under 16 CFR Part 465 a review featured in marketing is a testimonial and the
// review-hosting exemption does not apply. This array stays empty until Ken
// supplies real Google / Facebook / BBB review URLs, and every consumer below
// guards on `.length` so the section disappears rather than rendering a shell.
export const TESTIMONIALS: Testimonial[] = [];
