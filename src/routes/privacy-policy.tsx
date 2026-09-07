import { createFileRoute } from "@tanstack/react-router";

import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { SectionHeading } from "@/components/site/SectionHeading";
import { siteConfig } from "@/config/siteConfig";
import { breadcrumbSchema, buildHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    buildHead({
      title: "سياسة الخصوصية | ركن المقصورة",
      description:
        "سياسة الخصوصية الخاصة بموقع ركن المقصورة في جدة، وتوضح طريقة التعامل مع بيانات التواصل التي يرسلها الزائر.",
      path: "/privacy-policy",
      jsonLd: [
        breadcrumbSchema([
          { name: "الرئيسية", path: "/" },
          { name: "سياسة الخصوصية", path: "/privacy-policy" },
        ]),
      ],
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "سياسة الخصوصية", to: "/privacy-policy" }]} />
      <section className="section-y">
        <div className="container-site mx-auto max-w-3xl">
          <SectionHeading title="سياسة الخصوصية" as="h1" align="start" />
          <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              يوضح هذا النص كيفية تعامل موقع {siteConfig.name} مع معلومات الزوار.
            </p>
            <div>
              <h2 className="text-lg font-bold text-primary">المعلومات التي نتلقاها</h2>
              <p className="mt-2">
                لا يحتوي الموقع على تسجيل مستخدمين ولا قاعدة بيانات لتخزين
                بيانات الزوار. عند التواصل معنا عبر واتساب أو الهاتف، تصل إلينا
                المعلومات التي ترسلها بنفسك مثل الاسم ورقم الجوال وتفاصيل
                الطلب، وتُستخدم فقط للرد على استفسارك.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary">استخدام المعلومات</h2>
              <p className="mt-2">
                نستخدم معلومات التواصل لتقديم عرض السعر ومتابعة الطلب فقط، ولا
                نبيعها أو نشاركها مع أطراف أخرى لأغراض تجارية.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary">ملفات تعريف الارتباط</h2>
              <p className="mt-2">
                لا يستخدم الموقع ملفات تعريف ارتباط لأغراض تتبع إعلاني.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary">روابط خارجية</h2>
              <p className="mt-2">
                يحتوي الموقع على روابط لخدمات خارجية مثل واتساب وخرائط جوجل،
                وتخضع هذه الخدمات لسياسات الخصوصية الخاصة بمقدميها.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary">التواصل</h2>
              <p className="mt-2">
                لأي استفسار بخصوص هذه السياسة يمكنك التواصل معنا عبر رقم الجوال
                الموضح في الموقع.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
