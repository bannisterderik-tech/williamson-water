import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Section, Eyebrow, H2 } from "@/components/Section";
import { Reveal, Stagger, Item } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { ARTICLES } from "@/lib/articles";
import { fadeUp } from "@/lib/motion";
import { Clock, ArrowUpRight, ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = ARTICLES.find((x) => x.slug === slug);
  if (!a) return {};
  return { title: a.title, description: a.excerpt };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = ARTICLES.find((x) => x.slug === slug);
  if (!a) notFound();

  const related = ARTICLES.filter((x) => x.slug !== a.slug && x.category === a.category).slice(0, 3);
  const fallback = ARTICLES.filter((x) => x.slug !== a.slug).slice(0, 3);
  const finalRelated = related.length >= 2 ? related : fallback;

  return (
    <>
      <PageHero
        eyebrow={`${a.category} · ${a.readMinutes} min read`}
        title={a.title}
        lead={a.excerpt}
      >
        <Link href="/resources" className="inline-flex items-center gap-1.5 text-sun-300 hover:text-sun-200 transition-colors text-sm font-semibold">
          <ArrowLeft className="size-4" /> All resources
        </Link>
      </PageHero>

      <Section>
        <Container size="narrow">
          <Reveal>
            <article
              className="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-ink-900
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
                prose-p:text-ink-700 prose-p:leading-relaxed prose-p:text-pretty
                prose-a:text-brand-700 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-ink-900
                prose-li:text-ink-700 prose-li:my-1
                prose-table:text-sm prose-th:bg-ink-50 prose-th:px-3 prose-th:py-2 prose-td:px-3 prose-td:py-2
              "
              dangerouslySetInnerHTML={{ __html: a.body }}
            />
          </Reveal>
        </Container>
      </Section>

      {/* Related */}
      <Section tone="muted">
        <Container>
          <div className="mb-10">
            <Eyebrow>Keep reading</Eyebrow>
            <H2 className="mt-5">More on {a.category.toLowerCase()}.</H2>
          </div>
          <Stagger className="grid gap-6 md:grid-cols-3">
            {finalRelated.map((r) => (
              <Item key={r.slug} variants={fadeUp}>
                <Link
                  href={`/resources/${r.slug}`}
                  className="group flex h-full flex-col rounded-3xl bg-white p-7 ring-1 ring-ink-100 hover:ring-brand-300 hover:-translate-y-1 transition-all"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-700">
                    {r.category} · <Clock className="inline size-3" /> {r.readMinutes} min
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-ink-900 leading-snug">{r.title}</h3>
                  <p className="mt-3 text-sm text-ink-600 flex-1">{r.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                    Read <ArrowUpRight className="size-3.5" />
                  </span>
                </Link>
              </Item>
            ))}
          </Stagger>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
