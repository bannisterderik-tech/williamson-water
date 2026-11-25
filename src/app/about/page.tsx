import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { IMAGES } from "@/lib/imagery";
import { Container } from "@/components/Container";
import { Section, Eyebrow, H2, Lead } from "@/components/Section";
import { Reveal, Stagger, Item } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { StatBlock } from "@/components/StatBlock";
import { fadeUp } from "@/lib/motion";
import { BUSINESS } from "@/lib/site";
import { Award, Heart, ShieldCheck, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Ken & the team",
  description:
    "Pure Tap Water Co. is a water purification, testing, and RO installation company in Montrose, CO — serving the Western Slope since 2009.",
};

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Test first. Sell never.",
    body:
      "Every recommendation we make starts with a lab-grade water test. We will tell you when you don't need treatment — and we have. Often.",
  },
  {
    icon: Heart,
    title: "Treat your home like ours.",
    body:
      "Shoe covers. Drop cloths. Labeled lines. Cleaner than we found it. We take pictures before and after.",
  },
  {
    icon: Award,
    title: "Build it to outlast us.",
    body:
      "Commercial-grade media. Stainless fittings. Tank-warranty steel. We don't install anything we wouldn't put in our own house.",
  },
  {
    icon: Users,
    title: "Answer the phone.",
    body:
      "Ken answers his own phone before 8 pm, every day. The whole team is reachable. No tickets, no holds, no robot menus.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A real local water company. Built on one promise."
        lead="Local water treatment for the Uncompahgre Valley, the North Fork and the San Juans — specified from your own water test rather than a catalog."
        image={IMAGES.sanjuans}
        caption={IMAGES.sanjuans.alt}
      />

      <Section>
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <div
                  className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-cover bg-center ring-1 ring-ink-200 grain"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(8,29,77,0.0) 40%, rgba(8,29,77,0.8) 100%), url('https://picsum.photos/seed/ken-williamson-portrait/800/1000')",
                  }}
                  aria-label="Ken Williamson"
                >
                  <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sun-300">Owner & Master Plumber</span>
                    <h3 className="mt-2 text-3xl font-bold tracking-tight">Ken Williamson</h3>
                    <p className="mt-2 text-sm text-ink-200">
                      Montrose, Colorado
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>The story</Eyebrow>
                <H2 className="mt-5">From a single truck to the Western Slope's water company.</H2>
                <div className="mt-6 prose prose-lg max-w-none text-ink-700 prose-headings:text-ink-900 prose-p:leading-relaxed prose-p:text-pretty">
                  <p>
                    Ken Williamson grew up on a private well in Olathe. By the time he was twelve, he was changing
                    the carbon block in the family RO and watching his dad rebuild the well-water softener every
                    summer. Water was never academic for him — it was the difference between his mom's iced tea
                    tasting good and tasting like rust.
                  </p>
                  <p>
                    After ten years installing for a national chain, Ken got tired of being told to upsell systems
                    his customers didn't need. In 2009 he bought a truck, hired one tech, and opened Williamson
                    Water with a simple rule: <strong>test first, sell never</strong>.
                  </p>
                  <p>
                    Today we run service across the Uncompahgre Valley, the North Fork and the San Juans, and
                    annual maintenance contracts on more than 1,200 homes. The rule hasn't changed.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <section className="relative gradient-brand text-white py-24">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          </div>
        </Container>
      </section>

      <Section tone="muted">
        <Container>
          <div className="max-w-2xl mb-14">
            <Reveal>
              <Eyebrow>What we believe</Eyebrow>
              <H2 className="mt-5">Four rules we live by.</H2>
              <Lead className="mt-5">
                If a competitor tells you something that contradicts one of these, get a second opinion.
              </Lead>
            </Reveal>
          </div>
          <Stagger className="grid gap-5 md:grid-cols-2">
            {VALUES.map((v) => (
              <Item key={v.title} variants={fadeUp} className="rounded-3xl bg-white p-7 ring-1 ring-ink-100">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl gradient-sun text-ink-900">
                  <v.icon className="size-5" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-ink-900">{v.title}</h3>
                <p className="mt-3 text-ink-600 leading-relaxed">{v.body}</p>
              </Item>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-2xl mb-14">
            <Reveal>
              <Eyebrow>The team</Eyebrow>
              <H2 className="mt-5">The folks who actually show up.</H2>
            </Reveal>
          </div>
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Ken Williamson", role: "Owner & Master Plumber", seed: "ken-1" },
              { name: "Daniel R.", role: "Lead Install Tech", seed: "daniel-2" },
              { name: "Marisol V.", role: "Operations & Scheduling", seed: "marisol-3" },
              { name: "Caleb H.", role: "Service & Maintenance", seed: "caleb-4" },
            ].map((p) => (
              <Item key={p.name} variants={fadeUp} className="rounded-3xl bg-white ring-1 ring-ink-100 overflow-hidden">
                <div
                  className="aspect-[4/5] bg-cover bg-center"
                  style={{ backgroundImage: `url('https://picsum.photos/seed/${p.seed}/400/500')` }}
                  aria-label={p.name}
                />
                <div className="p-5">
                  <h3 className="text-base font-bold text-ink-900">{p.name}</h3>
                  <p className="text-xs uppercase tracking-[0.18em] text-brand-700">{p.role}</p>
                </div>
              </Item>
            ))}
          </Stagger>
          <p className="mt-8 text-center text-sm text-ink-500">
            Licensed in Colorado · {BUSINESS.license}
          </p>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
