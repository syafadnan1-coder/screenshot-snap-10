import { createFileRoute, Link } from "@tanstack/react-router";

import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaSection } from "@/components/site/CtaSection";
import { Hero } from "@/components/site/Hero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { siteConfig } from "@/config/siteConfig";
import { services } from "@/data/services";
import {
  breadcrumbSchema,
  buildHead,
  localBusinessSchema,
  organizationSchema,
} from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    buildHead({
      title: "من نحن | ركن المقصورة للخيام والمظلات وبيوت الشعر في جدة",
      description:
        "تعرّف على ركن المقصورة في جدة: مظلات سيارات، بيوت شعر وخيام، برجولات، سواتر، هناجر ومستودعات، وسندوتش بانل بتصاميم حديثة وخيارات خامات متنوعة.",
      path: "/about",
      jsonLd: [
        localBusinessSchema,
        organizationSchema,
        breadcrumbSchema([
          { name: "الرئيسية", path: "/" },
          { name: "من نحن", path: "/about" },
        ]),
      ],
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Hero
        title="من نحن"
        description={`${siteConfig.name} — نشاط متخصص في جدة بتنفيذ المظلات والخيام وبيوت الشعر والبرجولات والسواتر والهناجر وسندوتش بانل.`}
        image="/images/hero/hero-02.webp"
        imageAlt="تصميم مظلات وبرجولات حديثة"
      />
      <Breadcrumbs items={[{ label: "من نحن", to: "/about" }]} />

      <section className="section-y" aria-labelledby="story-title">
        <div className="container-site mx-auto max-w-3xl">
          <SectionHeading title="نبذة عن النشاط" as="h2" />
          <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              ركن المقصورة نشاط في مدينة جدة بالمملكة العربية السعودية، يعمل في
              مجال المظلات والخيام وبيوت الشعر الحديثة والبرجولات والسواتر
              والهناجر والمستودعات وسندوتش بانل.
            </p>
            <p>
              نقدم خيارات متنوعة في التصاميم والخامات والاستخدامات، ويتم تحديد
              التفاصيل الفنية والمقاسات والخامة المناسبة لكل مشروع بعد التواصل
              ومعرفة طبيعة الموقع والمتطلبات.
            </p>
            <p>
              نحرص على وضوح المعلومات المعروضة في الموقع؛ فالصور الحالية تجريبية
              لتوضيح الأنواع، ويتم استبدالها بصور الأعمال الفعلية، ولا نعرض أي
              أرقام أو ادعاءات غير مؤكدة.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y bg-secondary/60" aria-labelledby="scope-title">
        <div className="container-site">
          <SectionHeading
            title="مجالات العمل"
            description="تشمل خدماتنا في جدة الأنواع التالية"
            as="h2"
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.slug} className="surface-card p-6">
                <h3 className="text-base font-bold text-primary">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.short}
                </p>
                <Link
                  to={`/${service.slug}`}
                  className="mt-4 inline-block text-sm font-semibold text-navy-soft underline-offset-4 hover:underline"
                >
                  تفاصيل الخدمة
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
