import { MapPin, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig, telLink, whatsappLink } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

type Props = {
  message?: string;
  className?: string;
  size?: "default" | "lg" | "xl" | "sm";
  showMaps?: boolean;
  tone?: "light" | "dark";
};

export function ContactActions({
  message,
  className,
  size = "lg",
  showMaps = false,
  tone = "dark",
}: Props) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <Button asChild variant="whatsapp" size={size}>
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="اطلب عرض سعر عبر واتساب"
        >
          <MessageCircle aria-hidden="true" />
          اطلب عرض سعر عبر واتساب
        </a>
      </Button>
      <Button
        asChild
        variant={tone === "light" ? "heroOutline" : "navyOutline"}
        size={size}
      >
        <a href={telLink} aria-label={`اتصل بنا على ${siteConfig.phone}`}>
          <Phone aria-hidden="true" />
          اتصل بنا
        </a>
      </Button>
      {showMaps ? (
        <Button
          asChild
          variant={tone === "light" ? "heroOutline" : "navyOutline"}
          size={size}
        >
          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="موقعنا على خرائط جوجل"
          >
            <MapPin aria-hidden="true" />
            موقعنا على الخريطة
          </a>
        </Button>
      ) : null}
    </div>
  );
}
