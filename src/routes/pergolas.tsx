import { createFileRoute } from "@tanstack/react-router";

import { ServicePage } from "@/components/site/ServicePage";
import { serviceFaqs } from "@/data/faqs";
import { getService } from "@/data/services";
import { breadcrumbSchema, buildHead, faqSchema, serviceSchema } from "@/lib/seo";

const service = getService("pergolas");

export const Route = createFileRoute("/pergolas")({
  head: () =>
    buildHead({
      title: service.seoTitle,
      description: service.seoDescription,
      path: "/pergolas",
      jsonLd: [
        serviceSchema(service.heading, service.seoDescription, "/pergolas"),
        faqSchema(serviceFaqs["pergolas"] ?? []),
        breadcrumbSchema([
          { name: "الرئيسية", path: "/" },
          { name: service.title, path: "/pergolas" },
        ]),
      ],
    }),
  component: () => <ServicePage service={service} />,
});
