import { Reveal, SectionHeading } from "@/components/Reveal";
import { useLang, SITE } from "@/i18n";
import { STEPS } from "@/data/templates";

const Process = () => {
    const { lang } = useLang();
    const S = SITE.proc;
    return (
        <section
            id="proses"
            className="mx-auto max-w-[1280px] scroll-mt-24 px-6 py-24 md:py-32"
        >
            <SectionHeading
                tag={S.tag[lang]}
                title={S.title[lang]}
                sub={S.sub[lang]}
            />
            <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-iris/50 via-white/10 to-transparent lg:block" />
                {STEPS.map((s, i) => (
                    <Reveal key={s.num} delay={0.08 * i}>
                        <div data-testid={`process-step-${i}`} className="relative">
                            <span className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full border hairline bg-void font-display text-sm font-medium text-iris">
                                {s.num}
                            </span>
                            <h3 className="mt-5 font-display text-xl font-light text-bone">
                                {s.title[lang]}
                            </h3>
                            <p className="mt-2 text-sm font-light leading-relaxed text-ash">
                                {s.desc[lang]}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
};

export default Process;
