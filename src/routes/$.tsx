import { createFileRoute, Link } from "@tanstack/react-router";

import { ContactActions } from "@/components/site/ContactActions";
import { Button } from "@/components/ui/button";
import { buildHead } from "@/lib/seo";
import { navLinks } from "@/components/site/navigation";

export const Route = createFileRoute("/$")({
  head: () =>
    buildHead({
      title: "الصفحة غير موجودة | ركن المقصورة",
      description: "الصفحة المطلوبة غير موجودة. يمكنك العودة للرئيسية أو تصفح خدماتنا في جدة.",
      path: "/404",
      noindex: true,
    }),
  component: NotFoundPage,
});

function NotFoundPage() {
  return (
    <section className="section-y">
      <div className="container-site mx-auto max-w-2xl text-center">
        <p className="text-6xl font-extrabold text-navy-soft md:text-7xl">404</p>
        <h1 className="mt-4 text-2xl text-primary md:text-3xl">الصفحة غير موجودة</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          الرابط الذي فتحته غير صحيح أو تم تغييره. يمكنك العودة إلى الصفحة
          الرئيسية أو الانتقال إلى إحدى خدماتنا.
        </p>
        <div className="mt-8">
          <Button asChild variant="default" size="lg">
            <Link to="/">العودة للرئيسية</Link>
          </Button>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="underline-offset-4 transition-colors hover:text-primary hover:underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <ContactActions className="mt-10 justify-center" size="lg" />
      </div>
    </section>
  );
}
