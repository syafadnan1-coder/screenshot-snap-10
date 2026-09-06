import { ContactActions } from "@/components/site/ContactActions";

type Props = {
  title?: string;
  description?: string;
  message?: string;
};

export function CtaSection({
  title = "هل لديك مشروع وتبحث عن مظلات أو خيام أو برجولات في جدة؟",
  description = "تواصل مع ركن المقصورة لمعرفة الخيارات المناسبة لمشروعك وطلب عرض سعر.",
  message,
}: Props) {
  return (
    <section className="section-y" aria-labelledby="cta-title">
      <div className="container-site">
        <div className="gradient-navy relative overflow-hidden rounded-3xl px-6 py-14 text-center shadow-elevated md:px-14">
          <h2
            id="cta-title"
            className="mx-auto max-w-3xl text-2xl text-primary-foreground md:text-3xl"
          >
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/80 md:text-base">
            {description}
          </p>
          <ContactActions
            tone="light"
            showMaps
            message={message}
            className="mt-8 justify-center"
          />
        </div>
      </div>
    </section>
  );
}
