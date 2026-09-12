import { createFileRoute } from "@tanstack/react-router";

import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaSection } from "@/components/site/CtaSection";
import { Gallery } from "@/components/site/Gallery";
import { Hero } from "@/components/site/Hero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { siteConfig } from "@/config/siteConfig";
import { breadcrumbSchema, buildHead } from "@/lib/seo";

export const Route = createFileRoute("/projects")({
  head: () =>
    buildHead({
      title: "أعمالنا | مظلات وبيوت شعر وبرجولات وسواتر في جدة",
      description:
        "معرض أعمال ركن المقصورة في جدة: مظلات سيارات، بيوت شعر وخيام، برجولات حدائق، سواتر منازل، هناجر ومستودعات، وسندوتش بانل.",
      path: "/projects",
      jsonLd: [
        breadcrumbSchema([
          { name: "الرئيسية", path: "/" },
          { name: "أعمالنا", path: "/projects" },
        ]),
      ],
    }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <Hero
        title="أعمالنا"
        description={`معرض صور لأنواع الخدمات التي يقدمها ${siteConfig.shortName} في جدة. `}
        image="/images/projects/project-04.webp"
        imageAlt="نماذج من أعمال المظلات والسواتر"
      />
      <Breadcrumbs items={[{ label: "أعمالنا", to: "/projects" }]} />

      <section className="section-y" aria-labelledby="projects-title">
        <div className="container-site">
          <SectionHeading
            title="تصفح الأعمال حسب النوع"
            description="اختر التصنيف لعرض الصور الخاصة به، واضغط على الصورة لتكبيرها."
            as="h2"
          />
          <div className="mt-10">
            <Gallery withFilters />
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
