import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Section, Eyebrow, H2, Lead } from "@/components/Section";
import { Stagger, Item, Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { TOWNS } from "@/lib/site";
import { fadeUp } from "@/lib/motion";
import { MapPin, Users, Droplets, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Service Areas — Montrose County, Delta, Ouray, San Miguel · CO",
  description:
    "Williamson Water serves Montrose, Delta, Olathe, Ridgway, Ouray, Telluride, Cedaredge, Paonia, and the surrounding Western Slope.",
};

export default function ServiceAreas() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="We know your water — because we live here too."
        lead="From Project 7's treated supply to the wildest private wells on Grand Mesa, we work this water every day. Pick your town for a local breakdown."
      />

      <Section>
        <Container>
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TOWNS.map((t) => (
              <Item key={t.slug} variants={fadeUp}>
                <Link
                  href={`/service-areas/${t.slug}`}
                  className="group relative flex h-full flex-col rounded-3xl bg-white p-7 ring-1 ring-ink-100 hover:ring-brand-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-24px_rgba(8,29,77,0.25)] transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl gradient-brand text-white">
                      <MapPin className="size-5" />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-400">
                      {t.county} County
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-bold tracking-tight text-ink-900">
                    {t.name}, CO
                  </h3>
                  <p className="mt-2 text-sm text-ink-500">{t.intro}</p>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink-700 line-clamp-4">{t.water}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-ink-100 pt-5">
                    <span className="inline-flex items-center gap-1.5 text-xs text-ink-500">
                      <Users className="size-3.5" /> Pop. {t.population}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 group-hover:text-brand-900">
                      Local guide
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Item>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Outside these towns?</Eyebrow>
                <H2 className="mt-5">If you're within 75 miles of Montrose, we drive to you.</H2>
                <Lead className="mt-5">
                  We regularly install in Gunnison, Crested Butte, Mountain Village, Grand Junction, Naturita,
                  Nucla, Crawford, Hotchkiss, Norwood, and Lake City. If your zip starts with 81, the answer is
                  probably yes — call to confirm.
                </Lead>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="rounded-3xl bg-white p-8 ring-1 ring-ink-100">
                  <Droplets className="size-9 text-brand-600" />
                  <h3 className="mt-5 text-xl font-bold text-ink-900">Why local matters in water treatment</h3>
                  <p className="mt-3 text-ink-600 leading-relaxed">
                    Western Slope water varies block-to-block. A softener spec for Cedaredge will dramatically
                    overshoot in Olathe. An iron program for the Uncompahgre will under-treat a Grand Mesa well.
                    We pull state-certified lab tests, walk your home, and engineer for your water — not an
                    industry average.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
