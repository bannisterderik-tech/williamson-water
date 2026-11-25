import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { Stagger } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { SERVICES } from "@/lib/site";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Services — Water Treatment, RO, Softening, Well Water Solutions",
  description:
    "Every water-treatment service we offer: reverse osmosis, whole-house filtration, water softening, well-water systems, UV, iron and sulfur removal, PFAS, commercial, and more.",
};

export default function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Twelve services. One fixed price. Zero pressure."
        lead="We install and service every category of residential and light-commercial water treatment on the Western Slope. Pick the symptom — or call us and we'll match the system to your test results."
      >
        <Button href="/quote" variant="sun" size="lg" arrow>Request a water test</Button>
      </PageHero>

      <Section>
        <Container>
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </Stagger>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
