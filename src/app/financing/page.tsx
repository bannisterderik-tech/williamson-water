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
  title: "Financing",
  description:
    "Payment options for water purification, softening and well-water systems on the Western Slope — ask us when we quote your system.",
};

export default function FinancingPage() {
  return (
    <>
      <PageHero
        eyebrow="Financing"
        title="Clean water now. Pay over time."
        lead="A whole-house or well-water system is a real investment. Ask us about payment options when we quote yours and we will tell you exactly what is available at that time."
      />

      <Section>
        <Container>
          <Stagger className="grid gap-6 lg:grid-cols-3">
            {[
              { icon: Sparkles, title: "Quoted up front", body: "A fixed written number after testing — not a catalog price." },
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
                  <p>Tell us you&rsquo;d like to spread the cost and we&rsquo;ll walk you through the options available.</p>
                </li>
                <li className="flex gap-4">
                  <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white text-sm font-bold">3</span>
                  <p>Pick the arrangement that works for you before anything is ordered.</p>
                </li>
                <li className="flex gap-4">
                  <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white text-sm font-bold">4</span>
                  <p>We install the system. You pay your first installment the following month.</p>
                </li>
              </ol>
              <div className="mt-8">
                <Button href="/quote" variant="primary" size="lg" arrow>Get my quote</Button>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl gradient-brand text-white p-10">
                <CreditCard className="size-10 text-sun-400" />
                <h3 className="mt-6 text-2xl font-bold">Ask when we quote</h3>
                <p className="mt-3 text-ink-200">
                  We will not quote a rate or a monthly payment here that we cannot honour. Once your
                  system is specified from your water test, we will tell you exactly what payment
                  options are available for that number.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="narrow">
          <p className="text-xs text-ink-500 leading-relaxed">
            Any payment arrangement is subject to the terms of the provider offering it at the time of
            your quote. We are not a lender and we do not advertise a rate, term or monthly payment
            before your system has been specified.
          </p>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
