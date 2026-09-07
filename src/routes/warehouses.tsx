import { createFileRoute } from "@tanstack/react-router";

import { ServicePage } from "@/components/site/ServicePage";
import { serviceFaqs } from "@/data/faqs";
import { getService } from "@/data/services";
import { breadcrumbSchema, buildHead, faqSchema, serviceSchema } from "@/lib/seo";

const service = getService("warehouses");

export const Route = createFileRoute("/warehouses")({
  head: () =>
    buildHead({
      title: service.seoTitle,
      description: service.seoDescription,
      path: "/warehouses",
      jsonLd: [
        serviceSchema(service.heading, service.seoDescription, "/warehouses"),
        faqSchema(serviceFaqs["warehouses"] ?? []),
        breadcrumbSchema([
          { name: "الرئيسية", path: "/" },
          { name: service.title, path: "/warehouses" },
        ]),
      ],
    }),
  component: () => <ServicePage service={service} />,
});
