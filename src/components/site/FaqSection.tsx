import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/site/SectionHeading";
import type { Faq } from "@/data/faqs";

export function FaqSection({
  faqs,
  title = "الأسئلة الشائعة",
}: {
  faqs: Faq[];
  title?: string;
}) {
  if (faqs.length === 0) return null;
  return (
    <section className="section-y bg-secondary/60" aria-labelledby="faq-title">
      <div className="container-site">
        <SectionHeading title={title} as="h2" />
        <div className="mx-auto mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${i}`}
                className="rounded-2xl border border-border bg-card px-5 shadow-soft"
              >
                <AccordionTrigger className="text-start text-base font-semibold text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
