import { MapPin, MessageCircle, Phone } from "lucide-react";

import { siteConfig, telLink, whatsappLink } from "@/config/siteConfig";

/** أزرار تواصل عائمة ثابتة أسفل الشاشة */
export function FloatingContact() {
  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-2 md:bottom-6 md:left-6">
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل عبر واتساب"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-elevated transition-transform hover:scale-110 md:h-13 md:w-13"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
      </a>
      <a
        href={telLink}
        aria-label="اتصل بنا"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elevated transition-transform hover:scale-110 md:h-13 md:w-13"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
      </a>
      <a
        href={siteConfig.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="موقعنا على خرائط جوجل"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-primary shadow-elevated transition-transform hover:scale-110 md:h-13 md:w-13"
      >
        <MapPin className="h-5 w-5" aria-hidden="true" />
      </a>
    </div>
  );
}
