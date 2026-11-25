import type { Variants } from "@/lib/motion";
import { fadeUp } from "@/lib/motion";

/**
 * Static passthroughs. These used to be framer-motion scroll reveals; the
 * animation was removed. The props are kept so existing call sites compile,
 * and are intentionally ignored.
 */
export function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  variants?: Variants;
  once?: boolean;
}) {
  return <div className={className}>{children}</div>;
}

export function Stagger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}) {
  return <div className={className}>{children}</div>;
}

export function Item({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
  variants?: Variants;
  custom?: number;
}) {
  return <div className={className}>{children}</div>;
}

export { fadeUp };
