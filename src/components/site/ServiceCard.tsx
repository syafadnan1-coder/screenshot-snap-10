import { Link } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/config/siteConfig";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="surface-card group flex flex-col overflow-hidden">
      <div className="overflow-hidden">
        <img
          src={service.image}
          alt={`${service.title} في جدة — ركن المقصورة`}
          loading="lazy"
          width={1280}
          height={960}
          className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-primary md:text-xl">{service.heading}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {service.short}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Button asChild variant="whatsapp" size="default">
            <a
              href={whatsappLink(service.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle aria-hidden="true" />
              اطلب الآن
            </a>
          </Button>
          <Button asChild variant="navyOutline" size="default">
            <Link to={`/${service.slug}`}>
              عرض المزيد
              <ArrowLeft aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
