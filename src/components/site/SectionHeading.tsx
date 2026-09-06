import { cn } from "@/lib/utils";

type Props = {
  title: string;
  description?: string;
  as?: "h1" | "h2" | "h3";
  align?: "center" | "start";
  className?: string;
  eyebrow?: string;
};

export function SectionHeading({
  title,
  description,
  as: Tag = "h2",
  align = "center",
  className,
  eyebrow,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-start",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-navy-soft uppercase">
          {eyebrow}
        </p>
      ) : null}
      <Tag className="text-2xl text-primary md:text-4xl">{title}</Tag>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      ) : null}
      <span className="mt-6 mx-auto block h-px w-24 bg-linear-to-l from-transparent via-primary/40 to-transparent" />
    </div>
  );
}
