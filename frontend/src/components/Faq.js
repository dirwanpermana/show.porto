import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { useLang, SITE } from "@/i18n";
import { FAQS } from "@/data/templates";

const Faq = () => {
    const { lang } = useLang();
    const S = SITE.faq;
    return (
        <section
            id="faq"
            className="mx-auto max-w-[860px] scroll-mt-24 px-6 py-24 md:py-32"
        >
            <SectionHeading
                tag={S.tag[lang]}
                title={S.title[lang]}
                sub={S.sub[lang]}
            />
            <Reveal>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    data-testid="faq-accordion"
                >
                    {FAQS.map((f, i) => (
                        <AccordionItem
                            key={f.q.en}
                            value={`item-${i}`}
                            className="border-white/10"
                        >
                            <AccordionTrigger
                                data-testid={`faq-trigger-${i}`}
                                className="py-5 text-left font-display text-lg font-light text-bone hover:no-underline hover:text-iris"
                            >
                                {f.q[lang]}
                            </AccordionTrigger>
                            <AccordionContent className="pb-5 text-sm font-light leading-relaxed text-ash md:text-base">
                                {f.a[lang]}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Reveal>
        </section>
    );
};

export default Faq;
