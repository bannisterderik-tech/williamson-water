// Motion was removed from this site in Nov 2026 — no scroll reveals, no
// count-ups, no marquee, no animated illustrations. These exports remain only
// so the ~24 pages that pass `variants={fadeUp}` keep compiling; nothing reads
// them. Delete them when those call sites are cleaned up.

export type Variants = Record<string, unknown>;

export const fadeUp: Variants = {};
export const fadeIn: Variants = {};
export const scaleIn: Variants = {};
export const slideRight: Variants = {};
export const slideLeft: Variants = {};
export const staggerContainer = (_stagger = 0, _delay = 0): Variants => ({});
