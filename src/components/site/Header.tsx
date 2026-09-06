import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

import { LogoBlock } from "@/components/site/Logo";
import { navLinks } from "@/components/site/navigation";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/config/siteConfig";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-lg">
      <div className="container-site flex h-18 items-center justify-between gap-4">
        <Link to="/" aria-label="الصفحة الرئيسية" onClick={() => setOpen(false)}>
          <LogoBlock />
        </Link>

        <nav aria-label="القائمة الرئيسية" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="rounded-md px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-accent hover:text-primary"
                  activeProps={{ className: "bg-accent font-semibold text-primary" }}
                  activeOptions={{ exact: link.to === "/" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="whatsapp" size="default" className="hidden sm:inline-flex">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden="true" />
              واتساب
            </a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-primary transition-colors hover:bg-accent xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-x-0 top-18 bottom-0 z-40 overflow-y-auto border-t border-border bg-background xl:hidden">
          <nav aria-label="قائمة الجوال" className="container-site py-4">
            <ul className="flex flex-col divide-y divide-border">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-base text-foreground transition-colors hover:text-primary"
                    activeProps={{ className: "font-bold text-primary" }}
                    activeOptions={{ exact: link.to === "/" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
