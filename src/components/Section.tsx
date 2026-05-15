import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  tone = "default",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "muted" | "dark" | "brand";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 sm:py-28",
        tone === "muted" && "bg-ink-50",
        tone === "dark" && "bg-ink-950 text-white",
        tone === "brand" && "gradient-brand text-white",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em]",
        dark ? "text-sun-300" : "text-brand-700",
      )}
    >
      <span className={cn("h-px w-6", dark ? "bg-sun-400" : "bg-brand-500")} />
      {children}
    </span>
  );
}

export function H2({
  children,
  className,
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <h2
      className={cn(
        "text-balance text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.05]",
        dark ? "text-white" : "text-ink-900",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function Lead({
  children,
  className,
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <p
      className={cn(
        "text-pretty text-lg sm:text-xl leading-relaxed",
        dark ? "text-ink-200" : "text-ink-600",
        className,
      )}
    >
      {children}
    </p>
  );
}
