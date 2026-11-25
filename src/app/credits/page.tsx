import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { ALL_CREDITS } from "@/lib/imagery";

export const metadata: Metadata = {
  title: "Photo credits",
  description:
    "Every photograph used on this site, with its author, licence and source. These are licensed stock photographs, not pictures of our own work.",
  robots: { index: false, follow: true },
};

export default function Credits() {
  return (
    <>
      <PageHero
        eyebrow="Credits"
        title="Where these photographs came from."
        lead="Every image on this site is a royalty-free photograph licensed for commercial use. None of them show our own work, crew, equipment or customers — when we publish photos of our installs, they will be our own."
        tone="light"
      />

      <Section>
        <Container>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-ink-200 text-[11px] uppercase tracking-[0.14em] text-ink-500">
                  <th className="py-3 pr-4 font-semibold">Used for</th>
                  <th className="py-3 pr-4 font-semibold">Title</th>
                  <th className="py-3 pr-4 font-semibold">Author</th>
                  <th className="py-3 pr-4 font-semibold">Licence</th>
                  <th className="py-3 font-semibold">Source</th>
                </tr>
              </thead>
              <tbody>
                {ALL_CREDITS.map((c) => (
                  <tr key={c.key} className="border-b border-ink-100 align-top">
                    <td className="py-3 pr-4 font-medium text-ink-900">{c.key}</td>
                    <td className="py-3 pr-4 text-ink-700">{c.credit.title}</td>
                    <td className="py-3 pr-4 text-ink-700">{c.credit.author}</td>
                    <td className="py-3 pr-4 whitespace-nowrap text-ink-700">{c.credit.license}</td>
                    <td className="py-3">
                      <a
                        href={c.credit.url}
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        className="text-brand-700 underline underline-offset-2 hover:text-brand-900"
                      >
                        {c.credit.source}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-500">
            Images marked CC BY or CC BY-SA are used under those licences, which require the
            attribution given above. Resized or cropped CC BY-SA images remain under CC BY-SA.
            Images marked CC0 are released into the public domain and are credited here as a
            courtesy rather than an obligation.
          </p>
        </Container>
      </Section>
    </>
  );
}
