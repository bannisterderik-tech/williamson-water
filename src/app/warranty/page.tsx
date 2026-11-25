import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Section, Eyebrow, H2, Lead } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";

// This page previously published a full warranty schedule that nobody at this
// company ever agreed to: a lifetime workmanship warranty, 10-year tanks,
// 5-year control heads by named manufacturer, 3-year electronics, 1-year media.
// Those are contractual promises. They are not going back up until Ken states
// the real terms. See ~/Ken Williamson/data/business.json.

export const metadata: Metadata = { title: "Warranty" };

export default function WarrantyPage() {
  return (
    <>
      <PageHero
        eyebrow="Warranty"
        title="Warranty terms come with your quote."
        lead="Workmanship and manufacturer coverage vary by the system you end up with, so we put the exact terms in writing on the quote rather than advertising numbers here."
        tone="light"
      />

      <Section>
        <Container size="narrow">
          <Reveal>
            <Eyebrow>How it works</Eyebrow>
            <H2 className="mt-5">Written down, before you decide.</H2>
            <Lead className="mt-5">
              Every quote states what is covered on our installation work and what each piece of
              hardware carries from its manufacturer, with the duration and the exclusions spelled
              out. If a manufacturer claim comes up later, bring it to us and we will walk it
              through with you.
            </Lead>
            <Lead className="mt-5">
              Want the terms before you book anything? Ask and we will send them over.
            </Lead>
          </Reveal>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
