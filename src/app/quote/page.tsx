import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Section, Eyebrow, H2, Lead } from "@/components/Section";
import { Reveal, Stagger, Item } from "@/components/Reveal";
import { QuoteForm } from "@/components/QuoteForm";
import { fadeUp } from "@/lib/motion";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Water Test & Quote",
  description: "Book your free in-home water test and fixed-price quote — Montrose, Delta, Ouray, San Miguel counties.",
};

const INCLUDED = [
  "12-point in-home lab-grade water test",
  "Written report you keep",
  "Three-tier system recommendation (good / better / best)",
  "Fixed installed price on each option",
  "Financing options included",
  "No purchase required, no pressure",
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Free water test"
        title="Book your in-home water test."
        lead="A tech comes to you, tests from the tap (or well), and emails you a real report. If we don't think you need treatment, we'll tell you."
      />

      <Section>
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>What's included</Eyebrow>
                <H2 className="mt-5">A real test. Not a strip.</H2>
                <ul className="mt-8 space-y-4">
                  {INCLUDED.map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 size-5 shrink-0 text-brand-600" />
                      <span className="text-ink-700">{i}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-10 rounded-3xl gradient-brand text-white p-7">
                  <Eyebrow dark>Heads up</Eyebrow>
                  <p className="mt-4 text-pretty text-ink-100 leading-relaxed">
                    During snowmelt season (Apr–Jun) we book about 10 days out. For confirmed emergencies we
                    drop everything and roll same day. Call us — we'll triage.
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <QuoteForm />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
