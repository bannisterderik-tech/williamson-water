"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { BUSINESS, NAV } from "@/lib/site";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden md:block bg-ink-950 text-ink-200 text-xs">
        <Container className="flex h-9 items-center justify-between">
          <span className="tracking-wide">Serving Montrose County & the Western Slope</span>
          <div className="flex items-center gap-6">
            <Link href="/financing" className="hover:text-white transition-colors">Payment options</Link>
            <Link href="/quote" className="hover:text-white transition-colors">Request a water test</Link>
            <a href={BUSINESS.phoneHref ?? undefined} className="inline-flex items-center gap-1.5 text-sun-300 hover:text-sun-200 transition-colors">
              <Phone className="size-3.5" /> {BUSINESS.phone}
            </a>
          </div>
        </Container>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 border-b border-ink-100/60",
          scrolled ? "bg-white/92 backdrop-blur-md shadow-[0_8px_24px_-16px_rgba(8,29,77,0.18)]" : "bg-white"
        )}
      >
        <Container className="flex h-18 items-center justify-between py-3">
          <Link href="/" aria-label="Pure Tap Water Co. home">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item, i) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenIdx(i)}
                onMouseLeave={() => setOpenIdx(null)}
              >
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-ink-700 hover:text-ink-900 hover:bg-ink-50 transition-colors"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={cn("size-3.5 transition-transform", openIdx === i && "rotate-180")}
                    />
                  )}
                </Link>
                {item.children && openIdx === i && (
                  <div className="absolute left-0 top-full pt-2 w-[300px]">
                      <div className="rounded-2xl bg-white p-2 shadow-xl ring-1 ring-ink-100">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="block rounded-xl px-3 py-2 text-sm text-ink-700 hover:bg-brand-50 hover:text-brand-800 transition-colors"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button href="/quote" variant="primary" size="sm" arrow className="hidden sm:inline-flex">
              Request a water test
            </Button>
            <button
              className="lg:hidden inline-flex size-10 items-center justify-center rounded-full ring-1 ring-ink-200 text-ink-700"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-ink-950/60 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white p-6 overflow-y-auto"
          >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  className="inline-flex size-10 items-center justify-center rounded-full ring-1 ring-ink-200"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="size-5" />
                </button>
              </div>
              <nav className="mt-8 flex flex-col">
                {NAV.map((item) => (
                  <div key={item.label} className="border-b border-ink-100 py-2">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-base font-semibold text-ink-900"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-3 mb-2 flex flex-col">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            onClick={() => setOpen(false)}
                            className="py-1.5 text-sm text-ink-600 hover:text-brand-700"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-8 space-y-3">
                <Button href="/quote" variant="primary" size="lg" className="w-full" arrow>
                  Request a water test
                </Button>
                <a
                  href={BUSINESS.phoneHref ?? undefined}
                  className="flex items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-white font-semibold"
                >
                  <Phone className="size-4" /> {BUSINESS.phone}
                </a>
              </div>
          </div>
        </div>
      )}
    </>
  );
}
