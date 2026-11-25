import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Terms" title="Terms of service" tone="light" />
      <Section>
        <Container size="narrow">
          <Reveal>
            <article className="prose prose-lg max-w-none prose-headings:text-ink-900 prose-p:text-ink-700">
              <h2>1. Scope</h2>
              <p>These terms apply to use of puretapco.com and to services we provide. Installation and service work is also governed by your signed work order.</p>
              <h2>2. Service estimates</h2>
              <p>Online pricing and starting points are estimates. Final pricing is fixed in a signed quote following an in-home water test.</p>
              <h2>3. Warranty</h2>
              <p>Our workmanship warranty and applicable manufacturer warranties are set out on our warranty page. Warranty does not cover damage from freezing, third-party modification, or normal wear of consumables.</p>
              <h2>4. Cancellations</h2>
              <p>You may cancel a scheduled appointment up to 24 hours in advance at no charge. Inside 24 hours we may charge a dispatch fee. We will never charge a cancellation fee on a no-show on our part.</p>
              <h2>5. Limitation of liability</h2>
              <p>Pure Tap Water Co.'s liability is limited to the amount paid for the specific service in question. We carry general liability insurance and will pay claims through that policy where applicable.</p>
              <h2>6. Governing law</h2>
              <p>These terms are governed by the laws of the State of Colorado.</p>
              <h2>7. Contact</h2>
              <p>Questions about these terms? Reach us through the contact page.</p>
              <p className="text-sm text-ink-500">Last updated: this year.</p>
            </article>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
