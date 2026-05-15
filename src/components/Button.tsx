import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "sun";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-700 text-white hover:bg-brand-800 shadow-[0_10px_30px_-10px_rgba(21,75,192,0.55)] hover:shadow-[0_18px_40px_-12px_rgba(21,75,192,0.7)] hover:-translate-y-0.5",
  secondary:
    "bg-white text-ink-900 ring-1 ring-ink-200 hover:ring-ink-300 hover:-translate-y-0.5",
  ghost: "text-white/90 hover:text-white",
  sun:
    "bg-sun-400 text-ink-900 hover:bg-sun-300 shadow-[0_10px_30px_-10px_rgba(244,172,0,0.55)] hover:shadow-[0_18px_40px_-12px_rgba(244,172,0,0.7)] hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-8 text-base tracking-tight",
};

type Props = {
  href?: string;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  arrow = false,
  className,
  children,
  type = "button",
  onClick,
}: Props) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );
  if (href) {
    return (
      <Link href={href} className={cn(classes, "group")}>
        {inner}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cn(classes, "group")}>
      {inner}
    </button>
  );
}
