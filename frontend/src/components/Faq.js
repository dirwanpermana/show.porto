import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { FAQS } from "@/data/templates";

const Faq = () => (
    <section
        id="faq"
        className="mx-auto max-w-[860px] scroll-mt-24 px-6 py-24 md:py-32"
    >
        <SectionHeading
            tag="FAQ"
            title="Pertanyaan yang sering muncul."
            sub="Tidak menemukan jawabanmu? Kirim pertanyaan lewat formulir di bawah."
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
                        key={i}
                        value={`item-${i}`}
                        className="border-white/10"
                    >
                        <AccordionTrigger
                            data-testid={`faq-trigger-${i}`}
                            className="py-5 text-left font-display text-lg font-light text-bone hover:no-underline hover:text-iris"
                        >
                            {f.q}
                        </AccordionTrigger>
                        <AccordionContent className="pb-5 text-sm font-light leading-relaxed text-ash md:text-base">
                            {f.a}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </Reveal>
    </section>
);

export default Faq;
