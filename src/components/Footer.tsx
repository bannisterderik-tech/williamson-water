import Link from "next/link";
import { BUSINESS, FOOTER_LINKS } from "@/lib/site";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { Phone, Mail, MapPin } from "lucide-react";

function IconFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13 22v-9h3l1-4h-4V6.5C13 5.6 13.4 5 14.7 5H17V1.2C16.6 1.1 15.2 1 13.8 1c-3 0-5 1.7-5 5v3H5v4h3.8v9z" />
    </svg>
  );
}
function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
function IconYoutube(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23 7.2s-.2-1.6-.9-2.3c-.8-.9-1.7-.9-2.2-1C16.6 3.6 12 3.6 12 3.6s-4.6 0-7.9.3c-.5.1-1.4.1-2.2 1C1.2 5.6 1 7.2 1 7.2S.8 9 .8 10.9v1.7c0 1.8.2 3.7.2 3.7s.2 1.6.9 2.3c.8.9 1.9.8 2.4.9 1.7.2 7.7.3 7.7.3s4.6 0 7.9-.3c.5-.1 1.4-.1 2.2-1 .7-.7.9-2.3.9-2.3s.2-1.8.2-3.7v-1.7c0-1.8-.2-3.7-.2-3.7zM10 14.6V8.2l6 3.2-6 3.2z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden gradient-ink text-ink-200 mt-32">
      {/* Wave divider top */}
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden
        className="block w-full h-12 -mb-px text-white"
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 L0,0 Z"
          fill="currentColor"
        />
      </svg>

      <Container className="pt-16 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo mono />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-300">
              Family-owned water purification, testing, and reverse osmosis installation —
              serving Montrose County and the Western Slope of Colorado since {BUSINESS.founded}.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a href={BUSINESS.phoneHref} className="flex items-center gap-3 text-white hover:text-sun-300 transition-colors">
                <Phone className="size-4 text-sun-400" /> {BUSINESS.phone}
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="size-4 text-sun-400" /> {BUSINESS.email}
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="size-4 text-sun-400 mt-0.5" />
                <span>
                  {BUSINESS.address.line1}
                  <br />
                  {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
                </span>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <a href={BUSINESS.socials.facebook} aria-label="Facebook" className="inline-flex size-10 items-center justify-center rounded-full ring-1 ring-white/20 hover:bg-white/10 transition-colors">
                <IconFacebook className="size-4" />
              </a>
              <a href={BUSINESS.socials.instagram} aria-label="Instagram" className="inline-flex size-10 items-center justify-center rounded-full ring-1 ring-white/20 hover:bg-white/10 transition-colors">
                <IconInstagram className="size-4" />
              </a>
              <a href={BUSINESS.socials.youtube} aria-label="YouTube" className="inline-flex size-10 items-center justify-center rounded-full ring-1 ring-white/20 hover:bg-white/10 transition-colors">
                <IconYoutube className="size-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="text-white text-xs font-semibold uppercase tracking-[0.18em]">{heading}</h4>
                <ul className="mt-4 space-y-2.5">
                  {links.slice(0, 10).map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-ink-300 hover:text-white transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-ink-400">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} {BUSINESS.legalName}. All rights reserved.</p>
            <p className="text-ink-500">{BUSINESS.license}</p>
          </div>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
