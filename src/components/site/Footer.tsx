import { Link } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone } from "lucide-react";

import { LogoBlock } from "@/components/site/Logo";
import { navLinks } from "@/components/site/navigation";
import { phoneDisplay, siteConfig, telLink, whatsappLink } from "@/config/siteConfig";

export function Footer() {
  return (
    <footer className="gradient-navy mt-4 text-primary-foreground">
      <div className="container-site grid gap-10 py-14 md:grid-cols-3">
        <div>
          <LogoBlock variant="light" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
            حلول متنوعة للمظلات والخيام وبيوت الشعر والبرجولات والسواتر والهناجر
            وسندوتش بانل في {siteConfig.city}.
          </p>
        </div>

        <nav aria-label="روابط الموقع">
          <h2 className="text-base font-semibold text-primary-foreground">روابط الموقع</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-base font-semibold text-primary-foreground">بيانات التواصل</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={telLink}
                className="flex items-center gap-2 text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span dir="ltr">{siteConfig.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                واتساب: <span dir="ltr">{phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                موقعنا على خرائط جوجل
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-site flex flex-col gap-3 py-5 text-xs text-primary-foreground/70 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-primary-foreground">
              سياسة الخصوصية
            </Link>
            <Link to="/terms" className="hover:text-primary-foreground">
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
