import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { HeroDroplet } from "@/components/HeroDroplet";
import { Reveal, Stagger, Item } from "@/components/Reveal";
import { Eyebrow, H2, Lead, Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard, TESTIMONIALS } from "@/components/TestimonialCard";
import { StatBlock } from "@/components/StatBlock";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { Marquee } from "@/components/Marquee";
import { WaveDivider } from "@/components/WaveDivider";
import { fadeUp } from "@/lib/motion";
import { BUSINESS, SERVICES, TOWNS } from "@/lib/site";
import { IMAGES, townImage } from "@/lib/imagery";
import { Photo } from "@/components/Photo";
import { ArrowRight, Sparkles, Phone, MapPin, Star } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink-950 text-white">
        {/* Licensed stock photograph, not a job this company performed. See /credits. */}
        <Photo image={IMAGES.montrose} className="absolute inset-0 h-full w-full" sizes="100vw" priority />
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-ink-950/78 to-brand-950/45"
          aria-hidden
        />
        <div className="absolute inset-0 grain" aria-hidden />
        <Container className="relative grid lg:grid-cols-12 gap-12 pt-16 sm:pt-24 pb-24 sm:pb-32 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-sun-300 ring-1 ring-white/15">
                <Sparkles className="size-3.5" /> Free in-home water test · 12-point report
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-balance text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-bold tracking-tight leading-[0.98] text-white">
                Know what&rsquo;s in your water.{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-sun-300 via-sun-400 to-sun-300 bg-clip-text text-transparent">
                    Then fix it.
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 300 12"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M2 7 C 75 1, 150 11, 298 5"
                      stroke="url(#hg)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <defs>
                      <linearGradient id="hg" x1="0" x2="1">
                        <stop stopColor="#ffd24a" />
                        <stop offset="1" stopColor="#f4ac00" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-pretty text-lg sm:text-xl leading-relaxed text-ink-200">
                Water purification, testing, and reverse-osmosis installation —
                engineered for hard water, well water, and PFAS reality across Montrose County and beyond.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button href="/quote" variant="sun" size="lg" arrow>
                  Book my free water test
                </Button>
                {BUSINESS.phone && (
                  <a
                    href={BUSINESS.phoneHref ?? undefined}
                    className="inline-flex items-center gap-2 rounded-full bg-white/5 px-6 py-3.5 text-white ring-1 ring-white/20 hover:bg-white/10 transition-colors"
                  >
                    <Phone className="size-4 text-sun-400" />
                    <span className="font-semibold">{BUSINESS.phone}</span>
                  </a>
                )}
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-300">
                <div className="flex items-center gap-2">
                  <MapPin className="size-4 text-sun-400" />
                  <span>Water treatment across the Uncompahgre Valley &amp; North Fork</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <HeroDroplet />
          </div>
        </Container>

        <div className="relative">
          <WaveDivider color="text-white" />
        </div>
      </section>

      {/* TRUST MARQUEE */}
      <div className="py-10 border-y border-ink-100 bg-white">
        <Marquee
          items={[
            "NSF/ANSI 58 Compliant",
            "Master Plumber Licensed",
            "Better Business Bureau A+",
            "Project 7 Water Authority Familiar",
            "Lifetime Workmanship Warranty",
            "Same-Day Emergency Service",
            "Veteran & Senior Discount",
          ]}
        />
      </div>

      {/* PROBLEMS WE SOLVE */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>What's wrong with your water?</Eyebrow>
                <H2 className="mt-5">
                  If it tastes off, smells off, or stains everything it touches —
                  <span className="text-brand-700"> we already know what it is.</span>
                </H2>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <Lead>
                  After 15 years of testing Western Slope water — from Project 7 city lines to remote
                  Uncompahgre wells — there isn't a problem we haven't fixed. Twice.
                </Lead>
              </Reveal>
            </div>
          </div>

          <Stagger className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { p: "Hard water scale on every fixture", c: "Softener" },
              { p: "Orange iron stains in sinks & toilets", c: "Iron filter" },
              { p: "Rotten-egg sulfur smell", c: "Air-injection oxidation" },
              { p: "Chlorine taste in the kitchen", c: "Whole-house carbon" },
              { p: "Spotty glassware after the dishwasher", c: "Softener + RO" },
              { p: "Blue-green stains, pinhole leaks", c: "Acid neutralizer" },
              { p: "Bacteria found in well test", c: "UV sterilizer" },
              { p: "PFAS in your county water report", c: "Certified RO" },
            ].map((row, i) => (
              <Item
                key={i}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-ink-100 hover:ring-brand-300 transition-all"
              >
                <span className="absolute -right-6 -top-6 size-24 rounded-full bg-brand-50 transition-transform group-hover:scale-125" />
                <div className="relative">
                  <p className="text-sm text-ink-500">Symptom</p>
                  <p className="mt-1 text-[17px] font-semibold text-ink-900 leading-snug">{row.p}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-brand-700 px-3 py-1 text-xs font-semibold text-white">
                    {row.c} <ArrowRight className="size-3" />
                  </div>
                </div>
              </Item>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* SERVICES */}
      <Section tone="muted">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <div className="max-w-2xl">
              <Reveal>
                <Eyebrow>Services</Eyebrow>
                <H2 className="mt-5">One contractor. Every water problem.</H2>
                <Lead className="mt-5">
                  We're the only call you need — from a simple drinking-water RO to a six-stage well-water
                  rebuild. Every system is sized to your test results, not your wallet.
                </Lead>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <Button href="/services" variant="secondary" arrow>
                Browse all services
              </Button>
            </Reveal>
          </div>
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 9).map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* WHY US (stats) */}
      <section className="relative isolate overflow-hidden gradient-brand text-white">
        <div className="absolute inset-0 grain" aria-hidden />
        <Container className="relative py-24 sm:py-32">
          <div className="grid gap-16 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow dark>By the numbers</Eyebrow>
                <H2 dark className="mt-5">
                  A real local business.
                </H2>
                <p className="mt-6 text-pretty text-lg text-ink-200 leading-relaxed">
                  No franchise overlord. No call center. Local water treatment, specified from your own
                  test results rather than a catalog.
                </p>
                <div className="mt-8">
                  <Button href="/about" variant="sun" arrow>About Ken & the team</Button>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-2 gap-10">
                          </div>
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <Section>
        <Container>
          <div className="max-w-3xl mb-14">
            <Reveal>
              <Eyebrow>How it works</Eyebrow>
              <H2 className="mt-5">A water company that actually tests the water first.</H2>
              <Lead className="mt-5">
                Most of our competitors quote a softener over the phone. We don't. Every recommendation starts
                with a free, in-home, 12-point water test. Real instruments, not a strip and a guess.
              </Lead>
            </Reveal>
          </div>
          <ProcessSteps />
        </Container>
      </Section>

      {/* TESTIMONIALS — hidden until real, URL-backed reviews exist (rail 3) */}
      {TESTIMONIALS.length > 0 && (
      <Section tone="dark" className="overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow dark>Real reviews</Eyebrow>
                <H2 dark className="mt-5">Neighbors talking about their water.</H2>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <p className="text-pretty text-lg text-ink-300">
                  Reviews are published only from verifiable public sources.
                </p>
              </Reveal>
            </div>
          </div>

          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.slice(0, 6).map((t, i) => (
              <Item key={i} variants={fadeUp}>
                <TestimonialCard t={t} dark />
              </Item>
            ))}
          </Stagger>

          <div className="mt-10 text-center">
            <Button href="/reviews" variant="secondary" arrow>Read more reviews</Button>
          </div>
        </Container>
      </Section>
      )}

      {/* SERVICE AREAS */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Where we serve</Eyebrow>
                <H2 className="mt-5">From Montrose to Telluride and everywhere in between.</H2>
                <Lead className="mt-5">
                  We know which streets have Project 7 water and which mesa is on a private well. We've
                  pulled iron out of hundreds of homes in this valley — yours is next.
                </Lead>
                <div className="mt-8">
                  <Button href="/service-areas" variant="primary" arrow>
                    See all service areas
                  </Button>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Stagger className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {TOWNS.map((t) => (
                  <Item key={t.slug} variants={fadeUp}>
                    <Link
                      href={`/service-areas/${t.slug}`}
                      className="group flex items-center justify-between gap-3 rounded-2xl bg-white p-5 ring-1 ring-ink-100 hover:ring-brand-300 hover:-translate-y-0.5 transition-all"
                    >
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-ink-400">
                          {t.county} County
                        </span>
                        <span className="block text-lg font-bold text-ink-900 group-hover:text-brand-700 transition-colors">
                          {t.name}, CO
                        </span>
                      </span>
                      <MapPin className="size-4 text-brand-600" />
                    </Link>
                  </Item>
                ))}
              </Stagger>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section tone="muted">
        <Container size="narrow">
          <div className="text-center mb-12">
            <Reveal>
              <Eyebrow>Common questions</Eyebrow>
              <H2 className="mt-5">Before you spend a dollar.</H2>
            </Reveal>
          </div>
          <Reveal>
            <FAQAccordion
              items={[
                {
                  q: "Is the water test really free?",
                  a: "Yes — a tech comes to your home, runs a 12-point analysis (hardness, iron, pH, TDS, chlorine, alkalinity, nitrates, sulfur, hydrogen sulfide, bacteria indicator, lead screen, and a tap-sample taste/odor) and walks you through the report. No purchase required. If we don't think you need treatment, we'll tell you.",
                },
                {
                  q: "How are you different from the big national chains?",
                  a: "We're locally owned and operated. We custom-spec every system to your actual test results instead of selling a one-size-fits-all softener, and we don't lock you into a rental contract.",
                },
                {
                  q: "What does a typical install cost?",
                  a: "It depends entirely on what your water test shows. We quote a fixed number after testing — no catalog pricing.",
                },
                {
                  q: "Do you offer financing?",
                  a: "Ask us when we quote — we will tell you what options are available at that time.",
                },
                {
                  q: "What kind of warranty comes with installs?",
                  a: "Lifetime workmanship warranty on every install. Manufacturer warranties on tanks (10-year), heads (5-year), and electronics (3-year). We're the only call you make — we handle the manufacturer paperwork for you.",
                },
                {
                  q: "Do you service systems other companies installed?",
                  a: "Absolutely. We do a $129 inherited-system inspection, replace the salt/media on schedule, and can usually rebuild a tired unit for less than half the cost of a new system.",
                },
              ]}
            />
          </Reveal>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
