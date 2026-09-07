import { createFileRoute } from "@tanstack/react-router";

import { ServicePage } from "@/components/site/ServicePage";
import { serviceFaqs } from "@/data/faqs";
import { getService } from "@/data/services";
import { breadcrumbSchema, buildHead, faqSchema, serviceSchema } from "@/lib/seo";

const service = getService("sandwich-panel");

export const Route = createFileRoute("/sandwich-panel")({
  head: () =>
    buildHead({
      title: service.seoTitle,
      description: service.seoDescription,
      path: "/sandwich-panel",
      jsonLd: [
        serviceSchema(service.heading, service.seoDescription, "/sandwich-panel"),
        faqSchema(serviceFaqs["sandwich-panel"] ?? []),
        breadcrumbSchema([
          { name: "الرئيسية", path: "/" },
          { name: service.title, path: "/sandwich-panel" },
        ]),
      ],
    }),
  component: () => <ServicePage service={service} />,
});
