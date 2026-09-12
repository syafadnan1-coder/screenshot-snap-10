import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaSection } from "@/components/site/CtaSection";
import { FaqSection } from "@/components/site/FaqSection";
import { Gallery } from "@/components/site/Gallery";
import { Hero } from "@/components/site/Hero";
import { ItemGrid } from "@/components/site/ItemGrid";
import { MaterialsSection } from "@/components/site/MaterialsSection";
import { SectionHeading } from "@/components/site/SectionHeading";
import { serviceFaqs } from "@/data/faqs";
import type { Service } from "@/data/services";
import type { ProjectCategory } from "@/data/projects";

export function ServicePage({ service }: { service: Service }) {
  const faqs = serviceFaqs[service.slug] ?? [];

  return (
    <>
      <Hero
        title={service.heading}
        description={service.intro}
        image={service.image}
        imageAlt={`${service.heading} — ركن المقصورة`}
        message={service.whatsappMessage}
      />

      <Breadcrumbs items={[{ label: service.title, to: `/${service.slug}` }]} />

      <section className="section-y" aria-labelledby="intro-title">
        <div className="container-site">
          <SectionHeading
            title={`${service.title} مع ركن المقصورة في جدة`}
            description={service.intro}
            as="h2"
          />
        </div>
      </section>

      <section className="section-y bg-secondary/60" aria-labelledby="types-title">
        <div className="container-site">
          <SectionHeading
            title={`أنواع ${service.title}`}
            description="الخيارات التالية تُحدد بحسب المتاح وطبيعة المشروع، ويتم تأكيد التفاصيل عند التواصل."
            as="h2"
          />
          <div className="mt-10">
            <ItemGrid items={service.items} whatsappMessage={service.whatsappMessage} />
          </div>
        </div>
      </section>

      <section className="section-y" aria-labelledby="gallery-title">
        <div className="container-site">
          <SectionHeading
            title={`معرض صور ${service.title}`}
            description="صور من أعمال ركن المقصورة في جدة."
            as="h2"
          />
          <div className="mt-10">
            <Gallery category={service.slug as ProjectCategory} limit={8} />
          </div>
        </div>
      </section>

      <MaterialsSection />

      <FaqSection faqs={faqs.length ? faqs : []} />

      <CtaSection message={service.whatsappMessage} />
    </>
  );
}
