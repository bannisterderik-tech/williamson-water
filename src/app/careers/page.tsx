import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Section, Eyebrow, H2, Lead } from "@/components/Section";
import { Reveal, Stagger, Item } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/Button";
import { fadeUp } from "@/lib/motion";
import { Wrench, GraduationCap, Heart, Mountain } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers — Join Pure Tap Water Co.",
  description: "Hiring water-treatment install and service techs in Montrose, CO. Paid training and hands-on mentorship.",
};

const ROLES = [
  { title: "Lead Install Technician", type: "Full-time · Montrose, CO", pay: "Pay discussed at interview" },
  { title: "Service Technician", type: "Full-time · Montrose, CO", pay: "Pay discussed at interview" },
  { title: "Apprentice (Plumbing track)", type: "Full-time · Montrose, CO", pay: "Pay discussed at interview" },
  { title: "Customer Operations Lead", type: "Full-time · Montrose, CO", pay: "Pay discussed at interview" },
];

const PERKS = [
  { icon: Wrench, title: "Real tools, real trucks", body: "We invest in our techs. Stocked trucks, ergonomic carts, and modern test gear so you can do the job right and go home on time." },
  { icon: GraduationCap, title: "Paid certifications", body: "We invest in training and promote from inside." },
  { icon: Heart, title: "Health, dental, 401(k) match", body: "Full benefits package with employer-paid medical and 4% 401(k) match after 90 days." },
  { icon: Mountain, title: "Built for the Slope", body: "Local routes, no overnights, every weekend off except emergency on-call rotation (paid)." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="We're hiring — and we treat techs like adults."
        lead="If you want a trade career, a real mentor, and a company that ships on time and pays on Friday, we should talk."
      >
        <Button href="/contact" variant="sun" size="lg" arrow>
          Get in touch
        </Button>
      </PageHero>

      <Section>
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Open roles</Eyebrow>
                <H2 className="mt-5">Four positions, all local, all year-round.</H2>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <Lead>
                  We grow steadily. We promote from inside. We don't run a churn shop. If you want to learn this
                  trade and stay in this trade — read on.
                </Lead>
              </Reveal>
            </div>
          </div>

          <Stagger className="grid gap-5 md:grid-cols-2">
            {ROLES.map((r) => (
              <Item key={r.title} variants={fadeUp} className="rounded-3xl bg-white p-7 ring-1 ring-ink-100 hover:ring-brand-300 transition-all">
                <h3 className="text-xl font-bold text-ink-900">{r.title}</h3>
                <p className="mt-2 text-sm text-ink-500">{r.type}</p>
                <p className="mt-4 text-base font-semibold text-brand-700">{r.pay}</p>
              </Item>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="max-w-2xl mb-14">
            <Reveal>
              <Eyebrow>Why work here</Eyebrow>
              <H2 className="mt-5">A trade career, not a gig.</H2>
            </Reveal>
          </div>
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PERKS.map((p) => (
              <Item key={p.title} variants={fadeUp} className="rounded-3xl bg-white p-7 ring-1 ring-ink-100">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl gradient-sun text-ink-900">
                  <p.icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink-900">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{p.body}</p>
              </Item>
            ))}
          </Stagger>
        </Container>
      </Section>

      <CTASection
        title="Want in? Send us your story."
        subtitle="Resumes optional. Tell us what you've fixed, what you're good at, and what you're trying to learn."
        primary={{ href: "/contact", label: "Get in touch" }}
      />
    </>
  );
}
