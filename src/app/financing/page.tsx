import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Section, Eyebrow, H2, Lead } from "@/components/Section";
import { Reveal, Stagger, Item } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/Button";
import { fadeUp } from "@/lib/motion";
import { CreditCard, Calendar, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Financing — 0% for 12 months OAC",
  description:
    "Williamson Water offers 0% APR financing for 12 months (OAC) and longer-term plans for water purification, softening, and well-water systems.",
};

export default function FinancingPage() {
  return (
    <>
      <PageHero
        eyebrow="Financing"
        title="Clean water now. Pay over time."
        lead="We've teamed up with a national home-improvement lender to bring you 0% for 12 months on qualifying installs — plus longer-term plans for the bigger systems. Approval in minutes. No prepayment penalty."
      />

      <Section>
        <Container>
          <Stagger className="grid gap-6 lg:grid-cols-3">
            {[
              { icon: Sparkles, title: "0% APR / 12 months", body: "Pay zero interest for a year on qualifying installs, OAC." },
              { icon: Calendar, title: "Up to 84 months", body: "Spread a full well-water rebuild over up to 7 years at competitive fixed rates." },
              { icon: ShieldCheck, title: "No prepayment penalty", body: "Pay off the balance anytime, no fees, no fine print." },
            ].map((c) => (
              <Item key={c.title} variants={fadeUp} className="rounded-3xl bg-white p-8 ring-1 ring-ink-100">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl gradient-sun text-ink-900">
                  <c.icon className="size-5" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-ink-900">{c.title}</h3>
                <p className="mt-3 text-ink-600 leading-relaxed">{c.body}</p>
              </Item>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <Reveal>
              <Eyebrow>How it works</Eyebrow>
              <H2 className="mt-5">Four steps, ten minutes, instant decision.</H2>
              <ol className="mt-8 space-y-5 text-ink-700">
                <li className="flex gap-4">
                  <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white text-sm font-bold">1</span>
                  <p>Get your water tested and receive a fixed-price quote.</p>
                </li>
                <li className="flex gap-4">
                  <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white text-sm font-bold">2</span>
                  <p>Apply online with our partner — soft credit check, no impact to score.</p>
                </li>
                <li className="flex gap-4">
                  <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white text-sm font-bold">3</span>
                  <p>Choose your term (12, 24, 36, 60, or 84 months).</p>
                </li>
                <li className="flex gap-4">
                  <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white text-sm font-bold">4</span>
                  <p>We install the system. You pay your first installment the following month.</p>
                </li>
              </ol>
              <div className="mt-8">
                <Button href="/quote" variant="primary" size="lg" arrow>Apply with my quote</Button>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl gradient-brand text-white p-10">
                <CreditCard className="size-10 text-sun-400" />
                <h3 className="mt-6 text-2xl font-bold">Sample payment</h3>
                <p className="mt-3 text-ink-200">A $4,500 install at 0% APR / 12 months:</p>
                <p className="mt-6 text-5xl font-bold tracking-tight">$375<span className="text-xl text-ink-200">/mo</span></p>
                <p className="mt-3 text-sm text-ink-300">No interest, no fees. Pay off early anytime.</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="narrow">
          <p className="text-xs text-ink-500 leading-relaxed">
            Financing terms shown are subject to credit approval through our independent lending partner.
            APR and term offered depend on credit score, loan size, and length. All loans are unsecured
            personal loans for home improvement; Williamson Water Co. is not the lender. Sample payment is
            for illustration only.
          </p>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
