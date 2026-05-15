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

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Janelle R.",
    location: "Montrose, CO",
    rating: 5,
    service: "Whole-house softener + RO",
    quote:
      "Our water went from feeling like a chore to feeling like a luxury. Ken hand-tested the well three times before quoting and the install was spotless. Two years later — zero scale.",
  },
  {
    name: "Mark & Sue B.",
    location: "Ridgway, CO",
    rating: 5,
    service: "Iron & sulfur filter",
    quote:
      "The rotten-egg smell drove us nuts for five years. Three other companies sold us the same softener. Williamson actually tested the water, found hydrogen sulfide, and fixed it. Genius.",
  },
  {
    name: "Travis C.",
    location: "Telluride, CO",
    rating: 5,
    service: "7-stage RO + remineralization",
    quote:
      "We have a beautiful spec-build at altitude and demanded a kitchen RO that didn't look like a science experiment. The system Ken designed is invisible and the water tastes incredible.",
  },
  {
    name: "Pastor Liam H.",
    location: "Delta, CO",
    rating: 5,
    service: "UV + sediment for church well",
    quote:
      "Our church well tested positive for coliform during the summer. Williamson Water had a UV solution installed the same week — and re-tested at no charge.",
  },
  {
    name: "Cara D.",
    location: "Olathe, CO",
    rating: 5,
    service: "Acid neutralizer",
    quote:
      "We thought the green stains were normal. Turns out our pH was 6.1 and our copper lines were on borrowed time. Caught early. Saved us a re-plumb.",
  },
  {
    name: "Greg P.",
    location: "Cedaredge, CO",
    rating: 5,
    service: "Well-water full package",
    quote:
      "I had three quotes. Williamson was middle-of-the-pack on price and miles ahead on engineering. They explained every stage. No upsell. No pressure.",
  },
];
