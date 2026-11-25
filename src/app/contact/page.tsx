import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { QuoteForm } from "@/components/QuoteForm";
import { BUSINESS } from "@/lib/site";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Talk to a real human",
  description: "Get in touch with Pure Tap Water Co. — phone, email, address, and direct booking for in-home water tests.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="A real human. On the other end. Today."
        lead="Phone is fastest. Email gets a reply as soon as we can during business hours. After-hours emergencies — call the number below."
      />

      <Section>
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="space-y-7">
                  <ContactRow
                    icon={Phone}
                    label="Phone"
                    value={BUSINESS.phone}
                    href={BUSINESS.phoneHref}
                  />
                  <ContactRow
                    icon={Mail}
                    label="Email"
                    value={BUSINESS.email}
                    href={BUSINESS.email ? `mailto:${BUSINESS.email}` : undefined}
                  />
                  <ContactRow
                    icon={MapPin}
                    label="Shop / mailing"
                    value={
                      BUSINESS.address.line1
                        ? `${BUSINESS.address.line1}, ${BUSINESS.address.city}, ${BUSINESS.address.state} ${BUSINESS.address.zip}`
                        : null
                    }
                  />
                  {BUSINESS.hours.length > 0 && (
                  <div className="flex items-start gap-4">
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl gradient-brand text-white">
                      <Clock className="size-5" />
                    </span>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">Hours</span>
                      <ul className="mt-1.5 space-y-1 text-ink-800">
                        {BUSINESS.hours.map((h) => (
                          <li key={h.day} className="flex gap-3 text-sm">
                            <span className="w-24 font-semibold">{h.day}</span>
                            <span className="text-ink-600">{h.hours}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  )}
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <QuoteForm />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string | null;
  href?: string | null;
}) {
  if (!value) return null;   // fact not supplied yet — render nothing, never a placeholder
  const Wrapper: React.ElementType = href ? "a" : "div";
  return (
    <Wrapper href={href ?? undefined} className="flex items-start gap-4 group">
      <span className="inline-flex size-12 items-center justify-center rounded-2xl gradient-brand text-white">
        <Icon className="size-5" />
      </span>
      <div>
        <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">{label}</span>
        <span className={"mt-1.5 block text-lg font-semibold text-ink-900 " + (href ? "group-hover:text-brand-700 transition-colors" : "")}>{value}</span>
      </div>
    </Wrapper>
  );
}
