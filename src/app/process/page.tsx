import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Section, Eyebrow, H2, Lead } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ProcessSteps } from "@/components/ProcessSteps";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Our Process — Test, Design, Install, Support",
  description:
    "How Williamson Water designs and installs water purification systems on the Western Slope: 12-point test, custom design, single-day install, lifetime support.",
};

const DETAILS = [
  {
    n: "01",
    title: "Free, in-home water test",
    body:
      "We come to your home, run a 12-point lab-grade water test, and walk you through every number on the report. Hardness, iron, pH, TDS, chlorine, alkalinity, sulfur, nitrates, lead screen, bacteria indicator, and a taste/odor panel. Takes 45 minutes. Costs $0.",
    bullets: [
      "Tech comes to you — no kit to ship",
      "Lab-grade meters, not strips",
      "Bacteria indicator culture if well-water",
      "Written report you keep",
    ],
  },
  {
    n: "02",
    title: "Custom system design",
    body:
      "We blueprint the system based on your test results, household size, peak demand, and your existing plumbing. We bring three options — good, better, best — and quote each at a fixed installed price.",
    bullets: [
      "Three quote tiers, every time",
      "Fixed-price guarantee — no change orders",
      "Brand-agnostic — Clack, Pentair, Kinetico, others",
      "Financing options included on every quote",
    ],
  },
  {
    n: "03",
    title: "Single-day, code-compliant install",
    body:
      "Most installs are done in one day by a master-plumber-led crew. We protect floors, label every line, photograph the work, and program the system to your household profile before we leave.",
    bullets: [
      "Master plumber on every job",
      "Floor protection & shoe covers",
      "Lines labeled and photographed",
      "Walk-through demo before we leave",
    ],
  },
  {
    n: "04",
    title: "30-day re-test & lifetime support",
    body:
      "Thirty days after install we come back, re-test the water, verify everything performs to spec, and set you up on a maintenance cadence that fits your usage. Ken's cell is on every invoice.",
    bullets: [
      "30-day post-install re-test",
      "Annual maintenance contracts available",
      "Lifetime workmanship warranty",
      "Direct line to a real human",
    ],
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our process"
        title="Test it. Design it. Install it. Stand behind it."
        lead="The water industry has a trust problem. We fix it the same way every job — measure first, recommend second, install with a master plumber, and never disappear after the check clears."
      />

      <Section>
        <Container>
          <ProcessSteps />
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="space-y-12">
            {DETAILS.map((d, i) => (
              <Reveal key={d.n} delay={i * 0.05}>
                <div className="grid lg:grid-cols-12 gap-10 items-start rounded-3xl bg-white p-8 sm:p-12 ring-1 ring-ink-100">
                  <div className="lg:col-span-3">
                    <span className="text-6xl font-bold tracking-tight text-brand-700/15">{d.n}</span>
                    <Eyebrow>Step {d.n}</Eyebrow>
                  </div>
                  <div className="lg:col-span-9">
                    <H2 className="text-3xl sm:text-4xl">{d.title}</H2>
                    <Lead className="mt-4">{d.body}</Lead>
                    <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                      {d.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-ink-700">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sun-400" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
