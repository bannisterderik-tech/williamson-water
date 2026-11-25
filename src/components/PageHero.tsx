import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./Section";
import { Photo } from "./Photo";
import type { SiteImage } from "@/lib/imagery";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
  tone = "dark",
  image,
  caption,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: React.ReactNode;
  tone?: "dark" | "light";
  /** Optional background photograph. Always sits under a heavy scrim so text stays legible. */
  image?: SiteImage;
  /** Short line naming what the photo shows — honest, and good for orientation. */
  caption?: string;
}) {
  const dark = tone === "dark" || !!image;
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden",
        image ? "bg-ink-950 text-white" : dark ? "mesh-water text-white" : "mesh-light text-ink-900"
      )}
    >
      {image && (
        <>
          <Photo
            image={image}
            className="absolute inset-0 h-full w-full"
            imgClassName="scale-105"
            sizes="100vw"
            priority
          />
          {/* Scrim: dark enough that white type always clears WCAG AA on the photo. */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-ink-950/92 via-ink-950/75 to-brand-900/70"
            aria-hidden
          />
        </>
      )}
      {dark && <div className="absolute inset-0 grain" aria-hidden />}
      <Container className="relative pt-20 sm:pt-28 pb-24 sm:pb-32">
        <Reveal className="max-w-3xl">
          {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
          <h1
            className={cn(
              "mt-5 text-balance text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02]",
              dark ? "text-white" : "text-ink-900"
            )}
          >
            {title}
          </h1>
          {lead && (
            <p
              className={cn(
                "mt-6 text-pretty max-w-2xl text-lg sm:text-xl leading-relaxed",
                dark ? "text-ink-200" : "text-ink-600"
              )}
            >
              {lead}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </Container>
      {caption && (
        <div className="relative">
          <Container>
            <p className="pb-4 text-[11px] text-white/45">{caption}</p>
          </Container>
        </div>
      )}
    </section>
  );
}
