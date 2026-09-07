import { createFileRoute } from "@tanstack/react-router";

import { ServicePage } from "@/components/site/ServicePage";
import { serviceFaqs } from "@/data/faqs";
import { getService } from "@/data/services";
import { breadcrumbSchema, buildHead, faqSchema, serviceSchema } from "@/lib/seo";

const service = getService("privacy-screens");

export const Route = createFileRoute("/privacy-screens")({
  head: () =>
    buildHead({
      title: service.seoTitle,
      description: service.seoDescription,
      path: "/privacy-screens",
      jsonLd: [
        serviceSchema(service.heading, service.seoDescription, "/privacy-screens"),
        faqSchema(serviceFaqs["privacy-screens"] ?? []),
        breadcrumbSchema([
          { name: "الرئيسية", path: "/" },
          { name: service.title, path: "/privacy-screens" },
        ]),
      ],
    }),
  component: () => <ServicePage service={service} />,
});
