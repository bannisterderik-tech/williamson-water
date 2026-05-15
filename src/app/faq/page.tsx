import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Section, Eyebrow, H2 } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "FAQ — Water Treatment, RO, Softeners, Well Water",
  description: "Answers to the questions we hear most often about water purification, testing, RO, softening, and well-water treatment on the Western Slope.",
};

const SECTIONS = [
  {
    title: "About our service",
    items: [
      { q: "Is the water test really free?", a: "Yes — and there's no obligation to buy. Our tech runs a 12-point analysis in your home and walks you through the report. If we don't think you need treatment, we'll tell you." },
      { q: "Do you charge for quotes?", a: "Never. Test, design, and quote are always complimentary. We make money installing systems for clients who want them — not on consultation fees." },
      { q: "Will I work with the same person?", a: "Yes. Whoever does your test will lead your install. We don't bait-and-switch with subcontractors." },
      { q: "Are you licensed and insured?", a: "Master plumber license, general liability, and workers' comp. WQA Certified Installer. Happy to send certificates of insurance on request." },
    ],
  },
  {
    title: "About the systems",
    items: [
      { q: "Softener or salt-free conditioner?", a: "Both have a place. Softeners physically remove hardness through ion exchange. Conditioners change the structure of hardness so it doesn't stick to surfaces, but they don't remove minerals. If you have appliance issues, scale, or skin issues — you want a softener. If you only care about scale on shower glass and want zero salt use — a conditioner may be enough." },
      { q: "How long does a system last?", a: "Tank-based softeners and filters: 10–15 years. RO membranes: 3–5 years. UV bulbs: 1 year. Control heads: 7–10 years. We service all of it." },
      { q: "Does softened water taste salty?", a: "No. A softener exchanges hardness for trace sodium — about 30 mg per quart, less than a slice of bread. Most clients can't taste the difference; the few who can route a hard line to the kitchen sink." },
      { q: "Will RO remove healthy minerals?", a: "RO removes all dissolved minerals — that's the point. We pair every install with a remineralization stage that adds calcium and magnesium back at the post-stage. Best of both." },
    ],
  },
  {
    title: "About pricing & financing",
    items: [
      { q: "What does an average install cost?", a: "Drinking-water RO: $1,495+. Whole-house softener: $2,195+. Whole-house combo: $3,895+. Full well-water rebuild: $4,800–$8,500. Fixed prices after testing, no surprises." },
      { q: "Do you finance?", a: "Yes — 0% APR for 12 months OAC through our financing partner, plus longer-term plans at competitive rates." },
      { q: "Are there ongoing costs?", a: "Salt for softeners ($10–$40/month). Filter changes for RO ($60–$120/yr). UV bulbs ($150/yr). Many clients sign on for our annual service plan which bundles everything for less than $300/yr." },
      { q: "What payment methods do you accept?", a: "Cash, check, ACH, all major cards (no surcharge), and our financing partner. We don't take crypto, sorry." },
    ],
  },
  {
    title: "About the install",
    items: [
      { q: "How long does an install take?", a: "Drinking RO: 90 minutes. Whole-house softener: 3–4 hours. Full well-water rebuild: 6–8 hours, one day." },
      { q: "Will you damage my floors or walls?", a: "Not on our watch. We use floor protection, shoe covers, and drop cloths. Any new penetrations are made cleanly and patched per code. We take before-and-after photos of every install." },
      { q: "Where will the equipment go?", a: "Garage, basement, mechanical room, or utility closet — wherever your service line enters the house. For RO units, the system fits under most kitchen sinks." },
      { q: "What about my existing softener?", a: "We haul it off for free on install day. If it's still serviceable we donate working units to a local re-use partner." },
    ],
  },
  {
    title: "About well water",
    items: [
      { q: "How often should I test my well?", a: "Annually for bacteria. Every 3 years for full chemistry. Whenever you notice a taste/odor/staining change. Always after well work or pump replacement." },
      { q: "Can you handle uranium or radon?", a: "Yes — both are addressable. Uranium: specialty resin or RO. Radon: aeration plus carbon. We test for both on suspected wells." },
      { q: "What if my well is shared?", a: "Shared wells are fine — we typically install at the point of entry to your home so neighbors aren't affected. Some shared-well situations benefit from treatment at the well head; we handle both." },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="The questions we hear most." lead="Don't see yours? Call or text — we'd rather answer once than have you guess." />

      <Section>
        <Container size="narrow">
          <div className="space-y-16">
            {SECTIONS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <Eyebrow>{s.title}</Eyebrow>
                <H2 className="mt-5 text-3xl sm:text-4xl">{s.title}</H2>
                <div className="mt-6">
                  <FAQAccordion items={s.items} />
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
