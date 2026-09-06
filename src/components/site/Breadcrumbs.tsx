import { Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";

export type Crumb = { label: string; to?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="مسار التنقل" className="container-site pt-6">
      <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground md:text-sm">
        <li className="flex items-center gap-1">
          <Link to="/" className="transition-colors hover:text-primary">
            الرئيسية
          </Link>
          <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
        </li>
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1">
            {item.to && i < items.length - 1 ? (
              <Link to={item.to} className="transition-colors hover:text-primary">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-primary">
                {item.label}
              </span>
            )}
            {i < items.length - 1 ? (
              <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
