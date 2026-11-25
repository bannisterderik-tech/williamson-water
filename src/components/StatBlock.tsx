/**
 * Static. This used to count up from zero on scroll with framer-motion;
 * the animation was removed along with the rest of the site's motion.
 */
export function StatBlock({
  value,
  suffix = "",
  prefix = "",
  label,
  description,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
}) {
  return (
    <div className="text-center sm:text-left">
      <span className="block text-5xl sm:text-6xl font-bold tracking-tight text-white">
        {prefix}
        {value.toLocaleString()}
        {suffix}
      </span>
      <span className="mt-3 block text-sm font-semibold uppercase tracking-[0.18em] text-sun-300">{label}</span>
      {description && <p className="mt-2 text-sm text-ink-300 max-w-xs">{description}</p>}
    </div>
  );
}
