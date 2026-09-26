import { ArrowUpRight, BookOpen, Check } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { useLang, SITE } from "@/i18n";
import { scrollToSection } from "@/lib/scroll";
import { PRICING_GROUPS } from "@/data/templates";

const PlanCard = ({ p, S, lang }) => (
    <div
        data-testid={`pricing-card-${p.id}`}
        className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-500 ${
            p.highlight
                ? "border-iris bg-gradient-to-b from-iris/[0.14] to-ink shadow-[0_0_60px_rgba(128,82,255,0.18)]"
                : "hairline bg-ink hover:border-white/20"
        }`}
    >
        {p.highlight && (
            <span
                data-testid={`pricing-popular-badge-${p.id}`}
                className="absolute -top-3.5 left-8 whitespace-nowrap rounded-full bg-saffron px-4 py-1.5 text-[11px] font-medium uppercase tracking-wider text-void"
            >
                {S.popular[lang]}
            </span>
        )}
        <div className="flex items-center justify-between gap-3">
            <h3 className="font-display text-lg font-medium uppercase tracking-[0.1em] text-mist">
                {p.name}
            </h3>
            <span
                className={`whitespace-nowrap rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-wider ${
                    p.highlight ? "bg-iris/20 text-[#c4b0ff]" : "bg-white/5 text-ash"
                }`}
            >
                {p.badge[lang]}
            </span>
        </div>
        <div className="mt-4 flex items-baseline gap-2">
            <span className="font-display text-4xl font-light text-bone md:text-5xl">
                {p.price}
            </span>
            <span className="text-xs font-light text-ash">/ {S.period[lang]}</span>
        </div>
        <p className="mt-3 text-sm font-light leading-relaxed text-ash">{p.desc[lang]}</p>
        {p.highlight && (
            <p
                data-testid={`pricing-manual-${p.id}`}
                className="mt-4 inline-flex items-center gap-2 rounded-lg border border-saffron/30 bg-saffron/10 px-3 py-2 text-xs font-medium text-saffron"
            >
                <BookOpen className="h-3.5 w-3.5" />
                {S.manual[lang]}
            </p>
        )}
        <ul className="mt-7 flex-1 space-y-3">
            {p.features.map((f) => (
                <li key={f.en} className="flex items-start gap-2.5 text-sm font-light text-mist">
                    <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                            p.highlight ? "text-saffron" : "text-verdant"
                        }`}
                    />
                    {f[lang]}
                </li>
            ))}
        </ul>
        <button
            data-testid={`pricing-cta-${p.id}`}
            onClick={() => scrollToSection("kontak")}
            className={`group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all duration-300 ${
                p.highlight
                    ? "bg-iris text-white hover:bg-[#9069ff] hover:shadow-[0_0_32px_rgba(128,82,255,0.45)]"
                    : "border hairline text-bone hover:border-iris hover:bg-iris/10"
            }`}
        >
            {S.choose[lang]} {p.name}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
    </div>
);

const Pricing = ({ groups = PRICING_GROUPS }) => {
    const { lang } = useLang();
    const S = SITE.price;
    return (
        <section id="harga" className="scroll-mt-24 border-t hairline bg-ink/40 py-24 md:py-32">
            <div className="mx-auto max-w-[1280px] px-6">
                <SectionHeading tag={S.tag[lang]} title={S.title[lang]} sub={S.sub[lang]} />
                <div className="space-y-16">
                    {groups.map((g) => (
                        <div
                            key={g.id}
                            id={`harga-${g.id}`}
                            data-testid={`pricing-group-${g.id}`}
                            className="grid grid-cols-1 gap-8 lg:grid-cols-12"
                        >
                            <Reveal className="lg:col-span-4">
                                <p className="text-xs font-medium uppercase tracking-[0.22em] text-iris">
                                    {g.id === "porto" ? "01" : "02"}
                                </p>
                                <h3 className="mt-3 font-display text-3xl font-light leading-tight text-bone md:text-4xl">
                                    {g.title[lang]}
                                </h3>
                                <p className="mt-4 text-sm font-light leading-relaxed text-ash md:text-base">
                                    {g.story[lang]}
                                </p>
                            </Reveal>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8">
                                {g.plans.map((p, i) => (
                                    <Reveal key={p.id} delay={0.08 * i}>
                                        <PlanCard p={p} S={S} lang={lang} />
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <Reveal delay={0.2}>
                    <p
                        data-testid="pricing-note"
                        className="mt-12 max-w-3xl text-xs font-light leading-relaxed text-ash"
                    >
                        {S.note[lang]}
                    </p>
                </Reveal>
            </div>
        </section>
    );
};

export default Pricing;
