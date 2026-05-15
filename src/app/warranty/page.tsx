import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Section, Eyebrow, H2, Lead } from "@/components/Section";
import { Reveal, Stagger, Item } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { fadeUp } from "@/lib/motion";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = { title: "Warranty — Lifetime Workmanship + Manufacturer-Backed Hardware" };

const ITEMS = [
  { title: "Lifetime workmanship", body: "For as long as you own the home, we warrant our install work — fittings, connections, plumbing, leaks, you name it. If it's our work and it fails, we fix it free." },
  { title: "10-year tank warranty", body: "Resin and media tanks come with a 10-year manufacturer warranty against pressure failure. We handle the paperwork." },
  { title: "5-year control head", body: "Clack, Pentair, and Fleck control heads carry a 5-year manufacturer warranty. We stock common parts and replace under warranty at no labor charge for the first year." },
  { title: "3-year electronics", body: "Display boards, sensors, and timers carry a 3-year warranty. We diagnose remotely whenever possible." },
  { title: "1-year media", body: "Catalytic carbon, calcite, and oxidation media are warranted against premature exhaustion for 1 year (typical life is 5–7 years)." },
  { title: "Annual service plan covers everything else", body: "On our service plan, we replace consumables (salt, filters, bulbs) and pre-empt issues before they become repairs." },
];

export default function WarrantyPage() {
  return (
    <>
      <PageHero
        eyebrow="Warranty"
        title="A real warranty. From a real human."
        lead="We back every install with a lifetime workmanship warranty and we handle every manufacturer claim on your behalf. You make one call. We do the rest."
      />

      <Section>
        <Container>
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ITEMS.map((it) => (
              <Item key={it.title} variants={fadeUp} className="rounded-3xl bg-white p-7 ring-1 ring-ink-100">
                <ShieldCheck className="size-9 text-brand-700" />
                <h3 className="mt-5 text-lg font-bold text-ink-900">{it.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{it.body}</p>
              </Item>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section tone="muted">
        <Container size="narrow">
          <Reveal>
            <Eyebrow>Fine print</Eyebrow>
            <H2 className="mt-5">What's covered, what's not.</H2>
            <Lead className="mt-5">
              Lifetime workmanship covers installation defects — leaks at our fittings, failed solder joints,
              plumbing made wrong. It does not cover damage from freezing, modification by another contractor,
              power surges, acts of God, or normal media exhaustion. Manufacturer warranties cover hardware
              defects per each manufacturer's stated terms — we handle the claims, you stay out of the
              paperwork.
            </Lead>
          </Reveal>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
