import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Section, Eyebrow, H2, Lead } from "@/components/Section";
import { Reveal, Stagger, Item } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { fadeUp } from "@/lib/motion";
import { Clock, ArrowUpRight } from "lucide-react";
import { ARTICLES } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Resources — Water Quality Guides for Western Slope Homeowners",
  description: "Articles and guides on hard water, well water, RO, PFAS, chloramine, and seasonal water issues across the Western Slope of Colorado.",
};

const CATEGORIES = ["All", "Water Quality", "Well Water", "Drinking Water", "Softening", "Municipal Water", "Seasonal", "Buyer's Guide"];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Water quality, in plain English."
        lead="No jargon. No upsell pitches. Just the facts about your water — and the practical fix when there is one."
      />

      <Section>
        <Container>
          {/* Featured */}
          <Reveal>
            <Link
              href={`/resources/${ARTICLES[0].slug}`}
              className="group block relative overflow-hidden rounded-3xl bg-ink-950 text-white"
            >
              <div className="absolute inset-0 mesh-water opacity-90" aria-hidden />
              <div className="relative grid lg:grid-cols-12 gap-10 p-10 sm:p-14">
                <div className="lg:col-span-7">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-sun-300 ring-1 ring-white/15">
                    Featured · {ARTICLES[0].category}
                  </span>
                  <h2 className="mt-5 text-balance text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05]">
                    {ARTICLES[0].title}
                  </h2>
                  <p className="mt-5 text-pretty text-lg text-ink-200">{ARTICLES[0].excerpt}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sun-300">
                    Read the article <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
                <div className="lg:col-span-5 flex items-end">
                  <span className="text-9xl font-bold tracking-tighter text-white/10 leading-none">
                    H₂O
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>

          <div className="mt-14 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <span key={c} className="inline-flex items-center rounded-full bg-ink-50 px-4 py-1.5 text-xs font-semibold text-ink-700 ring-1 ring-ink-200">
                {c}
              </span>
            ))}
          </div>

          <Stagger className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.slice(1).map((a) => (
              <Item key={a.slug} variants={fadeUp}>
                <Link
                  href={`/resources/${a.slug}`}
                  className="group flex h-full flex-col rounded-3xl bg-white p-7 ring-1 ring-ink-100 hover:ring-brand-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(8,29,77,0.2)] transition-all"
                >
                  <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-700">
                    {a.category}
                    <span className="text-ink-300">·</span>
                    <span className="inline-flex items-center gap-1 text-ink-400">
                      <Clock className="size-3" /> {a.readMinutes} min
                    </span>
                  </span>
                  <h3 className="mt-4 text-xl font-bold tracking-tight text-ink-900 leading-snug">{a.title}</h3>
                  <p className="mt-3 text-[15px] text-ink-600 leading-relaxed flex-1">{a.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 group-hover:text-brand-900">
                    Read article <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Item>
            ))}
          </Stagger>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
