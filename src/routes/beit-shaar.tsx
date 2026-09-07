import { createFileRoute } from "@tanstack/react-router";

import { ServicePage } from "@/components/site/ServicePage";
import { serviceFaqs } from "@/data/faqs";
import { getService } from "@/data/services";
import { breadcrumbSchema, buildHead, faqSchema, serviceSchema } from "@/lib/seo";

const service = getService("beit-shaar");

export const Route = createFileRoute("/beit-shaar")({
  head: () =>
    buildHead({
      title: service.seoTitle,
      description: service.seoDescription,
      path: "/beit-shaar",
      jsonLd: [
        serviceSchema(service.heading, service.seoDescription, "/beit-shaar"),
        faqSchema(serviceFaqs["beit-shaar"] ?? []),
        breadcrumbSchema([
          { name: "الرئيسية", path: "/" },
          { name: service.title, path: "/beit-shaar" },
        ]),
      ],
    }),
  component: () => <ServicePage service={service} />,
});
