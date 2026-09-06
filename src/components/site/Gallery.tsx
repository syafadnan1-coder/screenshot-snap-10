import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import {
  projectCategories,
  projects as allProjects,
  type Project,
  type ProjectCategory,
} from "@/data/projects";

type Props = {
  /** حصر المعرض على نوع خدمة واحد */
  category?: ProjectCategory;
  /** إظهار أزرار التصفية */
  withFilters?: boolean;
  /** حد أقصى لعدد الصور المعروضة */
  limit?: number;
};

export function Gallery({ category, withFilters = false, limit }: Props) {
  const [active, setActive] = useState<ProjectCategory | "all">(category ?? "all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const base = category ? allProjects.filter((p) => p.category === category) : allProjects;
  const filtered = active === "all" ? base : base.filter((p) => p.category === active);
  const items = limit ? filtered.slice(0, limit) : filtered;

  const close = useCallback(() => setOpenIndex(null), []);
  const move = useCallback(
    (dir: 1 | -1) =>
      setOpenIndex((i) =>
        i === null ? i : (i + dir + items.length) % items.length,
      ),
    [items.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(-1);
      if (e.key === "ArrowLeft") move(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, close, move]);

  const current: Project | null = openIndex === null ? null : (items[openIndex] ?? null);

  return (
    <div>
      {withFilters ? (
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setActive(cat.value)}
              aria-pressed={active === cat.value}
              className={cn(
                "cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors",
                active === cat.value
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground hover:bg-accent",
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      ) : null}

      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
        {items.map((project, i) => (
          <li key={project.id}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group block w-full cursor-pointer overflow-hidden rounded-2xl border border-border bg-card text-start shadow-soft transition-shadow hover:shadow-elevated"
              aria-label={`عرض صورة: ${project.title}`}
            >
              <img
                src={project.image}
                alt={`${project.title} — ${project.description}`}
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="block px-3 py-2 text-xs font-medium text-primary md:text-sm">
                {project.title}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-navy-deep/95 p-4"
          onClick={close}
        >
          <div
            className="w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current.image}
              alt={current.title}
              className="max-h-[70vh] w-full rounded-2xl object-contain"
            />
            <div className="mt-4 text-center text-primary-foreground">
              <h3 className="text-lg font-bold">{current.title}</h3>
              <p className="mt-1 text-sm text-primary-foreground/75">
                {projectCategories.find((c) => c.value === current.category)?.label}
              </p>
              <p className="mt-2 text-sm text-primary-foreground/70">
                {current.description}
              </p>
            </div>
            <div className="mt-5 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="الصورة السابقة"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/15"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={close}
                aria-label="إغلاق"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/15"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => move(1)}
                aria-label="الصورة التالية"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/15"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
