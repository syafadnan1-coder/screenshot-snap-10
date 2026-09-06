import { SectionHeading } from "@/components/site/SectionHeading";
import { materials } from "@/data/materials";

export function MaterialsSection({
  title = "الخامات ومواد التركيب",
  description = "خيارات متعددة من الخامات، ويتم تحديد النوع والمواصفة المناسبة عند طلب عرض السعر.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="section-y" aria-labelledby="materials-title">
      <div className="container-site">
        <SectionHeading title={title} description={description} as="h2" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map((material) => (
            <article key={material.name} className="surface-card overflow-hidden">
              <img
                src={material.image}
                alt={`${material.name} — خامات ركن المقصورة`}
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-16/9 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-base font-bold text-primary">{material.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {material.description}
                </p>
                <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
                  <li>
                    <span className="font-semibold text-foreground">الاستخدام: </span>
                    {material.usage}
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">المميزات: </span>
                    {material.features}
                  </li>
                  {material.note ? <li>{material.note}</li> : null}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
