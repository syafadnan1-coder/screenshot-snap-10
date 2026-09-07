import { createFileRoute } from "@tanstack/react-router";

import { CtaSection } from "@/components/site/CtaSection";
import { FaqSection } from "@/components/site/FaqSection";
import { Gallery } from "@/components/site/Gallery";
import { Hero } from "@/components/site/Hero";
import { ImageCarousel } from "@/components/site/ImageCarousel";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceCard } from "@/components/site/ServiceCard";
import { ContactActions } from "@/components/site/ContactActions";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { phoneDisplay, siteConfig } from "@/config/siteConfig";
import { generalFaqs } from "@/data/faqs";
import { services } from "@/data/services";
import {
  breadcrumbSchema,
  buildHead,
  faqSchema,
  localBusinessSchema,
  organizationSchema,
} from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    buildHead({
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
      path: "/",
      jsonLd: [
        localBusinessSchema,
        organizationSchema,
        faqSchema(generalFaqs),
        breadcrumbSchema([{ name: "الرئيسية", path: "/" }]),
      ],
    }),
  component: HomePage,
});

const carouselImages = [
  { src: "/images/car-shades/car-shade-01.webp", alt: "مظلات سيارات" },
  { src: "/images/beit-shaar/beit-shaar-03.webp", alt: "بيوت شعر ملكي" },
  { src: "/images/beit-shaar/beit-shaar-02.webp", alt: "خيام" },
  { src: "/images/pergolas/pergola-01.webp", alt: "برجولات حدائق" },
  { src: "/images/privacy-screens/privacy-screen-01.webp", alt: "سواتر منازل" },
  { src: "/images/warehouses/warehouse-01.webp", alt: "هناجر ومستودعات" },
  { src: "/images/sandwich-panel/sandwich-panel-01.webp", alt: "سندوتش بانل" },
];

function HomePage() {
  return (
    <>
      <Hero
        size="full"
        title="مظلات سيارات وبيوت شعر وبرجولات وسواتر في جدة"
        description={`${siteConfig.name} يقدم حلولًا متنوعة للمظلات والخيام وبيوت الشعر والبرجولات والسواتر والهناجر وسندوتش بانل، مع خيارات متعددة للتصاميم والخامات بما يتناسب مع احتياجات المشاريع والمساحات المختلفة.`}
        image="/images/hero/hero-01.webp"
        imageAlt="مظلة سيارات حديثة أمام فيلا في جدة"
      />

      {/* نبذة */}
      <section className="section-y" aria-labelledby="about-title">
        <div className="container-site">
          <SectionHeading
            eyebrow="من نحن"
            title={`${siteConfig.name} في جدة`}
            as="h2"
          />
          <div className="mx-auto mt-8 max-w-3xl space-y-4 text-center text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              في ركن المقصورة نقدم حلولًا متنوعة للمظلات والخيام وبيوت الشعر
              والبرجولات والسواتر والهناجر وسندوتش بانل، مع اهتمام بالتفاصيل
              والتصميم والخامات بما يتناسب مع طبيعة كل مشروع.
            </p>
            <p>
              نوفر خيارات متعددة في التصاميم والخامات والاستخدامات، ونحرص على
              تقديم معلومات واضحة تساعد العميل على اختيار الحل المناسب لمشروعه
              والتواصل معنا لطلب التفاصيل وعرض السعر.
            </p>
          </div>
        </div>
      </section>

      {/* شريط الصور */}
      <section className="section-y bg-secondary/60" aria-labelledby="slider-title">
        <div className="container-site">
          <SectionHeading
            title="نماذج من التصاميم"
            description="صور تجريبية توضح أنواع الخدمات، ويمكن استبدالها بصور الأعمال الحقيقية."
            as="h2"
          />
          <div className="mt-10">
            <ImageCarousel images={carouselImages} />
          </div>
        </div>
      </section>

      {/* الخدمات */}
      <section className="section-y" aria-labelledby="services-title">
        <div className="container-site">
          <SectionHeading
            eyebrow="خدماتنا"
            title="خدمات ركن المقصورة"
            description="حلول متنوعة للمظلات والخيام والبرجولات والسواتر والهناجر في جدة"
            as="h2"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* تفاصيل كل خدمة */}
      {services.map((service, i) => (
        <section
          key={service.slug}
          className={i % 2 === 0 ? "section-y bg-secondary/60" : "section-y"}
          aria-labelledby={`service-${service.slug}`}
        >
          <div className="container-site grid items-center gap-10 lg:grid-cols-2">
            <div className={i % 2 === 0 ? "lg:order-2" : ""}>
              <img
                src={service.gallery[0] ?? service.image}
                alt={`${service.heading} — ركن المقصورة`}
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-4/3 w-full rounded-3xl object-cover shadow-elevated"
              />
            </div>
            <div>
              <h2
                id={`service-${service.slug}`}
                className="text-2xl text-primary md:text-3xl"
              >
                {service.heading}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                {service.intro}
              </p>
              <ul className="mt-6 grid gap-2 text-sm text-foreground sm:grid-cols-2">
                {service.items.slice(0, 6).map((item) => (
                  <li key={item.name} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-soft"
                    />
                    {item.name}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <ContactActions message={service.whatsappMessage} size="default" />
                <Button asChild variant="ghost" size="default">
                  <Link to={`/${service.slug}`}>عرض المزيد</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* أعمالنا */}
      <section className="section-y bg-secondary/60" aria-labelledby="works-title">
        <div className="container-site">
          <SectionHeading
            eyebrow="أعمالنا"
            title="أعمال ركن المقصورة"
            description="معرض صور للتصاميم والأنواع. الصور الحالية تجريبية وليست مشاريع حقيقية."
            as="h2"
          />
          <div className="mt-10">
            <Gallery limit={12} />
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="navyOutline" size="lg">
              <Link to="/projects">مشاهدة كل الأعمال</Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaSection />

      <FaqSection faqs={generalFaqs} />

      {/* تواصل */}
      <section className="section-y" aria-labelledby="contact-title">
        <div className="container-site">
          <SectionHeading
            eyebrow="تواصل معنا"
            title="اطلب عرض سعر لمشروعك"
            description={`اتصل أو راسلنا على واتساب: ${phoneDisplay}`}
            as="h2"
          />
          <ContactActions className="mt-8 justify-center" showMaps size="lg" />
        </div>
      </section>
    </>
  );
}
