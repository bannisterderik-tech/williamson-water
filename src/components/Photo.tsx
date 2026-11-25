import Image from "next/image";
import type { SiteImage } from "@/lib/imagery";
import { cn } from "@/lib/utils";

/**
 * Every photograph on the site goes through here.
 *
 * `data-stock` is deliberate and permanent: these are licensed third-party
 * photographs, not pictures of this company's own work. It keeps that fact
 * greppable in the built HTML so nobody has to take it on trust later.
 */
export function Photo({
  image,
  className,
  imgClassName,
  priority = false,
  sizes = "100vw",
  fill = true,
  width,
  height,
}: {
  image: SiteImage;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
}) {
  // Tailwind emits `.relative` after `.absolute`, so a hardcoded "relative" here
  // silently beats an "absolute" passed in via className and collapses the
  // wrapper to zero height (next/image `fill` needs a positioned, sized box).
  // Only supply `relative` when the caller has not positioned this itself.
  const positioned = /(^|\s)(absolute|fixed|sticky|relative)(\s|$)/.test(className ?? "");

  return (
    <div
      className={cn(!positioned && "relative", "overflow-hidden", className)}
      data-stock="true"
    >
      <Image
        src={image.src}
        alt={image.alt}
        {...(fill ? { fill: true } : { width: width ?? 1800, height: height ?? 1200 })}
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", fill ? "" : "h-auto w-full", imgClassName)}
      />
    </div>
  );
}
