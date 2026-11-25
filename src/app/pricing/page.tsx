import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Section, Eyebrow, H2, Lead } from "@/components/Section";
import { Reveal, Stagger, Item } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/Button";
import { fadeUp } from "@/lib/motion";
import { CheckCircle2, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing — Real numbers. Fixed quotes. No upsells.",
  description:
    "Water softeners, reverse osmosis, whole-house filtration, well-water treatment, and commercial systems on the Western Slope.",
};

const TIERS = [
  {
    name: "Drinking Water — Essential",
    from: null,
    tagline: "5-stage RO under-sink",
    bullets: [
      "5-stage NSF/ANSI 58 RO",
      "Lead-free brass faucet",
      "3.2 gal storage tank",
      "Annual filter swap reminder",
      "Workmanship warranty",
    ],
    cta: "Quote my RO",
  },
  {
    name: "Whole House — Soft + Clean",
    from: null,
    tagline: "Softener + whole-house carbon",
    bullets: [
      "1.5 cu-ft on-demand softener",
      "1.5 cu-ft catalytic carbon",
      "Sediment pre-filter",
      "Bypass + drain plumbing",
      "Programmed for your household",
    ],
    cta: "Quote whole house",
    featured: true,
  },
  {
    name: "Well Water — Complete",
    from: null,
    tagline: "Iron, sulfur, softening, UV",
    bullets: [
      "Air-injection iron + sulfur",
      "Sediment + spin-down",
      "1.5 cu-ft softener",
      "NSF Class B UV sterilizer",
      "Annual service contract available",
    ],
    cta: "Quote my well",
  },
];

const ADD_ONS = [
  { name: "Drinking-water remineralization", price: "Quoted" },
  { name: "Sparkling water cooler upgrade", price: "Quoted" },
  { name: "Whole-house UV sterilizer", price: "Quoted" },
  { name: "Acid neutralizer", price: "Quoted" },
  { name: "PFAS membrane upgrade", price: "Quoted" },
  { name: "Annual service contract", price: "Quoted" },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Priced from your own water test."
        lead="What a system costs depends on your water and your house, so we test first and then put a written quote in your hands. No number here is a placeholder for that."
      />

      <Section>
        <Container>
          <Stagger className="grid gap-6 lg:grid-cols-3">
            {TIERS.map((tier) => (
              <Item
                key={tier.name}
                variants={fadeUp}
                className={
                  "relative flex flex-col rounded-3xl p-8 ring-1 transition-all " +
                  (tier.featured
                    ? "bg-ink-950 text-white ring-ink-900 shadow-[0_30px_80px_-30px_rgba(8,29,77,0.5)]"
                    : "bg-white text-ink-900 ring-ink-100")
                }
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-sun-400 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ink-900">
                    <Star className="size-3 fill-ink-900" /> Most popular
                  </span>
                )}
                <span
                  className={
                    "text-xs font-semibold uppercase tracking-[0.18em] " +
                    (tier.featured ? "text-sun-300" : "text-brand-700")
                  }
                >
                  {tier.tagline}
                </span>
                <h3 className={"mt-3 text-2xl font-bold tracking-tight " + (tier.featured ? "text-white" : "text-ink-900")}>
                  {tier.name}
                </h3>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className={"text-5xl font-bold " + (tier.featured ? "text-white" : "text-ink-900")}>{tier.from}</span>
                  <span className={"text-sm " + (tier.featured ? "text-ink-300" : "text-ink-500")}>installed, from</span>
                </div>
                <ul className="mt-7 space-y-3 flex-1">
                  {tier.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <CheckCircle2 className={"mt-0.5 size-5 shrink-0 " + (tier.featured ? "text-sun-400" : "text-brand-600")} />
                      <span className={"text-sm leading-relaxed " + (tier.featured ? "text-ink-200" : "text-ink-700")}>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <Button href="/quote" variant={tier.featured ? "sun" : "primary"} size="md" arrow className="w-full">
                    {tier.cta}
                  </Button>
                </div>
              </Item>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Common add-ons</Eyebrow>
                <H2 className="mt-5">Honest line items.</H2>
                <Lead className="mt-5">
                  We don't bundle features so we can hide markup. Every add-on is priced in plain English so you
                  can pick exactly what your water needs.
                </Lead>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Stagger className="rounded-3xl bg-white ring-1 ring-ink-100 divide-y divide-ink-100">
                {ADD_ONS.map((a) => (
                  <Item
                    key={a.name}
                    variants={fadeUp}
                    className="flex items-center justify-between p-5"
                  >
                    <span className="font-medium text-ink-800">{a.name}</span>
                    <span className="font-bold text-brand-800">{a.price}</span>
                  </Item>
                ))}
              </Stagger>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="narrow">
          <Reveal>
            <Eyebrow>Financing</Eyebrow>
            <H2 className="mt-5">Ask about payment options.</H2>
            <Lead className="mt-5">
              Ask us when we quote and we will tell you what payment options are available for your
              monthly payments with zero interest. Longer terms available at competitive rates.{" "}
              <Link href="/financing" className="text-brand-700 underline">See financing details →</Link>
            </Lead>
          </Reveal>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
