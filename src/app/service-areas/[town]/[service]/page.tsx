import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { townImage } from "@/lib/imagery";
import { Container } from "@/components/Container";
import { Section, Eyebrow, H2, Lead } from "@/components/Section";
import { Reveal, Stagger, Item } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { ServiceIcon } from "@/components/ServiceIcon";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Button } from "@/components/Button";
import { SERVICES, TOWNS, TOWN_SERVICE_COMBOS } from "@/lib/site";
import { SERVICE_CONTENT } from "@/lib/service-content";
import { fadeUp } from "@/lib/motion";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";

export function generateStaticParams() {
  return TOWN_SERVICE_COMBOS;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ town: string; service: string }>;
}): Promise<Metadata> {
  const { town, service } = await params;
  const t = TOWNS.find((x) => x.slug === town);
  const s = SERVICES.find((x) => x.slug === service);
  if (!t || !s) return {};
  return {
    title: `${s.name} in ${t.name}, CO`,
    description: `${s.short} — installed and serviced in ${t.name}, ${t.county} County by Pure Tap Water Co.. ${s.blurb}`,
  };
}

export default async function TownServicePage({
  params,
}: {
  params: Promise<{ town: string; service: string }>;
}) {
  const { town, service } = await params;
  const t = TOWNS.find((x) => x.slug === town);
  const s = SERVICES.find((x) => x.slug === service);
  if (!t || !s) notFound();
  const content = SERVICE_CONTENT[s.slug];

  return (
    <>
      <PageHero
        eyebrow={`${t.name}, CO · ${t.county} County`}
        title={`${s.name} in ${t.name}.`}
        lead={`${s.blurb} Engineered for ${t.name} water — not a generic spec sheet.`}
        image={townImage(t.slug)}
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Button href="/quote" variant="sun" size="lg" arrow>
            Request a water test
          </Button>
          {s.startingAt && (
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3.5 text-sm font-semibold text-white ring-1 ring-white/15">
              From <strong className="text-sun-300">{s.startingAt}</strong>
            </span>
          )}
        </div>
      </PageHero>

      <Section>
        <Container size="narrow">
          <Reveal>
            <Eyebrow>{t.name} water at a glance</Eyebrow>
            <p className="mt-5 text-balance text-2xl sm:text-3xl leading-snug font-medium text-ink-900">
              {t.water}
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>What we install</Eyebrow>
                <H2 className="mt-5">{s.name}, configured for {t.name}.</H2>
                <Lead className="mt-5">{content.longBlurb}</Lead>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Stagger className="space-y-3">
                {content.howItWorks.map((step, i) => (
                  <Item
                    key={i}
                    variants={fadeUp}
                    className="grid sm:grid-cols-12 gap-5 rounded-3xl bg-white p-6 ring-1 ring-ink-100"
                  >
                    <div className="sm:col-span-2">
                      <span className="text-2xl font-bold text-brand-700">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="sm:col-span-10">
                      <h3 className="text-lg font-bold text-ink-900">{step.title}</h3>
                      <p className="mt-1.5 text-[15px] text-ink-600 leading-relaxed">{step.body}</p>
                    </div>
                  </Item>
                ))}
              </Stagger>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="dark">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <Reveal>
              <Eyebrow dark>Outcomes for {t.name} homes</Eyebrow>
              <H2 dark className="mt-5">What changes after install.</H2>
              <ul className="mt-8 space-y-4">
                {content.results.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-sun-400" />
                    <span className="text-[16.5px] text-ink-200">{r}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-white/[0.04] ring-1 ring-white/10 p-8">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl gradient-sun text-ink-900">
                    <ServiceIcon name={s.icon} className="size-5" />
                  </span>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-sun-300">
                      {t.name}, CO
                    </span>
                    <h3 className="text-xl font-bold text-white">{s.name}</h3>
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {content.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-ink-200">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-sun-400" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="narrow">
          <div className="mb-10">
            <Reveal>
              <Eyebrow>{t.name} FAQs</Eyebrow>
              <H2 className="mt-5">{s.name} in {t.name} — answered.</H2>
            </Reveal>
          </div>
          <Reveal>
            <FAQAccordion items={content.faq} />
          </Reveal>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="max-w-2xl mb-10">
            <Reveal>
              <Eyebrow>Other services in {t.name}</Eyebrow>
              <H2 className="mt-5">More ways we help here.</H2>
            </Reveal>
          </div>
          <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.filter((x) => x.slug !== s.slug && x.slug !== "emergency-service" && x.slug !== "bottleless-coolers")
              .slice(0, 6)
              .map((x) => (
                <Item key={x.slug} variants={fadeUp}>
                  <Link
                    href={`/service-areas/${t.slug}/${x.slug}`}
                    className="group flex items-center justify-between rounded-2xl bg-white p-5 ring-1 ring-ink-100 hover:ring-brand-300 hover:-translate-y-0.5 transition-all"
                  >
                    <span>
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-ink-400">
                        <MapPin className="inline size-3 -mt-0.5" /> {t.name}
                      </span>
                      <span className="block text-base font-bold text-ink-900 group-hover:text-brand-700">
                        {x.name}
                      </span>
                    </span>
                    <ArrowRight className="size-4 text-brand-600 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Item>
              ))}
          </Stagger>
        </Container>
      </Section>

      <CTASection
        title={`${s.name} in ${t.name} — start with a water test.`}
        subtitle="We come to your home, test from the tap, and design a real solution at a fixed price."
      />
    </>
  );
}
