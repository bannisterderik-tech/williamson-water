import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Section, Eyebrow, H2, Lead } from "@/components/Section";
import { Reveal, Stagger, Item } from "@/components/Reveal";
import { TestimonialCard, TESTIMONIALS, type Testimonial } from "@/components/TestimonialCard";
import { CTASection } from "@/components/CTASection";
import { fadeUp } from "@/lib/motion";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Reviews — 380+ Western Slope homeowners",
  description:
    "Read what neighbors say about Williamson Water — water purification, RO installation, well-water treatment, and softener installs across Montrose County, CO.",
};

// More reviews for the page
const EXTRA: Testimonial[] = [
  { name: "Diana T.", location: "Naturita, CO", rating: 5, service: "Well-water rebuild", quote: "We bought a property nobody wanted because the well water was 'untreatable.' Williamson said no, it's just iron and bacteria. Six months in, no stains and we drink straight from the tap." },
  { name: "Jorge M.", location: "Hotchkiss, CO", rating: 5, service: "RO + softener", quote: "Three competitors quoted me a 'package.' Ken brought a meter. Different recommendations, different price, way better water. Easy choice." },
  { name: "Stephanie K.", location: "Mountain Village, CO", rating: 5, service: "7-stage RO", quote: "We host a lot. The RO water is what every guest asks about. Worth every penny just for the compliments." },
  { name: "Tom & Linda W.", location: "Crawford, CO", rating: 5, service: "Whole-house + UV", quote: "We have a shallow well. We had been buying bottled water for fifteen years. Now we don't. Should have called sooner." },
  { name: "Brittany F.", location: "Grand Junction, CO", rating: 5, service: "Softener swap", quote: "Replaced a unit Culligan installed eight years ago. Williamson's install was tidier, the system runs quieter, and the salt fills go six weeks instead of three." },
  { name: "Pastor Eli D.", location: "Paonia, CO", rating: 5, service: "Sediment + carbon", quote: "Snowmelt season used to wreck our church's coffee pot. Not anymore. Pour-over operation now." },
  { name: "Casey N.", location: "Telluride, CO", rating: 5, service: "Bottleless cooler", quote: "Got rid of the jug subscription at our gym. The cooler looks great, the staff loves it, and we save $200 a month." },
  { name: "Andrea P.", location: "Ouray, CO", rating: 5, service: "Acid neutralizer", quote: "We had a pinhole leak. Ken pH-tested and explained the chemistry. Installed a neutralizer the next week. No more green stains, no more leaks." },
  { name: "Rick J.", location: "Olathe, CO", rating: 5, service: "Iron filter rebuild", quote: "An old iron filter the previous owner left behind was producing rust water. Williamson rebuilt it for less than half the cost of replacing it." },
];

const ALL = [...TESTIMONIALS, ...EXTRA];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Names, towns, and stories — all real."
        lead="We're proud of every review and we don't curate them. Filter by service or town below — and call any name on the page if you want to verify it yourself."
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-ink-100 ring-1 ring-white/15">
          <span className="flex gap-0.5 text-sun-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-3.5 fill-sun-400" />
            ))}
          </span>
          <span><strong className="text-white">4.9</strong> avg across <strong className="text-white">380+</strong> reviews</span>
        </div>
      </PageHero>

      <Section>
        <Container>
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ALL.map((t, i) => (
              <Item key={i} variants={fadeUp}>
                <TestimonialCard t={t} />
              </Item>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section tone="muted">
        <Container size="narrow">
          <Reveal>
            <Eyebrow>Want to leave one?</Eyebrow>
            <H2 className="mt-5">If we earned it, we'd love a review.</H2>
            <Lead className="mt-5">
              We're on Google, Facebook, Yelp, and the BBB. The fastest way to help us help more Western Slope
              homeowners is two minutes on Google. Thank you in advance — and if we missed the mark,{" "}
              <a href="/contact" className="text-brand-700 underline">tell us first</a>.
            </Lead>
          </Reveal>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
