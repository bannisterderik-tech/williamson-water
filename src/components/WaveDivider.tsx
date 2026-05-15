import { cn } from "@/lib/utils";

export function WaveDivider({
  flip = false,
  className,
  color = "text-white",
}: {
  flip?: boolean;
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden
      className={cn("block w-full h-12", flip && "rotate-180", color, className)}
    >
      <path
        d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
        fill="currentColor"
      />
    </svg>
  );
}
