import { createFileRoute } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone } from "lucide-react";

import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ContactActions } from "@/components/site/ContactActions";
import { Hero } from "@/components/site/Hero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { phoneDisplay, siteConfig, telLink, whatsappLink } from "@/config/siteConfig";
import { breadcrumbSchema, buildHead, localBusinessSchema } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    buildHead({
      title: "تواصل معنا | ركن المقصورة للمظلات والخيام في جدة",
      description:
        "تواصل مع ركن المقصورة في جدة عبر واتساب أو الهاتف لطلب عرض سعر للمظلات وبيوت الشعر والبرجولات والسواتر والهناجر وسندوتش بانل.",
      path: "/contact",
      jsonLd: [
        localBusinessSchema,
        breadcrumbSchema([
          { name: "الرئيسية", path: "/" },
          { name: "تواصل معنا", path: "/contact" },
        ]),
      ],
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Hero
        title="تواصل معنا"
        description="راسلنا على واتساب أو اتصل بنا مباشرة لطلب عرض سعر أو الاستفسار عن أي من خدماتنا في جدة."
        image="/images/hero/hero-03.webp"
        imageAlt="التواصل مع ركن المقصورة في جدة"
      />
      <Breadcrumbs items={[{ label: "تواصل معنا", to: "/contact" }]} />

      <section className="section-y" aria-labelledby="contact-info">
        <div className="container-site">
          <SectionHeading
            title="بيانات التواصل"
            description="نستقبل استفساراتكم عبر واتساب والهاتف"
            as="h2"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="surface-card flex flex-col items-center gap-3 p-8 text-center transition-transform hover:-translate-y-1"
            >
              <MessageCircle className="h-7 w-7 text-whatsapp" aria-hidden="true" />
              <h3 className="text-base font-bold text-primary">واتساب</h3>
              <p className="text-sm text-muted-foreground" dir="ltr">
                {phoneDisplay}
              </p>
            </a>
            <a
              href={telLink}
              className="surface-card flex flex-col items-center gap-3 p-8 text-center transition-transform hover:-translate-y-1"
            >
              <Phone className="h-7 w-7 text-navy-soft" aria-hidden="true" />
              <h3 className="text-base font-bold text-primary">اتصال هاتفي</h3>
              <p className="text-sm text-muted-foreground" dir="ltr">
                {phoneDisplay}
              </p>
            </a>
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="surface-card flex flex-col items-center gap-3 p-8 text-center transition-transform hover:-translate-y-1"
            >
              <MapPin className="h-7 w-7 text-navy-soft" aria-hidden="true" />
              <h3 className="text-base font-bold text-primary">الموقع على الخريطة</h3>
              <p className="text-sm text-muted-foreground">جدة، المملكة العربية السعودية</p>
            </a>
          </div>

          <ContactActions className="mt-10 justify-center" showMaps size="lg" />
        </div>
      </section>

      <section className="pb-16 md:pb-24" aria-labelledby="map-title">
        <div className="container-site">
          <h2 id="map-title" className="sr-only">
            موقعنا على خرائط جوجل
          </h2>
          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="surface-card block overflow-hidden p-0"
          >
            <img
              src="/images/hero/hero-01.webp"
              alt="اضغط لعرض موقع ركن المقصورة في جدة على خرائط جوجل"
              loading="lazy"
              width={1920}
              height={720}
              className="h-56 w-full object-cover md:h-72"
            />
            <span className="block bg-card px-6 py-4 text-center text-sm font-semibold text-primary">
              اضغط لفتح الموقع على خرائط جوجل
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
