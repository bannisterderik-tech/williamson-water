import { Container } from "./Container";
import { Button } from "./Button";
import { Phone, ShieldCheck } from "lucide-react";
import { BUSINESS } from "@/lib/site";
import { Reveal } from "./Reveal";

export function CTASection({
  title = "Find out what's in your water — for free.",
  subtitle = "12-point in-home test. Honest recommendation. Fixed-price quote. No pressure to buy.",
  primary = { href: "/quote", label: "Book my free water test" },
}: {
  title?: string;
  subtitle?: string;
  primary?: { href: string; label: string };
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 mesh-water" aria-hidden />
      <div className="absolute inset-0 grain pointer-events-none" aria-hidden />
      <Container className="relative py-24 sm:py-32">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-sun-300 ring-1 ring-white/15">
              <ShieldCheck className="size-3.5" /> No-obligation consult
            </span>
            <h2 className="mt-6 text-balance text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white">
              {title}
            </h2>
            <p className="mt-6 text-pretty text-lg sm:text-xl text-ink-200">{subtitle}</p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={primary.href} variant="sun" size="lg" arrow>
                {primary.label}
              </Button>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-white/5 px-6 py-3.5 text-white ring-1 ring-white/20 hover:bg-white/10 transition-colors"
              >
                <Phone className="size-4 text-sun-400" />
                <span className="font-semibold">{BUSINESS.phone}</span>
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
