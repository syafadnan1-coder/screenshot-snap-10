import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/config/siteConfig";
import type { ServiceItem } from "@/data/services";

/** شبكة أنواع/عناصر الخدمة */
export function ItemGrid({
  items,
  whatsappMessage,
}: {
  items: ServiceItem[];
  whatsappMessage: string;
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article key={item.name} className="surface-card group flex flex-col overflow-hidden">
          <img
            src={item.image}
            alt={`${item.name} — ركن المقصورة في جدة`}
            loading="lazy"
            width={1280}
            height={960}
            className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="flex flex-1 flex-col p-5">
            <h3 className="text-base font-bold text-primary md:text-lg">{item.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
            <dl className="mt-4 space-y-1.5 text-xs text-muted-foreground">
              {item.usage ? (
                <div className="flex gap-1.5">
                  <dt className="font-semibold text-foreground">الاستخدام:</dt>
                  <dd>{item.usage}</dd>
                </div>
              ) : null}
              {item.materials ? (
                <div className="flex gap-1.5">
                  <dt className="font-semibold text-foreground">الخامات:</dt>
                  <dd>{item.materials}</dd>
                </div>
              ) : null}
              {item.features ? (
                <div className="flex gap-1.5">
                  <dt className="font-semibold text-foreground">المميزات:</dt>
                  <dd>{item.features}</dd>
                </div>
              ) : null}
            </dl>
            <Button asChild variant="whatsapp" size="sm" className="mt-5 self-start">
              <a
                href={whatsappLink(`${whatsappMessage} (${item.name})`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle aria-hidden="true" />
                استفسر عبر واتساب
              </a>
            </Button>
          </div>
        </article>
      ))}
    </div>
  );
}
