import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./Section";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: React.ReactNode;
  tone?: "dark" | "light";
}) {
  const dark = tone === "dark";
  return (
    <section className={cn("relative isolate overflow-hidden", dark ? "mesh-water text-white" : "mesh-light text-ink-900")}>
      {dark && <div className="absolute inset-0 grain" aria-hidden />}
      <Container className="relative pt-20 sm:pt-28 pb-24 sm:pb-32">
        <Reveal className="max-w-3xl">
          {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
          <h1 className={cn("mt-5 text-balance text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02]", dark ? "text-white" : "text-ink-900")}>
            {title}
          </h1>
          {lead && (
            <p className={cn("mt-6 text-pretty max-w-2xl text-lg sm:text-xl leading-relaxed", dark ? "text-ink-200" : "text-ink-600")}>
              {lead}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </Container>
    </section>
  );
}
