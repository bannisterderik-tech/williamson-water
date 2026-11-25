import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Section, Eyebrow, H2, Lead } from "@/components/Section";
import { Reveal, Stagger, Item } from "@/components/Reveal";
import { QuoteForm } from "@/components/QuoteForm";
import { fadeUp } from "@/lib/motion";
import { Calendar, Wrench, Truck, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Schedule Service",
  description: "Book maintenance, an install, or an inherited-system inspection with Pure Tap Water Co..",
};

const TYPES = [
  { icon: Wrench, title: "Annual service", body: "Salt fill, filter swap, system inspection, and a fresh water test. Usually under an hour." },
  { icon: Truck, title: "Inherited-system inspection", body: "Bought a home with mystery water gear? We diagnose and rebuild instead of replace whenever possible. $129 flat." },
  { icon: Calendar, title: "New install", body: "We schedule installs around your week. Most jobs are a single day. We confirm 48 hours out." },
  { icon: Phone, title: "Emergency dispatch", body: "Active leak, no water, or contamination event — call the number above. Same-day in Montrose County." },
];

export default function SchedulePage() {
  return (
    <>
      <PageHero
        eyebrow="Schedule"
        title="Book the visit. We'll do the rest."
        lead="Service, install, or emergency — drop your info below and we'll text or email a confirmation within an hour."
      />

      <Section>
        <Container>
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 mb-16">
            {TYPES.map((t) => (
              <Item key={t.title} variants={fadeUp} className="rounded-3xl bg-white p-7 ring-1 ring-ink-100">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl gradient-sun text-ink-900">
                  <t.icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink-900">{t.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{t.body}</p>
              </Item>
            ))}
          </Stagger>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>What happens next</Eyebrow>
                <H2 className="mt-5">Three steps.</H2>
                <Lead className="mt-5">Fill out the form. Get a confirmation within the hour. We show up on the day we promised.</Lead>
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
