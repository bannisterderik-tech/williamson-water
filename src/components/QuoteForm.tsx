"use client";

import { useState } from "react";
import { Button } from "./Button";
import { CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/lib/site";

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: wire to Formspree / Resend / your CRM.
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  }

  return (
    <div className="relative">
        {submitted ? (
          <div className="rounded-3xl bg-white p-10 text-center ring-1 ring-ink-100 shadow-xl">
            <CheckCircle2 className="mx-auto size-14 text-brand-600" />
            <h3 className="mt-6 text-2xl font-bold tracking-tight text-ink-900">You're on the schedule.</h3>
            <p className="mt-3 text-ink-600">
              We'll reach out as soon as we can during business hours. For after-hours emergencies, call
              the number at the top of the page.
            </p>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="rounded-3xl bg-white p-7 sm:p-10 ring-1 ring-ink-100 shadow-xl"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="First name" name="first" required />
              <Field label="Last name" name="last" required />
              <Field label="Email" name="email" type="email" required className="sm:col-span-2" />
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="ZIP or town" name="zip" required />
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 mb-2">
                  Service you're interested in
                </label>
                <select
                  name="service"
                  className="block h-12 w-full rounded-xl border-0 bg-ink-50 px-4 text-ink-900 ring-1 ring-ink-200 focus:ring-2 focus:ring-brand-500 focus:bg-white transition"
                  defaultValue=""
                >
                  <option value="" disabled>Choose a service…</option>
                  <option value="not-sure">Not sure yet — please advise</option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.slug}>{s.name}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 mb-2">
                  Tell us about your water
                </label>
                <textarea
                  name="notes"
                  rows={4}
                  placeholder="City or municipal water? Private well? Stains, smells, scale, taste?"
                  className="block w-full rounded-xl border-0 bg-ink-50 p-4 text-ink-900 ring-1 ring-ink-200 focus:ring-2 focus:ring-brand-500 focus:bg-white transition"
                />
              </div>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs text-ink-500 max-w-sm">
                We'll never share your info. You'll get a real call back from Ken or one of our techs — not a robocenter.
              </p>
              <Button type="submit" variant="primary" size="lg" arrow>
                {loading ? "Sending…" : "Send request"}
              </Button>
            </div>
          </form>
        )}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 mb-2">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="block h-12 w-full rounded-xl border-0 bg-ink-50 px-4 text-ink-900 ring-1 ring-ink-200 focus:ring-2 focus:ring-brand-500 focus:bg-white transition"
      />
    </div>
  );
}
