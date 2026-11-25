import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy" title="Your data, your call." lead="Plain-English summary up top. Full policy below." tone="light" />

      <Section>
        <Container size="narrow">
          <Reveal>
            <article className="prose prose-lg max-w-none prose-headings:text-ink-900 prose-p:text-ink-700">
              <h2>The short version</h2>
              <p>
                We collect only what we need to schedule, install, and service your water system. We never sell
                your information. We don't share it with third parties except where required to process payment,
                fulfill financing applications you submitted, or comply with the law.
              </p>
              <h2>Information we collect</h2>
              <ul>
                <li>Contact info you submit (name, phone, email, address)</li>
                <li>Service notes from your install or repair</li>
                <li>Payment information processed by our processor (we never store full card numbers)</li>
                <li>Site analytics (Google Analytics) on anonymous traffic patterns</li>
              </ul>
              <h2>How we use it</h2>
              <p>To schedule, install, and service your water system; to communicate with you about appointments and service; to process payment and warranty claims; and to occasionally let you know about service we'd recommend.</p>
              <h2>How to opt out</h2>
              <p>Reply STOP to any text. Click unsubscribe in any email. Or call us — a human will handle it.</p>
              <h2>Contact</h2>
              <p>Privacy questions? Reach us through the contact page.</p>
              <p className="text-sm text-ink-500">Last updated: this year. We rarely change this; major changes will be flagged on the site.</p>
            </article>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
