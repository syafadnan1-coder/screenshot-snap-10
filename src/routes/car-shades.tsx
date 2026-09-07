import { createFileRoute } from "@tanstack/react-router";

import { ServicePage } from "@/components/site/ServicePage";
import { serviceFaqs } from "@/data/faqs";
import { getService } from "@/data/services";
import { breadcrumbSchema, buildHead, faqSchema, serviceSchema } from "@/lib/seo";

const service = getService("car-shades");

export const Route = createFileRoute("/car-shades")({
  head: () =>
    buildHead({
      title: service.seoTitle,
      description: service.seoDescription,
      path: "/car-shades",
      jsonLd: [
        serviceSchema(service.heading, service.seoDescription, "/car-shades"),
        faqSchema(serviceFaqs["car-shades"] ?? []),
        breadcrumbSchema([
          { name: "الرئيسية", path: "/" },
          { name: service.title, path: "/car-shades" },
        ]),
      ],
    }),
  component: () => <ServicePage service={service} />,
});
