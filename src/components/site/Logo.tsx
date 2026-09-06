import { siteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

/**
 * الشعار المؤقت (SVG).
 * لاستبدال الشعار بصورة حقيقية: ضع الملف في /public/images/logo/logo.png
 * ثم استبدل <LogoMark /> بـ <img src="/images/logo/logo.png" alt="..." />
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={cn("h-10 w-10 shrink-0", className)}
    >
      <path
        d="M4 30c6-14 13-21 20-21s14 7 20 21c-6-4-12-6-20-6s-14 2-20 6Z"
        fill="currentColor"
        opacity="0.92"
      />
      <path
        d="M8 38h32"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M14 38V27M34 38V27"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
  );
}

export function LogoBlock({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  return (
    <span className="flex items-center gap-3">
      <LogoMark
        className={variant === "light" ? "text-primary-foreground" : "text-primary"}
      />
      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            "text-lg font-bold tracking-tight md:text-xl",
            variant === "light" ? "text-primary-foreground" : "text-primary",
          )}
        >
          {siteConfig.shortName}
        </span>
        <span
          className={cn(
            "text-[11px] md:text-xs",
            variant === "light"
              ? "text-primary-foreground/75"
              : "text-muted-foreground",
          )}
        >
          {siteConfig.tagline}
        </span>
      </span>
    </span>
  );
}
