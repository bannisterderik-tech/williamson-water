import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section, Eyebrow, H2, Lead } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { serviceImage } from "@/lib/imagery";
import { Reveal, Stagger, Item } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Button } from "@/components/Button";
import { ServiceIcon } from "@/components/ServiceIcon";
import { SERVICES, TOWNS } from "@/lib/site";
import { SERVICE_CONTENT } from "@/lib/service-content";
import { fadeUp } from "@/lib/motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} · Western Slope CO`,
    description: service.blurb,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();
  const content = SERVICE_CONTENT[service.slug];

  return (
    <>
      <PageHero
        eyebrow={service.name}
        title={content.hero}
        lead={service.blurb}
        image={serviceImage(service.slug)}
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Button href="/quote" variant="sun" size="lg" arrow>Request a water test</Button>
          {service.startingAt && (
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3.5 text-sm font-semibold text-white ring-1 ring-white/15">
              <Sparkles className="size-4 text-sun-400" />
              From <strong className="text-sun-300">{service.startingAt}</strong> · installed
            </span>
          )}
        </div>
      </PageHero>

      {/* Long blurb */}
      <Section>
        <Container size="narrow">
          <Reveal>
            <Eyebrow>Why it matters</Eyebrow>
            <p className="mt-5 text-balance text-2xl sm:text-3xl leading-snug font-medium text-ink-900">
              {content.longBlurb}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Problems */}
      <Section tone="muted">
        <Container>
          <div className="max-w-2xl mb-14">
            <Reveal>
              <Eyebrow>The problem</Eyebrow>
              <H2 className="mt-5">Symptoms we hear every week.</H2>
            </Reveal>
          </div>
          <Stagger className="grid gap-5 md:grid-cols-2">
            {content.problem.map((p, i) => (
              <Item key={i} variants={fadeUp} className="relative rounded-3xl bg-white p-7 ring-1 ring-ink-100 hover:ring-brand-300 hover:-translate-y-1 transition-all">
                <span className="absolute -left-2 top-7 h-12 w-1 rounded-full bg-sun-400" />
                <h3 className="text-xl font-bold tracking-tight text-ink-900">{p.title}</h3>
                <p className="mt-3 text-[15.5px] leading-relaxed text-ink-600">{p.body}</p>
              </Item>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* How it works */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow>How it works</Eyebrow>
                <H2 className="mt-5">A real system, properly engineered.</H2>
                <Lead className="mt-5">
                  We don't sell black boxes. Here's the actual stack we install for {service.name.toLowerCase()},
                  stage by stage.
                </Lead>
                <div className="mt-8 flex size-24 items-center justify-center rounded-3xl gradient-brand text-white">
                  <ServiceIcon name={service.icon} className="size-10" />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Stagger className="space-y-4">
                {content.howItWorks.map((s, i) => (
                  <Item
                    key={i}
                    variants={fadeUp}
                    className="group relative grid gap-5 sm:grid-cols-12 rounded-3xl bg-white p-7 ring-1 ring-ink-100 hover:ring-brand-300 transition-all"
                  >
                    <div className="sm:col-span-2">
                      <span className="block text-3xl font-bold tracking-tight text-brand-700">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="sm:col-span-10">
                      <h3 className="text-xl font-bold tracking-tight text-ink-900">{s.title}</h3>
                      <p className="mt-2 text-[15.5px] leading-relaxed text-ink-600">{s.body}</p>
                    </div>
                  </Item>
                ))}
              </Stagger>
            </div>
          </div>
        </Container>
      </Section>

      {/* Results + Features */}
      <Section tone="dark">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <Reveal>
              <Eyebrow dark>What you get</Eyebrow>
              <H2 dark className="mt-5">Outcomes, not features.</H2>
              <ul className="mt-8 space-y-4">
                {content.results.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-sun-400" />
                    <span className="text-[16.5px] text-ink-200 leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-white/[0.04] ring-1 ring-white/10 p-8">
                <h3 className="text-xl font-bold text-white">Specs & inclusions</h3>
                <ul className="mt-6 space-y-3">
                  {content.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-ink-200">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-sun-400" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 grid grid-cols-2 gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.18em] text-ink-300">
                  <div>
                    <span className="block text-sun-300">Best for</span>
                    <span className="block mt-1 text-white normal-case tracking-normal text-sm">
                      {content.goodFor.slice(0, 2).join(" · ")}
                    </span>
                  </div>
                  {service.startingAt && (
                    <div>
                      <span className="block text-sun-300">Installed from</span>
                      <span className="block mt-1 text-white normal-case tracking-normal text-sm font-bold">
                        {service.startingAt}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section tone="muted">
        <Container size="narrow">
          <div className="mb-10">
            <Reveal>
              <Eyebrow>Common questions</Eyebrow>
              <H2 className="mt-5">{service.name} — answered.</H2>
            </Reveal>
          </div>
          <Reveal>
            <FAQAccordion items={content.faq} />
          </Reveal>
        </Container>
      </Section>

      {/* Service areas for this service */}
      <Section>
        <Container>
          <div className="max-w-2xl mb-10">
            <Reveal>
              <Eyebrow>Service areas</Eyebrow>
              <H2 className="mt-5">{service.name} — installed across the Western Slope.</H2>
            </Reveal>
          </div>
          <Stagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {TOWNS.map((t) => (
              <Item key={t.slug} variants={fadeUp}>
                <Link
                  href={`/service-areas/${t.slug}/${service.slug}`}
                  className="group flex items-center justify-between rounded-2xl bg-white p-4 ring-1 ring-ink-100 hover:ring-brand-300 hover:-translate-y-0.5 transition-all"
                >
                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-ink-400">
                      {service.name.split(" ")[0]} in
                    </span>
                    <span className="block text-sm font-bold text-ink-900 group-hover:text-brand-700">
                      {t.name}, CO
                    </span>
                  </span>
                  <ArrowRight className="size-3.5 text-brand-600 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Item>
            ))}
          </Stagger>
        </Container>
      </Section>

      <CTASection
        title={`Ready to fix it? Start with a free ${service.name.toLowerCase()} consult.`}
        subtitle="Real test. Real number. No pressure."
      />
    </>
  );
}
