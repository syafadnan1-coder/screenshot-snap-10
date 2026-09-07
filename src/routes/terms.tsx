import { createFileRoute } from "@tanstack/react-router";

import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { SectionHeading } from "@/components/site/SectionHeading";
import { siteConfig } from "@/config/siteConfig";
import { breadcrumbSchema, buildHead } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () =>
    buildHead({
      title: "الشروط والأحكام | ركن المقصورة",
      description:
        "الشروط والأحكام الخاصة باستخدام موقع ركن المقصورة في جدة والمعلومات المعروضة عن خدمات المظلات والخيام والبرجولات والسواتر.",
      path: "/terms",
      jsonLd: [
        breadcrumbSchema([
          { name: "الرئيسية", path: "/" },
          { name: "الشروط والأحكام", path: "/terms" },
        ]),
      ],
    }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "الشروط والأحكام", to: "/terms" }]} />
      <section className="section-y">
        <div className="container-site mx-auto max-w-3xl">
          <SectionHeading title="الشروط والأحكام" as="h1" align="start" />
          <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              باستخدامك موقع {siteConfig.name} فإنك توافق على الشروط الموضحة
              أدناه.
            </p>
            <div>
              <h2 className="text-lg font-bold text-primary">المحتوى المعروض</h2>
              <p className="mt-2">
                المعلومات والصور المعروضة في الموقع لأغراض التعريف بالخدمات
                والأنواع المتاحة، وقد تختلف التفاصيل النهائية حسب طبيعة كل
                مشروع.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary">الأسعار والعروض</h2>
              <p className="mt-2">
                لا يعرض الموقع أسعارًا، ويتم تحديد عرض السعر بعد التواصل ومعرفة
                المقاسات والخامات ومتطلبات التنفيذ.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary">الاتفاقيات والتنفيذ</h2>
              <p className="mt-2">
                يتم الاتفاق على تفاصيل التنفيذ ومدد العمل وأي ضمانات كتابيًا بين
                الطرفين قبل بدء العمل، ولا يُعد أي محتوى في الموقع التزامًا
                تعاقديًا بحد ذاته.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary">حقوق الملكية</h2>
              <p className="mt-2">
                جميع عناصر الموقع من نصوص وتصميم مخصصة لهذا النشاط، ولا يجوز
                إعادة استخدامها دون إذن.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary">تعديل الشروط</h2>
              <p className="mt-2">
                يمكن تحديث هذه الشروط في أي وقت، ويسري العمل بالنسخة المنشورة في
                الموقع.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
