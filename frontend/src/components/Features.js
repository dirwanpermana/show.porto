import {
    Briefcase,
    Layers,
    ShoppingBag,
    Smartphone,
    MessageSquare,
    Globe,
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { useLang, SITE } from "@/i18n";
import { FEATURES } from "@/data/templates";

const ICONS = {
    Briefcase,
    Layers,
    ShoppingBag,
    Smartphone,
    MessageSquare,
    Globe,
};

const Features = () => {
    const { lang } = useLang();
    const S = SITE.feat;
    return (
        <section
            id="fitur"
            className="scroll-mt-24 border-t hairline bg-ink/40 py-24 md:py-32"
        >
            <div className="mx-auto max-w-[1280px] px-6">
                <SectionHeading
                    tag={S.tag[lang]}
                    title={S.title[lang]}
                    sub={S.sub[lang]}
                />
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {FEATURES.map((f, i) => {
                        const Icon = ICONS[f.icon];
                        return (
                            <Reveal key={f.icon} delay={0.06 * i}>
                                <div
                                    data-testid={`feature-card-${i}`}
                                    className="group h-full rounded-2xl border hairline bg-ink p-7 transition-all duration-500 hover:-translate-y-1 hover:border-iris/40"
                                >
                                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-iris/15 text-iris transition-all duration-500 group-hover:bg-iris group-hover:text-white">
                                        <Icon className="h-5 w-5" />
                                    </span>
                                    <h3 className="mt-5 font-display text-xl font-light text-bone">
                                        {f.title[lang]}
                                    </h3>
                                    <p className="mt-2.5 text-sm font-light leading-relaxed text-ash">
                                        {f.desc[lang]}
                                    </p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;
