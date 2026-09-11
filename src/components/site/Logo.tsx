import logoImage from "@/assets/logo.png";
import { siteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

/**
 * شعار المؤسسة.
 * لاستبداله بشعارك: ضع ملفك في src/assets/logo.png بنفس الاسم.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src={logoImage}
      alt={siteConfig.name}
      width={512}
      height={512}
      className={cn("h-11 w-11 shrink-0 object-contain", className)}
    />
  );
}

export function LogoBlock({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  return (
    <span className="flex items-center gap-3">
      <LogoMark className={variant === "light" ? "brightness-0 invert" : ""} />
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
