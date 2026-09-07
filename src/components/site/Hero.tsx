import { ContactActions } from "@/components/site/ContactActions";

type Props = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  message?: string | undefined;
  /** الصفحة الرئيسية = هيرو أطول */
  size?: "full" | "compact";
};

export function Hero({
  title,
  description,
  image,
  imageAlt,
  message,
  size = "compact",
}: Props) {
  return (
    <section
      className="relative isolate overflow-hidden bg-navy-deep"
      aria-labelledby="hero-title"
    >
      <img
        src={image}
        alt={imageAlt}
        width={1920}
        height={1080}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-navy-deep via-navy-deep/80 to-navy/45"
      />
      <div
        className={
          size === "full"
            ? "container-site relative py-24 md:py-36"
            : "container-site relative py-16 md:py-24"
        }
      >
        <div className="fade-up max-w-3xl">
          <h1
            id="hero-title"
            className="text-3xl leading-tight text-primary-foreground md:text-5xl"
          >
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-primary-foreground/80 md:text-lg">
            {description}
          </p>
          <ContactActions
            tone="light"
            size="xl"
            message={message}
            className="mt-9"
          />
        </div>
      </div>
    </section>
  );
}
