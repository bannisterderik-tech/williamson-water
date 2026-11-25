import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { townImage } from "@/lib/imagery";
import { Container } from "@/components/Container";
import { Section, Eyebrow, H2, Lead } from "@/components/Section";
import { Reveal, Stagger, Item } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { TestimonialCard, TESTIMONIALS } from "@/components/TestimonialCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SERVICES, TOWNS } from "@/lib/site";
import { fadeUp } from "@/lib/motion";
import { MapPin, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return TOWNS.map((t) => ({ town: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ town: string }>;
}): Promise<Metadata> {
  const { town } = await params;
  const t = TOWNS.find((x) => x.slug === town);
  if (!t) return {};
  return {
    title: `Water Treatment & RO Systems in ${t.name}, CO`,
    description: `Pure Tap Water Co. serves ${t.name}, ${t.county} County, CO with whole-house filtration, water softening, well water systems, reverse osmosis, and emergency service.`,
  };
}

export default async function TownPage({
  params,
}: {
  params: Promise<{ town: string }>;
}) {
  const { town } = await params;
  const t = TOWNS.find((x) => x.slug === town);
  if (!t) notFound();

  return (
    <>
      <PageHero
        eyebrow={`${t.county} County, Colorado`}
        title={`Water treatment in ${t.name}, CO.`}
        lead={t.water}
        image={townImage(t.slug)}
        caption={townImage(t.slug).alt}
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-ink-100 ring-1 ring-white/15">
          <MapPin className="size-4 text-sun-400" /> {t.intro}
        </span>
      </PageHero>

      <Section>
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>What we see in {t.name}</Eyebrow>
                <H2 className="mt-5">Local water, local expertise.</H2>
                <Lead className="mt-5">
                  {t.water} Every install we do in {t.name} starts with a lab-grade test — because two homes on
                  the same street can have very different water.
                </Lead>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="rounded-3xl gradient-brand p-8 text-white">
                  <h3 className="text-2xl font-bold tracking-tight">Top jobs in {t.name}</h3>
                  <ul className="mt-6 space-y-3 text-ink-100">
                    <li>· Hard-water softener installs</li>
                    <li>· Whole-house chlorine carbon</li>
                    <li>· Reverse-osmosis drinking systems</li>
                    <li>· Well iron & sulfur treatment</li>
                    <li>· UV bacteria control on private wells</li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>

          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="max-w-2xl mb-14">
            <Reveal>
              <Eyebrow>How we work in {t.name}</Eyebrow>
              <H2 className="mt-5">Same process. Every install.</H2>
            </Reveal>
          </div>
          <ProcessSteps />
        </Container>
      </Section>

      {/* Service deep-links */}
      <Section>
        <Container>
          <div className="max-w-2xl mb-10">
            <Reveal>
              <Eyebrow>Deep dives</Eyebrow>
              <H2 className="mt-5">Services we install in {t.name}.</H2>
            </Reveal>
          </div>
          <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.filter((s) => s.slug !== "emergency-service" && s.slug !== "bottleless-coolers").map(
              (s) => (
                <Item key={s.slug} variants={fadeUp}>
                  <Link
                    href={`/service-areas/${t.slug}/${s.slug}`}
                    className="group flex items-center justify-between rounded-2xl bg-white p-5 ring-1 ring-ink-100 hover:ring-brand-300 hover:-translate-y-0.5 transition-all"
                  >
                    <span>
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-ink-400">
                        {t.name}
                      </span>
                      <span className="block text-base font-bold text-ink-900 group-hover:text-brand-700">
                        {s.name}
                      </span>
                    </span>
                    <ArrowRight className="size-4 text-brand-600 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Item>
              ),
            )}
          </Stagger>
        </Container>
      </Section>

      <Section tone="dark">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-10">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow dark>{t.name} reviews</Eyebrow>
                <H2 dark className="mt-5">Neighbors on the work.</H2>
              </Reveal>
            </div>
          </div>
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.slice(0, 3).map((tt, i) => (
              <Item key={i} variants={fadeUp}>
                <TestimonialCard t={tt} dark />
              </Item>
            ))}
          </Stagger>
        </Container>
      </Section>

      <CTASection
        title={`Request a water test in ${t.name}, CO`}
        subtitle="We come to you, test from the tap, and put a real number on a real solution."
      />
    </>
  );
}
