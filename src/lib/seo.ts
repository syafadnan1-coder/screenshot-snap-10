import { siteConfig } from "@/config/siteConfig";
import type { Faq } from "@/data/faqs";

export function absoluteUrl(path: string): string {
  return `${siteConfig.siteUrl.replace(/\/$/, "")}${path}`;
}

type HeadOptions = {
  title: string;
  description: string;
  path: string;
  /** رابط صورة مطلق (اختياري) */
  image?: string;
  jsonLd?: unknown[];
  noindex?: boolean;
};

/** بناء بيانات الرأس (Meta + Canonical + JSON-LD) لصفحة واحدة */
export function buildHead({
  title,
  description,
  path,
  image,
  jsonLd,
  noindex,
}: HeadOptions) {
  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: absoluteUrl(path) },
    { property: "og:locale", content: "ar_SA" },
    { property: "og:site_name", content: siteConfig.name },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
  if (image) {
    meta.push({ property: "og:image", content: image });
    meta.push({ name: "twitter:image", content: image });
  }
  if (noindex) meta.push({ name: "robots", content: "noindex, follow" });

  return {
    meta,
    links: [{ rel: "canonical", href: absoluteUrl(path) }],
    scripts: jsonLd?.length
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify(jsonLd.length === 1 ? jsonLd[0] : jsonLd),
          },
        ]
      : undefined,
  };
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  description: siteConfig.seo.description,
  telephone: siteConfig.phone,
  url: siteConfig.siteUrl,
  hasMap: siteConfig.mapsUrl,
  areaServed: { "@type": "City", name: siteConfig.city },
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.city,
    addressCountry: "SA",
  },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  telephone: siteConfig.phone,
};

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    url: absoluteUrl(path),
    areaServed: { "@type": "City", name: siteConfig.city },
    provider: { "@type": "LocalBusiness", name: siteConfig.name, telephone: siteConfig.phone },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
